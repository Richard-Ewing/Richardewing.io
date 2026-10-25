import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        let data: Record<string, any>;
        try {
            data = await request.json();
        } catch {
            return NextResponse.json({ error: 'Malformed JSON payload' }, { status: 400 });
        }

        if (!data || typeof data !== 'object') {
            return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
        }

        const { name, email, company, message, source } = data;
        const trimmedEmail = typeof email === 'string' ? email.trim() : '';

        if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
            return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
        }

        console.log('[Lead Capture API] Submission received:', {
            name: name || 'N/A',
            email,
            company: company || 'N/A',
            source: source || 'Direct Form',
            timestamp: new Date().toISOString(),
        });

        if (process.env.RESEND_API_KEY) {
            try {
                const resend = new Resend(process.env.RESEND_API_KEY);
                const emailResponse = await resend.emails.send({
                    from: 'Lead Capture <leads@updates.richardewing.io>',
                    to: ['richardewing@exogram.ai'],
                    subject: `New Lead${source ? ` (${source})` : ''}: ${name || email} ${company ? `from ${company}` : ''}`,
                    text: `
Name: ${name || 'N/A'}
Email: ${email}
Company: ${company || 'N/A'}
Source: ${source || 'Direct Inquiry'}

Message:
${message || 'N/A'}
                    `,
                });

                if (emailResponse.error) {
                    console.error('[Lead Capture API] Resend error:', emailResponse.error);
                }
            } catch (emailErr) {
                console.error('[Lead Capture API] Resend dispatch exception:', emailErr);
            }
        } else {
            console.warn('[Lead Capture API] RESEND_API_KEY not configured in environment; lead logged to console.');
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Lead capture error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
