export type ExecutiveRole = 'CEO' | 'CFO' | 'CTO' | 'CIO' | 'CISO' | 'CPO' | 'VP Engineering';

export type CanonicalEvidenceSourceType = 
    | 'AWSBilling' 
    | 'GitHubTelemetry' 
    | 'TokenSaverMCP' 
    | 'ExogramLedger'
    | 'AnthropicTelemetry'
    | 'OpenAITelemetry'
    | 'JiraTelemetry'
    | 'DatadogTelemetry'
    | 'ServiceNowTelemetry';

export interface CanonicalEvidenceSource {
    sourceId: string;
    sourceType: CanonicalEvidenceSourceType;
    sampleSize: number;
    evidenceFreshnessTimestamp: string;
    trustScorePct: number;
}

export interface CanonicalScenarioSimulation {
    scenarioId: string;
    title: string;
    expectedROIUSD: number;
    latencyImpactMs: number;
    riskScorePct: number;
}

export interface CanonicalDecisionPackage {
    id: string;
    version: '1.0.0';
    questionText: string;
    organizationId: string;
    executiveOwnerRole: string;
    summary: string;
    evidenceSources: CanonicalEvidenceSource[];
    rootCauseChain: string[];
    keyAssumptions: string[];
    scenarios: CanonicalScenarioSimulation[];
    recommendedActions: string[];
    tradeoffsAcknowledged: string[];
    executionPlanDays: number;
    expectedOutcomeUSD: number;
    verificationScheduleDays: number;
    overallConfidencePct: number;
    createdAt: string;
}
