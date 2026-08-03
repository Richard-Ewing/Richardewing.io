export type DecisionAuthorityLevel = 
    | 'NoActionRequired' 
    | 'VPEngineeringApproval' 
    | 'CFOApproval' 
    | 'BoardReportingThreshold';

export interface DecisionIntelligenceItem {
    id: string;
    headline: string;
    authorityLevel: DecisionAuthorityLevel;
    authorityBadgeText: string;
    financialImpactUSD: number;
    explanation: string;
    recommendedAction: string;
    preventativeFlag: boolean;
}

/**
 * Decision Intelligence Engine
 * Categorizes operational insights into explicit executive decision authority tiers.
 */
export function evaluateDecisionIntelligence(financialImpactUSD: number, isPreventative: boolean): DecisionIntelligenceItem {
    let authorityLevel: DecisionAuthorityLevel = 'NoActionRequired';
    let authorityBadgeText = 'Auto-Monitored';

    if (financialImpactUSD > 250000) {
        authorityLevel = 'BoardReportingThreshold';
        authorityBadgeText = 'Board Reporting Threshold';
    } else if (financialImpactUSD > 75000) {
        authorityLevel = 'CFOApproval';
        authorityBadgeText = 'Requires CFO Approval';
    } else if (financialImpactUSD > 15000) {
        authorityLevel = 'VPEngineeringApproval';
        authorityBadgeText = 'Requires VP Eng Approval';
    }

    return {
        id: `decision_${Date.now()}`,
        headline: isPreventative 
            ? `Proactive Prevention: Pre-Launch Agent Deployment Audit ($${financialImpactUSD.toLocaleString()}/yr impact)`
            : `Operational Drift Remediation ($${financialImpactUSD.toLocaleString()}/yr impact)`,
        authorityLevel,
        authorityBadgeText,
        financialImpactUSD,
        explanation: isPreventative
            ? `Engineering plans to deploy Autonomous Agent X next sprint. Predicted verification tax will increase 42%. Deploying Token Saver prior to launch avoids $${financialImpactUSD.toLocaleString()}/yr in context rot.`
            : `Un-cached PDF context dumps in engineering increased monthly spend by 18%. Implementing Token Saver sidecars recovers $${financialImpactUSD.toLocaleString()}/yr.`,
        recommendedAction: isPreventative ? 'Deploy Token Saver MCP prior to sprint launch' : 'Enforce semantic caching & Token Saver sidecar',
        preventativeFlag: isPreventative
    };
}
