import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Product Economist Manifesto | Innovation Without Solv...',
    description: 'The era of the "Happy Builder" is over. A manifesto on capital sovereignty for product leaders. By Richard Ewing, Product Economist and Founder of Exogram.',
    keywords: [
        'product economist manifesto',
        'innovation without solvency',
        'capital sovereignty',
        'product leadership',
        'ZIRP era product management',
        'feature factory',
        'unit economics',
        'Richard Ewing',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/manifesto',
    },
    openGraph: {
        title: 'The Product Economist Manifesto',
        description: 'The era of the "Happy Builder" is over. Innovation without solvency is just philanthropy.',
        url: 'https://www.richardewing.io/manifesto',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Product Economist Manifesto',
        description: 'Innovation without solvency is just philanthropy. By Richard Ewing.',
    },
};

export default function ManifestoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
