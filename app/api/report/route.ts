import { randomBytes } from 'crypto';

const ALLOWED_ORIGIN = process.env.NEXT_PUBLIC_SITE_URL || 'https://cinepurge.xyz';

function sanitizeField(value: unknown, maxLength = 500): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[\r\n\x00-\x1F\x7F]/g, '').slice(0, maxLength).trim();
}

export async function POST(request: Request) {
  try {
    const origin = request.headers.get('origin') || '';
    if (origin && origin !== ALLOWED_ORIGIN) {
      return Response.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    const url = sanitizeField(body.url, 2048);
    const reason = sanitizeField(body.reason, 500);
    const email = sanitizeField(body.email, 254);

    if (!url || !reason) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    try {
      const parsed = new URL(url);
      if (!['http:', 'https:'].includes(parsed.protocol)) {
        return Response.json({ error: 'Invalid URL' }, { status: 400 });
      }
    } catch {
      return Response.json({ error: 'Invalid URL format' }, { status: 400 });
    }

    console.log('Fake site report:', { url, reason, email: email || 'not provided', timestamp: new Date().toISOString() });

    return Response.json({
      success: true,
      message: 'Report received. Thank you for helping us protect users.',
      id: randomBytes(5).toString('hex'),
    });
  } catch {
    return Response.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}

export async function OPTIONS(request: Request) {
  const origin = request.headers.get('origin') || '';
  const allowedOrigin = origin === ALLOWED_ORIGIN ? origin : '';

  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': allowedOrigin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
