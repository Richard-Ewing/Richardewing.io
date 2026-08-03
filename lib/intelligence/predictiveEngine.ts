import { Asset, AssetGraph } from '../ontology/asset';

export interface InsolvencyPrediction {
    estimatedMonthsToInsolvencyHorizon: number;
    projectedMaintenanceCost12MoUSD: number;
    primaryRiskFactors: string[];
    confidenceLevel: 'High' | 'Medium' | 'Low';
    recommendedActions: string[];
}

export interface BudgetOverrunPrediction {
    predicted30DaySpendUSD: number;
    predicted90DaySpendUSD: number;
    overrunProbabilityPct: number;
    topWasteDrivers: string[];
}

/**
 * Estimates the Technical Insolvency Horizon trajectory across an asset graph.
 */
export function estimateTechnicalInsolvencyHorizon(graph: AssetGraph): InsolvencyPrediction {
    const assetsWithDebt = graph.assets.filter(a => a.productDebtIndexScore < 70);
    const avgDebtScore = graph.assets.length > 0
        ? graph.assets.reduce((acc, a) => acc + a.productDebtIndexScore, 0) / graph.assets.length
        : 100;
    
    let estimatedMonthsToInsolvencyHorizon = 36;
    if (avgDebtScore < 40) {
        estimatedMonthsToInsolvencyHorizon = 6;
    } else if (avgDebtScore < 60) {
        estimatedMonthsToInsolvencyHorizon = 14;
    } else if (avgDebtScore < 80) {
        estimatedMonthsToInsolvencyHorizon = 24;
    }

    const currentMonthlyMaintenance = graph.assets.reduce((acc, a) => acc + (a.monthlyCostUSD * (1 - a.productDebtIndexScore / 100)), 0);
    const projectedMaintenanceCost12MoUSD = Math.round(currentMonthlyMaintenance * 12 * 1.45);

    const primaryRiskFactors: string[] = [];
    if (assetsWithDebt.some(a => a.verificationTaxHoursPerWeek > 5)) {
        primaryRiskFactors.push('High developer manual verification tax (>5 hrs/eng/week)');
    }
    if (graph.assets.some(a => a.permissionLevel === 'Unrestricted')) {
        primaryRiskFactors.push('Unrestricted autonomous agent permissions creating architectural variance');
    }
    if (graph.assets.some(a => a.cacheHitRatePct < 20)) {
        primaryRiskFactors.push('Low semantic caching hit rate (<20%) increasing token retry loops');
    }

    return {
        estimatedMonthsToInsolvencyHorizon,
        projectedMaintenanceCost12MoUSD,
        primaryRiskFactors,
        confidenceLevel: graph.assets.length > 5 ? 'High' : 'Medium',
        recommendedActions: [
            'Dedicating 20% of sprint capacity strictly to structural debt refactoring',
            'Enforcing deterministic boundary controls on AI code generation agents',
            'Deploying localized Token Saver MCP sidecars to reduce context rot'
        ]
    };
}

/**
 * Predicts 30-day and 90-day AI infrastructure spend overruns based on token telemetry.
 */
export function predictBudgetOverrun(graph: AssetGraph): BudgetOverrunPrediction {
    const currentMonthlySpend = graph.totalMonthlyCostUSD;
    const volatilityTax = graph.totalAnnualVolatilityTaxUSD / 12;
    
    const predicted30DaySpendUSD = Math.round(currentMonthlySpend + (volatilityTax * 0.4));
    const predicted90DaySpendUSD = Math.round((currentMonthlySpend * 3) + (volatilityTax * 1.5));
    
    const overrunProbabilityPct = Math.min(95, Math.max(10, Math.round((volatilityTax / Math.max(1, currentMonthlySpend)) * 100)));

    return {
        predicted30DaySpendUSD,
        predicted90DaySpendUSD,
        overrunProbabilityPct,
        topWasteDrivers: [
            'Unarbitrated 80B/Frontier LLM calls for deterministic formatting tasks',
            'Un-cached PDF context dumps exceeding 50K tokens per request',
            'Prompt retry loops caused by un-sanitized context rot'
        ]
    };
}
