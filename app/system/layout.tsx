import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Operating System | Algorithmic Solvency Tools',
    description: 'The Product Economist operating system. AI-powered diagnostic tools for technical debt quantification, AI unit economics, enterprise valuation, and engineering efficiency. By Richard Ewing.',
    keywords: [
        'product economist tools',
        'algorithmic solvency',
        'technical debt calculator',
        'AI unit economics',
        'enterprise valuation engine',
        'APER diagnostic',
        'audit interview',
        'Q-PEP protocol',
        'capital leakage',
    ],
    alternates: {
        canonical: 'https://richardewing.io/system',
    },
    openGraph: {
        title: 'The Operating System | Algorithmic Solvency',
        description: 'AI-powered diagnostic tools from the Product Economist. Force financial transparency in your product organization.',
        url: 'https://richardewing.io/system',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Operating System | Richard Ewing',
        description: 'AI-powered solvency diagnostics. PDI, AUEB, EV-SE, APER, and The Audit Interview.',
    },
};

export default function SystemLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
