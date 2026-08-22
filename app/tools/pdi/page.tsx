import { Metadata } from 'next';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import PDITool from './content';

export const metadata: Metadata = {
    title: 'Product Debt Index (PDI) Calculator',
    description: 'Quantify software technical debt in dollar terms, calculate your Technical Insolvency Date, and report EBITDA impact to the board.',
    keywords: [
        'product debt index',
        'technical debt calculator',
        'engineering debt cost',
        'refactoring ROI',
        'technical insolvency date',
        'AI economist tool',
        'free technical debt tool',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/pdi',
    },
    openGraph: {
        title: 'Product Debt Index | Quantify Hidden Tech Debt',
        description: 'Are you building assets or just servicing liabilities? Calculate your true engineering ROI.',
        url: 'https://www.richardewing.io/tools/pdi',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Product Debt Index Calculator | Richard Ewing',
        description: 'Quantify your hidden technical debt in dollar terms. Free diagnostic tool.',
    },
};

export default function Page() {
    const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Calculate Your Technical Insolvency Date',
        description: 'Use the Product Debt Index (PDI) to determine when maintenance load will exceed engineering capacity.',
        totalTime: 'PT4M',
        tool: { '@type': 'HowToTool', name: 'PDI Calculator' },
        step: [
            { '@type': 'HowToStep', position: 1, name: 'Enter team size', text: 'Input your total engineering headcount and average fully-loaded cost per engineer.' },
            { '@type': 'HowToStep', position: 2, name: 'Estimate maintenance allocation', text: 'Estimate the percentage of engineering time currently spent on maintenance vs. new features.' },
            { '@type': 'HowToStep', position: 3, name: 'Set growth parameters', text: 'Define your expected maintenance growth rate and hiring capacity.' },
            { '@type': 'HowToStep', position: 4, name: 'Calculate insolvency date', text: 'The calculator projects your Technical Insolvency Date  -  the quarter when maintenance consumes 100% of capacity.' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <PDITool />
            <div className="page-container max-w-4xl mx-auto px-6 mb-16 space-y-12">
                <CalculatorIntentProposal
                    toolName="Product Debt Index (PDI) Calculator"
                    problemDomain="Compounding Technical Debt &amp; Maintenance Insolvency"
                    calculatedMetricLabel="Typical R&amp;D Carrying Cost Drag"
                    calculatedMetricValue="25% to 55% of Engineering Capacity"
                    severityLevel="CRITICAL"
                    primaryPathway={{
                        destination: 'RICHARD_EWING_ADVISORY',
                        relationshipType: 'ADVISES_ON',
                        channel: 'EXECUTIVE_ADVISORY',
                        headline: 'Commission a Technical Due Diligence & PDI Audit',
                        subtext: 'Retain Richard Ewing to audit software capital allocation, quantify balance sheet technical debt, and present remediation roadmaps to the board.',
                        actionUrl: '/services/technical-due-diligence',
                        actionLabel: 'Book Technical Due Diligence ↗',
                        targetRole: 'Private Equity Operating Partners & CPOs'
                    }}
                    secondaryPathway={{
                        destination: 'EXOGRAM_SOFTWARE',
                        relationshipType: 'OPERATIONALIZES',
                        channel: 'ENGINEERING_RUNTIME',
                        headline: 'Deploy Boundary Gates to Prevent Code Drift',
                        subtext: 'Exogram enforces deterministic boundary controls and schema validation to stop vibe coding debt from polluting production repositories.',
                        actionUrl: '/exogram',
                        actionLabel: 'Inspect Boundary Gate Architecture ↗',
                        targetRole: 'VPs of Engineering & Staff Architects'
                    }}
                />

                <DiagnosticCTA 
                    title="Is your team drowning in AI-generated Technical Debt?"
                    subtitle="Vibe coding gets you to MVP fast, but creates a maintenance nightmare. Take the AI Economics Diagnostic to map your debt liability before velocity drops to zero."
                    metrics={["45% Vulnerable", "0% Velocity", "High Attrition"]}
                />
            </div>
        </>
    );
}
