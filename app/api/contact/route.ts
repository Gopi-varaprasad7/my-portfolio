import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Fetch the key safely
const apiKey = process.env.RESEND_API_KEY;

// Fallback to a string placeholder during Next.js build optimization paths
const resend = new Resend(apiKey || 'BUILD_STAGE_FALLBACK');

export async function POST(req: Request) {
  // If the API key is actually missing when a real user tries to hit the endpoint
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
