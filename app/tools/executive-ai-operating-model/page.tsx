import { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import CEOOperatingModelTool from './content';

export const metadata: Metadata = {
    title: 'Executive AI Operating Model Audit',
    description: 'Evaluate organizational readiness for autonomous agents, cross-functional capital allocation, and sovereign moats. Practical blueprint for modern COOs.',
    keywords: [
        'CEO AI operating model',
        'Executive AI strategy audit',
        'COO agentic automation diagnostic',
        'Managing Director enterprise AI',
        'Autonomous enterprise organizational design',
        'Executive AI readiness benchmark'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/executive-ai-operating-model',
    },
    openGraph: {
        title: 'CEO AI Operating Model Diagnostic | Richard Ewing',
        description: 'Audit enterprise AI operational maturity, organizational design, and capital allocation.',
        url: 'https://www.richardewing.io/tools/executive-ai-operating-model',
        type: 'website',
    },
};

export default function Page() {
    return (
        <div className="space-y-8">
            <ToolServerHeader
                slug="executive-ai-operating-model"
                eyebrow="Executive Strategy · Enterprise AI Operating Model"
                h1="Executive AI Operating Model Diagnostic"
                executiveAnswer="Most enterprise AI budgets fund disconnected department pilots that never reach P&L accountability. Built for CEOs, COOs, CFOs, and VPs of Operations to audit cross-functional ownership, vendor lock-in, headcount redeployment, and unit-economic governance before scaling spend."
                appName="Executive AI Operating Model Audit"
                appDescription="Organizational diagnostic for CEOs, COOs, and Managing Directors evaluating enterprise AI capital allocation, governance, and workflow ownership."
                howToName="How to Audit Your Enterprise AI Operating Model"
                howToDescription="Score ownership, data architecture, unit-cost telemetry, and human-in-the-loop accountability across departments."
                steps={[
                    { name: 'Audit Departmental Pilot Sprawl', text: 'Identify overlapping SaaS subscriptions, shadow AI tools, and unowned proof-of-concept spend.' },
                    { name: 'Score P&L & Telemetry Ownership', text: 'Verify whether COOs, CFOs, and VPs track cost-per-completed-task and error remediation.' },
                    { name: 'Generate Operating Realignment Plan', text: 'Receive an executive maturity score and concrete 90-day consolidation priorities.' },
                ]}
            />
            <CEOOperatingModelTool />
            <div className="page-container max-w-4xl mx-auto px-6 mb-16">
                <CalculatorIntentProposal
                    toolName="CEO &amp; Executive AI Operating Model Diagnostic"
                    problemDomain="Performative AI Pilots &amp; Fragmented Organizational Design"
                    calculatedMetricLabel="Enterprise Operating Risk"
                    calculatedMetricValue="ELEVATED &bull; Siloed AI Initiatives &amp; Missing Capital Allocation Strategy"
                    severityLevel="ELEVATED"
                    primaryPathway={{
                        destination: 'RICHARD_EWING_ADVISORY',
                        relationshipType: 'ADVISES_ON',
                        channel: 'EXECUTIVE_ADVISORY',
                        headline: 'CEO Enterprise AI Strategic Realignment Session',
                        subtext: 'Retain Richard Ewing to advise your executive committee on transitioning from fragmented AI pilots into an integrated, sovereign autonomous operating model.',
                        actionUrl: '/workspace/strategy',
                        actionLabel: 'Schedule CEO Strategy Session ↗',
                        targetRole: 'Chief Executive Officers, COOs & Managing Directors'
                    }}
                    secondaryPathway={{
                        destination: 'CAREERWIN_PLATFORM',
                        relationshipType: 'MEASURES',
                        channel: 'CAREER_INTELLIGENCE',
                        headline: 'Benchmark Executive & Leadership Talent Ladders',
                        subtext: 'Audit leadership capabilities across VP and Director tiers to align compensation and hiring with post-syntax operational reality.',
                        actionUrl: '/careerwin',
                        actionLabel: 'Explore CareerWin Intelligence ↗',
                        targetRole: 'Chief People Officers & SVPs of HR'
                    }}
                />
            </div>
        </div>
    );
}
