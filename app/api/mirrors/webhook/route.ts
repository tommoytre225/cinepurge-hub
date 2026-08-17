import { NextRequest, NextResponse } from 'next/server';
import { createHmac, timingSafeEqual } from 'crypto';
import { setPrimary, addMirror, addLog, getMirrors, getPrimary } from '@/lib/mirror-store';

const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
if (!WEBHOOK_SECRET || WEBHOOK_SECRET.length < 32) {
  throw new Error('WEBHOOK_SECRET must be set and at least 32 characters long');
}

const MAX_MIRRORS = 5;
const RATE_LIMIT_WINDOW = 60;
const RATE_LIMIT_MAX = 10;

function verifySignature(payload: string, signature: string): boolean {
  const hmac = createHmac('sha256', WEBHOOK_SECRET!);
  hmac.update(payload);
  const computed = 'sha256=' + hmac.digest('hex');
  try {
    return timingSafeEqual(Buffer.from(computed, 'utf8'), Buffer.from(signature, 'utf8'));
  } catch {
    return false;
  }
}

function isSafeUrl(url: string): boolean {
  try {
    const u = new URL(url);
    if (u.protocol !== 'https:') return false;
    const h = u.hostname.toLowerCase();
    const blockedPatterns = ['localhost', '127.', '0.0.0.0', '169.254.', '10.', '192.168.', 'metadata.google', 'internal'];
    return !blockedPatterns.some(p => h.includes(p));
  } catch { return false; }
}

function isValidUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'https:';
  } catch {
    return false;
  }
}

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW * 1000 });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429 }
      );
    }

    const signature = request.headers.get('x-signature');
    if (!signature) {
      return NextResponse.json(
        { error: 'Missing X-Signature header' },
        { status: 401 }
      );
    }

    const body = await request.text();

    if (!verifySignature(body, signature)) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    const data = JSON.parse(body);
    const { url, type = 'mirror' } = data;

    if (!url || typeof url !== 'string') {
      return NextResponse.json(
        { error: 'Invalid URL' },
        { status: 400 }
      );
    }

    if (!isValidUrl(url)) {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      );
    }

    const normalizedUrl = url.endsWith('/') ? url : url + '/';

    if (!isSafeUrl(normalizedUrl)) {
      return NextResponse.json(
        { error: 'URL not allowed' },
        { status: 403 }
      );
    }

    const mirrors = getMirrors();

    if (type === 'primary') {
      setPrimary(normalizedUrl);
    } else {
      if (mirrors.length >= MAX_MIRRORS) {
        return NextResponse.json(
          { error: `Max mirrors reached (${MAX_MIRRORS})` },
          { status: 400 }
        );
      }
      addMirror(normalizedUrl);
    }

    addLog({
      url: normalizedUrl,
      type,
      ip,
      action: 'webhook_received',
    });

    return NextResponse.json({
      success: true,
      url: normalizedUrl,
      type,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
