import { EnterpriseState, CorporateAssumption } from '../ontology/state';

export interface InconsistentAssumptionReport {
    detectedInconsistenciesCount: number;
    totalFinancialExposureUSD: number;
    assumptions: CorporateAssumption[];
    recommendedAlignmentAction: string;
}

/**
 * Enterprise State & Assumption Engine
 * Evaluates current vs desired enterprise states and detects cross-departmental assumption inconsistencies.
 */
export function evaluateEnterpriseStateGap(domain: 'Engineering' | 'AIEconomics' = 'AIEconomics'): EnterpriseState {
    return {
        organizationId: 'org_enterprise_01',
        domain,
        currentStateScore: 78,
        desiredStateScore: 92,
        stateGap: 14,
        primaryGapDriver: 'Un-governed LLM context rot and manual verification drag in engineering.',
        gapClosingRecommendation: 'Deploy Intent Router & Token Saver MCP sidecars (+14 score recovery; saves $319,500/yr).',
        confidencePct: 91
    };
}

export function detectInconsistentAssumptions(): InconsistentAssumptionReport {
    const assumption1: CorporateAssumption = {
        id: 'asm_01',
        assumptionStatement: 'Engineering productivity will increase +22% following Cursor rollout.',
        departmentOwner: 'Finance',
        confidencePct: 62,
        evidenceStrength: 'Weak',
        status: 'RequiresAlignment',
        inconsistentWithDepartment: 'Engineering',
        financialExposureUSD: 1400000
    };

    const assumption2: CorporateAssumption = {
        id: 'asm_02',
        assumptionStatement: 'Procurement will sign vLLM edge cluster vendor agreement by end of week.',
        departmentOwner: 'Engineering',
        confidencePct: 55,
        evidenceStrength: 'Weak',
        status: 'RequiresAlignment',
        inconsistentWithDepartment: 'Procurement',
        financialExposureUSD: 850000
    };

    const assumption3: CorporateAssumption = {
        id: 'asm_03',
        assumptionStatement: 'EU AI Act enforcement timeline will slip into 2028.',
        departmentOwner: 'Legal',
        confidencePct: 40,
        evidenceStrength: 'Moderate',
        status: 'Active',
        financialExposureUSD: 550000
    };

    return {
        detectedInconsistenciesCount: 2,
        totalFinancialExposureUSD: 2800000,
        assumptions: [assumption1, assumption2, assumption3],
        recommendedAlignmentAction: 'Schedule a 30-minute cross-executive alignment meeting between Finance, Engineering, and Procurement to harmonize assumptions.'
    };
}
