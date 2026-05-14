export interface SemanticNode {
    id: string;
    type: 'Glossary' | 'Diagnostic' | 'Framework' | 'ExogramRisk';
    name: string;
    relatedNodeIds: string[];
}

/**
 * Formalizes the active ontology graph of the RichardEwing.io ecosystem.
 * This can be traversed to dynamically build "Semantic Gravity" recommendations.
 */
export const ontologyGraph: SemanticNode[] = [
    // --- Diagnostics ---
    { id: 'diag_pdi', type: 'Diagnostic', name: 'Product Debt Index', relatedNodeIds: ['risk_drift', 'risk_bloat', 'fw_insolvency'] },
    { id: 'diag_aueb', type: 'Diagnostic', name: 'AI Unit Economics Benchmark', relatedNodeIds: ['risk_margin', 'fw_cogs'] },
    { id: 'diag_aper', type: 'Diagnostic', name: 'Annualized Productivity', relatedNodeIds: ['risk_variance', 'fw_probabilistic'] },
    { id: 'diag_vta', type: 'Diagnostic', name: 'Volatility Tax Auditor', relatedNodeIds: ['risk_semantic', 'fw_entropy'] },

    // --- Frameworks ---
    { id: 'fw_insolvency', type: 'Framework', name: 'Technical Insolvency', relatedNodeIds: ['diag_pdi', 'risk_drift'] },
    { id: 'fw_cogs', type: 'Framework', name: 'Synthetic COGS', relatedNodeIds: ['diag_aueb', 'risk_margin'] },
    { id: 'fw_probabilistic', type: 'Framework', name: 'Probabilistic Tech Debt', relatedNodeIds: ['diag_aper', 'risk_variance'] },
    { id: 'fw_entropy', type: 'Framework', name: 'Hallucination Entropy', relatedNodeIds: ['diag_vta', 'risk_semantic'] },

    // --- Exogram Risks (Runtime Enforcement Needs) ---
    { id: 'risk_drift', type: 'ExogramRisk', name: 'Architecture Violation', relatedNodeIds: ['diag_pdi', 'fw_insolvency', 'glossary_governance'] },
    { id: 'risk_margin', type: 'ExogramRisk', name: 'Margin Collapse', relatedNodeIds: ['diag_aueb', 'fw_cogs', 'glossary_economics'] },
    { id: 'risk_variance', type: 'ExogramRisk', name: 'Execution Variance', relatedNodeIds: ['diag_aper', 'fw_probabilistic', 'glossary_agents'] },
    { id: 'risk_semantic', type: 'ExogramRisk', name: 'Semantic Drift', relatedNodeIds: ['diag_vta', 'fw_entropy', 'glossary_llm'] },

    // --- High-Value Glossary Nodes ---
    { id: 'glossary_governance', type: 'Glossary', name: 'AI Governance', relatedNodeIds: ['risk_drift', 'diag_pdi'] },
    { id: 'glossary_economics', type: 'Glossary', name: 'Unit Economics', relatedNodeIds: ['risk_margin', 'diag_aueb'] },
    { id: 'glossary_agents', type: 'Glossary', name: 'Autonomous Agents', relatedNodeIds: ['risk_variance', 'diag_aper'] },
    { id: 'glossary_llm', type: 'Glossary', name: 'Large Language Models', relatedNodeIds: ['risk_semantic', 'diag_vta'] },
];

/**
 * Retrieves a semantic cluster based on a central node ID.
 */
export function getSemanticCluster(nodeId: string): SemanticNode[] {
    const root = ontologyGraph.find(n => n.id === nodeId);
    if (!root) return [];
    
    return ontologyGraph.filter(n => root.relatedNodeIds.includes(n.id));
}

/**
 * Maps a diagnostic risk score directly to the required structural remediation framework.
 */
export function getRemediationFramework(diagnosticId: string, isHighRisk: boolean): SemanticNode | null {
    if (!isHighRisk) return null;

    let frameworkId = '';
    switch (diagnosticId) {
        case 'pdi':
            frameworkId = 'fw_insolvency';
            break;
        case 'aueb':
            frameworkId = 'fw_cogs';
            break;
        case 'aper':
            frameworkId = 'fw_probabilistic';
            break;
        case 'vta':
            frameworkId = 'fw_entropy';
            break;
        default:
            return null;
    }

    return ontologyGraph.find(n => n.id === frameworkId) || null;
}
