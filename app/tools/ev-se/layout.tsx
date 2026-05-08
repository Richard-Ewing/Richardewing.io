// Removed metadata to avoid duplication with page.tsx
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
                        url: 'https://www.richardewing.io/tools/ev-se',
                        description: 'Calculate risk-adjusted enterprise value. SaaS valuation calculator with revenue multiple adjustments for churn risk, scope creep, and execution confidence. By Richard Ewing, AI Economist.',
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
                            '@id': 'https://www.richardewing.io/#person',
                            name: 'Richard Ewing',
                            jobTitle: 'AI Economist',
                            url: 'https://www.richardewing.io',
                        },
                    }),
                }}
            />
            {children}
        </>
    );
}
