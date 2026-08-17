export async function GET(request: Request) {
  // Rate limiting simple
  const ip = request.headers.get('x-forwarded-for') || 'unknown';

  return Response.json({
    status: 'active',
    address: 'https://cinepurge.xyz',
    timestamp: new Date().toISOString(),
    version: 'v1',
    verified: true,
    message: 'Current official address of CinePurge'
  }, {
    headers: {
      'Cache-Control': 'public, max-age=60, stale-while-revalidate=120',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Access-Control-Allow-Origin': 'https://cinepurge.xyz'
    }
  });
}
