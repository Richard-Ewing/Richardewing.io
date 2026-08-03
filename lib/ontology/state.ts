export interface EnterpriseState {
    organizationId: string;
    domain: 'Engineering' | 'AIEconomics' | 'Security' | 'Margin' | 'Overall';
    currentStateScore: number;
    desiredStateScore: number;
    stateGap: number;
    primaryGapDriver: string;
    gapClosingRecommendation: string;
    confidencePct: number;
}

export interface CorporateAssumption {
    id: string;
    assumptionStatement: string;
    departmentOwner: 'Finance' | 'Engineering' | 'Legal' | 'Product' | 'Procurement';
    confidencePct: number;
    evidenceStrength: 'Weak' | 'Moderate' | 'Strong';
    status: 'Active' | 'Validated' | 'Failed' | 'RequiresAlignment';
    inconsistentWithDepartment?: string;
    financialExposureUSD: number;
}
