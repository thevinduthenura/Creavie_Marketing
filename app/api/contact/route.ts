import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, scope, message } = body;

    // Direct server console logs for debugging inside IntelliJ / Node console
    console.log('--- ✦ Orbit Launch Request Received ✦ ---');
    console.log(`Explorer Name: ${name}`);
    console.log(`Contact Vector: ${email}`);
    console.log(`Project Coordinates: ${scope || 'Standard Mission'}`);
    console.log(`Transmitted Message: ${message || 'None'}`);
    console.log('-----------------------------------------');

    // Return glowing futuristic JSON payload, perfect for Postman API checks!
    return NextResponse.json({
      status: 'Success',
      message: 'Launch payload received securely. Orbit sequence initialized ✦',
      transmissionDetails: {
        receivedAt: new Date().toISOString(),
        missionCode: `CREAVIE-${Math.floor(Math.random() * 90000 + 10000)}`,
        dataStream: { name, email, scope, message }
      }
    }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({
      status: 'Failed',
      error: 'Invalid transmission format or missing fields.',
      details: error.message
    }, { status: 400 });
  }
}
