import { ExecutiveRole } from '../kernel/decisionPackageSchema';
import { DeliverableType } from '../compiler/artifactCompiler';
import { TelemetryProvider } from '../evidence/universalEvidenceSchema';
import { ExecutionTarget } from '../connectors/executionRegistry';

export interface HomepagePromise {
    id: string;
    headline: string;
    targetPersona: ExecutiveRole[];
    customerProblem: string[];
    missionId: string;
    wizardTemplate: 'costReduction' | 'board' | 'vendor' | 'governance' | 'strategy';
    requiredConnectors: TelemetryProvider[];
    deliverables: DeliverableType[];
    executionTargets: ExecutionTarget[];
    verificationMetrics: string[];
}

export const HOMEPAGE_CONTRACT_MATRIX: HomepagePromise[] = [
    {
        id: 'reduce-ai-spend',
        headline: 'Reduce AI Spend & Banish Context Rot',
        targetPersona: ['CFO', 'CTO', 'VP Engineering'],
        customerProblem: [
            'Developer LLM token spend expanding 18%/mo without clear ROI',
            'Un-cached PDF context dumps inflating AWS Anthropic bills'
        ],
        missionId: 'reduce-ai-spend',
        wizardTemplate: 'costReduction',
        requiredConnectors: ['AWS', 'Anthropic', 'OpenAI', 'GitHub'],
        deliverables: ['BudgetProposal', 'ExecutiveMemo', 'ImplementationRoadmap'],
        executionTargets: ['Jira', 'Slack'],
        verificationMetrics: ['MonthlyInferenceCostUSD', 'TokenAvoidancePct']
    },
    {
        id: 'ai-governance',
        headline: 'Govern AI Systems & Prevent Shadow AI',
        targetPersona: ['CISO', 'CIO'],
        customerProblem: [
            'Shadow API keys deployed in production microservices',
            'Lack of pre-commit firewalls for third-party LLM tools'
        ],
        missionId: 'sox-ai-audit-prep',
        wizardTemplate: 'governance',
        requiredConnectors: ['GitHub', 'ServiceNow', 'TokenSaverMCP'],
        deliverables: ['RiskRegister', 'ExecutiveMemo', 'BoardDeck'],
        executionTargets: ['ServiceNow', 'GitHub'],
        verificationMetrics: ['ShadowKeyCount', 'CompliancePassRate']
    },
    {
        id: 'vendor-evaluation',
        headline: 'Evaluate & Renew Cursor Enterprise Licensing',
        targetPersona: ['CIO', 'CTO'],
        customerProblem: [
            'High annual seat cost for Cursor Enterprise without verified velocity lift',
            'Un-tracked repository code drift and retry loop costs'
        ],
        missionId: 'renew-cursor-enterprise',
        wizardTemplate: 'vendor',
        requiredConnectors: ['AWS', 'GitHub', 'Datadog'],
        deliverables: ['BudgetProposal', 'ArchitectureReview'],
        executionTargets: ['Jira', 'ServiceNow'],
        verificationMetrics: ['DeveloperPRDragHours', 'CodeDriftRate']
    },
    {
        id: 'board-readiness',
        headline: 'Prepare Board Meetings with Verified Evidence',
        targetPersona: ['CEO', 'CFO', 'CTO'],
        customerProblem: [
            'Unprepared for board scrutiny regarding technology CapEx/OpEx',
            'Lack of 30-day verified financial payback metrics'
        ],
        missionId: 'prepare-board-meeting',
        wizardTemplate: 'board',
        requiredConnectors: ['AWS', 'GitHub', 'ServiceNow'],
        deliverables: ['BoardDeck', 'ExecutiveMemo', 'RiskRegister'],
        executionTargets: ['Slack'],
        verificationMetrics: ['BoardApprovalPct', 'AvoidedCostUSD']
    },
    {
        id: 'technology-strategy',
        headline: 'Defend Next Year Technology Budget',
        targetPersona: ['CTO', 'VP Engineering'],
        customerProblem: [
            'Inability to justify engineering headcount vs automated sidecars',
            'Technical insolvency risk dragging 90-day product delivery'
        ],
        missionId: 'defend-technology-budget',
        wizardTemplate: 'strategy',
        requiredConnectors: ['GitHub', 'Jira', 'Datadog'],
        deliverables: ['ArchitectureReview', 'ImplementationRoadmap', 'BudgetProposal'],
        executionTargets: ['Jira', 'ServiceNow'],
        verificationMetrics: ['ProductDebtIndex', 'TechnicalInsolvencyDays']
    }
];
