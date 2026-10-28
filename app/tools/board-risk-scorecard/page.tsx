import { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import BoardRiskScorecardTool from './content';

export const metadata: Metadata = {
    title: 'Board AI Governance Risk Scorecard',
    description: 'A 10-vector diagnostic for Board Directors and CEOs to evaluate corporate AI risk, shadow delegation, and capital efficiency.',
    keywords: [
        'Board of Directors AI governance',
        'AI fiduciary risk scorecard',
        'Audit committee AI checklist',
        'CEO AI strategy evaluation',
        'SOX 404 AI internal controls',
        'Board technology oversight'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/board-risk-scorecard',
    },
    openGraph: {
        title: 'Board AI Governance Risk Scorecard | Richard Ewing',
        description: 'Benchmark boardroom AI oversight, fiduciary risk, and capital allocation.',
        url: 'https://www.richardewing.io/tools/board-risk-scorecard',
        type: 'website',
    },
};

export default function Page() {
    return (
        <div className="space-y-8">
            <ToolServerHeader
                slug="board-risk-scorecard"
                eyebrow="Boardroom Oversight · Fiduciary AI Risk Diagnostic"
                h1="Board AI Governance & Fiduciary Risk Scorecard"
                executiveAnswer="Board Directors, CEOs, and Audit Committee Chairs face personal fiduciary exposure when management deploys autonomous AI without SOX 404 signing limits, vendor indemnification, or unit-economic margin floors. Score 10 governance vectors to surface unmonitored balance-sheet liabilities."
                appName="Board AI Governance Risk Scorecard"
                appDescription="10-vector fiduciary diagnostic for Board Directors, CEOs, and CFOs auditing enterprise AI governance, signing limits, and capital efficiency."
                howToName="How to Audit Corporate AI Fiduciary Risk for the Board"
                howToDescription="Evaluate AI signing authority, data leakage exposure, and gross margin controls across 10 board vectors."
                steps={[
                    { name: 'Assess Signing & Control Vectors', text: 'Grade management controls for autonomous financial actions, customer commitments, and SOX compliance.' },
                    { name: 'Evaluate Capital & Margin Discipline', text: 'Verify whether AI initiatives report net gross margin impact rather than vanity adoption metrics.' },
                    { name: 'Export Committee Readout', text: 'Generate a board-ready fiduciary risk rating and prioritized audit committee action plan.' },
                ]}
            />
            <BoardRiskScorecardTool />
            <div className="page-container max-w-4xl mx-auto px-6 mb-16">
                <CalculatorIntentProposal
                    toolName="Board AI Governance &amp; Fiduciary Risk Scorecard"
                    problemDomain="Un-Monitored Shadow Delegation &amp; Fiduciary Capital Waste"
                    calculatedMetricLabel="Corporate Governance Exposure"
                    calculatedMetricValue="CRITICAL &bull; Missing Fiduciary Controls &amp; SOX 404 Signing Limits"
                    severityLevel="CRITICAL"
                    primaryPathway={{
                        destination: 'RICHARD_EWING_ADVISORY',
                        relationshipType: 'ADVISES_ON',
                        channel: 'EXECUTIVE_ADVISORY',
                        headline: 'Boardroom AI Governance Briefing & Fiduciary Audit',
                        subtext: 'Retain Richard Ewing to deliver board-ready briefings, evaluate management AI R&D disclosures, and structure sovereign fiduciary oversight frameworks.',
                        actionUrl: '/workspace/board',
                        actionLabel: 'Inquire for Boardroom Briefing ↗',
                        targetRole: 'Board Directors, CEOs & Audit Committee Chairs'
                    }}
                    secondaryPathway={{
                        destination: 'EXOGRAM_SOFTWARE',
                        relationshipType: 'OPERATIONALIZES',
                        channel: 'ENGINEERING_RUNTIME',
                        headline: 'Enforce Board-Approved Signing Limits in Runtime',
                        subtext: 'Exogram intercepts autonomous AI transactions, enforcing corporate signing matrices and requiring multi-signature executive approval for high-risk actions.',
                        actionUrl: '/exogram',
                        actionLabel: 'Explore Exogram Governance Proxy ↗',
                        targetRole: 'Chief Legal Officers & CISOs'
                    }}
                />
            </div>
        </div>
    );
}
