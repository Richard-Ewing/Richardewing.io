import { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import CEOOperatingModelTool from './content';

export const metadata: Metadata = {
    title: 'CEO & Executive AI Operating Model Diagnostic | Leadership Tools',
    description: 'An executive audit tool for CEOs, COOs, Managing Directors, and SVPs to evaluate organizational readiness for autonomous agent operations, cross-functional capital allocation, and sovereign moat durability.',
    keywords: [
        'CEO AI operating model',
        'Executive AI strategy audit',
        'COO agentic automation diagnostic',
        'Managing Director enterprise AI',
        'Autonomous enterprise organizational design',
        'C-Suite AI readiness benchmark'
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
