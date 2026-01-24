import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Audit Interview | Product Economist',
    description: 'Production-ready logic for auditing candidates. Evaluate verification depth, architectural reasoning, and economic awareness.',
    keywords: [
        'hiring audit interview',
        'engineering interview rubric',
        'product economist',
        'candidate evaluation',
        'technical interview scoring'
    ],
    openGraph: {
        title: 'Audit Interview | Product Economist',
        description: 'Quantify candidate judgment and capital risk.',
        type: 'website',
    },
    alternates: {
        canonical: '/tools/scoring',
    },
};

export default function ScoringLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
