// Removed metadata to avoid duplication with page.tsx
export default function AUEBLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'AI Unit Economics Benchmark™ (AUEB)',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        url: 'https://www.richardewing.io/tools/aueb',
                        description: 'Calculate your AI margin collapse point. Compare GPT-4, Claude, and open-source LLM costs. Prevent AI hallucination debt with the AUEB diagnostic by Richard Ewing.',
                        featureList: [
                            'LLM Cost Comparison (GPT-4, Claude, Llama)',
                            'AI Margin Collapse Point Calculator',
                            'Token Cost Estimator',
                            'Unit Economics Benchmarking',
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
