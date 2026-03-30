// Removed metadata to avoid duplication with page.tsx
export default function AuditInterviewLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'The Audit Interview',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        description: 'AI-powered engineering judgment assessment. Tests verification depth, architectural reasoning, and economic awareness — not syntax memorization.',
                        url: 'https://www.richardewing.io/tools/audit-interview',
                        offers: {
                            '@type': 'Offer',
                            price: '0',
                            priceCurrency: 'USD',
                        },
                        featureList: [
                            'AI-Powered Simulation',
                            'War-Time vs Peace-Time Assessment',
                            'Engineering Track Evaluation',
                            'Product Management Track Evaluation',
                            'Committee Review Scoring',
                        ],
                        creator: {
                            '@type': 'Person',
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
