// Centralized Orchestration Engine
// Determines the next logical step in the enterprise diagnostic journey.

export type DiagnosticTool = 'pdi' | 'aper' | 'aueb';

export interface NextStepRecommendation {
    toolId: DiagnosticTool | 'exogram' | 'governance';
    title: string;
    description: string;
    href: string;
    urgency: 'high' | 'medium' | 'low';
}

export function getDiagnosticProgression(currentTool: DiagnosticTool, score: number): NextStepRecommendation[] {
    const recommendations: NextStepRecommendation[] = [];

    if (currentTool === 'aueb') {
        // AUEB insolvency usually points to architectural bloat (PDI) or Exogram readiness.
        if (score < 50) {
            recommendations.push({
                toolId: 'pdi',
                title: 'Audit Architectural Debt (PDI)',
                description: 'Your margin collapse is likely driven by architectural complexity. Calculate your Product Debt Index to find the root cause.',
                href: '/tools/pdi',
                urgency: 'high'
            });
        }
        recommendations.push({
            toolId: 'exogram',
            title: 'Exogram Readiness Check',
            description: 'Enforce deterministic margins at runtime. Evaluate if your system is ready for the Exogram control plane.',
            href: '/tools/due-diligence',
            urgency: score < 50 ? 'medium' : 'high'
        });
    }

    if (currentTool === 'aper') {
        // APER measures headcount efficiency. High coordination tax -> PDI or Governance Audit.
        if (score < 400000) {
            recommendations.push({
                toolId: 'pdi',
                title: 'Measure Technical Debt (PDI)',
                description: 'Low revenue-per-engineer is often caused by engineers fighting legacy code. Run the PDI diagnostic.',
                href: '/tools/pdi',
                urgency: 'high'
            });
            recommendations.push({
                toolId: 'governance',
                title: 'Audit Shadow AI',
                description: 'Determine if rogue AI implementations are increasing your coordination tax.',
                href: '/tools/shadow-ai',
                urgency: 'medium'
            });
        } else {
            recommendations.push({
                toolId: 'aueb',
                title: 'Calculate AI Unit Economics (AUEB)',
                description: 'Your engineering efficiency is strong. Ensure your AI features are equally profitable.',
                href: '/tools/aueb',
                urgency: 'medium'
            });
        }
    }

    if (currentTool === 'pdi') {
        // High PDI means high waste. Look at APER (headcount impact) or Exogram (enforcement).
        if (score < 60) {
            recommendations.push({
                toolId: 'aper',
                title: 'Calculate Revenue per Engineer (APER)',
                description: 'See exactly how much your technical debt is costing you in lost revenue per headcount.',
                href: '/tools/aper',
                urgency: 'high'
            });
        }
        recommendations.push({
            toolId: 'exogram',
            title: 'Implement Deterministic Governance',
            description: 'Stop the bleeding. Enforce zero-trust execution with Exogram to prevent future product debt.',
            href: '/tools/due-diligence',
            urgency: 'high'
        });
    }

    return recommendations;
}
