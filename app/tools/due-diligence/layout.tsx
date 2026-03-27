import type { Metadata } from 'next';

const dueDiligenceKeywords = [
    'engineering due diligence',
    'technical due diligence',
    'M&A tech scan',
    'private equity software audit',
    'technical debt assessment',
    'VC technical diligence',
    'tech stack audit M&A',
    'codebase quality check',
    'software acquisition risk',
    'technical debt calculator m&a'
];

export const metadata: Metadata = {
    title: 'M&A Engineering Due Diligence Scanner',
    description: 'Instantly scan acquisition targets for critical technical debt, AI dependency risks, and engineering insolvency. Exclusive $999 due diligence diagnostic for Private Equity and VC.',
    keywords: dueDiligenceKeywords,
    openGraph: {
        title: 'M&A Engineering Due Diligence Scanner',
        description: 'Calculate valuation impairment risk. Identify technical debt, cloud cost bloat, and security threats before finalizing an acquisition.',
        type: 'website',
        url: 'https://www.richardewing.io/tools/due-diligence',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'M&A Tech Scanner | Richard Ewing',
        description: 'Scan targets for tech debt, team bloat, and AI supply chain risk.',
    },
    alternates: {
        canonical: 'https://www.richardewing.io/tools/due-diligence',
    },
};

export default function DueDiligenceLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'Engineering Due Diligence Scanner',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        url: 'https://www.richardewing.io/tools/due-diligence',
                        description: 'Calculate valuation impairment risk. Identify technical debt, cloud cost bloat, and security threats before finalizing a software acquisition. Built for VC and Private Equity by Richard Ewing.',
                        featureList: [
                            'Valuation Impairment Assessment',
                            'Technical Debt Recovery Calculator',
                            'Annual Cloud Infrastructure Flow Check',
                            'Automated Enterprise M&A Threat Matrix',
                            'PDF Executive Briefing Export',
                        ],
                        offers: {
                            '@type': 'Offer',
                            price: '999',
                            priceCurrency: 'USD',
                        },
                        creator: {
                            '@type': 'Person',
                            '@id': 'https://www.richardewing.io/#person',
                            name: 'Richard Ewing',
                            jobTitle: 'Private Equity Product Advisor',
                            url: 'https://www.richardewing.io',
                        },
                    }),
                }}
            />
            {children}
        </>
    );
}
