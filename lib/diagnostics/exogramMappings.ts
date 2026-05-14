export const EXOGRAM_MAPPINGS = [
    { risk: 'Governance Drift', capability: 'Execution Gating' },
    { risk: 'Hallucination Burden', capability: 'Deterministic Validation' },
    { risk: 'Audit Gaps', capability: 'Traceability Layer' },
    { risk: 'Runtime Instability', capability: 'Admissibility Controls' },
    { risk: 'Verification Overhead', capability: 'Runtime Enforcement' },
    { risk: 'Agentic Drift', capability: 'Admissibility Controls' },
    { risk: 'Policy Inconsistency', capability: 'Governance Enforcement Layer' },
    { risk: 'Operational Entropy', capability: 'Deterministic Workflow Controls' }
];

export function getRelevantExogramCapabilities(score: number, maintenance: number) {
    if (score < 50) {
        return EXOGRAM_MAPPINGS.filter(m => ['Runtime Instability', 'Operational Entropy', 'Audit Gaps'].includes(m.risk));
    }
    if (maintenance > 30) {
        return EXOGRAM_MAPPINGS.filter(m => ['Verification Overhead', 'Governance Drift'].includes(m.risk));
    }
    return EXOGRAM_MAPPINGS.filter(m => ['Agentic Drift', 'Policy Inconsistency'].includes(m.risk));
}
