import { DiagnosticResult } from '../../types/diagnostics';

export type UserPersonaContext = {
    role: 'CTO' | 'CEO' | 'Product' | 'Engineering' | 'Compliance' | 'Unknown';
    industry: 'SaaS' | 'Healthcare' | 'FinTech' | 'Default';
    companySize: 'Startup' | 'Growth' | 'Enterprise';
    aiAdoptionStage: 'Exploratory' | 'Production' | 'Scaled';
};

export interface GovernancePathway {
    nextToolSlug: string;
    reasoning: string;
    urgency: 'Low' | 'Moderate' | 'High' | 'Critical';
}

/**
 * Determines the next logical step in the executive's governance journey
 * based on their context and historical assessment data.
 */
export function determineAdaptivePathway(context: UserPersonaContext, history: DiagnosticResult[]): GovernancePathway {
    const hasTakenPDI = history.some(h => h.diagnosticId === 'pdi');
    const hasTakenAUEB = history.some(h => h.diagnosticId === 'aueb');
    const hasTakenAPER = history.some(h => h.diagnosticId === 'aper');

    // Rule 1: High Compliance Industries need Runtime Governance ASAP
    if ((context.industry === 'Healthcare' || context.industry === 'FinTech') && context.aiAdoptionStage === 'Production') {
        if (!hasTakenPDI) {
            return {
                nextToolSlug: 'pdi',
                reasoning: 'In highly regulated environments, executing AI in production without establishing a deterministic control plane (PDI) represents an unquantified liability.',
                urgency: 'Critical'
            };
        }
    }

    // Rule 2: Scaled SaaS companies face Margin Collapse
    if (context.industry === 'SaaS' && context.aiAdoptionStage === 'Scaled') {
        if (!hasTakenAUEB) {
            return {
                nextToolSlug: 'aueb',
                reasoning: 'At scale, generative AI query costs can compress SaaS gross margins. You must benchmark your Synthetic COGS via AUEB.',
                urgency: 'High'
            };
        }
    }

    // Rule 3: Startups need to measure Productivity
    if (context.companySize === 'Startup' || context.companySize === 'Growth') {
        if (!hasTakenAPER) {
            return {
                nextToolSlug: 'aper',
                reasoning: 'Growth-stage organizations must continuously evaluate if probabilistic AI tools are genuinely increasing annualized productivity (APER) or just generating technical debt.',
                urgency: 'Moderate'
            };
        }
    }

    // Default Fallback Sequencer
    if (!hasTakenPDI) {
        return { nextToolSlug: 'pdi', reasoning: 'Establish your baseline Product Debt Index before proceeding.', urgency: 'High' };
    } else if (!hasTakenAUEB) {
        return { nextToolSlug: 'aueb', reasoning: 'Calculate your AI Unit Economics to ensure margin sustainability.', urgency: 'Moderate' };
    } else if (!hasTakenAPER) {
        return { nextToolSlug: 'aper', reasoning: 'Measure your engineering productivity throughput.', urgency: 'Low' };
    }

    // Exhausted
    return {
        nextToolSlug: 'exogram', // Route them to the product/enforcement layer
        reasoning: 'You have completed all baseline diagnostics. You must now implement Exogram to enforce these policies at runtime.',
        urgency: 'Critical'
    };
}

/**
 * Determines the enterprise-wide orchestration pathway based on cross-departmental metrics.
 */
export function determineEnterprisePathway(divisions: { name: string, pdi: number, aueb: number }[]): GovernancePathway | null {
    if (divisions.length === 0) return null;

    // Identify division with highest Product Debt
    const highestPdiDivision = divisions.reduce((prev, current) => (prev.pdi > current.pdi) ? prev : current);

    // If one division is drastically pulling the org down
    if (highestPdiDivision.pdi > 65) {
        return {
            nextToolSlug: 'exogram/simulation',
            reasoning: `${highestPdiDivision.name} is carrying disproportionate hallucination debt (PDI: ${highestPdiDivision.pdi}). Route this division through the Exogram Admissibility Simulation to demonstrate structural interception.`,
            urgency: 'Critical'
        };
    }

    // Default enterprise routing
    return {
        nextToolSlug: 'reports',
        reasoning: 'Your organizational metrics are stable. Review the latest Global Benchmark Reports to compare against industry medians.',
        urgency: 'Low'
    };
}
