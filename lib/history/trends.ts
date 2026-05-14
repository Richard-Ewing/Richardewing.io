import { DiagnosticResult } from '../../types/diagnostics';
import { aggregateResults } from '../benchmarks/aggregation';

/**
 * Calculates operational trends including velocity of decay and governance maturity progression.
 */
export function calculateTrends(history: DiagnosticResult[]) {
    if (!history || history.length < 2) return null;

    // Filter by diagnostic
    const pdiHistory = history.filter(h => h.diagnosticId === 'pdi');
    const aperHistory = history.filter(h => h.diagnosticId === 'aper');
    const auebHistory = history.filter(h => h.diagnosticId === 'aueb');

    const pdiAggregation = aggregateResults(pdiHistory);
    const aperAggregation = aggregateResults(aperHistory);
    const auebAggregation = aggregateResults(auebHistory);

    // Determine Entropy Acceleration (Velocity of Decay) based on PDI
    let entropyAcceleration = 'Stable';
    if (pdiAggregation) {
        if (pdiAggregation.delta > 5) entropyAcceleration = 'Accelerating';
        if (pdiAggregation.delta < -5) entropyAcceleration = 'Decelerating';
    }

    // Determine Governance Maturity
    let governanceMaturity = 'Developing';
    if (pdiAggregation && pdiAggregation.latest < 40) {
        governanceMaturity = 'Advanced';
    } else if (pdiAggregation && pdiAggregation.latest > 70) {
        governanceMaturity = 'Reactive';
    }

    return {
        pdiTrend: pdiAggregation,
        aperTrend: aperAggregation,
        auebTrend: auebAggregation,
        entropyAcceleration,
        governanceMaturity,
        lastAssessmentDate: new Date(history[history.length - 1].timestamp)
    };
}
