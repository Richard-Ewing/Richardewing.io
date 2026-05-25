import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The AI Economics Operating System | Stop R&D Capital Leakage',
    description: 'Force financial transparency in your engineering org. Access the full suite of diagnostic tools, audit protocols, and governance frameworks by Richard Ewing.',
    keywords: [
        'AI economist tools',
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
        canonical: 'https://www.richardewing.io/system',
    },
    openGraph: {
        title: 'The Operating System | Algorithmic Solvency',
        description: 'AI-powered diagnostic tools from the AI Economist. Force financial transparency in your product organization.',
        url: 'https://www.richardewing.io/system',
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
