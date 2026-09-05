import { NextResponse } from 'next/server';
import { verifyToken } from '@/app/lib/action-tokens';

export const dynamic = 'force-dynamic';

// Action Trigger API  -  one-click actions from email digest
// Each action link in the email contains a signed token to prevent unauthorized access
// Actions: approve-rewrite, skip, create-content

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.richardewing.io';

// ── Action handlers ─────────────────────────────────────────────────────────

async function handleApproveRewrite(payload: Record<string, string>): Promise<{ success: boolean; message: string }> {
    const { url } = payload;
    if (!url) return { success: false, message: 'No URL specified' };

    // Trigger the auto-rewriter for this specific page
    const cronSecret = process.env.CRON_SECRET;
    const res = await fetch(`${SITE_URL}/api/cron/auto-rewriter`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${cronSecret}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            pages: [{
                url,
                currentTitle: payload.currentTitle || '',
                currentDescription: '',
                impressions: parseInt(payload.impressions || '0'),
                clicks: parseInt(payload.clicks || '0'),
                ctr: parseFloat(payload.ctr || '0'),
                position: parseFloat(payload.position || '0'),
                topQueries: (payload.queries || '').split(',').filter(Boolean),
            }]
        }),
    });

    const data = await res.json();
    if (data.success && data.rewrites > 0) {
        // Send confirmation email
        await sendConfirmationEmail(
            `Meta Rewrite Deployed: ${url}`,
            `The meta title for ${url} has been rewritten and deployed to production.\n\nNew Title: ${data.results?.[0]?.newTitle || 'Updated'}\nReasoning: ${data.results?.[0]?.reasoning || 'CTR optimization'}`
        );
        return { success: true, message: `Rewrite deployed for ${url}` };
    }
    return { success: false, message: data.message || 'Rewrite failed  -  no viable changes generated' };
}

async function handleSkip(payload: Record<string, string>): Promise<{ success: boolean; message: string }> {
    // Just acknowledge  -  no action needed
    return { success: true, message: `Skipped action for ${payload.url || 'item'}. No changes made.` };
}

async function sendConfirmationEmail(subject: string, body: string) {
    if (process.env.ENABLE_CRON_EMAILS !== 'true') return;

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) return;

    await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
            from: 'SEO Agent <seo@updates.richardewing.io>',
            to: ['richardewing@exogram.ai'],
            subject: `[Action Complete] ${subject}`,
            html: `
            <div style="font-family:system-ui;max-width:600px;margin:0 auto;padding:24px">
                <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:24px">
                    <h2 style="color:#16a34a;margin:0 0 12px">Action Completed</h2>
                    <p style="color:#374151;font-size:14px;line-height:1.6;white-space:pre-line">${body}</p>
                </div>
                <div style="text-align:center;margin-top:16px">
                    <a href="${SITE_URL}/admin/command-center" style="color:#7c3aed;font-size:13px">View Command Center &rarr;</a>
                </div>
            </div>`,
        }),
    });
}

// ── GET handler (email links trigger via GET) ───────────────────────────────

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
        return new Response(renderHTML('Error', 'No action token provided.', false), {
            status: 400,
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
                'Cache-Control': 'no-store, max-age=0, must-revalidate',
            },
        });
    }

    const verified = verifyToken(token);
    if (!verified) {
        return new Response(renderHTML('Expired or Invalid', 'This action link has expired or is invalid. Actions expire after 72 hours.', false), {
            status: 403,
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
                'Cache-Control': 'no-store, max-age=0, must-revalidate',
            },
        });
    }

    const { action, payload } = verified;

    let result: { success: boolean; message: string };

    switch (action) {
        case 'approve-rewrite':
            result = await handleApproveRewrite(payload);
            break;
        case 'skip':
            result = await handleSkip(payload);
            break;
        default:
            result = { success: false, message: `Unknown action: ${action}` };
    }

    return new Response(
        renderHTML(
            result.success ? 'Done' : 'Issue',
            result.message,
            result.success
        ),
        {
            status: 200,
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
                'Cache-Control': 'no-store, max-age=0, must-revalidate',
            }
        }
    );
}

function renderHTML(title: string, message: string, success: boolean): string {
    const bgColor = success ? '#f0fdf4' : '#fef2f2';
    const borderColor = success ? '#bbf7d0' : '#fecaca';
    const textColor = success ? '#16a34a' : '#dc2626';

    return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>${title} | richardewing.io</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>body{font-family:system-ui,-apple-system,sans-serif;background:#0a0a0f;color:#fff;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0}
.card{background:${bgColor};border:2px solid ${borderColor};border-radius:16px;padding:40px;max-width:500px;text-align:center}
h1{color:${textColor};font-size:28px;margin:0 0 16px}
p{color:#374151;font-size:16px;line-height:1.6}
a{display:inline-block;margin-top:20px;padding:12px 24px;background:#7c3aed;color:#fff;border-radius:8px;text-decoration:none;font-weight:600}
</style></head>
<body><div class="card">
<h1>${title}</h1>
<p>${message}</p>
<a href="${SITE_URL}/admin/command-center">View Command Center &rarr;</a>
</div></body></html>`;
}
