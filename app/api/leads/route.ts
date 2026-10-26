import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
    try {
        let body: Record<string, any>;
        try {
            body = await req.json();
        } catch {
            return NextResponse.json({ error: 'Malformed JSON payload' }, { status: 400 });
        }

        if (!body || typeof body !== 'object') {
            return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
        }

        const { email, score, answers, company, message, toolName = 'AI Economics Assessment' } = body;
        const trimmedEmail = typeof email === 'string' ? email.trim() : '';

        if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
            return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
        }

        console.log(`[Lead Capture API] Lead received from ${toolName}:`, {
            email: trimmedEmail,
            score,
            company: company || 'N/A',
            timestamp: new Date().toISOString()
        });

        if (process.env.RESEND_API_KEY) {
            try {
                const resend = new Resend(process.env.RESEND_API_KEY);
                await resend.emails.send({
                    from: 'AI Assessment <leads@updates.richardewing.io>',
                    to: ['richardewing@exogram.ai'],
                    subject: `New Lead (${toolName}): ${trimmedEmail}${company ? ` (${company})` : ''} [Score: ${score ?? 'N/A'}]`,
                    text: `
Lead Email: ${trimmedEmail}
Company: ${company || 'N/A'}
Score: ${score ?? 'N/A'}/100
Tool: ${toolName}
${message ? `Message / Context:\n${message}\n` : ''}
Answers: ${JSON.stringify(answers || {}, null, 2)}
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
            lead: { email: trimmedEmail, score, toolName, company: company || null }
        }, { status: 200 });

    } catch (error: any) {
        console.error('[Lead Capture API] Error processing lead:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
