export type IndustryProfileType = 
    | 'FinancialServices' 
    | 'Healthcare' 
    | 'DefenseAndGov' 
    | 'TechStartup' 
    | 'EnterpriseSaaS';

export interface EnterpriseDNA {
    profileType: IndustryProfileType;
    primaryPriority: 'ComplianceAndRisk' | 'VelocityAndGrowth' | 'SecurityAndDeterminism' | 'MarginAndCOGS';
    riskToleranceScore: number; // 1-100 (1 = zero risk, 100 = aggressive)
    minConfidenceThresholdPct: number;
    requiredApprovalRole: string;
}

export interface EnterpriseCapability {
    id: string;
    capabilityName: string;
    domain: string;
    connectedInvestmentIds: string[];
    supportedBusinessProcesses: string[];
    businessOutcome: string;
    economicValuePerYearUSD: number;
}

/**
 * Enterprise DNA helper: returns decision thresholds based on industry DNA profile.
 */
export function getEnterpriseDNAConfig(type: IndustryProfileType): EnterpriseDNA {
    switch (type) {
        case 'FinancialServices':
            return {
                profileType: 'FinancialServices',
                primaryPriority: 'ComplianceAndRisk',
                riskToleranceScore: 25,
                minConfidenceThresholdPct: 85,
                requiredApprovalRole: 'Chief Risk Officer & CFO'
            };
        case 'Healthcare':
            return {
                profileType: 'Healthcare',
                primaryPriority: 'SecurityAndDeterminism',
                riskToleranceScore: 20,
                minConfidenceThresholdPct: 90,
                requiredApprovalRole: 'CISO & General Counsel'
            };
        case 'DefenseAndGov':
            return {
                profileType: 'DefenseAndGov',
                primaryPriority: 'SecurityAndDeterminism',
                riskToleranceScore: 15,
                minConfidenceThresholdPct: 95,
                requiredApprovalRole: 'Chief Security Officer'
            };
        case 'TechStartup':
            return {
                profileType: 'TechStartup',
                primaryPriority: 'VelocityAndGrowth',
                riskToleranceScore: 75,
                minConfidenceThresholdPct: 65,
                requiredApprovalRole: 'VP of Engineering'
            };
        default:
            return {
                profileType: 'EnterpriseSaaS',
                primaryPriority: 'MarginAndCOGS',
                riskToleranceScore: 50,
                minConfidenceThresholdPct: 78,
                requiredApprovalRole: 'CFO & VP Engineering'
            };
    }
}
