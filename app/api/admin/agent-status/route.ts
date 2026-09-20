import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';

export const dynamic = 'force-dynamic';

/**
 * Agent Status API - Powers the /admin/agents and command-center dashboard.
 * 
 * Scheduled crons have been decommissioned. Returns clean retired status
 * decoupled from Supabase to prevent any runtime exceptions.
 */
export async function GET() {
    try {
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
            dashboard[agent] = {
                last_runs: [],
                last_status: 'decommissioned',
                last_run_at: null,
                error: null,
            };
        }

        return NextResponse.json({
            status: 'decommissioned',
            timestamp: new Date().toISOString(),
            agents: dashboard,
            pipeline: { HOT: 0, WARM: 0, COLD: 0, NURTURE: 0 },
        });

    } catch (error) {
        console.error('[ADMIN:AGENT-STATUS] Error:', error);
        return NextResponse.json({ error: 'Failed to fetch agent status.' }, { status: 500 });
    }
}
