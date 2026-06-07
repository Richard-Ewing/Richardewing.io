import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { sendDirectEmail, formatDailyOpsEmail } from '@/lib/agents/direct-email';
import { logAgentRun, createAgentTimer } from '@/lib/agents/logger';

/**
 * AGENT 6: Daily Operations Email Agent
 * 
 * Schedule: Every day at 7am UTC (midnight Pacific)
 * Trigger: Vercel Cron → GET /api/cron/daily-ops-email
 * 
 * What it does:
 * 1. Queries the last 24h of agent_runs from Supabase
 * 2. Fetches current lead pipeline counts
 * 3. Checks for outstanding SEO issues and content drafts
 * 4. Compiles everything into a single daily operations email
 * 5. Sends directly to richardewing@exogram.ai via Resend
 * 
 * This is your daily morning briefing — delivered to your inbox.
 * No login required. No dashboard check required.
 */
export async function GET(req: Request) {
    const timer = createAgentTimer();

    try {
        // Verify cron authentication
        const authHeader = req.headers.get('authorization');
        if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
            return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
        }

        // 1. Fetch last 24h of agent runs
        const cutoff24h = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
        
        const agents = [
            'intelligence-digest',
            'benchmark-aggregator',
            'seo-health',
            'lead-scorer',
            'content-expander',
            'daily-ops-email'
        ];

        const agentStatuses: Record<string, { status: string; lastRun: string | null; summary: string }> = {};

        for (const agent of agents) {
            const { data } = await supabaseAdmin
                .from('agent_runs')
                .select('status, created_at, summary')
                .eq('agent', agent)
                .order('created_at', { ascending: false })
                .limit(1);

            agentStatuses[agent] = {
                status: data?.[0]?.status || 'never-run',
                lastRun: data?.[0]?.created_at || null,
                summary: data?.[0]?.summary || 'No runs recorded yet.'
            };
        }

        // 2. Fetch pipeline counts
        const pipeline = { HOT: 0, WARM: 0, COLD: 0, NURTURE: 0 };
        const { data: leadData } = await supabaseAdmin
            .from('lead_scores')
            .select('tier');

        if (leadData) {
            leadData.forEach((l: any) => {
                if (l.tier in pipeline) pipeline[l.tier as keyof typeof pipeline]++;
            });
        }

        // 3. Check for SEO issues from the last seo-health run
        let seoIssues = 0;
        const { data: lastSeoRun } = await supabaseAdmin
            .from('agent_runs')
            .select('metadata')
            .eq('agent', 'seo-health')
            .order('created_at', { ascending: false })
            .limit(1);

        if (lastSeoRun?.[0]?.metadata) {
            const meta = lastSeoRun[0].metadata as any;
            seoIssues = (meta.broken?.length || 0) + (meta.canonicalIssues?.length || 0);
        }

        // 4. Check for pending content drafts
        const { count: contentDrafts } = await supabaseAdmin
            .from('content_drafts')
            .select('id', { count: 'exact', head: true })
            .eq('status', 'draft');

        // 5. Format and send the email
        const emailHtml = formatDailyOpsEmail({
            agentStatuses,
            pipeline,
            seoIssues,
            contentDrafts: contentDrafts || 0,
            generatedAt: new Date().toLocaleString('en-US', { 
                timeZone: 'America/Los_Angeles',
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        });

        const emailResult = await sendDirectEmail({
            to: 'richardewing@exogram.ai',
            subject: `⚡ Daily Ops — ${pipeline.HOT} HOT leads · ${seoIssues} SEO issues · ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`,
            html: emailHtml,
        });

        // 6. Log the run
        await logAgentRun({
            agent: 'daily-ops-email' as any,
            status: emailResult.success ? 'completed' : 'failed',
            duration_ms: timer.elapsed(),
            items_processed: 1,
            summary: `Daily ops email sent to richardewing@exogram.ai via ${emailResult.provider}. Pipeline: ${pipeline.HOT}H/${pipeline.WARM}W/${pipeline.COLD}C. SEO: ${seoIssues} issues. Drafts: ${contentDrafts || 0}.`,
            metadata: { emailResult, pipeline, seoIssues, contentDrafts }
        });

        return NextResponse.json({
            success: true,
            email_sent: emailResult.success,
            email_provider: emailResult.provider,
            pipeline,
            seo_issues: seoIssues,
            content_drafts: contentDrafts || 0,
            duration_ms: timer.elapsed()
        });

    } catch (error) {
        await logAgentRun({
            agent: 'daily-ops-email' as any,
            status: 'failed',
            duration_ms: timer.elapsed(),
            items_processed: 0,
            summary: `Failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
            metadata: { error: String(error) }
        });
        console.error('[AGENT:DAILY-OPS-EMAIL] Fatal error:', error);
        return NextResponse.json({ error: 'Agent execution failed.' }, { status: 500 });
    }
}
