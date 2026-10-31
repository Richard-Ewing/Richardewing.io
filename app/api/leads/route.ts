import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

const ipLeadsTracker = new Map<string, { count: number; expiresAt: number }>();

function isLeadsRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = ipLeadsTracker.get(ip);

    if (!record || now > record.expiresAt) {
        if (ipLeadsTracker.size >= 2000) {
            const oldestKey = ipLeadsTracker.keys().next().value;
            if (oldestKey) ipLeadsTracker.delete(oldestKey);
        }
        ipLeadsTracker.set(ip, { count: 1, expiresAt: now + 60 * 60 * 1000 });
        return false;
    }

    if (record.count >= 10) {
        return true;
    }

    record.count += 1;
    return false;
}

export async function POST(req: NextRequest) {
    try {
        const ip =
            req.headers.get('cf-connecting-ip')?.trim() ||
            req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
            '127.0.0.1';

        if (isLeadsRateLimited(ip)) {
            return NextResponse.json({ error: 'Too many submissions. Please try again later.' }, { status: 429 });
        }

        const rawBody = await req.text();
        if (rawBody.length > 16384) {
            return NextResponse.json({ error: 'Payload too large' }, { status: 413 });
        }

        let body: Record<string, any>;
        try {
            body = JSON.parse(rawBody);
        } catch {
            return NextResponse.json({ error: 'Malformed JSON payload' }, { status: 400 });
        }

        if (!body || typeof body !== 'object') {
            return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
        }

        const { email, score, answers, company, message, toolName = 'AI Economics Assessment' } = body;
        const trimmedEmail = typeof email === 'string' ? email.replace(/[\r\n]/g, '').trim().slice(0, 254) : '';
        const safeCompany = typeof company === 'string' ? company.replace(/[\r\n]/g, ' ').trim().slice(0, 120) : '';
        const safeToolName = typeof toolName === 'string' ? toolName.replace(/[\r\n]/g, ' ').trim().slice(0, 120) : 'AI Economics Assessment';
        const safeMessage = typeof message === 'string' ? message.trim().slice(0, 4000) : '';

        if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
            return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
        }

        console.log(`[Lead Capture API] Lead received from ${safeToolName}:`, {
            email: trimmedEmail,
            score,
            company: safeCompany || 'N/A',
            timestamp: new Date().toISOString()
        });

        if (process.env.RESEND_API_KEY) {
            try {
                const resend = new Resend(process.env.RESEND_API_KEY);
                await resend.emails.send({
                    from: 'AI Assessment <leads@updates.richardewing.io>',
                    to: ['richardewing@exogram.ai'],
                    subject: `New Lead (${safeToolName}): ${trimmedEmail}${safeCompany ? ` (${safeCompany})` : ''} [Score: ${score ?? 'N/A'}]`,
                    text: `
Lead Email: ${trimmedEmail}
Company: ${safeCompany || 'N/A'}
Score: ${score ?? 'N/A'}/100
Tool: ${safeToolName}
${safeMessage ? `Message / Context:\n${safeMessage}\n` : ''}
Answers: ${JSON.stringify(answers || {}, null, 2).slice(0, 8000)}
Timestamp: ${new Date().toISOString()}
                    `,
                });
            } catch (err) {
                console.error('[Lead Capture API] Resend email dispatch failed:', err);
            }
        }

        return NextResponse.json({
            success: true,
            message: 'Lead captured successfully',
            lead: { email: trimmedEmail, score, toolName: safeToolName, company: safeCompany || null }
        }, { status: 200 });

    } catch (error: any) {
        console.error('[Lead Capture API] Error processing lead:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
