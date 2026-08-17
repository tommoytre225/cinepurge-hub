export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url, reason, email } = body;

    if (!url || !reason) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In production, send to Discord webhook or email service
    console.log('Fake site report:', { url, reason, email, timestamp: new Date() });

    return Response.json({
      success: true,
      message: 'Report received. Thank you for helping us protect users.',
      id: Math.random().toString(36).substr(2, 9)
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    return Response.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
