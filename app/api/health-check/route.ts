import { NextResponse } from 'next/server';
import { getPrimary, getMirrors, setPrimary, addLog } from '@/lib/mirror-store';

export const revalidate = 0;

async function checkUrl(url: string): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const res = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal,
      redirect: 'follow',
    });

    clearTimeout(timeout);
    return res.ok || res.status === 301 || res.status === 302;
  } catch {
    return false;
  }
}

export async function GET() {
  const primary = getPrimary();
  const mirrors = getMirrors();

  const primaryAlive = await checkUrl(primary);

  const results: { url: string; alive: boolean }[] = [
    { url: primary, alive: primaryAlive },
  ];

  // If primary is down, check mirrors and promote first alive
  if (!primaryAlive && mirrors.length > 0) {
    for (const mirror of mirrors) {
      const mirrorAlive = await checkUrl(mirror);
      results.push({ url: mirror, alive: mirrorAlive });

      if (mirrorAlive) {
        setPrimary(mirror);
        addLog({
          url: mirror,
          type: 'auto-failover',
          action: 'promoted',
          reason: `${primary} is down`,
        });
        break;
      }
    }
  }

  return NextResponse.json({
    primary,
    primaryAlive,
    mirrors: results,
    timestamp: new Date().toISOString(),
    action: !primaryAlive ? 'failover-attempted' : 'ok',
  });
}
