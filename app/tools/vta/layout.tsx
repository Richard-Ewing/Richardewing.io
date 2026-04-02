// app/tools/vta/layout.tsx
export default function VTALayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'Volatility Tax Auditor™ (VTA)',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        url: 'https://www.richardewing.io/tools/vta',
                        description: 'Calculate the hidden AI Volatility Tax of human-in-the-loop verification required for generative AI features. Quantify your AI response drift liability.',
                        featureList: [
                            'AI Volatility Tax Calculator',
                            'Human-in-the-loop Cost Estimator',
                            'Generative AI Margin Impact',
                            'Response Drift Risk Scoring',
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
                            jobTitle: 'Product Economist',
                            url: 'https://www.richardewing.io',
                        },
                    }),
                }}
            />
            {children}
        </>
    );
}
