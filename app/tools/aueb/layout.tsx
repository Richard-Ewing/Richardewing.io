import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AUEB Engine | AI Unit Economics Benchmark | Richard Ewing',
    description: 'Calculate your AI feature margins and insolvency point. Benchmark against GPT-4, Claude, and open-source LLMs to optimize unit economics.',
    keywords: ['AI margins', 'unit economics', 'LLM costs', 'GPT-4 pricing', 'AI profitability', 'margin calculator', 'SaaS AI costs'],
    openGraph: {
        title: 'AUEB Engine - AI Unit Economics Benchmark',
        description: 'Are you scaling into bankruptcy? Calculate your AI margin collapse point.',
        type: 'website',
        url: 'https://richardewing.io/tools/aueb',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AUEB Engine | AI Unit Economics Benchmark',
        description: 'Calculate your AI feature margins and insolvency point.',
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
