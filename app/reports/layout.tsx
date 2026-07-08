import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Data & Strategy Diagnostics | Richard Ewing',
    description: 'Data provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
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
