/**
 * Email Dispatch Module
 * 
 * Shared infrastructure for autonomous agent email delivery.
 * Integrates with Beehiiv API for newsletter-style digests and
 * provides a structured logging fallback when API keys are missing.
 */

export interface DigestEmailPayload {
    subject: string;
    htmlContent: string;
    recipientEmail?: string;        // For individual sends
    tags?: string[];                // Beehiiv subscriber tags
    customFields?: Record<string, string>;
}

export interface DispatchResult {
    success: boolean;
    provider: 'beehiiv' | 'log-only';
    messageId?: string;
    error?: string;
}

/**
 * Sends an executive intelligence digest via Beehiiv.
 * Falls back to structured logging if Beehiiv is not configured.
 */
export async function sendExecutiveDigest(payload: DigestEmailPayload): Promise<DispatchResult> {
    if (process.env.ENABLE_CRON_EMAILS !== 'true') {
        console.log('[AGENT:EMAIL] Email dispatches disabled (ENABLE_CRON_EMAILS != true). Logging digest payload:', {
            subject: payload.subject,
            contentLength: payload.htmlContent.length,
            tags: payload.tags,
            timestamp: new Date().toISOString()
        });
        return { success: true, provider: 'log-only' };
    }

    const apiKey = process.env.BEEHIIV_API_KEY;
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

    if (!apiKey || !publicationId) {
        // Structured log fallback — still useful for debugging and audit trail
        console.log('[AGENT:EMAIL] Beehiiv not configured. Logging digest payload:', {
            subject: payload.subject,
            contentLength: payload.htmlContent.length,
            tags: payload.tags,
            timestamp: new Date().toISOString()
        });
        return { success: true, provider: 'log-only' };
    }

    try {
        // Use Beehiiv's post creation API to create a draft newsletter
        const response = await fetch(
            `https://api.beehiiv.com/v2/publications/${publicationId}/posts`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    title: payload.subject,
                    subtitle: 'Autonomous Intelligence Digest — richardewing.io',
                    status: 'draft',  // Creates a draft — you approve before sending
                    content_html: payload.htmlContent,
                    authors: ['Richard Ewing'],
                }),
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error('[AGENT:EMAIL] Beehiiv API error:', response.status, errorText);
            return { success: false, provider: 'beehiiv', error: errorText };
        }

        const data = await response.json();
        return {
            success: true,
            provider: 'beehiiv',
            messageId: data?.data?.id
        };
    } catch (error) {
        console.error('[AGENT:EMAIL] Dispatch failed:', error);
        return {
            success: false,
            provider: 'beehiiv',
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}

/**
 * Formats governance intelligence into a clean HTML email body.
 */
export function formatDigestEmail(params: {
    cadence: string;
    orgCount: number;
    dispatches: Array<{ orgId: string; insight: string }>;
    generatedAt: string;
}): string {
    const { cadence, orgCount, dispatches, generatedAt } = params;

    const insightRows = dispatches.map(d => `
        <tr>
            <td style="padding: 12px; border-bottom: 1px solid #2a2a3a; color: #e0e0e0; font-family: monospace; font-size: 13px;">
                ${d.orgId.substring(0, 8)}…
            </td>
            <td style="padding: 12px; border-bottom: 1px solid #2a2a3a; color: #c4b5fd; font-size: 14px;">
                ${d.insight.replace(/\n/g, '<br/>')}
            </td>
        </tr>
    `).join('');

    return `
    <div style="max-width: 640px; margin: 0 auto; background: #0a0a0f; color: #e0e0e0; font-family: -apple-system, system-ui, sans-serif; padding: 32px;">
        <div style="text-align: center; margin-bottom: 24px;">
            <h1 style="font-size: 20px; color: #c4b5fd; margin: 0;">
                ⚡ ${cadence.charAt(0).toUpperCase() + cadence.slice(1)} Governance Intelligence
            </h1>
            <p style="color: #6b7280; font-size: 12px; margin-top: 4px;">
                Generated ${generatedAt} · ${orgCount} organization${orgCount !== 1 ? 's' : ''} tracked
            </p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <thead>
                <tr>
                    <th style="text-align: left; padding: 8px 12px; color: #9ca3af; font-size: 11px; text-transform: uppercase; border-bottom: 2px solid #2a2a3a;">Org</th>
                    <th style="text-align: left; padding: 8px 12px; color: #9ca3af; font-size: 11px; text-transform: uppercase; border-bottom: 2px solid #2a2a3a;">Intelligence</th>
                </tr>
            </thead>
            <tbody>
                ${insightRows || '<tr><td colspan="2" style="padding: 24px; text-align: center; color: #6b7280;">All organizations stable. No regressions detected.</td></tr>'}
            </tbody>
        </table>
        
        <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #1a1a2e; text-align: center;">
            <p style="color: #6b7280; font-size: 11px;">
                Production AI Governance · <a href="https://www.richardewing.io" style="color: #818cf8;">richardewing.io</a>
            </p>
        </div>
    </div>`;
}
