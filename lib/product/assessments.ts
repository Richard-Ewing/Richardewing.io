import { DeliverableType } from '../compiler/artifactCompiler';

export interface AssessmentDefinition {
    id: string;
    title: string;
    targetRole: 'CEO' | 'CFO' | 'CTO' | 'CIO' | 'CISO' | 'CPO' | 'VP Engineering';
    executiveResponsibility: string;
    primaryQuestion: string;
    requiredConnectors: string[];
    deliverables: DeliverableType[];
    estimatedDurationMinutes: number;
}

export const PRODUCT_ASSESSMENT_CATALOG: AssessmentDefinition[] = [
    {
        id: 'ai-cost-roi',
        title: 'AI Cost & Unit Economics Assessment',
        targetRole: 'CFO',
        executiveResponsibility: 'Capital Allocation & Margins',
        primaryQuestion: 'Where is AI spend going, and which models create value?',
        requiredConnectors: ['AWS', 'Anthropic', 'OpenAI'],
        deliverables: ['BudgetProposal', 'ExecutiveMemo', 'ImplementationRoadmap'],
        estimatedDurationMinutes: 15
    },
    {
        id: 'engineering-health',
        title: 'Engineering Health & Insolvency Assessment',
        targetRole: 'CTO',
        executiveResponsibility: 'Engineering Capacity & Architecture',
        primaryQuestion: 'When is our technical insolvency date, and what is dragging velocity?',
        requiredConnectors: ['GitHub', 'Jira', 'Datadog'],
        deliverables: ['ArchitectureReview', 'ImplementationRoadmap', 'RiskRegister'],
        estimatedDurationMinutes: 20
    },
    {
        id: 'ai-governance',
        title: 'AI Governance & Compliance Assessment',
        targetRole: 'CISO',
        executiveResponsibility: 'Risk Enforcement & Audit Readiness',
        primaryQuestion: 'Can we prove governance and eliminate shadow AI before regulatory fines?',
        requiredConnectors: ['GitHub', 'ServiceNow', 'TokenSaverMCP'],
        deliverables: ['RiskRegister', 'ExecutiveMemo', 'BoardDeck'],
        estimatedDurationMinutes: 15
    },
    {
        id: 'board-prep',
        title: 'Board Meeting Preparation Assessment',
        targetRole: 'CEO',
        executiveResponsibility: 'Enterprise Growth & Oversight',
        primaryQuestion: 'What talking points, risks, and evidence do we present to the Board?',
        requiredConnectors: ['AWS', 'GitHub', 'ServiceNow'],
        deliverables: ['BoardDeck', 'ExecutiveMemo', 'RiskRegister'],
        estimatedDurationMinutes: 10
    },
    {
        id: 'vendor-evaluation',
        title: 'Vendor Negotiation & Software Assessment',
        targetRole: 'CIO',
        executiveResponsibility: 'Software Procurement & Overlap',
        primaryQuestion: 'Should we renew, expand, or terminate Cursor Enterprise licenses?',
        requiredConnectors: ['AWS', 'GitHub'],
        deliverables: ['BudgetProposal', 'ArchitectureReview'],
        estimatedDurationMinutes: 15
    }
];
