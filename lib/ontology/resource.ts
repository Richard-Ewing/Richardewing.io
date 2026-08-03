export type ResourceType = 
    | 'AIModel' 
    | 'SoftwareApplication' 
    | 'CloudInfrastructure' 
    | 'EngineeringTeam' 
    | 'VendorContract' 
    | 'DataPipeline' 
    | 'GovernancePolicy';

export interface EnterpriseConstraint {
    id: string;
    constraintName: string;
    category: 'HeadcountCap' | 'OpExCap' | 'ComplianceBoundary' | 'SecurityPolicy' | 'LatencySLA';
    boundaryCondition: string;
    maxLimitValueUSD?: number;
    isStrict: boolean;
}

export interface EnterpriseResource {
    id: string;
    resourceName: string;
    resourceType: ResourceType;
    owner: string;
    monthlyCostUSD: number;
    annualCapitalInvestedUSD: number;
    connectedCapabilityIds: string[];
    riskScore: number;
}

export interface CounterfactualReport {
    decisionId: string;
    interventionName: string;
    actualObservedSpendUSD: number;
    counterfactualProjectedSpendUSD: number;
    verifiedAvoidedCostUSD: number;
    counterfactualMethodology: string;
    calculatedAt: string;
}
