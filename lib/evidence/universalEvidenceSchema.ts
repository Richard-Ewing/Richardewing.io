export type TelemetryProvider = 
    | 'AWS' 
    | 'Azure' 
    | 'GCP' 
    | 'GitHub' 
    | 'Anthropic' 
    | 'OpenAI' 
    | 'Datadog' 
    | 'ServiceNow' 
    | 'Jira' 
    | 'TokenSaverMCP';

export type SensitivityLevel = 'Public' | 'Internal' | 'Confidential' | 'Restricted';

export interface UniversalEvidenceRecord {
    evidenceId: string;
    provider: TelemetryProvider;
    timestamp: string;
    confidenceScorePct: number;
    freshnessAgeHours: number;
    sensitivity: SensitivityLevel;
    businessUnit: string;
    metricName: string;
    metricValue: number | string;
    rawPayload: Record<string, unknown>;
}

export function normalizeEvidencePayload(
    provider: TelemetryProvider,
    metricName: string,
    value: number | string,
    businessUnit: string = 'Engineering'
): UniversalEvidenceRecord {
    return {
        evidenceId: `ev_norm_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        provider,
        timestamp: new Date().toISOString(),
        confidenceScorePct: 98.5,
        freshnessAgeHours: 0.5,
        sensitivity: 'Internal',
        businessUnit,
        metricName,
        metricValue: value,
        rawPayload: { provider, metricName, value, normalizedAt: new Date().toISOString() }
    };
}
