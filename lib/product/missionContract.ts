import { ExecutiveRole } from '../kernel/decisionPackageSchema';
import { DeliverableType } from '../compiler/artifactCompiler';
import { TelemetryProvider } from '../evidence/universalEvidenceSchema';
import { ExecutionTarget } from '../connectors/executionRegistry';

export interface MissionContract {
    id: string;
    title: string;
    executiveOwner: ExecutiveRole;
    primaryObjective: string;
    requiredConnectors: TelemetryProvider[];
    generatedArtifacts: DeliverableType[];
    executionAdapters: ExecutionTarget[];
    verificationWindowDays: number;
    subscriptionEnabled: boolean;
}

export const UNIFIED_MISSION_CONTRACTS: MissionContract[] = [
    {
        id: 'reduce-ai-spend',
        title: 'Reduce AI OpEx & Eliminate Context Rot',
        executiveOwner: 'CFO',
        primaryObjective: 'Recover $319,500/yr in un-cached document context rot and frontier API token waste.',
        requiredConnectors: ['AWS', 'Anthropic', 'OpenAI'],
        generatedArtifacts: ['BudgetProposal', 'ExecutiveMemo', 'ImplementationRoadmap'],
        executionAdapters: ['Jira', 'Slack'],
        verificationWindowDays: 30,
        subscriptionEnabled: true
    },
    {
        id: 'renew-cursor-enterprise',
        title: 'Renew Cursor Enterprise Licensing',
        executiveOwner: 'CIO',
        primaryObjective: 'Measure developer adoption vs PR verification drag hours to negotiate contract terms.',
        requiredConnectors: ['AWS', 'GitHub'],
        generatedArtifacts: ['BudgetProposal', 'ArchitectureReview'],
        executionAdapters: ['Jira', 'ServiceNow'],
        verificationWindowDays: 60,
        subscriptionEnabled: true
    },
    {
        id: 'prepare-board-meeting',
        title: 'Prepare Board Meeting Briefing & Deck',
        executiveOwner: 'CEO',
        primaryObjective: 'Compile 30-day verified savings, simulate board questions, and export 11-slide presentation deck.',
        requiredConnectors: ['AWS', 'GitHub', 'ServiceNow'],
        generatedArtifacts: ['BoardDeck', 'ExecutiveMemo', 'RiskRegister'],
        executionAdapters: ['Slack'],
        verificationWindowDays: 90,
        subscriptionEnabled: true
    }
];
