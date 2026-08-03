export interface CorporateTheory {
    id: string;
    theoryStatement: string;
    targetDomain: 'EngineeringProductivity' | 'SLMEfficiency' | 'PromptCaching' | 'ShadowAIRisk';
    initialConfidencePct: number;
    updatedConfidencePct: number;
    evidenceCount: number;
    status: 'Testing' | 'Validated' | 'Invalidated';
    lastCalibratedAt: string;
}

export interface PrivateEquityPortfolioScorecard {
    portfolioId: string;
    fundName: string;
    companyScores: Array<{
        companyName: string;
        capitalEfficiencyScore: number;
        decisionQualityScore: number;
        governanceScore: number;
        annualAvoidedCostUSD: number;
    }>;
    averagePortfolioDecisionQualityPct: number;
}
