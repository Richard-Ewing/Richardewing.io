import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

/**
 * Agent Status API  -  powers the /admin/agents dashboard.
 * 
 * Protected by Clerk auth  -  only logged-in users can access.
 * Returns the same data shape as /api/cron/status but without CRON_SECRET.
 */
export async function GET() {
    try {
        // Authenticate via Clerk
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized. Please sign in.' }, { status: 401 });
        }

        const agents = [
            'intelligence-digest',
            'benchmark-aggregator',
            'seo-health',
            'lead-scorer',
            'content-expander',
            'daily-ops-email',
            'seo-optimizer',
            'auto-rewriter'
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

        // Pipeline summary
        const { data: leadData } = await supabaseAdmin
            .from('lead_scores')
            .select('tier');

        const pipeline = { HOT: 0, WARM: 0, COLD: 0, NURTURE: 0 };
        if (leadData) {
            leadData.forEach((l: any) => {
                if (l.tier in pipeline) pipeline[l.tier as keyof typeof pipeline]++;
            });
        }

        return NextResponse.json({
            status: 'operational',
            timestamp: new Date().toISOString(),
            agents: dashboard,
            pipeline,
        });

    } catch (error) {
        console.error('[ADMIN:AGENT-STATUS] Error:', error);
        return NextResponse.json({ error: 'Failed to fetch agent status.' }, { status: 500 });
    }
}
