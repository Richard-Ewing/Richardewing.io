import { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import BoardRiskScorecardTool from './content';

export const metadata: Metadata = {
    title: 'Board of Directors AI Governance & Fiduciary Risk Scorecard | Tools',
    description: 'An executive 10-vector diagnostic for Board Directors, CEOs, and Audit Committees to evaluate corporate AI risk exposure, shadow agent delegation, and capital efficiency.',
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
