import { NextRequest, NextResponse } from 'next/server';
import { timingSafeEqual } from 'crypto';
import { getPrimary, getMirrors, setPrimary, addLog } from '@/lib/mirror-store';

export const revalidate = 0;

const BLOCKED_HOSTS = ['localhost', '127.', '0.0.0.0', '169.254.', '10.', '192.168.', 'metadata.google', '.internal'];

function isSafeUrl(url: string): boolean {
  try {
    const u = new URL(url);
    if (u.protocol !== 'https:') return false;
    const h = u.hostname.toLowerCase();
    return !BLOCKED_HOSTS.some(p => h.includes(p));
  } catch { return false; }
}

async function checkUrl(url: string): Promise<boolean> {
  if (!isSafeUrl(url)) return false;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal,
      redirect: 'manual',
    });
    clearTimeout(timeout);
    return res.ok || res.status === 301 || res.status === 302;
  } catch {
    return false;
  }
}

function verifyCronSecret(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const auth = req.headers.get('authorization') ?? '';
  const expected = Buffer.from(`Bearer ${secret}`, 'utf8');
  const received = Buffer.from(auth, 'utf8');
  if (expected.length !== received.length) return false;
  return timingSafeEqual(expected, received);
}

export async function GET(req: NextRequest) {
  // Vercel cron injecte automatiquement Authorization: Bearer <CRON_SECRET>
  // Refuser les appels manuels non authentifiés
  if (!verifyCronSecret(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
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
