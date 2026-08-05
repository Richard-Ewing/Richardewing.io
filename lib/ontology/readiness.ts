export interface ExecutiveReadinessScore {
    engagementType: 'BoardMeeting' | 'VendorNegotiation' | 'QBR' | 'BudgetDefense' | 'SOXAudit';
    readinessPct: number;
    openQuestionsCount: number;
    requiredEvidenceCount: number;
    missingApprovalsCount: number;
    overallStatus: 'Ready' | 'NeedsPreparation' | 'CriticalGaps';
}

export interface PortfolioContentionResult {
    proposedInitiativeId: string;
    contendedResourceRole: string;
    displacedInitiativeId: string;
    displacedInitiativeTitle: string;
    estimatedDelayDays: number;
    financialRiskDisplacementUSD: number;
}

export interface DecisionStressTestResult {
    decisionId: string;
    weakestAssumption: string;
    financePrimaryObjection: string;
    securityPrimaryObjection: string;
    invalidationCondition: string;
    evidenceToChangeRecommendation: string;
    stressTestResultStatus: 'Robust' | 'Vulnerable' | 'Invalidated';
}
