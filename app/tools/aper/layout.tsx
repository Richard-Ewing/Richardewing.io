import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Revenue Per Engineer Benchmark | Engineering Efficiency Calculator',
    description: 'Are you overstaffed? Calculate your Revenue Per Engineer (APER™) and compare against elite SaaS benchmarks (Stripe, Figma). Diagnose organizational bloat.',
    keywords: ['revenue per engineer', 'engineering efficiency metrics', 'developer productivity benchmark', 'SaaS headcount ratios', 'APER diagnostic', 'engineering roi calculator', 'team efficiency benchmark'],
    openGraph: {
        title: 'Revenue Per Engineer Benchmark | APER™',
        description: 'Calculate your Revenue Per Engineer and compare against elite SaaS companies.',
        type: 'website',
        url: 'https://richardewing.io/tools/aper',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Revenue Per Engineer Benchmark | APER™',
        description: 'Calculate engineering efficiency. Compare against Stripe, Figma, Linear.',
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
