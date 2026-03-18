import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Audit Interview Scoring | Committee Review System',
    description: 'Production-ready scoring logic for the Audit Interview. Evaluate verification depth, architectural reasoning, economic awareness, and capital stewardship. By Richard Ewing, Product Economist.',
    keywords: [
        'audit interview scoring',
        'engineering interview rubric',
        'product economist',
        'candidate evaluation',
        'technical interview scoring',
        'committee review',
        'engineering judgment assessment',
        'verification skills scoring',
    ],
    openGraph: {
        title: 'Audit Interview Scoring | Product Economist',
        description: 'Quantify candidate judgment and capital risk awareness with the Audit Interview committee review.',
        type: 'website',
        url: 'https://richardewing.io/tools/scoring',
    },
    twitter: {
        card: 'summary',
        title: 'Audit Interview Scoring | Richard Ewing',
        description: 'Committee review scoring for engineering judgment assessment.',
    },
    alternates: {
        canonical: 'https://richardewing.io/tools/scoring',
    },
};

export default function ScoringLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
