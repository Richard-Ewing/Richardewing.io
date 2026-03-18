import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SaaS Valuation Calculator | Risk-Adjusted Revenue Multiples',
    description: 'Calculate your true Enterprise Value (EV). Adjust SaaS revenue multiples for churn risk, scope creep, and execution confidence. The EV-SE Engine™.',
    keywords: ['SaaS valuation calculator', 'revenue multiple calculator', 'SaaS exit calculator', 'ARR multiples 2025', 'startup valuation model', 'private equity due diligence', 'enterprise value calculator'],
    openGraph: {
        title: 'SaaS Valuation Calculator | Risk-Adjusted Multiples',
        description: 'Calculate risk-adjusted enterprise value. See your Wealth Destruction Gap.',
        type: 'website',
        url: 'https://richardewing.io/tools/ev-se',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SaaS Valuation Calculator | EV-SE Engine™',
        description: 'Calculate risk-adjusted SaaS revenue multiples for exit planning.',
    },
    alternates: {
        canonical: 'https://richardewing.io/tools/ev-se',
    },
};

export default function EVSELayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'Enterprise Value Scenario Engine™ (EV-SE)',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        url: 'https://richardewing.io/tools/ev-se',
                        description: 'Calculate risk-adjusted enterprise value. SaaS valuation calculator with revenue multiple adjustments for churn risk, scope creep, and execution confidence. By Richard Ewing, Product Economist.',
                        featureList: [
                            'Risk-Adjusted Revenue Multiple Calculator',
                            'Wealth Destruction Gap Analysis',
                            'Churn & Scope Creep Impact Modeling',
                            'PDF Report Export',
                        ],
                        offers: {
                            '@type': 'Offer',
                            price: '0',
                            priceCurrency: 'USD',
                        },
                        creator: {
                            '@type': 'Person',
                            '@id': 'https://richardewing.io/#person',
                            name: 'Richard Ewing',
                            jobTitle: 'Product Economist',
                            url: 'https://richardewing.io',
                        },
                    }),
                }}
            />
            {children}
        </>
    );
}
