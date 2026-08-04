import { DecisionIdentity, ExecutivePromise } from '../ontology/identity';

/**
 * Decision Identity Engine
 * Filters recommendations through corporate personality (Risk-Averse Financial Institution vs Speed-Optimized Tech Company).
 */
export function getDecisionIdentity(orgId: string = 'org_enterprise_01'): DecisionIdentity {
    return {
        organizationId: orgId,
        personality: 'MarginFocusedEnterprise',
        riskToleranceLevel: 'Low',
        primaryPriority: 'Margin'
    };
}

export function getExecutivePromises(): ExecutivePromise[] {
    return [
        {
            id: 'prm_01',
            promiseTitle: 'Deliver +0.42% EBITDA Margin Expansion',
            executiveOwnerRole: 'CFO',
            targetDeadline: '2026-09-30',
            status: 'OnTrack',
            expectedFinancialImpactUSD: 319500
        },
        {
            id: 'prm_02',
            promiseTitle: 'Reduce AI Volatility Tax & Context Rot Waste by 70%',
            executiveOwnerRole: 'VP Engineering',
            targetDeadline: '2026-08-31',
            status: 'Fulfillable',
            expectedFinancialImpactUSD: 482000
        }
    ];
}
