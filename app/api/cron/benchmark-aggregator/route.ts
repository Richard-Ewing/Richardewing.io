import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { calculateIndustryBenchmarks } from '@/lib/intelligence/aggregation';
import { logAgentRun, createAgentTimer } from '@/lib/agents/logger';

/**
 * AGENT 2: Benchmark Aggregation Agent
 * 
 * Schedule: Every Sunday at 3am UTC
 * Trigger: Vercel Cron → GET /api/cron/benchmark-aggregator
 * 
 * What it does:
 * 1. Recalculates industry benchmark percentiles from all diagnostic_results
 * 2. Upserts updated distributions into benchmark_distributions
 * 3. Creates a quarterly historical snapshot if we're at a quarter boundary
 * 4. Logs the run to agent_runs
 * 
 * This agent ensures your benchmarks stay current as new diagnostic data flows in.
 * No human intervention required.
 */
export async function GET(req: Request) {
    const timer = createAgentTimer();

    try {
        // Verify cron authentication
        const authHeader = req.headers.get('authorization');
        if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
            return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
        }

        const diagnosticIds = ['pdi', 'aueb', 'aper', 'ev-se'];
        const results: Array<{ diagnosticId: string; industriesUpdated: number }> = [];

        // 1. Recalculate benchmarks for each diagnostic
        for (const diagnosticId of diagnosticIds) {
            try {
                const updates = await calculateIndustryBenchmarks(diagnosticId);
                results.push({
                    diagnosticId,
                    industriesUpdated: updates?.length || 0
                });
            } catch (err) {
                console.error(`[AGENT:BENCHMARK] Failed for ${diagnosticId}:`, err);
                results.push({ diagnosticId, industriesUpdated: -1 }); // -1 = error
            }
        }

        // 2. Check if we should create a quarterly snapshot
        const now = new Date();
        const isQuarterBoundary = now.getDate() <= 7 && [0, 3, 6, 9].includes(now.getMonth());
        
        let snapshotCreated = false;
        if (isQuarterBoundary) {
            const quarter = Math.floor((now.getMonth() + 3) / 3);
            const snapshotPeriod = `Q${quarter}-${now.getFullYear()}`;

            // Check if snapshot already exists for this period
            const { data: existing } = await supabaseAdmin
                .from('benchmark_snapshots')
                .select('id')
                .eq('snapshot_period', snapshotPeriod)
                .limit(1);

            if (!existing || existing.length === 0) {
                // Fetch current benchmarks and snapshot them
                const { data: currentBenchmarks } = await supabaseAdmin
                    .from('benchmark_distributions')
                    .select('*');

                if (currentBenchmarks && currentBenchmarks.length > 0) {
                    const snapshotRecords = currentBenchmarks.map(b => ({
                        diagnostic_id: b.diagnostic_id,
                        industry: b.industry,
                        sample_size: b.sample_size,
                        top_quartile: b.top_quartile,
                        median: b.median,
                        bottom_quartile: b.bottom_quartile,
                        snapshot_period: snapshotPeriod
                    }));

                    await supabaseAdmin
                        .from('benchmark_snapshots')
                        .insert(snapshotRecords);

                    snapshotCreated = true;
                }
            }
        }

        const totalUpdated = results.reduce((sum, r) => sum + Math.max(0, r.industriesUpdated), 0);
        const failedCount = results.filter(r => r.industriesUpdated === -1).length;

        await logAgentRun({
            agent: 'benchmark-aggregator',
            status: failedCount > 0 ? 'failed' : 'completed',
            duration_ms: timer.elapsed(),
            items_processed: totalUpdated,
            summary: `Recalculated ${totalUpdated} industry benchmarks across ${diagnosticIds.length} diagnostics.${snapshotCreated ? ' Quarterly snapshot created.' : ''}${failedCount > 0 ? ` ${failedCount} diagnostics failed.` : ''}`,
            metadata: { results, snapshotCreated, isQuarterBoundary }
        });

        return NextResponse.json({
            success: true,
            diagnostics_processed: results,
            total_industries_updated: totalUpdated,
            snapshot_created: snapshotCreated,
            duration_ms: timer.elapsed()
        });

    } catch (error) {
        await logAgentRun({
            agent: 'benchmark-aggregator',
            status: 'failed',
            duration_ms: timer.elapsed(),
            items_processed: 0,
            summary: `Failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
            metadata: { error: String(error) }
        });
        console.error('[AGENT:BENCHMARK-AGGREGATOR] Fatal error:', error);
        return NextResponse.json({ error: 'Agent execution failed.' }, { status: 500 });
    }
}
