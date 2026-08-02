import { IntelligenceAsset, IntelligenceAssetGraph } from '../ontology/asset';

export interface InsolvencyPrediction {
    monthsToDefault: number;
    projectedMaintenanceCost12Mo: number;
    primaryRiskFactors: string[];
    confidenceLevel: 'High' | 'Medium' | 'Low';
    recommendedActions: string[];
}

export interface BudgetOverrunPrediction {
    predicted30DaySpend: number;
    predicted90DaySpend: number;
    overrunProbabilityPct: number;
    topWasteDrivers: string[];
}

/**
 * Predicts the exact timeframe and cost trajectory for Technical Insolvency across an asset graph.
 */
export function predictTechnicalInsolvency(graph: IntelligenceAssetGraph): InsolvencyPrediction {
    const assetsWithDebt = graph.assets.filter(a => a.productDebtScore < 70);
    const avgDebtScore = graph.avgProductDebtScore;
    
    // Calculate velocity of decay
    let monthsToDefault = 36;
    if (avgDebtScore < 40) {
        monthsToDefault = 6;
    } else if (avgDebtScore < 60) {
        monthsToDefault = 14;
    } else if (avgDebtScore < 80) {
        monthsToDefault = 24;
    }

    const currentMonthlyMaintenance = graph.assets.reduce((acc, a) => acc + (a.monthlyCost * (1 - a.productDebtScore / 100)), 0);
    const projectedMaintenanceCost12Mo = Math.round(currentMonthlyMaintenance * 12 * 1.45);

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
        monthsToDefault,
        projectedMaintenanceCost12Mo,
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
export function predictBudgetOverrun(graph: IntelligenceAssetGraph): BudgetOverrunPrediction {
    const currentMonthlySpend = graph.totalMonthlyCost;
    const volatilityTax = graph.totalAnnualVolatilityTax / 12;
    
    const predicted30DaySpend = Math.round(currentMonthlySpend + (volatilityTax * 0.4));
    const predicted90DaySpend = Math.round((currentMonthlySpend * 3) + (volatilityTax * 1.5));
    
    const overrunProbabilityPct = Math.min(95, Math.max(10, Math.round((volatilityTax / Math.max(1, currentMonthlySpend)) * 100)));

    return {
        predicted30DaySpend,
        predicted90DaySpend,
        overrunProbabilityPct,
        topWasteDrivers: [
            'Unarbitrated 80B/Frontier LLM calls for deterministic formatting tasks',
            'Un-cached PDF context dumps exceeding 50K tokens per request',
            'Prompt retry loops caused by un-sanitized context rot'
        ]
    };
}
