export default function AgentRouterLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'Agentic Token Routing Simulator',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        url: 'https://www.richardewing.io/tools/agent-router',
                        description: 'Generative AI FinOps planning utility. Calculates compound token consumption across massive multi-agent enterprise workflows. Estimates cloud GPU scale costs to prove ROI on semantic router deployment.',
                        featureList: [
                            'Multi-Hop Agent Token Calculus',
                            'Router Triage Cost Mitigation',
                            'API Pricing Extrapolation Model',
                            'FinOps Board Justification PDF'
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
