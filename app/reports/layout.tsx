import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Engineering Reports | Research by Richard Ewing',
    description: 'Original research reports on AI economics, engineering efficiency, and R&D capital allocation. Data-driven analysis for enterprise leaders.',
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
