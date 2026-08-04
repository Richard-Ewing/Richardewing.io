export type CorporatePersonalityProfile = 
    | 'RiskAverseFinancial'
    | 'SpeedOptimizedTech'
    | 'MarginFocusedEnterprise'
    | 'ComplianceStrictGov';

export interface DecisionIdentity {
    organizationId: string;
    personality: CorporatePersonalityProfile;
    riskToleranceLevel: 'Low' | 'Moderate' | 'High';
    primaryPriority: 'Margin' | 'Speed' | 'Security' | 'Compliance';
}

export interface ExecutivePromise {
    id: string;
    promiseTitle: string;
    executiveOwnerRole: string;
    targetDeadline: string;
    status: 'OnTrack' | 'RequiresAttention' | 'Fulfillable';
    expectedFinancialImpactUSD: number;
}
