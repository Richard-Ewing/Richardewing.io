import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'LLM Cost Calculator & AI Unit Economics Benchmark',
    description: 'Calculate your AI insolvency horizon. Compare GPT-4, Claude 3.5, and Llama 3 pricing. Prevent margin collapse with the AI Unit Economics Benchmark™.',
    keywords: ['LLM cost calculator', 'AI token pricing', 'GPT-4 api cost', 'AI margin analysis', 'generative AI unit economics', 'LLM pricing comparison', 'token cost estimator', 'AI COGS calculator'],
    openGraph: {
        title: 'LLM Cost Calculator | AI Unit Economics Benchmark',
        description: 'Calculate your AI margin collapse point. Compare GPT-4, Claude, and open-source LLM costs.',
        type: 'website',
        url: 'https://richardewing.io/tools/aueb',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'LLM Cost Calculator | AUEB™',
        description: 'Calculate GPT-4, Claude, and LLM costs. Prevent AI margin collapse.',
    },
    alternates: {
        canonical: 'https://richardewing.io/tools/aueb',
    },
};

export default function AUEBLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'AUEB Engine',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        description: 'AI Unit Economics Benchmark for calculating margin health and LLM cost optimization.',
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
