import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

const ipCaptureTracker = new Map<string, { count: number; expiresAt: number }>();

function isCaptureRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = ipCaptureTracker.get(ip);

    if (!record || now > record.expiresAt) {
        if (ipCaptureTracker.size >= 2000) {
            const oldestKey = ipCaptureTracker.keys().next().value;
            if (oldestKey) ipCaptureTracker.delete(oldestKey);
        }
        ipCaptureTracker.set(ip, { count: 1, expiresAt: now + 60 * 60 * 1000 });
        return false;
    }

    if (record.count >= 10) {
        return true;
    }

    record.count += 1;
    return false;
}

export async function POST(request: Request) {
    try {
        const ip =
            request.headers.get('cf-connecting-ip')?.trim() ||
            request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
            '127.0.0.1';

        if (isCaptureRateLimited(ip)) {
            return NextResponse.json({ error: 'Too many submissions. Please try again later.' }, { status: 429 });
        }

        const rawBody = await request.text();
        if (rawBody.length > 16384) {
            return NextResponse.json({ error: 'Payload too large' }, { status: 413 });
        }

        let data: Record<string, any>;
        try {
            data = JSON.parse(rawBody);
        } catch {
            return NextResponse.json({ error: 'Malformed JSON payload' }, { status: 400 });
        }

        if (!data || typeof data !== 'object') {
            return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
        }

        const { name, email, company, message, source } = data;
        const trimmedEmail = typeof email === 'string' ? email.replace(/[\r\n]/g, '').trim().slice(0, 254) : '';
        const safeName = typeof name === 'string' ? name.replace(/[\r\n]/g, ' ').trim().slice(0, 120) : '';
        const safeCompany = typeof company === 'string' ? company.replace(/[\r\n]/g, ' ').trim().slice(0, 120) : '';
        const safeSource = typeof source === 'string' ? source.replace(/[\r\n]/g, ' ').trim().slice(0, 120) : '';
        const safeMessage = typeof message === 'string' ? message.trim().slice(0, 4000) : '';

        if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
            return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
        }

        console.log('[Lead Capture API] Submission received:', {
            name: safeName || 'N/A',
            email: trimmedEmail,
            company: safeCompany || 'N/A',
            source: safeSource || 'Direct Form',
            timestamp: new Date().toISOString(),
        });

        if (process.env.RESEND_API_KEY) {
            try {
                const resend = new Resend(process.env.RESEND_API_KEY);
                const emailResponse = await resend.emails.send({
                    from: 'Lead Capture <leads@updates.richardewing.io>',
                    to: ['richardewing@exogram.ai'],
                    subject: `New Lead${safeSource ? ` (${safeSource})` : ''}: ${safeName || trimmedEmail} ${safeCompany ? `from ${safeCompany}` : ''}`,
                    text: `
Name: ${safeName || 'N/A'}
Email: ${trimmedEmail}
Company: ${safeCompany || 'N/A'}
Source: ${safeSource || 'Direct Inquiry'}

Message:
${safeMessage || 'N/A'}
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
