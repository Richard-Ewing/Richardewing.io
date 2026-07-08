import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Careers at Richard Ewing & Strategy Diagnostics | Richard Ewing',
    description: 'Careers at Richard Ewing provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    alternates: { canonical: 'https://www.richardewing.io/careers' },
    openGraph: {
        title: 'Careers — Join the Engineering Economics Practice',
        description: 'Open roles at Richard Ewing Advisory. We hire for judgment, not syntax. Explore positions in AI economics, product engineering, and governance.',
        url: 'https://www.richardewing.io/careers',
        siteName: 'Richard Ewing',
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
