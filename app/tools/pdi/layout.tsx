// Removed metadata to avoid duplication with page.tsx
export default function PDILayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'Product Debt Index™ (PDI)',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        url: 'https://www.richardewing.io/tools/pdi',
                        description: 'Forensic technical debt calculator. Quantify the financial cost of legacy code, refactoring vs. features, and engineering insolvency. A proprietary financial calculator authored by Richard Ewing, AI Economist.',
                        featureList: [
                            'Technical Debt Dollar Quantification',
                            'Engineering Insolvency Horizon Calculation',
                            'Refactoring vs. Features ROI Analysis',
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
