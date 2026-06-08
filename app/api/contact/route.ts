import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  // 1. Guard check right away when the endpoint is hit at runtime
  if (!apiKey) {
    console.error(
      'Execution error: RESEND_API_KEY environment variable is not configured.',
    );
    return NextResponse.json(
      { success: false, error: 'Server misconfiguration' },
      { status: 500 },
    );
  }

  try {
    const { name, email, message } = await req.json();

    // 2. Instantiate Resend dynamically inside the runtime scope
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'kodurigopi98722@gmail.com',
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send email via Resend:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
