export async function GET() {
  return Response.json({
    success: true,
    data: {
      address: 'https://cinepurge.xyz',
      status: 'active',
      lastUpdated: new Date().toISOString(),
      verified: true
    }
  }, {
    headers: {
      'Cache-Control': 'public, max-age=300',
      'Access-Control-Allow-Origin': '*',
      'X-API-Version': '1.0'
    }
  });
}

export async function OPTIONS() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
