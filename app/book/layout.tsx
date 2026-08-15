import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The AI Economist: Field Guide',
    description: 'Frameworks for technology leaders managing enterprise AI capital allocation and margin integrity.',
    keywords: [
        'AI economist book',
        'R&D capital allocation',
        'technical debt valuation book',
        'Richard Ewing book',
        'product management book',
        'engineering economics',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/book',
    },
    openGraph: {
        title: 'The AI Economist  -  Book by Richard Ewing',
        description: 'The definitive guide to R&D capital allocation and technical debt valuation. Coming soon.',
        url: 'https://www.richardewing.io/book',
        type: 'book',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The AI Economist  -  Book Coming Soon',
        description: 'The definitive guide to R&D capital allocation by Richard Ewing.',
    },
};

export default function BookLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
