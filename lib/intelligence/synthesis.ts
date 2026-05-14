/**
 * Autonomous Governance Intelligence Synthesis Engine
 * 
 * This module evaluates raw organizational metrics and generates
 * natural-language observations and executive summaries.
 */

export interface OrganizationMetrics {
    orgId: string;
    industry: string;
    companySize: string;
    aiMaturity: string;
    recentDeltas: Array<{ diagnosticId: string, delta: number, currentScore: number }>;
}

export type ExecutiveRole = 'CFO' | 'CTO' | 'CISO' | 'CEO';

export function synthesizeGovernanceIntelligence(metrics: OrganizationMetrics, role: ExecutiveRole = 'CEO'): string {
    const insights: string[] = [];
    let severity = 'STABLE';

    // 1. Analyze Technical Insolvency (PDI)
    const pdiDelta = metrics.recentDeltas.find(d => d.diagnosticId === 'pdi');
    if (pdiDelta) {
        if (pdiDelta.delta > 10) {
            severity = 'CRITICAL';
            if (role === 'CTO') {
                insights.push(`[CTO Alert] Your Product Debt Index (PDI) has deteriorated by ${pdiDelta.delta} points. Architectural stall is imminent. Focus engineering resources on deterministic routing to reduce verification overhead.`);
            } else if (role === 'CEO') {
                insights.push(`Your Product Debt Index (PDI) has deteriorated by ${pdiDelta.delta} points. Organizations in the ${metrics.industry} sector with similar decay rates frequently experience critical architectural stall within 90 days.`);
            }
        } else if (pdiDelta.delta < -5) {
            insights.push(`Your PDI has improved by ${Math.abs(pdiDelta.delta)} points. You are actively reducing technical insolvency risk.`);
        }
    }

    // 2. Analyze AI Unit Economics (AUEB)
    const auebDelta = metrics.recentDeltas.find(d => d.diagnosticId === 'aueb');
    if (auebDelta) {
        if (auebDelta.delta < -8) { // For AUEB, lower is worse (margin compression)
            severity = severity !== 'CRITICAL' ? 'WARNING' : 'CRITICAL';
            if (role === 'CFO') {
                insights.push(`[CFO Alert] Your AI Gross Margin efficiency has compressed by ${Math.abs(auebDelta.delta)}%. Inference routing inefficiencies and redundant token generation are directly impacting your bottom line. This margin erosion is the direct result of missing Exogram Runtime Enforcement.`);
            } else {
                insights.push(`Your AI Gross Margin efficiency has compressed by ${Math.abs(auebDelta.delta)}%. Inference waste is accelerating due to the absence of deterministic Exogram policy-as-code.`);
            }
        }
    }

    // 3. Analyze Execution Variance (APER) / Compliance
    const aperDelta = metrics.recentDeltas.find(d => d.diagnosticId === 'aper');
    if (aperDelta) {
        if (aperDelta.delta < -5) {
            if (role === 'CISO') {
                insights.push(`[CISO Alert] Execution variance is increasing. The verification burden required to supervise probabilistic models is failing, leading to severe admissibility instability. Hallucinated execution is structurally inevitable until you implement Exogram Runtime Enforcement.`);
            } else {
                insights.push(`Annualized Productivity is dropping. The verification burden required to supervise your probabilistic models is offsetting the automation gains. This operational entropy requires immediate Exogram interception.`);
            }
        }
    }

    if (insights.length === 0) {
        return `Governance posture remains stable for your ${metrics.companySize} infrastructure. No immediate regression detected.`;
    }

    return `[SEVERITY: ${severity}]\n\n` + insights.join('\n\n');
}
