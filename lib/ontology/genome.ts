export interface OrganizationalGenome {
    organizationId: string;
    organizationName: string;
    primaryOptimizationGoal: 'Growth' | 'Profit' | 'Safety' | 'Innovation' | 'Compliance' | 'Reliability';
    decisionStyle: 'Consensus' | 'Centralized' | 'EvidenceFirst' | 'FounderLed' | 'FinancialFirst' | 'EngineeringFirst';
    purposeStatement: string;
    trustCalibrationScorePct: number;
}

export interface InevitabilityForecast {
    forecastId: string;
    horizonMonths: number;
    forecastStatement: string;
    probabilityPct: number;
    contributingTelemetryFactors: string[];
    inevitableFinancialImpactUSD: number;
    recommendedPreemptiveAction: string;
}
