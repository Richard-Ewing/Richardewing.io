import { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import AIFeatureMarginTool from './content';

export const metadata: Metadata = {
    title: 'AI Feature Unit Margin Matrix & Token Elasticity | Diagnostic Tool',
    description: 'Calculate feature-level unit gross margins, token elasticity curves, and identify negative-carry AI features that destroy SaaS profitability.',
    keywords: [
        'AI feature margin calculator',
        'Token elasticity calculator',
        'AI Unit Economics',
        'SaaS gross margin AI',
        'Negative-carry AI features',
        'Synthetic COGS matrix'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/ai-feature-margin',
    },
    openGraph: {
        title: 'AI Feature Unit Margin Matrix | Richard Ewing',
        description: 'Pinpoint negative-carry AI features that look high-growth but destroy SaaS gross margin.',
        url: 'https://www.richardewing.io/tools/ai-feature-margin',
        type: 'website',
    },
};

export default function Page() {
    return (
        <div className="space-y-8">
            <AIFeatureMarginTool />
            <div className="page-container max-w-4xl mx-auto px-6 mb-16">
                <CalculatorIntentProposal
                    toolName="AI Feature Unit Margin Matrix"
                    problemDomain="Negative-Carry AI Features &amp; Uncapped Token Erosion"
                    calculatedMetricLabel="Typical Margin Compression"
                    calculatedMetricValue="-15% to -40% Gross Margin Erosion on Flat Tiers"
                    severityLevel="ELEVATED"
                    primaryPathway={{
                        destination: 'EXOGRAM_SOFTWARE',
                        relationshipType: 'OPERATIONALIZES',
                        channel: 'ENGINEERING_RUNTIME',
                        headline: 'Install Adaptive Consumption Caps with Exogram',
                        subtext: 'Exogram dynamically enforces per-user token credit limits and switches heavy users to quantized SLM fallback routes before margins turn negative.',
                        actionUrl: '/exogram',
                        actionLabel: 'Explore Exogram Token Gateway ↗',
                        targetRole: 'Chief Product Officers & VP Product Management'
                    }}
                    secondaryPathway={{
                        destination: 'RICHARD_EWING_ADVISORY',
                        relationshipType: 'ADVISES_ON',
                        channel: 'EXECUTIVE_ADVISORY',
                        headline: 'AI Pricing Strategy & Feature Deprecation Audit',
                        subtext: 'Retain Richard Ewing to audit your product feature portfolio, deprecate negative-carry routes, and transition to credit-based pricing rails.',
                        actionUrl: '/workspace/products',
                        actionLabel: 'Inquire for AI Product Economics Audit ↗',
                        targetRole: 'Chief Product Officers & Heads of Product'
                    }}
                />
            </div>
        </div>
    );
}
