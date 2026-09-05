import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

/**
 * Agent Operations Dashboard API
 * 
 * GET /api/cron/status  -  Returns the status of all autonomous agents.
 * Protected by CRON_SECRET for security.
 * 
 * This is your operational control plane  -  a single endpoint to see
 * what every agent did, when, and whether it succeeded.
 */
export async function GET(req: Request) {
    try {
        const authHeader = req.headers.get('authorization');
        if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
            return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
        }

        // Fetch the last 5 runs per agent
        const agents = [
            'intelligence-digest',
            'benchmark-aggregator',
            'seo-health',
            'lead-scorer',
            'content-expander',
            'daily-ops-email'
        ];

        const dashboard: Record<string, any> = {};

        for (const agent of agents) {
            const { data, error } = await supabaseAdmin
                .from('agent_runs')
                .select('*')
                .eq('agent', agent)
                .order('created_at', { ascending: false })
                .limit(5);

            dashboard[agent] = {
                last_runs: data || [],
                last_status: data?.[0]?.status || 'never-run',
                last_run_at: data?.[0]?.created_at || null,
                error: error?.message || null,
            };
        }

        // Also fetch lead score summary
        const { data: leadSummary } = await supabaseAdmin
            .from('lead_scores')
            .select('tier')
            .order('scored_at', { ascending: false });

        const tierCounts = {
            HOT: leadSummary?.filter((l: any) => l.tier === 'HOT').length || 0,
            WARM: leadSummary?.filter((l: any) => l.tier === 'WARM').length || 0,
            COLD: leadSummary?.filter((l: any) => l.tier === 'COLD').length || 0,
            NURTURE: leadSummary?.filter((l: any) => l.tier === 'NURTURE').length || 0,
        };

        return NextResponse.json({
            status: 'operational',
            timestamp: new Date().toISOString(),
            agents: dashboard,
            pipeline: tierCounts,
        });

    } catch (error) {
        console.error('[AGENT:STATUS] Error:', error);
        return NextResponse.json({ error: 'Failed to fetch agent status.' }, { status: 500 });
    }
}
