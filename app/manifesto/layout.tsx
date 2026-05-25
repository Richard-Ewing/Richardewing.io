import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The AI Economist Manifesto | Richard Ewing',
    description: 'Innovation without solvency is philanthropy. A manifesto on capital sovereignty for product leaders navigating the AI era. By Richard Ewing.',
    keywords: [
        'AI economist manifesto',
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
        title: 'The AI Economist Manifesto',
        description: 'The era of the "Happy Builder" is over. Innovation without solvency is just philanthropy.',
        url: 'https://www.richardewing.io/manifesto',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The AI Economist Manifesto',
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
