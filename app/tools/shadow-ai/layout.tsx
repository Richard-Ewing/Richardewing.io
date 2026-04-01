export default function ShadowLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'Zero-Trust Shadow AI Scanner',
                        applicationCategory: 'SecurityApplication',
                        operatingSystem: 'Web',
                        url: 'https://www.richardewing.io/tools/shadow-ai',
                        description: 'Client-side zero-trust SOC2 liability scanner. Cross-reference employee expense and traffic logs against a dynamic index of 500+ unsanctioned AI tools to calculate explicit intellectual property egress risk.',
                        featureList: [
                            'Zero-Trust Local CSV Log Parsing',
                            '500+ Shadow AI Tool Dictionary Heuristics',
                            'SOC2 Liability Forecasting Model',
                            'Executive Board PDF Export'
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
                            jobTitle: 'Founding Engineer & AI Architect',
                            url: 'https://www.richardewing.io',
                        },
                    }),
                }}
            />
            {children}
        </>
    );
}
