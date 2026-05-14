import { getBenchmark, DiagnosticTool } from '../diagnostics/benchmarks';
import { PercentileBand } from '../../types/diagnostics';

/**
 * Calculates the percentile and assigns a performance band for a given score.
 * Note: PDI is lower-is-better, while APER and AUEB are higher-is-better.
 */
export function getPercentile(tool: DiagnosticTool, score: number, industry: string = 'Default'): PercentileBand {
    const benchmark = getBenchmark(tool, industry);
    
    let percentile = 50;
    let band: PercentileBand['band'] = 'Below Average';
    let interpretation = '';

    if (tool === 'pdi') {
        // Lower score is better for PDI
        if (score <= benchmark.topQuartile) {
            percentile = 90; // Approximation
            band = 'Top Quartile';
            interpretation = 'Exceptional governance architecture with minimal technical debt.';
        } else if (score <= benchmark.industryAverage) {
            percentile = 60;
            band = 'Above Average';
            interpretation = 'Healthy codebase but showing signs of accumulating operational entropy.';
        } else if (score <= benchmark.bottomQuartile) {
            percentile = 40;
            band = 'Below Average';
            interpretation = 'Significant technical debt slowing down engineering velocity.';
        } else {
            percentile = 10;
            band = 'Bottom Quartile';
            if (industry === 'Healthcare' || industry === 'FinTech') {
                 interpretation = 'Critical Compliance Risk. Unmanaged probabilistic workflows detected in regulated environments. Admissibility failure imminent.';
            } else if (industry === 'SaaS') {
                 interpretation = 'Approaching Technical Insolvency. Execution variance is causing severe operational entropy. Immediate governance intervention required.';
            } else {
                 interpretation = 'Approaching Technical Insolvency. Immediate governance intervention required.';
            }
        }
    } else {
        // Higher score is better for APER and AUEB
        if (score >= benchmark.topQuartile) {
            percentile = 90;
            band = 'Top Quartile';
            interpretation = 'Elite operational efficiency and highly favorable unit economics.';
        } else if (score >= benchmark.industryAverage) {
            percentile = 60;
            band = 'Above Average';
            interpretation = 'Competitive performance, but with room for margin optimization.';
        } else if (score >= benchmark.bottomQuartile) {
            percentile = 40;
            band = 'Below Average';
            interpretation = 'Underperforming industry averages. Review AI workload routing.';
        } else {
            percentile = 10;
            band = 'Bottom Quartile';
            if (industry === 'SaaS' && tool === 'aueb') {
                interpretation = 'Critical margin deterioration. Inference routing inefficiencies are destroying SaaS gross margins.';
            } else if ((industry === 'Healthcare' || industry === 'FinTech') && tool === 'aper') {
                interpretation = 'Productivity collapse detected. The verification burden required to supervise non-deterministic models in a regulated environment is offsetting all automation gains.';
            } else {
                interpretation = 'Critical margin deterioration or productivity collapse detected.';
            }
        }
    }

    return { percentile, band, interpretation };
}
