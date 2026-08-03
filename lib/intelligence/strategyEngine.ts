export type CorporateStrategyGoal = 
    | 'MaximizeEBITDA' 
    | 'MaximizeMarketShare' 
    | 'PrepareForIPO' 
    | 'MinimizeCapitalRisk';

export interface StrategicDirective {
    goal: CorporateStrategyGoal;
    strategyTitle: string;
    alignmentExplanation: string;
    topPrioritizedAction: string;
    targetFinancialImpactUSD: number;
}

/**
 * Strategy Engine
 * Aligns operational technology choices with high-level enterprise business strategy (EBITDA, Growth, IPO, Risk).
 */
export function evaluateStrategicAlignment(goal: CorporateStrategyGoal, currentAnnualSpendUSD: number): StrategicDirective {
    switch (goal) {
        case 'MaximizeEBITDA':
            return {
                goal: 'MaximizeEBITDA',
                strategyTitle: 'EBITDA Margin Expansion Strategy',
                alignmentExplanation: 'Prioritizes maximum immediate OpEx reduction and COGS optimization to boost net operating margin.',
                topPrioritizedAction: 'Execute Option C: Deploy Intent Router + Token Saver MCP to slash inference OpEx by 71%.',
                targetFinancialImpactUSD: Math.round(currentAnnualSpendUSD * 0.71)
            };
        case 'MaximizeMarketShare':
            return {
                goal: 'MaximizeMarketShare',
                strategyTitle: 'Market Share Velocity Strategy',
                alignmentExplanation: 'Prioritizes release velocity and model accuracy over cost containment to capture market share.',
                topPrioritizedAction: 'Deploy Sonnet tier + static analysis firewalls to maximize engineering throughput without code review bottlenecks.',
                targetFinancialImpactUSD: Math.round(currentAnnualSpendUSD * 0.35)
            };
        case 'PrepareForIPO':
            return {
                goal: 'PrepareForIPO',
                strategyTitle: 'S-1 Audit & Governance Readiness Strategy',
                alignmentExplanation: 'Prioritizes SOX compliance, deterministic boundary governance, and audit-proof decision ledgers for SEC scrutiny.',
                topPrioritizedAction: 'Enforce Exogram.ai cryptographic ledger logging on all autonomous agent deployments and rot-mitigation sidecars.',
                targetFinancialImpactUSD: Math.round(currentAnnualSpendUSD * 0.50)
            };
        default:
            return {
                goal: 'MinimizeCapitalRisk',
                strategyTitle: 'Capital Preservation Strategy',
                alignmentExplanation: 'Prioritizes risk mitigation, eliminating shadow AI endpoints, and capping unexpected budget overruns.',
                topPrioritizedAction: 'Deploy pre-commit boundary checks and rotate personal developer API keys to enterprise secret proxies.',
                targetFinancialImpactUSD: Math.round(currentAnnualSpendUSD * 0.40)
            };
    }
}
