import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Doctrine of Product Economics | Operational Principles',
    description: 'The immutable laws of software solvency. Capital allocation over agile theater. Technical Insolvency Date. The Innovation Tax. Strategic definitions that govern the Product Economist methodology.',
    keywords: [
        'product economics doctrine',
        'technical insolvency date',
        'innovation tax',
        'capital allocation',
        'agile theater',
        'product economist',
        'software solvency',
        'R&D capital efficiency',
        'technical debt valuation',
        'kill switch protocol',
    ],
    alternates: {
        canonical: 'https://richardewing.io/doctrine',
    },
    openGraph: {
        title: 'The Doctrine of Product Economics | Richard Ewing',
        description: 'The immutable laws of software solvency. Strategic definitions that govern R&D capital allocation and engineering accountability.',
        url: 'https://richardewing.io/doctrine',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Doctrine of Product Economics',
        description: 'Capital allocation over agile theater. The immutable laws of software solvency by Richard Ewing.',
    },
};

export default function DoctrineLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
