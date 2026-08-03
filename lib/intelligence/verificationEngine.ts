export interface RecommendedIntervention {
    id: string;
    assetId: string;
    title: string;
    actionType: 'SLMMigration' | 'TokenSaverDeployment' | 'SemanticCaching' | 'PermissionBoundary';
    predictedAnnualSavingsUSD: number;
    predictedLatencyChangePct: number;
    predictedQualityDeltaPct: number;
    recommendedAt: string;
}

export interface VerificationResult {
    interventionId: string;
    predictedSavingsUSD: number;
    actual30DaySavingsUSD: number;
    annualizedActualSavingsUSD: number;
    variancePct: number;
    isValidated: boolean;
    statusSummary: string;
    verifiedAt: string;
}

/**
 * Engine 9: Intervention Verification Engine
 * Closed-Loop Verification: Compares predicted intervention impact against actual 30-day telemetry outcomes.
 */
export function verifyInterventionOutcome(
    intervention: RecommendedIntervention,
    actual30DaySpendBeforeUSD: number,
    actual30DaySpendAfterUSD: number
): VerificationResult {
    const actual30DaySavingsUSD = Math.max(0, actual30DaySpendBeforeUSD - actual30DaySpendAfterUSD);
    const annualizedActualSavingsUSD = actual30DaySavingsUSD * 12;
    
    const variancePct = intervention.predictedAnnualSavingsUSD > 0
        ? parseFloat((((annualizedActualSavingsUSD - intervention.predictedAnnualSavingsUSD) / intervention.predictedAnnualSavingsUSD) * 100).toFixed(1))
        : 0;

    // Recommendation is validated if actual savings are within 80% of prediction
    const isValidated = annualizedActualSavingsUSD >= (intervention.predictedAnnualSavingsUSD * 0.80);

    const statusSummary = isValidated
        ? `Recommendation Validated: Predicted $${intervention.predictedAnnualSavingsUSD.toLocaleString()}/yr, actual observed annualized savings $${annualizedActualSavingsUSD.toLocaleString()}/yr (${variancePct >= 0 ? '+' : ''}${variancePct}% variance).`
        : `Underperforming: Predicted $${intervention.predictedAnnualSavingsUSD.toLocaleString()}/yr, actual observed annualized savings $${annualizedActualSavingsUSD.toLocaleString()}/yr. Adjusting recommendation weight model.`;

    return {
        interventionId: intervention.id,
        predictedSavingsUSD: intervention.predictedAnnualSavingsUSD,
        actual30DaySavingsUSD,
        annualizedActualSavingsUSD,
        variancePct,
        isValidated,
        statusSummary,
        verifiedAt: new Date().toISOString()
    };
}
