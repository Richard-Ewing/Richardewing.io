import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Product Economist — Book by Richard Ewing | Coming Soon',
    description: 'The definitive guide to R&D capital allocation and technical debt valuation. Pre-order the book by Richard Ewing, Product Economist and Founder of Exogram.',
    keywords: [
        'product economist book',
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
        title: 'The Product Economist — Book by Richard Ewing',
        description: 'The definitive guide to R&D capital allocation and technical debt valuation. Coming soon.',
        url: 'https://www.richardewing.io/book',
        type: 'book',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Product Economist — Book Coming Soon',
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
