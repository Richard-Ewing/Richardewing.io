import type { Metadata } from 'next';
import { aperKeywords } from '../../lib/keywords';

export const metadata: Metadata = {
    title: 'Revenue Per Engineer Benchmark | Engineering Efficiency Calculator',
    description: 'Are you overstaffed? Calculate your Revenue Per Engineer (APER™) and compare against elite SaaS benchmarks (Stripe, Figma). Diagnose organizational bloat.',
    keywords: aperKeywords,
    openGraph: {
        title: 'Revenue Per Engineer Benchmark | APER™',
        description: 'Calculate your Revenue Per Engineer and compare against elite SaaS companies.',
        type: 'website',
        url: 'https://www.richardewing.io/tools/aper',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Revenue Per Engineer Benchmark | APER™',
        description: 'Calculate engineering efficiency. Compare against Stripe, Figma, Linear.',
    },
    alternates: {
        canonical: 'https://www.richardewing.io/tools/aper',
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
                        name: 'APER™ Revenue Per Engineer Diagnostic',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        url: 'https://www.richardewing.io/tools/aper',
                        description: 'Calculate your Revenue Per Engineer and benchmark against elite SaaS companies (Stripe, Figma, Linear). Diagnose organizational bloat and engineering efficiency. By Richard Ewing, Product Economist.',
                        featureList: [
                            'Revenue Per Engineer Calculation',
                            'Elite SaaS Benchmarking (Stripe, Figma, Linear)',
                            'Organizational Bloat Detection',
                            'Engineering Efficiency Scoring',
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
