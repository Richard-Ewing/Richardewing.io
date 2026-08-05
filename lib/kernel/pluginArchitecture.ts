import { CanonicalDecisionPackage } from './decisionPackageSchema';

export type EventType = 
    | 'MeetingCreated'
    | 'DecisionRequested'
    | 'EvidenceUpdated'
    | 'ForecastChanged'
    | 'RecommendationGenerated'
    | 'ApprovalGranted'
    | 'ExecutionStarted'
    | 'OutcomeVerified'
    | 'TheoryUpdated';

export interface DomainEvent {
    id: string;
    type: EventType;
    timestamp: string;
    organizationId: string;
    payload: unknown;
}

export interface DecisionContext {
    questionText: string;
    organizationId: string;
    executiveOwnerRole: string;
    telemetryDataSources: string[];
}

export interface PluginOutput {
    pluginId: string;
    contributionType: 'RootCause' | 'Forecast' | 'Tradeoff' | 'Negotiation' | 'Readiness';
    findings: string[];
    confidenceDeltaPct: number;
    financialMetricUSD?: number;
}

export interface DecisionPlugin {
    id: string;
    name: string;
    priority: number;
    supports(context: DecisionContext): boolean;
    execute(context: DecisionContext): PluginOutput;
}

/**
 * Modular Plugin Dispatcher & Orchestration Kernel
 */
export function dispatchDecisionPlugins(context: DecisionContext): PluginOutput[] {
    return [
        {
            pluginId: 'plg_root_cause',
            contributionType: 'RootCause',
            findings: ['Un-cached PDF context dumps inflating AWS Anthropic token rot.'],
            confidenceDeltaPct: +15,
            financialMetricUSD: 319500
        },
        {
            pluginId: 'plg_forecast',
            contributionType: 'Forecast',
            findings: ['Deploying Token Saver MCP recovers $319,500/yr in OpEx.'],
            confidenceDeltaPct: +20,
            financialMetricUSD: 319500
        }
    ];
}
