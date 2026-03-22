import type { Metadata } from 'next';
import { auebKeywords } from '../../lib/keywords';

export const metadata: Metadata = {
    title: 'LLM Cost Calculator & AI Unit Economics Benchmark',
    description: 'Calculate your AI insolvency horizon. Compare GPT-4, Claude 3.5, and Llama 3 pricing. Prevent margin collapse with the AI Unit Economics Benchmark™.',
    keywords: auebKeywords,
    openGraph: {
        title: 'LLM Cost Calculator | AI Unit Economics Benchmark',
        description: 'Calculate your AI margin collapse point. Compare GPT-4, Claude, and open-source LLM costs.',
        type: 'website',
        url: 'https://www.richardewing.io/tools/aueb',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'LLM Cost Calculator | AUEB™',
        description: 'Calculate GPT-4, Claude, and LLM costs. Prevent AI margin collapse.',
    },
    alternates: {
        canonical: 'https://www.richardewing.io/tools/aueb',
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
