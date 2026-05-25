import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Data-Driven Reports on AI Waste & R&D Bleed | Richard Ewing',
    description: 'Original research and analysis on AI engineering failure rates, unit economics traps, and R&D capital inefficiencies. Insights for tech executives.',
    alternates: { canonical: 'https://www.richardewing.io/reports' },
    openGraph: {
        title: 'Reports — Engineering Economics Research',
        description: 'Original research on AI unit economics, technical debt quantification, and R&D capital efficiency. Data-driven reports for enterprise leaders.',
        url: 'https://www.richardewing.io/reports',
        siteName: 'Richard Ewing',
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
