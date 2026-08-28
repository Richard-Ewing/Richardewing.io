import { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import CPOProductPortfolioTool from './content';

export const metadata: Metadata = {
    title: 'CPO AI Feature Margin & Portfolio Pruning Matrix | Product Tools',
    description: 'An executive portfolio evaluation tool for CPOs, VPs of Product, and Product Directors to model feature gross margins, identify negative-carry features, and transition from seat-based to outcome-based pricing.',
    keywords: [
        'CPO AI product strategy',
        'VP Product feature margin',
        'Product portfolio pruning matrix',
        'Seat based pricing compression',
        'Outcome based pricing calculator',
        'Product director AI roadmap'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/cpo-product-portfolio-matrix',
    },
    openGraph: {
        title: 'CPO AI Feature Margin Matrix | Richard Ewing',
        description: 'Audit AI feature unit economics and transition to outcome-based monetization.',
        url: 'https://www.richardewing.io/tools/cpo-product-portfolio-matrix',
        type: 'website',
    },
};

export default function Page() {
    return (
        <div className="space-y-8">
            <CPOProductPortfolioTool />
            <div className="page-container max-w-4xl mx-auto px-6 mb-16">
                <CalculatorIntentProposal
                    toolName="CPO AI Feature Margin &amp; Portfolio Pruning Matrix"
                    problemDomain="Seat-Based SaaS Cannibalization &amp; Negative-Carry Features"
                    calculatedMetricLabel="Typical Portfolio Margin Drag"
                    calculatedMetricValue="28% to 45% Gross Margin Compression from Variable Token Burn"
                    severityLevel="ELEVATED"
                    primaryPathway={{
                        destination: 'RICHARD_EWING_ADVISORY',
                        relationshipType: 'ADVISES_ON',
                        channel: 'EXECUTIVE_ADVISORY',
                        headline: 'CPO Product Strategy &amp; Pricing Modernization Briefing',
                        subtext: 'Retain Richard Ewing to audit your product portfolio, kill negative-carry AI features, and structure defensible consumption and outcome-based pricing models.',
                        actionUrl: '/workspace/products',
                        actionLabel: 'Book CPO Advisory Session ↗',
                        targetRole: 'Chief Product Officers, VPs of Product & Product Directors'
                    }}
                    secondaryPathway={{
                        destination: 'EXOGRAM_SOFTWARE',
                        relationshipType: 'OPERATIONALIZES',
                        channel: 'ENGINEERING_RUNTIME',
                        headline: 'Automate Feature-Level Token Billing &amp; Margin Floors',
                        subtext: 'Exogram intercepts user requests and enforces per-customer token quotas, preventing power-user queries from turning accounts gross-margin negative.',
                        actionUrl: '/exogram',
                        actionLabel: 'Explore Exogram Quota Engine ↗',
                        targetRole: 'Directors of Product Operations & Principal PMs'
                    }}
                />
            </div>
        </div>
    );
}
