import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Free AI Tools for Product & Engineering Leaders | Richard Ewing',
    description: 'Free diagnostic tools to calculate AI unit economics, team efficiency, product debt, and valuation scenarios. Instant boardroom-ready insights.',
    keywords: [
        'AI unit economics calculator',
        'product debt calculator',
        'engineering team efficiency',
        'COGS calculator AI',
        'startup valuation tool',
        'product management tools',
        'free AI tools for startups',
        'engineering ROI calculator',
    ],
    openGraph: {
        title: 'Free AI Diagnostic Tools | Product Economist',
        description: 'Calculate your AI margin collapse point, engineering efficiency, and product debt. Instant actionable insights.',
        type: 'website',
    },
};

export default function ToolsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
