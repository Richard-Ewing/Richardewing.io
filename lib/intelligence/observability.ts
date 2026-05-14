import { supabaseAdmin } from '../supabase';

/**
 * Calculates operational deltas for a specific organization and diagnostic.
 * This powers the 'Real-Time Governance Observability' layer.
 */
export async function trackGovernanceDelta(orgId: string, diagnosticId: string, newScore: number) {
    try {
        // Fetch the most recent score for this org and diagnostic
        const { data: previousRuns, error } = await supabaseAdmin
            .from('diagnostic_results')
            .select('score, created_at')
            .eq('org_id', orgId)
            .eq('diagnostic_id', diagnosticId)
            .order('created_at', { ascending: false })
            .limit(1);

        if (error) throw error;

        // If this is the first run, we just return. Delta tracking needs at least 2 points.
        if (!previousRuns || previousRuns.length === 0) {
            return null;
        }

        const previousScore = Number(previousRuns[0].score);
        const delta = newScore - previousScore;
        const periodStart = previousRuns[0].created_at;

        // Log the trend
        const { error: trendError } = await supabaseAdmin
            .from('governance_trends')
            .insert({
                org_id: orgId,
                diagnostic_id: diagnosticId,
                previous_score: previousScore,
                current_score: newScore,
                delta: delta,
                period_start: periodStart,
                period_end: new Date().toISOString()
            });

        if (trendError) throw trendError;

        // Return insights to trigger executive alerts if delta is severe
        return {
            diagnosticId,
            previousScore,
            newScore,
            delta,
            isRegression: diagnosticId === 'pdi' ? delta > 0 : delta < 0 // PDI lower is better, others higher is better
        };

    } catch (e) {
        console.error(`Failed to track governance delta for org ${orgId}`, e);
        // We don't throw here to avoid failing the main ingest pipeline
        return null; 
    }
}
