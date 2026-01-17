import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'PDI Engine | Product Debt Index Calculator | Richard Ewing',
    description: 'AI-powered forensic audit of your engineering backlog. Calculate capital leakage from maintenance debt and optimize your Product Debt Index for maximum ROI.',
    keywords: ['product debt', 'technical debt', 'backlog audit', 'engineering efficiency', 'capital leakage', 'PDI calculator', 'maintenance cost'],
    openGraph: {
        title: 'PDI Engine - Quantify Hidden Product Debt',
        description: 'Paste your Jira tickets and discover how much capital you are burning on maintenance. AI-powered analysis.',
        type: 'website',
        url: 'https://richardewing.io/tools/pdi',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PDI Engine | Product Debt Index Calculator',
        description: 'AI-powered forensic audit of your engineering backlog.',
    },
    alternates: {
        canonical: 'https://richardewing.io/tools/pdi',
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
                        name: 'PDI Engine',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        description: 'AI-powered Product Debt Index calculator for engineering backlog audits.',
                        offers: {
                            '@type': 'Offer',
                            price: '0',
                            priceCurrency: 'USD',
                        },
                        creator: {
                            '@type': 'Person',
                            name: 'Richard Ewing',
                            jobTitle: 'Product Economist',
                            url: 'https://richardewing.io',
                        },
                    }),
                }}
            />
            {children}
        </>
    );
}
