export type EnterpriseObjectiveCategory = 
    | 'ReduceOperatingCost' 
    | 'IncreaseEBITDAMargin' 
    | 'ImproveReleaseVelocity' 
    | 'S1AuditReadiness' 
    | 'MitigateRegulatoryRisk' 
    | 'MAndAIntegration';

export interface EnterpriseObjective {
    id: string;
    category: EnterpriseObjectiveCategory;
    title: string;
    targetMetric: string;
    targetValueUSD: number;
    targetDeadline: string;
    connectedInvestmentIds: string[];
    isAchieved: boolean;
}

export interface OperationalHypothesis {
    id: string;
    evidenceId: string;
    hypothesisStatement: string;
    proposedMechanism: string;
    predictedImpactUSD: number;
    confidencePct: number;
    primaryAssumption: string;
    primaryUncertainty: string;
    status: 'Proposed' | 'Simulated' | 'Validated' | 'Rejected';
}
