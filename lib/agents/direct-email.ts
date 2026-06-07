/**
 * Direct Email Module (Resend)
 * 
 * For transactional emails sent directly to richardewing@exogram.ai.
 * Different from Beehiiv (newsletter drafts) — this is direct delivery.
 * 
 * Falls back to console logging if RESEND_API_KEY is not set.
 */

interface DirectEmailPayload {
    to: string;
    subject: string;
    html: string;
    from?: string;
}

interface DirectEmailResult {
    success: boolean;
    provider: 'resend' | 'log-only';
    messageId?: string;
    error?: string;
}

export async function sendDirectEmail(payload: DirectEmailPayload): Promise<DirectEmailResult> {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        console.log('[AGENT:DIRECT-EMAIL] Resend not configured. Logging email:', {
            to: payload.to,
            subject: payload.subject,
            contentLength: payload.html.length,
            timestamp: new Date().toISOString()
        });
        return { success: true, provider: 'log-only' };
    }

    try {
        const { Resend } = await import('resend');
        const resend = new Resend(apiKey);

        const result = await resend.emails.send({
            from: payload.from || 'Exogram Ops <ops@exogram.ai>',
            to: payload.to,
            subject: payload.subject,
            html: payload.html,
        });

        if (result.error) {
            return { success: false, provider: 'resend', error: JSON.stringify(result.error) };
        }

        return { success: true, provider: 'resend', messageId: result.data?.id };
    } catch (error) {
        console.error('[AGENT:DIRECT-EMAIL] Resend failed:', error);
        return {
            success: false,
            provider: 'resend',
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}

/**
 * Formats the daily operations report as HTML email
 */
export function formatDailyOpsEmail(params: {
    agentStatuses: Record<string, { status: string; lastRun: string | null; summary: string }>;
    pipeline: { HOT: number; WARM: number; COLD: number; NURTURE: number };
    seoIssues: number;
    contentDrafts: number;
    generatedAt: string;
}): string {
    const { agentStatuses, pipeline, seoIssues, contentDrafts, generatedAt } = params;

    const agentRows = Object.entries(agentStatuses).map(([name, info]) => {
        const statusColor = info.status === 'completed' ? '#34d399' 
            : info.status === 'failed' ? '#f87171' 
            : info.status === 'skipped' ? '#fbbf24' 
            : '#6b7280';
        
        return `
        <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #1e1e2e; font-weight: 500; color: #e2e8f0;">${name}</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #1e1e2e;">
                <span style="display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; background: ${statusColor}20; color: ${statusColor};">
                    ${info.status.toUpperCase()}
                </span>
            </td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #1e1e2e; color: #94a3b8; font-size: 13px;">${info.lastRun ? new Date(info.lastRun).toLocaleString() : 'Never'}</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #1e1e2e; color: #cbd5e1; font-size: 13px;">${info.summary}</td>
        </tr>`;
    }).join('');

    const totalLeads = pipeline.HOT + pipeline.WARM + pipeline.COLD + pipeline.NURTURE;

    return `
    <div style="max-width: 700px; margin: 0 auto; background: #0f0f1a; color: #e2e8f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 0;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%); padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 22px; color: #e0e7ff;">⚡ Daily Operations Report</h1>
            <p style="margin: 4px 0 0; color: #a5b4fc; font-size: 13px;">${generatedAt} · richardewing.io</p>
        </div>

        <div style="padding: 24px 32px;">
            <!-- Pipeline Summary -->
            <div style="display: flex; gap: 12px; margin-bottom: 24px;">
                <div style="flex: 1; background: #1a1a2e; border-radius: 8px; padding: 16px; text-align: center; border: 1px solid #2d2d44;">
                    <div style="font-size: 28px; font-weight: 700; color: #f87171;">${pipeline.HOT}</div>
                    <div style="font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Hot Leads</div>
                </div>
                <div style="flex: 1; background: #1a1a2e; border-radius: 8px; padding: 16px; text-align: center; border: 1px solid #2d2d44;">
                    <div style="font-size: 28px; font-weight: 700; color: #fbbf24;">${pipeline.WARM}</div>
                    <div style="font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Warm</div>
                </div>
                <div style="flex: 1; background: #1a1a2e; border-radius: 8px; padding: 16px; text-align: center; border: 1px solid #2d2d44;">
                    <div style="font-size: 28px; font-weight: 700; color: #818cf8;">${totalLeads}</div>
                    <div style="font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Total Pipeline</div>
                </div>
                <div style="flex: 1; background: #1a1a2e; border-radius: 8px; padding: 16px; text-align: center; border: 1px solid #2d2d44;">
                    <div style="font-size: 28px; font-weight: 700; color: ${seoIssues > 0 ? '#f87171' : '#34d399'};">${seoIssues}</div>
                    <div style="font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">SEO Issues</div>
                </div>
            </div>

            <!-- Agent Status Table -->
            <h2 style="font-size: 16px; color: #c4b5fd; margin: 24px 0 12px; border-bottom: 1px solid #2d2d44; padding-bottom: 8px;">Agent Status</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <thead>
                    <tr>
                        <th style="text-align: left; padding: 8px 12px; color: #64748b; font-size: 11px; text-transform: uppercase; border-bottom: 2px solid #2d2d44;">Agent</th>
                        <th style="text-align: left; padding: 8px 12px; color: #64748b; font-size: 11px; text-transform: uppercase; border-bottom: 2px solid #2d2d44;">Status</th>
                        <th style="text-align: left; padding: 8px 12px; color: #64748b; font-size: 11px; text-transform: uppercase; border-bottom: 2px solid #2d2d44;">Last Run</th>
                        <th style="text-align: left; padding: 8px 12px; color: #64748b; font-size: 11px; text-transform: uppercase; border-bottom: 2px solid #2d2d44;">Summary</th>
                    </tr>
                </thead>
                <tbody>${agentRows}</tbody>
            </table>

            ${contentDrafts > 0 ? `
            <div style="margin-top: 20px; padding: 12px 16px; background: #1e1b4b; border-radius: 6px; border-left: 3px solid #818cf8;">
                <strong style="color: #c4b5fd;">📝 ${contentDrafts} content draft${contentDrafts !== 1 ? 's' : ''} awaiting approval</strong>
                <p style="margin: 4px 0 0; color: #94a3b8; font-size: 13px;">Review in the Agent Dashboard or Supabase content_drafts table.</p>
            </div>` : ''}
        </div>

        <!-- Footer -->
        <div style="padding: 16px 32px; background: #0a0a14; border-radius: 0 0 8px 8px; text-align: center;">
            <a href="https://www.richardewing.io/admin/agents" style="color: #818cf8; text-decoration: none; font-size: 13px;">View Full Dashboard →</a>
            <p style="color: #475569; font-size: 11px; margin: 8px 0 0;">Autonomous Agent Stack · Production AI Governance</p>
        </div>
    </div>`;
}
