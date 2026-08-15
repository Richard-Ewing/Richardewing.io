import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Enterprise Research Reports',
    description: 'Empirical research reports on AI governance maturity, R&D capital efficiency, and software margin durability.',
    alternates: { canonical: 'https://www.richardewing.io/reports' },
    openGraph: {
        title: 'Reports  -  Engineering Economics Research',
        description: 'Original research on AI unit economics, technical debt quantification, and R&D capital efficiency. Data-driven reports for enterprise leaders.',
        url: 'https://www.richardewing.io/reports',
        siteName: 'Richard Ewing',
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
