import { ExecutiveRole } from '../kernel/decisionPackageSchema';
import { DeliverableType } from '../compiler/artifactCompiler';
import { TelemetryProvider } from '../evidence/universalEvidenceSchema';
import { ExecutionTarget } from '../connectors/executionRegistry';

export interface MissionContract {
    id: string;
    title: string;
    executiveOwner: ExecutiveRole;
    targetPersona?: ExecutiveRole[];
    wizardTemplate?: 'costReduction' | 'board' | 'vendor' | 'governance' | 'strategy';
    primaryObjective: string;
    requiredConnectors: TelemetryProvider[];
    generatedArtifacts: DeliverableType[];
    executionAdapters: ExecutionTarget[];
    verificationWindowDays: number;
    verificationMetrics?: string[];
    subscriptionEnabled: boolean;
}

export const UNIFIED_MISSION_CONTRACTS: MissionContract[] = [
    {
        id: 'reduce-ai-spend',
        title: 'Reduce AI OpEx & Eliminate Context Rot',
        executiveOwner: 'CFO',
        targetPersona: ['CFO', 'CTO', 'VP Engineering'],
        wizardTemplate: 'costReduction',
        primaryObjective: 'Recover $319,500/yr in un-cached document context rot and frontier API token waste.',
        requiredConnectors: ['AWS', 'Anthropic', 'OpenAI', 'GitHub'],
        generatedArtifacts: ['BudgetProposal', 'ExecutiveMemo', 'ImplementationRoadmap'],
        executionAdapters: ['Jira', 'Slack'],
        verificationWindowDays: 30,
        verificationMetrics: ['MonthlyInferenceCostUSD', 'TokenAvoidancePct'],
        subscriptionEnabled: true
    },
    {
        id: 'renew-cursor-enterprise',
        title: 'Renew Cursor Enterprise Licensing',
        executiveOwner: 'CIO',
        targetPersona: ['CIO', 'CTO'],
        wizardTemplate: 'vendor',
        primaryObjective: 'Measure developer adoption vs PR verification drag hours to negotiate contract terms.',
        requiredConnectors: ['AWS', 'GitHub'],
        generatedArtifacts: ['BudgetProposal', 'ArchitectureReview'],
        executionAdapters: ['Jira', 'ServiceNow'],
        verificationWindowDays: 60,
        verificationMetrics: ['DeveloperPRDragHours', 'CodeDriftRate'],
        subscriptionEnabled: true
    },
    {
        id: 'prepare-board-meeting',
        title: 'Prepare Board Meeting Briefing & Deck',
        executiveOwner: 'CEO',
        targetPersona: ['CEO', 'CFO', 'CTO'],
        wizardTemplate: 'board',
        primaryObjective: 'Compile 30-day verified savings, simulate board questions, and export 11-slide presentation deck.',
        requiredConnectors: ['AWS', 'GitHub', 'ServiceNow'],
        generatedArtifacts: ['BoardDeck', 'ExecutiveMemo', 'RiskRegister'],
        executionAdapters: ['Slack'],
        verificationWindowDays: 90,
        verificationMetrics: ['BoardApprovalPct', 'AvoidedCostUSD'],
        subscriptionEnabled: true
    },
    {
        id: 'defend-technology-budget',
        title: 'Defend Next Year Technology Budget',
        executiveOwner: 'CTO',
        targetPersona: ['CTO', 'VP Engineering'],
        wizardTemplate: 'strategy',
        primaryObjective: 'Calculate Product Debt Index and Technical Insolvency Date to defend budget allocation.',
        requiredConnectors: ['GitHub', 'Jira', 'Datadog'],
        generatedArtifacts: ['ArchitectureReview', 'ImplementationRoadmap', 'BudgetProposal'],
        executionAdapters: ['Jira', 'ServiceNow'],
        verificationWindowDays: 90,
        verificationMetrics: ['ProductDebtIndex', 'TechnicalInsolvencyDays'],
        subscriptionEnabled: true
    },
    {
        id: 'sox-ai-audit-prep',
        title: 'Prepare for Enterprise SOX & AI Audit',
        executiveOwner: 'CISO',
        targetPersona: ['CISO', 'CIO'],
        wizardTemplate: 'governance',
        primaryObjective: 'Scan shadow AI API keys and deploy pre-commit firewalls before regulatory audit.',
        requiredConnectors: ['GitHub', 'ServiceNow', 'TokenSaverMCP'],
        generatedArtifacts: ['RiskRegister', 'ExecutiveMemo', 'BoardDeck'],
        executionAdapters: ['ServiceNow', 'GitHub'],
        verificationWindowDays: 30,
        verificationMetrics: ['ShadowKeyCount', 'CompliancePassRate'],
        subscriptionEnabled: true
    }
];
