// Removed metadata to avoid duplication with page.tsx
export default function APERLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'APER™ Revenue Per Engineer Diagnostic',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        url: 'https://www.richardewing.io/tools/aper',
                        description: 'Calculate your Revenue Per Engineer and benchmark against elite SaaS companies (Stripe, Figma, Linear). Diagnose organizational bloat and engineering efficiency. By Richard Ewing, AI Economist.',
                        featureList: [
                            'Revenue Per Engineer Calculation',
                            'Elite SaaS Benchmarking (Stripe, Figma, Linear)',
                            'Organizational Bloat Detection',
                            'Engineering Efficiency Scoring',
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
