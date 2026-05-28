import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, scope, message } = body;

    const emailUser = process.env.ZOHO_EMAIL || 'info@creativemarketingtm.com';
    const emailPass = process.env.ZOHO_PASSWORD;

    // Direct server console logs for debugging inside IntelliJ / Node console
    console.log('--- ✦ Orbit Launch Request Received ✦ ---');
    console.log(`Explorer Name: ${name}`);
    console.log(`Contact Vector: ${email}`);
    console.log(`Project Coordinates: ${scope || 'Standard Mission'}`);
    console.log(`Transmitted Message: ${message || 'None'}`);
    console.log('-----------------------------------------');

    if (!emailPass) {
      console.warn('⚠️ ZOHO_PASSWORD environment variable is not set. Falling back to log-only transmission.');
      return NextResponse.json({
        status: 'Success',
        message: 'Launch payload received securely. (Dev Mode: Logged to Console)',
        transmissionDetails: {
          receivedAt: new Date().toISOString(),
          missionCode: `CREATIVE-${Math.floor(Math.random() * 90000 + 10000)}`,
          dataStream: { name, email, scope, message }
        }
      }, { status: 200 });
    }

    // Dynamically load nodemailer to bypass local compile errors if not installed
    let nodemailer;
    try {
      nodemailer = eval("require('nodemailer')");
    } catch (e) {
      console.error('❌ Nodemailer is not installed in the local environment:', e);
      return NextResponse.json({
        status: 'Failed',
        error: 'Nodemailer is not installed locally.',
        details: 'Run npm install in a standard network environment to download nodemailer.'
      }, { status: 500 });
    }

    // Configure Zoho SMTP Transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true, // true for port 465
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"Creative Marketing TM Portal" <${emailUser}>`,
      to: 'info@creativemarketingtm.com',
      replyTo: email,
      subject: `✦ New Contact Inquiry: ${scope || 'General Inquiry'} from ${name}`,
      text: `
✦ Creative Marketing Contact Form Submission ✦

Name: ${name}
Email: ${email}
Service Needed: ${scope || 'General Inquiry'}

Message:
${message}

---
Transmission sent securely via Zoho SMTP Service.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid rgba(144, 235, 0, 0.2); border-radius: 12px; background-color: #030303; color: #EAE5D0;">
          <h2 style="color: #90EB00; border-bottom: 1px solid rgba(144, 235, 0, 0.2); padding-bottom: 10px;">✦ New Launch Request</h2>
          <p style="margin: 15px 0;"><strong>Explorer Name:</strong> ${name}</p>
          <p style="margin: 15px 0;"><strong>Contact Vector (Email):</strong> <a href="mailto:${email}" style="color: #90EB00; text-decoration: none;">${email}</a></p>
          <p style="margin: 15px 0;"><strong>Project Coordinates (Service):</strong> ${scope || 'General Inquiry'}</p>
          <div style="margin: 20px 0; padding: 15px; background-color: rgba(234, 229, 208, 0.05); border-left: 3px solid #90EB00; border-radius: 4px;">
            <p style="margin: 0; font-style: italic; color: #d0cbb5;">"${message}"</p>
          </div>
          <hr style="border: 0; border-top: 1px solid rgba(234, 229, 208, 0.1); margin: 25px 0;">
          <p style="font-size: 0.8rem; color: #888; text-align: center;">Transmission sent securely via Zoho SMTP Service.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      status: 'Success',
      message: 'Launch payload transmitted securely to Creative Marketing Headquarters ✦',
      transmissionDetails: {
        receivedAt: new Date().toISOString(),
        missionCode: `CREATIVE-${Math.floor(Math.random() * 90000 + 10000)}`,
      }
    }, { status: 200 });

  } catch (error: any) {
    console.error('❌ SMTP Transmission Error:', error);
    return NextResponse.json({
      status: 'Failed',
      error: 'SMTP Transmission Error',
      details: error.message
    }, { status: 500 });
  }
}
