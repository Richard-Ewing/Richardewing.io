import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Audit Interview | Engineering Judgment Assessment for the AI Age',
    description: 'The hiring protocol for the AI age. Test verification skills, not generation skills. AI-powered simulation based on the methodology from Built In\'s "Death of the Syntax Interview." Created by Richard Ewing.',
    keywords: [
        'audit interview',
        'engineering hiring assessment',
        'AI age interview',
        'verification skills test',
        'product economist hiring',
        'war-time leadership assessment',
        'engineering judgment test',
        'technical interview alternative',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/audit-interview',
    },
    openGraph: {
        title: 'The Audit Interview | War-Time Leadership Assessment',
        description: 'The hiring protocol for the AI age. Test judgment, not syntax. AI-powered simulation by Richard Ewing.',
        url: 'https://www.richardewing.io/tools/audit-interview',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Audit Interview | Richard Ewing',
        description: 'Test engineering judgment, not syntax. The hiring protocol for the AI age.',
    },
};

export default function AuditInterviewLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'The Audit Interview',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        description: 'AI-powered engineering judgment assessment. Tests verification depth, architectural reasoning, and economic awareness — not syntax memorization.',
                        url: 'https://www.richardewing.io/tools/audit-interview',
                        offers: {
                            '@type': 'Offer',
                            price: '0',
                            priceCurrency: 'USD',
                        },
                        featureList: [
                            'AI-Powered Simulation',
                            'War-Time vs Peace-Time Assessment',
                            'Engineering Track Evaluation',
                            'Product Management Track Evaluation',
                            'Committee Review Scoring',
                        ],
                        creator: {
                            '@type': 'Person',
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
