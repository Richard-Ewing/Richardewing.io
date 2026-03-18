import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Free AI & R&D Diagnostic Tools | Product Economist',
    description: 'Free diagnostic tools for technical debt, AI unit economics, SaaS valuation, and engineering efficiency. Product Debt Index, AUEB, EV-SE, APER, and The Audit Interview. By Richard Ewing.',
    keywords: [
        'free AI tools',
        'technical debt calculator',
        'AI unit economics tool',
        'SaaS valuation calculator',
        'revenue per engineer',
        'product economist tools',
        'R&D diagnostic',
        'engineering audit tools',
        'AI cost calculator',
        'LLM cost comparison',
    ],
    alternates: {
        canonical: 'https://richardewing.io/tools',
    },
    openGraph: {
        title: 'Free Diagnostic Tools | Product Economist',
        description: 'Quantify technical debt, AI costs, enterprise value risk, and engineering efficiency. Five free diagnostic tools.',
        url: 'https://richardewing.io/tools',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free AI & R&D Diagnostic Tools | Richard Ewing',
        description: 'Five free diagnostic tools: PDI, AUEB, EV-SE, APER, and The Audit Interview.',
    },
};

export default function ToolsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
