export interface DecisionConfidenceBreakdown {
    decisionId: string;
    overallConfidencePct: number;
    evidenceFreshnessHours: number;
    peerCohortObservationsCount: number;
    verifiedInterventionsCount: number;
    forecastMarginOfErrorPct: number;
    predictionAccuracyHistoricalPct: number;
    contradictoryEvidenceDetected: boolean;
    primaryUncertaintyFactor: string;
}
