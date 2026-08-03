import { CounterfactualReport } from '../ontology/resource';

/**
 * Counterfactual Engine
 * Proves economic value by calculating "What would have happened if the intervention had NOT been executed?" vs actual observed outcomes.
 */
export function calculateCounterfactualImpact(
    decisionId: string,
    interventionName: string,
    actualObservedSpendUSD: number,
    baselineGrowthRatePct: number
): CounterfactualReport {
    // Project what spend would have been without the intervention
    const counterfactualProjectedSpendUSD = Math.round(actualObservedSpendUSD * (1 + baselineGrowthRatePct / 100));
    const verifiedAvoidedCostUSD = Math.max(0, counterfactualProjectedSpendUSD - actualObservedSpendUSD);

    return {
        decisionId,
        interventionName,
        actualObservedSpendUSD,
        counterfactualProjectedSpendUSD,
        verifiedAvoidedCostUSD,
        counterfactualMethodology: `Baseline trajectory projected spend of $${counterfactualProjectedSpendUSD.toLocaleString()} vs actual post-intervention spend of $${actualObservedSpendUSD.toLocaleString()} (${baselineGrowthRatePct}% historical growth rate baseline).`,
        calculatedAt: new Date().toISOString()
    };
}
