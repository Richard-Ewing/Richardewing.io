export interface ExecutiveCommitment {
    id: string;
    decisionId: string;
    commitmentTitle: string;
    executiveOwnerRole: string;
    targetDeadline: string;
    allocatedCapitalUSD: number;
    slippageRiskLevel: 'Low' | 'Moderate' | 'High';
    slippageCostPerDayUSD: number;
    status: 'Approved' | 'Executing' | 'Verified' | 'Slipped';
}

export interface DecisionDebtReport {
    pendingDecisionCount: number;
    averageDecisionAgeDays: number;
    accumulatedDecisionDebtUSD: number;
    dailyDelayCostUSD: number;
    topDebtItemTitle: string;
}
