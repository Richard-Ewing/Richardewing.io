export type ExecutiveEngagementType = 
    | 'BoardMeeting' 
    | 'VendorNegotiation' 
    | 'MAndADueDiligence' 
    | 'BudgetReforecast' 
    | 'ArchitectureReview' 
    | 'TechnologyDueDiligence';

export interface ExecutiveEngagement {
    id: string;
    type: ExecutiveEngagementType;
    title: string;
    executiveOwner: string;
    targetDate: string;
    status: 'Preparation' | 'ActiveInSession' | 'DecisionLogged' | 'OutcomeVerified';
    decisionPackageId?: string;
    financialImpactUSD: number;
    primaryUncertaintyUSD: number;
}

export interface EnterpriseMemoryQueryResult {
    queryTopic: string;
    historicalDecisionsCount: number;
    firstDecisionDate: string;
    latestDecisionDate: string;
    keyDecisionPackages: Array<{
        title: string;
        date: string;
        owner: string;
        verifiedSavingsUSD: number;
        confidencePct: number;
        lessonsLearned: string;
    }>;
    calibratedBeliefConfidencePct: number;
}
