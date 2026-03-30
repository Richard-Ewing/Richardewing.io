// Removed metadata to avoid duplication with page.tsx

// Removed metadata to avoid duplication with page.tsx

export default function DueDiligenceLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'Engineering Due Diligence Scanner',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        url: 'https://www.richardewing.io/tools/due-diligence',
                        description: 'Calculate valuation impairment risk. Identify technical debt, cloud cost bloat, and security threats before finalizing a software acquisition. Built for VC and Private Equity by Richard Ewing.',
                        featureList: [
                            'Valuation Impairment Assessment',
                            'Technical Debt Recovery Calculator',
                            'Annual Cloud Infrastructure Flow Check',
                            'Automated Enterprise M&A Threat Matrix',
                            'PDF Executive Briefing Export',
                        ],
                        offers: {
                            '@type': 'Offer',
                            price: '999',
                            priceCurrency: 'USD',
                        },
                        creator: {
                            '@type': 'Person',
                            '@id': 'https://www.richardewing.io/#person',
                            name: 'Richard Ewing',
                            jobTitle: 'Private Equity Product Advisor',
                            url: 'https://www.richardewing.io',
                        },
                    }),
                }}
            />
            {children}
        </>
    );
}
