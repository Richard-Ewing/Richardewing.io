import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Technical Debt Calculator | The Product Debt Index™ (PDI)',
    description: 'Forensic technical debt calculator. Quantify the financial cost of legacy code, refactoring vs. features, and engineering insolvency. Stop capital leakage.',
    keywords: ['technical debt calculator', 'cost of technical debt', 'refactoring ROI', 'engineering velocity metrics', 'legacy code audit', 'software maintenance costs', 'tech debt ratio', 'product debt'],
    openGraph: {
        title: 'Technical Debt Calculator | Product Debt Index™',
        description: 'Forensic calculator to quantify the financial cost of technical debt. See your engineering insolvency horizon.',
        type: 'website',
        url: 'https://www.richardewing.io/tools/pdi',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Technical Debt Calculator | PDI™',
        description: 'Quantify the financial cost of legacy code and maintenance burden.',
    },
    alternates: {
        canonical: 'https://www.richardewing.io/tools/pdi',
    },
};

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
                        description: 'Forensic technical debt calculator. Quantify the financial cost of legacy code, refactoring vs. features, and engineering insolvency. A proprietary financial calculator authored by Richard Ewing, Product Economist.',
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
