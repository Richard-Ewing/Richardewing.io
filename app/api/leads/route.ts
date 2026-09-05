import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, score, answers, toolName = 'AI Economics Assessment' } = body;

        if (!email || typeof email !== 'string' || !email.includes('@')) {
            return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
        }

        console.log(`[Lead Capture API] Lead received from ${toolName}:`, {
            email,
            score,
            timestamp: new Date().toISOString()
        });

        if (process.env.RESEND_API_KEY) {
            try {
                const resend = new Resend(process.env.RESEND_API_KEY);
                await resend.emails.send({
                    from: 'AI Assessment <leads@updates.richardewing.io>',
                    to: ['richardewing@exogram.ai'],
                    subject: `New Lead (${toolName}): ${email} [Score: ${score ?? 'N/A'}]`,
                    text: `
Lead Email: ${email}
Score: ${score ?? 'N/A'}/100
Tool: ${toolName}
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
            lead: { email, score, toolName }
        }, { status: 200 });

    } catch (error: any) {
        console.error('[Lead Capture API] Error processing lead:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
