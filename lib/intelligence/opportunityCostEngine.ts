export interface OpportunityCostReport {
    actionTitle: string;
    costOfDoingItUSD: number;
    costOfNotDoingItUSD: number;
    costOfDoingSomethingElseUSD: number;
    recommendedAlternative: string;
    opportunityCostAnalysis: string;
}

/**
 * Opportunity Cost Engine
 * Calculates the 3-axis Opportunity Cost Triad for every executive recommendation.
 */
export function calculateOpportunityCost(
    actionTitle: string,
    implementationCostUSD: number,
    annualSavingsUSD: number,
    alternativeDelayCostUSD: number
): OpportunityCostReport {
    const costOfDoingItUSD = implementationCostUSD;
    const costOfNotDoingItUSD = annualSavingsUSD;
    const costOfDoingSomethingElseUSD = alternativeDelayCostUSD;

    return {
        actionTitle,
        costOfDoingItUSD,
        costOfNotDoingItUSD,
        costOfDoingSomethingElseUSD,
        recommendedAlternative: 'Proceed with Token Saver MCP + Intent Router deployment immediately.',
        opportunityCostAnalysis: `Direct implementation cost is $${costOfDoingItUSD.toLocaleString()}. Delaying this action costs $${costOfNotDoingItUSD.toLocaleString()}/yr in un-recovered waste, while selecting secondary Project B instead incurs an opportunity cost of $${costOfDoingSomethingElseUSD.toLocaleString()}/yr in delayed yield.`
    };
}
