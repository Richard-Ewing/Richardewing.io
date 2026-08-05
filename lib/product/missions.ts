import { ExecutiveRole } from '../kernel/decisionPackageSchema';

export interface ExecutiveMissionDefinition {
    id: string;
    title: string;
    targetRole: ExecutiveRole;
    commercialGoalUSD: number;
    underlyingAssessmentId: string;
    executionSteps: string[];
}

export const EXECUTIVE_MISSION_CATALOG: ExecutiveMissionDefinition[] = [
    {
        id: 'reduce-ai-spend',
        title: 'Reduce AI OpEx & Eliminate Context Rot',
        targetRole: 'CFO',
        commercialGoalUSD: 319500,
        underlyingAssessmentId: 'ai-cost-roi',
        executionSteps: [
            'Audit AWS Anthropic & OpenAI monthly inference spend',
            'Deploy Token Saver MCP server to 14 core code repositories',
            'Route 80B frontier prompts to local 8B SLM edge nodes'
        ]
    },
    {
        id: 'renew-cursor-enterprise',
        title: 'Evaluate & Renew Cursor Enterprise Licensing',
        targetRole: 'CIO',
        commercialGoalUSD: 185000,
        underlyingAssessmentId: 'vendor-evaluation',
        executionSteps: [
            'Measure developer adoption vs PR verification drag hours',
            'Audit repository drift and un-reviewed AI code volume',
            'Stage contract renewal terms based on verified ROI'
        ]
    },
    {
        id: 'prepare-board-meeting',
        title: 'Prepare Board Meeting Briefing & Deck',
        targetRole: 'CEO',
        commercialGoalUSD: 0,
        underlyingAssessmentId: 'board-prep',
        executionSteps: [
            'Compile 30-day verified operational cost savings',
            'Simulate top 5 board questions and recommended responses',
            'Export 11-slide Board Presentation Deck (.pptx)'
        ]
    },
    {
        id: 'defend-technology-budget',
        title: 'Defend Next Year Technology Budget',
        targetRole: 'CTO',
        commercialGoalUSD: 612000,
        underlyingAssessmentId: 'engineering-health',
        executionSteps: [
            'Calculate Product Debt Index and Technical Insolvency Date',
            'Identify top 5 negative-margin software features',
            'Stage capital re-allocation plan for Board sign-off'
        ]
    },
    {
        id: 'sox-ai-audit-prep',
        title: 'Prepare for Enterprise SOX & AI Audit',
        targetRole: 'CISO',
        commercialGoalUSD: 450000,
        underlyingAssessmentId: 'ai-governance',
        executionSteps: [
            'Scan for shadow AI API keys and unauthorized LLM endpoints',
            'Audit pre-commit static analysis firewalls',
            'Hash decision packages to Exogram Cryptographic Ledger'
        ]
    }
];
