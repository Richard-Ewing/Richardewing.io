import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { synthesizeGovernanceIntelligence } from '@/lib/intelligence/synthesis';
import { sendExecutiveDigest, formatDigestEmail } from '@/lib/agents/email-dispatch';
import { logAgentRun, createAgentTimer } from '@/lib/agents/logger';

/**
 * AGENT 1: Intelligence Digest Agent
 * 
 * Schedule: Weekly (Monday 8am), Monthly (1st of month), Quarterly
 * Trigger: Vercel Cron → GET /api/cron/intelligence-digest?cadence=weekly
 * 
 * What it does:
 * 1. Queries governance_trends from Supabase for the configured time window
 * 2. Groups by organization and synthesizes executive-level intelligence
 * 3. Creates a Beehiiv draft newsletter with the digest
 * 4. Logs the run to agent_runs for audit trail
 * 
 * No human intervention required after deployment.
 */
export async function GET(req: Request) {
    const timer = createAgentTimer();

    try {
        // Verify cron authentication
        const authHeader = req.headers.get('authorization');
        if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
            return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
        }

        const { searchParams } = new URL(req.url);
        const cadence = searchParams.get('cadence') || 'weekly';

        let timeWindowDays = 7;
        if (cadence === 'monthly') timeWindowDays = 30;
        if (cadence === 'quarterly') timeWindowDays = 90;

        // 1. Fetch recent governance trends
        const cutoff = new Date(Date.now() - timeWindowDays * 24 * 60 * 60 * 1000).toISOString();
        const { data: trends, error: fetchError } = await supabaseAdmin
            .from('governance_trends')
            .select(`
                *,
                organization_profiles(industry, company_size, ai_maturity)
            `)
            .gte('created_at', cutoff);

        if (fetchError) throw fetchError;

        if (!trends || trends.length === 0) {
            await logAgentRun({
                agent: 'intelligence-digest',
                status: 'skipped',
                duration_ms: timer.elapsed(),
                items_processed: 0,
                summary: `No governance trends found in last ${timeWindowDays} days.`,
                metadata: { cadence }
            });
            return NextResponse.json({ message: 'No recent trends to report.', cadence });
        }

        // 2. Group by Organization
        const orgMetrics: Record<string, {
            orgId: string;
            industry: string;
            companySize: string;
            aiMaturity: string;
            recentDeltas: Array<{ diagnosticId: string; delta: number; currentScore: number }>;
        }> = {};

        trends.forEach((trend: any) => {
            const orgId = trend.org_id;
            if (!orgMetrics[orgId]) {
                orgMetrics[orgId] = {
                    orgId,
                    industry: trend.organization_profiles?.industry || 'Unknown',
                    companySize: trend.organization_profiles?.company_size || 'Unknown',
                    aiMaturity: trend.organization_profiles?.ai_maturity || 'Unknown',
                    recentDeltas: []
                };
            }
            orgMetrics[orgId].recentDeltas.push({
                diagnosticId: trend.diagnostic_id,
                delta: trend.delta,
                currentScore: trend.current_score
            });
        });

        // 3. Synthesize intelligence for each org
        const dispatches: Array<{ orgId: string; insight: string }> = [];
        for (const [orgId, metrics] of Object.entries(orgMetrics)) {
            const insight = synthesizeGovernanceIntelligence(metrics as any);
            dispatches.push({ orgId, insight });
        }

        // 4. Send via Beehiiv
        const emailHtml = formatDigestEmail({
            cadence,
            orgCount: dispatches.length,
            dispatches: dispatches.slice(0, 10), // Cap at 10 for readability
            generatedAt: new Date().toISOString()
        });

        const emailResult = await sendExecutiveDigest({
            subject: `[${cadence.toUpperCase()}] Governance Intelligence  -  ${dispatches.length} org${dispatches.length !== 1 ? 's' : ''} tracked`,
            htmlContent: emailHtml,
            tags: ['intelligence-digest', cadence]
        });

        // 5. Log the run
        await logAgentRun({
            agent: 'intelligence-digest',
            status: 'completed',
            duration_ms: timer.elapsed(),
            items_processed: dispatches.length,
            summary: `Synthesized ${cadence} digest for ${dispatches.length} organizations. Email: ${emailResult.provider}${emailResult.messageId ? ` (${emailResult.messageId})` : ''}.`,
            metadata: { cadence, emailResult, trendCount: trends.length }
        });

        return NextResponse.json({
            success: true,
            cadence,
            dispatched_count: dispatches.length,
            email_provider: emailResult.provider,
            email_success: emailResult.success,
            duration_ms: timer.elapsed()
        });

    } catch (error) {
        await logAgentRun({
            agent: 'intelligence-digest',
            status: 'failed',
            duration_ms: timer.elapsed(),
            items_processed: 0,
            summary: `Failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
            metadata: { error: String(error) }
        });
        console.error('[AGENT:INTELLIGENCE-DIGEST] Fatal error:', error);
        return NextResponse.json({ error: 'Agent execution failed.' }, { status: 500 });
    }
}
