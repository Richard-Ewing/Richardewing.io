export default function PromptInjectionLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'Prompt Injection Sandbox Toolkit',
                        applicationCategory: 'SecurityApplication',
                        operatingSystem: 'Web',
                        url: 'https://www.richardewing.io/tools/prompt-injection-sandbox',
                        description: 'Generative AI Red Teaming toolkit. Sandbox evaluates System Prompts against roleplay escapes, cryptographic bypassing, and logical boundary violations.',
                        featureList: [
                            '6-Vector Attack Simulation',
                            'Defensibility Score Rating',
                            'Automated Payload Hardening Generator',
                            'Executive Audit PDF Export'
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
