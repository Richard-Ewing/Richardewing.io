import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Free AI Tools for Product & Engineering Leaders',
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
    alternates: {
        canonical: '/tools',
    },
    openGraph: {
        title: 'Free AI Diagnostic Tools | Product Economist',
        description: 'Calculate your AI margin collapse point, engineering efficiency, and product debt. Instant actionable insights.',
        type: 'website',
        url: 'https://richardewing.io/tools',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free AI Diagnostic Tools | Richard Ewing',
        description: 'Calculate AI costs, product debt, team efficiency. Free tools for product leaders.',
    },
};

export default function ToolsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
