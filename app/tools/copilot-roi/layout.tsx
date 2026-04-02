export default function CopilotROILayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'Copilot ROI Forecaster',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        url: 'https://www.richardewing.io/tools/copilot-roi',
                        description: 'Model the true Return on Invested Capital (ROAI) of AI coding assistants like GitHub Copilot and Cursor. Calculate APER productivity lift vs Vibe Coding Debt drag.',
                        featureList: [
                            'AI Coding Assistant ROI Calculator',
                            'Vibe Coding Debt Drag Analysis',
                            'Code Review Bottleneck Extrapolator',
                            'Board-Ready PDF Reporting',
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
