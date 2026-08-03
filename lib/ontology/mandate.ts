export interface EnterpriseMandate {
    id: string;
    mandateTitle: string;
    targetOutcome: 'ExpandEBITDA' | 'PrepareIPO' | 'ReduceOpEx' | 'PassSOXAudit' | 'DeployEnterpriseAI';
    executiveSponsorRole: 'CEO' | 'Board' | 'CFO';
    associatedResponsibilitiesCount: number;
    status: 'Active' | 'OnTrack' | 'RequiresIntervention';
    targetFinancialImpactUSD: number;
}

export interface DecisionPackage {
    id: string;
    decisionTitle: string;
    mandateId: string;
    executiveOwner: string;
    summary: string;
    supportingEvidence: string[];
    tradeoffAlternatives: string[];
    predictedEBITDAImpactUSD: number;
    actual30DayVerifiedImpactUSD: number;
    confidencePct: number;
    approvalSignoffs: string[];
    lessonsLearned: string;
    exogramHash: string;
    createdAt: string;
}
