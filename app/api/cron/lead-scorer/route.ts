import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { logAgentRun, createAgentTimer } from '@/lib/agents/logger';

/**
 * AGENT 4: Lead Scoring Agent
 * 
 * Schedule: Every 6 hours
 * Trigger: Vercel Cron → GET /api/cron/lead-scorer
 * 
 * What it does:
 * 1. Queries unscored diagnostic_results from Supabase
 * 2. Calculates a governance maturity score for each user
 * 3. Assigns a lead qualification tier (HOT / WARM / COLD / NURTURE)
 * 4. Stores scored leads in lead_scores table
 * 5. Tags users for follow-up based on diagnostic severity
 * 
 * This agent turns raw diagnostic tool usage into a qualified pipeline.
 * No human intervention required.
 */

interface ScoredLead {
    userId: string;
    totalRuns: number;
    diagnosticsUsed: string[];
    avgScore: number;
    hasRegression: boolean;
    tier: 'HOT' | 'WARM' | 'COLD' | 'NURTURE';
    reason: string;
    lastActive: string;
}

function scoreLead(params: {
    userId: string;
    runs: Array<{ diagnostic_id: string; score: number; created_at: string }>;
    trends: Array<{ diagnostic_id: string; delta: number }>;
}): ScoredLead {
    const { userId, runs, trends } = params;

    const uniqueDiagnostics = [...new Set(runs.map(r => r.diagnostic_id))];
    const avgScore = runs.reduce((sum, r) => sum + Number(r.score), 0) / runs.length;
    const hasRegression = trends.some(t => 
        (t.diagnostic_id === 'pdi' && t.delta > 5) || 
        (t.diagnostic_id !== 'pdi' && t.delta < -5)
    );
    const lastActive = runs.sort((a, b) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )[0]?.created_at || new Date().toISOString();

    // Scoring logic
    let tier: ScoredLead['tier'] = 'NURTURE';
    let reason = '';

    if (uniqueDiagnostics.length >= 3 && hasRegression) {
        tier = 'HOT';
        reason = `Used ${uniqueDiagnostics.length} diagnostics with active regression. High intent + proven governance gap.`;
    } else if (uniqueDiagnostics.length >= 2 || (runs.length >= 3 && hasRegression)) {
        tier = 'WARM';
        reason = `Multi-diagnostic user with ${runs.length} total runs. ${hasRegression ? 'Regression detected.' : 'Exploring governance posture.'}`;
    } else if (runs.length >= 2) {
        tier = 'COLD';
        reason = `Returning user with ${runs.length} runs on ${uniqueDiagnostics.join(', ')}. Needs nurture content.`;
    } else {
        tier = 'NURTURE';
        reason = `Single-run user. Auto-enrolled in content drip.`;
    }

    return {
        userId,
        totalRuns: runs.length,
        diagnosticsUsed: uniqueDiagnostics,
        avgScore,
        hasRegression,
        tier,
        reason,
        lastActive
    };
}

export async function GET(req: Request) {
    const timer = createAgentTimer();

    try {
        // Verify cron authentication
        const authHeader = req.headers.get('authorization');
        if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
            return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
        }

        // 1. Fetch all diagnostic results from the last 30 days
        const cutoff = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
        
        const { data: results, error: resultsError } = await supabaseAdmin
            .from('diagnostic_results')
            .select('user_id, diagnostic_id, score, created_at')
            .gte('created_at', cutoff);

        if (resultsError) throw resultsError;
        if (!results || results.length === 0) {
            await logAgentRun({
                agent: 'lead-scorer',
                status: 'skipped',
                duration_ms: timer.elapsed(),
                items_processed: 0,
                summary: 'No diagnostic results in last 30 days.',
            });
            return NextResponse.json({ message: 'No results to score.', duration_ms: timer.elapsed() });
        }

        // 2. Fetch governance trends for regression detection
        const { data: trends } = await supabaseAdmin
            .from('governance_trends')
            .select('org_id, diagnostic_id, delta')
            .gte('created_at', cutoff);

        // 3. Group by user
        const userRuns: Record<string, typeof results> = {};
        results.forEach(r => {
            if (!userRuns[r.user_id]) userRuns[r.user_id] = [];
            userRuns[r.user_id].push(r);
        });

        // 4. Score each user
        const scoredLeads: ScoredLead[] = [];
        for (const [userId, runs] of Object.entries(userRuns)) {
            const userTrends = trends?.filter(t => 
                runs.some(r => r.diagnostic_id === t.diagnostic_id)
            ) || [];

            const scored = scoreLead({ userId, runs, trends: userTrends });
            scoredLeads.push(scored);
        }

        // 5. Upsert into lead_scores table
        const upsertRecords = scoredLeads.map(lead => ({
            user_id: lead.userId,
            tier: lead.tier,
            total_runs: lead.totalRuns,
            diagnostics_used: lead.diagnosticsUsed,
            avg_score: lead.avgScore,
            has_regression: lead.hasRegression,
            reason: lead.reason,
            last_active: lead.lastActive,
            scored_at: new Date().toISOString()
        }));

        const { error: upsertError } = await supabaseAdmin
            .from('lead_scores')
            .upsert(upsertRecords, { onConflict: 'user_id' });

        if (upsertError) {
            console.warn('[AGENT:LEAD-SCORER] Upsert warning (table may not exist yet):', upsertError.message);
        }

        // 6. Summary stats
        const tierCounts = {
            HOT: scoredLeads.filter(l => l.tier === 'HOT').length,
            WARM: scoredLeads.filter(l => l.tier === 'WARM').length,
            COLD: scoredLeads.filter(l => l.tier === 'COLD').length,
            NURTURE: scoredLeads.filter(l => l.tier === 'NURTURE').length,
        };

        await logAgentRun({
            agent: 'lead-scorer',
            status: 'completed',
            duration_ms: timer.elapsed(),
            items_processed: scoredLeads.length,
            summary: `Scored ${scoredLeads.length} leads: ${tierCounts.HOT} HOT, ${tierCounts.WARM} WARM, ${tierCounts.COLD} COLD, ${tierCounts.NURTURE} NURTURE.`,
            metadata: { tierCounts, totalDiagnosticRuns: results.length }
        });

        return NextResponse.json({
            success: true,
            leads_scored: scoredLeads.length,
            tiers: tierCounts,
            duration_ms: timer.elapsed(),
            // Surface HOT leads for visibility
            hot_leads: scoredLeads
                .filter(l => l.tier === 'HOT')
                .map(l => ({ userId: l.userId, reason: l.reason, diagnostics: l.diagnosticsUsed }))
        });

    } catch (error) {
        await logAgentRun({
            agent: 'lead-scorer',
            status: 'failed',
            duration_ms: timer.elapsed(),
            items_processed: 0,
            summary: `Failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
            metadata: { error: String(error) }
        });
        console.error('[AGENT:LEAD-SCORER] Fatal error:', error);
        return NextResponse.json({ error: 'Agent execution failed.' }, { status: 500 });
    }
}
