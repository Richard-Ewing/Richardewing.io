import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Scoring Engine | Hiring Decision Framework',
    description: 'A production-ready logic tool for scoring candidates based on constraint recognition, tradeoff articulation, economic awareness, and failure anticipation.',
    keywords: [
        'hiring scoring engine',
        'engineering interview rubric',
        'product economist',
        'candidate evaluation',
        'technical interview scoring'
    ],
    openGraph: {
        title: 'The Scoring Engine | Hiring Decision Framework',
        description: 'Quantify candidate judgment and capital risk.',
        type: 'website',
    },
};

export default function ScoringLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
