import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'EV-SE Engine | Enterprise Value Scenario Calculator | Richard Ewing',
    description: 'Quantify how execution risk destroys enterprise value. Calculate the Wealth Destruction Gap and defend your valuation with data-driven scenarios.',
    keywords: ['enterprise value', 'valuation', 'execution risk', 'SaaS valuation', 'wealth destruction', 'scenario planning', 'EV calculator'],
    openGraph: {
        title: 'EV-SE Engine - Defend Your Valuation',
        description: 'See how execution risk discounts your company. Calculate your Wealth Destruction Gap.',
        type: 'website',
        url: 'https://richardewing.io/tools/ev-se',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'EV-SE Engine | Enterprise Value Scenario Calculator',
        description: 'Quantify how execution risk destroys enterprise value.',
    },
    alternates: {
        canonical: 'https://richardewing.io/tools/ev-se',
    },
};

export default function EVSELayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'EV-SE Engine',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        description: 'Enterprise Value Scenario Engine for valuation defense and execution risk quantification.',
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
