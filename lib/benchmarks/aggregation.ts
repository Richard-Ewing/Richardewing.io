import { DiagnosticResult } from '../../types/diagnostics';

/**
 * Aggregates a longitudinal series of diagnostic results to provide trend analysis.
 * In a real backend scenario, this would aggregate data across an entire industry.
 * Currently, it simulates global averages or processes local user history.
 */
export function aggregateResults(history: DiagnosticResult[]) {
    if (!history || history.length === 0) return null;

    const scores = history.map(h => h.score);
    const latest = scores[scores.length - 1];
    const first = scores[0];
    
    // Determine the direction of the trend
    const delta = latest - first;
    const isImproving = history[0].diagnosticId === 'pdi' ? delta < 0 : delta > 0;

    return {
        count: history.length,
        average: scores.reduce((a, b) => a + b, 0) / scores.length,
        latest,
        first,
        delta,
        isImproving,
        trajectory: isImproving ? 'Improving' : 'Deteriorating',
    };
}
