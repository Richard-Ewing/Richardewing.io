import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not configured');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);
        const data = await request.json();
        const { name, email, company, message } = data;

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const emailResponse = await resend.emails.send({
            from: 'Lead Capture <leads@updates.richardewing.io>',
            to: ['richardewing@exogram.ai'],
            subject: `New Lead: ${name || email} ${company ? `from ${company}` : ''}`,
            text: `
Name: ${name || 'N/A'}
Email: ${email}
Company: ${company || 'N/A'}

Message:
${message || 'N/A'}
            `,
        });

        if (emailResponse.error) {
            console.error('Resend error:', emailResponse.error);
            return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Lead capture error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
