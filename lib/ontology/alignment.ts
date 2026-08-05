export interface DepartmentalBelief {
    departmentRole: 'CEO' | 'CFO' | 'CTO' | 'CPO' | 'CISO';
    primaryBelief: string;
    beliefConfidencePct: number;
    underlyingAssumption: string;
}

export interface OrganizationalMisalignmentReport {
    organizationId: string;
    detectedConflictSummary: string;
    conflictingDepartmentRoles: string[];
    compoundingRiskFactor: string;
    estimatedFinancialExposureUSD: number;
    recommendedAlignmentAction: string;
    departmentalBeliefs: DepartmentalBelief[];
}
