export interface TradeoffOption {
    optionId: string;
    label: string;
    tradeoffType: 'LowestRisk' | 'HighestQuality' | 'MaximumSavings' | 'FastestDeployment' | 'Highest3YrROI';
    annualSavingsUSD: number;
    threeYearROIUSD: number;
    riskScore: 'Low' | 'Moderate' | 'High';
    deploymentDays: number;
    accuracyDeltaPct: number;
    latencyDeltaPct: number;
    description: string;
}

export interface TradeoffAnalysis {
    investmentId: string;
    currentAnnualCostUSD: number;
    options: TradeoffOption[];
    tradeoffExplanation: string;
}

/**
 * Tradeoff Intelligence Engine
 * Generates multi-dimensional trade-off profiles so executives can select optimal strategic options.
 */
export function evaluateTradeoffProfiles(currentAnnualCostUSD: number): TradeoffAnalysis {
    const optionLowestRisk: TradeoffOption = {
        optionId: 'opt_lowest_risk',
        label: 'Option A: Lowest Risk',
        tradeoffType: 'LowestRisk',
        annualSavingsUSD: Math.round(currentAnnualCostUSD * 0.40),
        threeYearROIUSD: Math.round(currentAnnualCostUSD * 1.2),
        riskScore: 'Low',
        deploymentDays: 3,
        accuracyDeltaPct: -0.1,
        latencyDeltaPct: -5,
        description: 'Enforce exact-match prompt caching and baseline token caps. Minimal architectural change.'
    };

    const optionMaximumSavings: TradeoffOption = {
        optionId: 'opt_max_savings',
        label: 'Option B: Maximum Savings',
        tradeoffType: 'MaximumSavings',
        annualSavingsUSD: Math.round(currentAnnualCostUSD * 0.71),
        threeYearROIUSD: Math.round(currentAnnualCostUSD * 2.1),
        riskScore: 'Moderate',
        deploymentDays: 7,
        accuracyDeltaPct: -0.3,
        latencyDeltaPct: -25,
        description: 'Deploy dynamic Intent Router + local 8B SLM edge cluster + Token Saver MCP sidecars.'
    };

    const optionFastestDeployment: TradeoffOption = {
        optionId: 'opt_fastest_deploy',
        label: 'Option C: Fastest Deployment',
        tradeoffType: 'FastestDeployment',
        annualSavingsUSD: Math.round(currentAnnualCostUSD * 0.35),
        threeYearROIUSD: Math.round(currentAnnualCostUSD * 1.0),
        riskScore: 'Low',
        deploymentDays: 1,
        accuracyDeltaPct: 0.0,
        latencyDeltaPct: -10,
        description: 'Downgrade 80B models to Sonnet tier via proxy configuration without codebase refactoring.'
    };

    const optionHighest3YrROI: TradeoffOption = {
        optionId: 'opt_highest_3yr_roi',
        label: 'Option D: Highest 3-Year ROI',
        tradeoffType: 'Highest3YrROI',
        annualSavingsUSD: Math.round(currentAnnualCostUSD * 0.65),
        threeYearROIUSD: Math.round(currentAnnualCostUSD * 2.8),
        riskScore: 'Low',
        deploymentDays: 14,
        accuracyDeltaPct: +0.2,
        latencyDeltaPct: -40,
        description: 'Migrate entire document RAG pipeline to localized hybrid RAG infrastructure with dedicated GPU edge nodes.'
    };

    return {
        investmentId: 'inv_ai_infrastructure',
        currentAnnualCostUSD,
        options: [optionLowestRisk, optionMaximumSavings, optionFastestDeployment, optionHighest3YrROI],
        tradeoffExplanation: 'The platform presents 4 distinct executive trade-off profiles. Executives can balance risk tolerance, speed of execution, and 3-year financial ROI.'
    };
}
