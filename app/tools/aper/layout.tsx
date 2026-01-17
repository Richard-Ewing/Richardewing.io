import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'APER Diagnostic | Revenue Per Engineer Calculator | Richard Ewing',
    description: 'Calculate your APER (Algorithmic Product Engineering Ratio) to detect overstaffing. Benchmark against elite SaaS companies like Stripe and Linear.',
    keywords: ['revenue per engineer', 'APER', 'engineering efficiency', 'overstaffing', 'SaaS benchmarks', 'headcount optimization', 'engineering costs'],
    openGraph: {
        title: 'APER Diagnostic - Are You Overstaffed?',
        description: 'Calculate your Revenue Per Engineer and compare against industry benchmarks.',
        type: 'website',
        url: 'https://richardewing.io/tools/aper',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'APER Diagnostic | Revenue Per Engineer Calculator',
        description: 'Detect overstaffing and coordination overhead instantly.',
    },
    alternates: {
        canonical: 'https://richardewing.io/tools/aper',
    },
};

export default function APERLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'APER Diagnostic',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        description: 'Revenue Per Engineer calculator for detecting overstaffing and optimizing engineering efficiency.',
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
