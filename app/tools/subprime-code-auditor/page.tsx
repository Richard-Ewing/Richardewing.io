import { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import SubprimeCodeAuditorTool from './content';

export const metadata: Metadata = {
    title: 'Subprime Code Risk Auditor (SCRA) | PE & M&A Due Diligence Tool',
    description: 'Calculate the technical debt discount factor, maintenance drag, and refactor liability of AI-generated vibe coding in target software codebases.',
    keywords: [
        'Subprime Code Auditor',
        'Vibe coding debt calculator',
        'AI technical due diligence',
        'PE software audit tool',
        'Technical insolvency date',
        'Codebase maintenance drag'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/subprime-code-auditor',
    },
    openGraph: {
        title: 'Subprime Code Risk Auditor | Richard Ewing',
        description: 'Quantify the financial liability of AI-generated boilerplate in target codebases.',
        url: 'https://www.richardewing.io/tools/subprime-code-auditor',
        type: 'website',
    },
};

export default function Page() {
    return (
        <div className="space-y-8">
            <SubprimeCodeAuditorTool />
            <div className="page-container max-w-4xl mx-auto px-6 mb-16">
                <CalculatorIntentProposal
                    toolName="Subprime Code Risk Auditor (SCRA)"
                    problemDomain="Vibe Coding Debt &amp; Synthetic Technical Insolvency"
                    calculatedMetricLabel="Typical M&amp;A Technical Debt Discount"
                    calculatedMetricValue="$600,000 to $2.4M Valuation Write-Down"
                    severityLevel="CRITICAL"
                    primaryPathway={{
                        destination: 'RICHARD_EWING_ADVISORY',
                        relationshipType: 'ADVISES_ON',
                        channel: 'EXECUTIVE_ADVISORY',
                        headline: 'PE Technical Due Diligence & Codebase Forensics',
                        subtext: 'Retain Richard Ewing for pre-close technical due diligence to quantify AI code entropy, dependency debt, and maintenance carrying costs.',
                        actionUrl: '/workspace/strategy',
                        actionLabel: 'Inquire for PE Due Diligence ↗',
                        targetRole: 'Private Equity Operating Partners & M&A Directors'
                    }}
                    secondaryPathway={{
                        destination: 'EXOGRAM_SOFTWARE',
                        relationshipType: 'OPERATIONALIZES',
                        channel: 'ENGINEERING_RUNTIME',
                        headline: 'Install Subtraction Gates with Exogram',
                        subtext: 'Exogram systematically tracks code churn, deprecates negative-carry routes, and blocks un-tested AI boilerplate at commit gates.',
                        actionUrl: '/exogram',
                        actionLabel: 'Explore Exogram Subtraction Engine ↗',
                        targetRole: 'VPs of Engineering & CTOs'
                    }}
                />
            </div>
        </div>
    );
}
