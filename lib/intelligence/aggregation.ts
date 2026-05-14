import { supabaseAdmin } from '../supabase';

export interface DiagnosticResultRecord {
    diagnostic_id: string;
    industry: string;
    score: number;
}

/**
 * Recalculates industry benchmarks based on recent diagnostic results.
 * This should ideally be run via a Cron job (e.g. Vercel Cron).
 */
export async function calculateIndustryBenchmarks(diagnosticId: string) {
    try {
        // Fetch all results for the diagnostic
        const { data, error } = await supabaseAdmin
            .from('diagnostic_results')
            .select(`
                score,
                organization_profiles(industry)
            `)
            .eq('diagnostic_id', diagnosticId);

        if (error) throw error;
        if (!data || data.length === 0) return null;

        // Group by industry
        const byIndustry: Record<string, number[]> = {};
        
        data.forEach((row: any) => {
            const ind = row.organization_profiles?.industry || 'Default';
            if (!byIndustry[ind]) byIndustry[ind] = [];
            byIndustry[ind].push(Number(row.score));
        });

        const updates = [];

        for (const [industry, scores] of Object.entries(byIndustry)) {
            // Sort scores to calculate percentiles
            scores.sort((a, b) => a - b);
            
            const q1 = percentile(scores, 0.25);
            const median = percentile(scores, 0.50);
            const q3 = percentile(scores, 0.75);

            updates.push({
                diagnostic_id: diagnosticId,
                industry,
                sample_size: scores.length,
                top_quartile: q3, // Note: Logic may flip depending on 'isHigherBetter'
                median,
                bottom_quartile: q1,
                last_computed_at: new Date().toISOString()
            });
        }

        // Upsert into benchmark_distributions
        if (updates.length > 0) {
            const { error: upsertError } = await supabaseAdmin
                .from('benchmark_distributions')
                .upsert(updates, { onConflict: 'diagnostic_id, industry' });
            
            if (upsertError) throw upsertError;
        }

        return updates;

    } catch (e) {
        console.error(`Failed to calculate benchmarks for ${diagnosticId}`, e);
        throw e;
    }
}

// Basic Percentile Calculation
function percentile(arr: number[], p: number) {
    if (arr.length === 0) return 0;
    if (typeof p !== 'number') throw new TypeError('p must be a number');
    if (p <= 0) return arr[0];
    if (p >= 1) return arr[arr.length - 1];

    const index = (arr.length - 1) * p;
    const lower = Math.floor(index);
    const upper = lower + 1;
    const weight = index % 1;

    if (upper >= arr.length) return arr[lower];
    return arr[lower] * (1 - weight) + arr[upper] * weight;
}
