import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Free AI & R&D Diagnostic Tools | Product Economist',
    description: 'Free diagnostic tools for technical debt, AI unit economics, SaaS valuation, and engineering efficiency. Product Debt Index, AUEB, EV-SE, APER, and The Audit Interview. By Richard Ewing.',
    keywords: [
        'free AI tools', 'technical debt calculator', 'AI unit economics tool',
        'SaaS valuation calculator', 'revenue per engineer',
        'product economist tools', 'R&D diagnostic', 'engineering audit tools',
        'AI cost calculator', 'LLM cost comparison',
        // Everyday search terms
        'free business calculators', 'free SaaS tools',
        'startup tools', 'engineering management tools',
        'free AI cost estimator', 'business diagnostic tools',
        'CTO tools', 'CFO tools for tech companies',
        'due diligence tools', 'investor tools', 'board reporting tools',
        'free online business tools 2026', 'AI budget calculator',
        'software cost estimation tools', 'engineering planning tools',
        'free valuation tools', 'company health check tools',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools',
    },
    openGraph: {
        title: 'Free Diagnostic Tools | Product Economist',
        description: 'Quantify technical debt, AI costs, enterprise value risk, and engineering efficiency. Five free diagnostic tools.',
        url: 'https://www.richardewing.io/tools',
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
