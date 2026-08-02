export type AssetType = 
    | 'Workflow' 
    | 'Prompt' 
    | 'ModelAPI' 
    | 'Repository' 
    | 'Feature' 
    | 'Team' 
    | 'Decision' 
    | 'Policy' 
    | 'Vendor';

export type ComplianceStatus = 'Compliant' | 'At Risk' | 'Non-Compliant' | 'Unaudited';
export type HealthStatus = 'Optimal' | 'Degraded' | 'Critical' | 'Insolvent';

export interface IntelligenceAsset {
    id: string;
    name: string;
    type: AssetType;
    owner: string;
    department: 'Finance' | 'Engineering' | 'Product' | 'Security' | 'Executive';
    
    // Financial Capital Metrics
    monthlyCost: number;
    capitalAllocated: number;
    grossMarginContributionPct: number;
    aiVolatilityTaxAnnual: number;
    
    // Engineering Capital Metrics
    verificationTaxHoursPerWeek: number;
    productDebtScore: number; // 0-100 (100 = debt-free)
    monthsToTechnicalInsolvency: number;
    
    // Governance & Security
    permissionLevel: 'Restricted' | 'Standard' | 'Elevated' | 'Unrestricted';
    hasKillSwitch: boolean;
    shadowExposureRisk: 'Low' | 'Moderate' | 'High' | 'Critical';
    complianceStatus: ComplianceStatus;
    
    // Telemetry & Runtime State
    tokenVolumeMonthly: number;
    cacheHitRatePct: number;
    healthStatus: HealthStatus;
    lastObservedAt: string;
    
    // Graph Relationships
    dependsOnAssetIds: string[];
    consumedByAssetIds: string[];
}

export interface IntelligenceAssetGraph {
    assets: IntelligenceAsset[];
    totalMonthlyCost: number;
    totalAnnualVolatilityTax: number;
    avgProductDebtScore: number;
    overallGovernanceStatus: ComplianceStatus;
    lastRecalculatedAt: string;
}

/**
 * Normalizes an raw asset payload into a strongly typed IntelligenceAsset node.
 */
export function createIntelligenceAsset(data: Partial<IntelligenceAsset> & { id: string; name: string; type: AssetType }): IntelligenceAsset {
    return {
        id: data.id,
        name: data.name,
        type: data.type,
        owner: data.owner || 'Unassigned',
        department: data.department || 'Engineering',
        
        monthlyCost: data.monthlyCost || 0,
        capitalAllocated: data.capitalAllocated || 0,
        grossMarginContributionPct: data.grossMarginContributionPct || 0,
        aiVolatilityTaxAnnual: data.aiVolatilityTaxAnnual || 0,
        
        verificationTaxHoursPerWeek: data.verificationTaxHoursPerWeek || 0,
        productDebtScore: data.productDebtScore || 100,
        monthsToTechnicalInsolvency: data.monthsToTechnicalInsolvency || 36,
        
        permissionLevel: data.permissionLevel || 'Standard',
        hasKillSwitch: data.hasKillSwitch ?? true,
        shadowExposureRisk: data.shadowExposureRisk || 'Low',
        complianceStatus: data.complianceStatus || 'Compliant',
        
        tokenVolumeMonthly: data.tokenVolumeMonthly || 0,
        cacheHitRatePct: data.cacheHitRatePct || 0,
        healthStatus: data.healthStatus || 'Optimal',
        lastObservedAt: data.lastObservedAt || new Date().toISOString(),
        
        dependsOnAssetIds: data.dependsOnAssetIds || [],
        consumedByAssetIds: data.consumedByAssetIds || []
    };
}
