import { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import CFOCapitalizationTool from './content';

export const metadata: Metadata = {
    title: 'CFO AI R&D Capitalization & Section 174 Audit | Financial Tool',
    description: 'Calculate the true financial breakdown of innovation R&D vs maintenance OpEx, quantifying tax impact, Section 174 amortization, and EBITDA adjustments.',
    keywords: [
        'CFO AI R&D capitalization',
        'Section 174 calculator',
        'R&D tax credit engineering audit',
        'OpEx vs CapEx software engineering',
        'Innovation tax audit',
        'CFO FinOps tool'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/cfo-capitalization-audit',
    },
    openGraph: {
        title: 'CFO R&D Capitalization Calculator | Richard Ewing',
        description: 'Audit R&D capital efficiency and Section 174 tax exposure for technology companies.',
        url: 'https://www.richardewing.io/tools/cfo-capitalization-audit',
        type: 'website',
    },
};

export default function Page() {
    return (
        <div className="space-y-8">
            <CFOCapitalizationTool />
            <div className="page-container max-w-4xl mx-auto px-6 mb-16">
                <CalculatorIntentProposal
                    toolName="CFO AI R&amp;D Capitalization &amp; Section 174 Audit"
                    problemDomain="Misclassified Engineering OpEx &amp; Section 174 Amortization Drag"
                    calculatedMetricLabel="Typical R&amp;D Misclassification"
                    calculatedMetricValue="$800,000 to $3.5M in Disguised Maintenance OpEx"
                    severityLevel="ELEVATED"
                    primaryPathway={{
                        destination: 'RICHARD_EWING_ADVISORY',
                        relationshipType: 'ADVISES_ON',
                        channel: 'EXECUTIVE_ADVISORY',
                        headline: 'R&D Capital Audit & FinOps Financial Realignment',
                        subtext: 'Retain Richard Ewing to conduct forensic sprint audits, classify genuine innovation vs maintenance, and structure defensible Section 174 capitalization ledgers.',
                        actionUrl: '/workspace/finance',
                        actionLabel: 'Inquire for CFO R&D Capital Audit ↗',
                        targetRole: 'Chief Financial Officers & VPs of Finance'
                    }}
                    secondaryPathway={{
                        destination: 'EXOGRAM_SOFTWARE',
                        relationshipType: 'OPERATIONALIZES',
                        channel: 'ENGINEERING_RUNTIME',
                        headline: 'Automated Sprint Task Classification with Exogram',
                        subtext: 'Exogram tracks developer and agent commits at the network proxy layer, automatically categorizing code changes into maintenance vs innovation tax buckets.',
                        actionUrl: '/exogram',
                        actionLabel: 'Explore Exogram Telemetry Ledger ↗',
                        targetRole: 'Finance Directors & Corporate Controllers'
                    }}
                />
            </div>
        </div>
    );
}
