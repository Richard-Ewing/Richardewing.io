import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Careers & Fellowships',
    description: 'Join the research and advisory team building deterministic AI governance and economic diagnostics.',
    alternates: { canonical: 'https://www.richardewing.io/careers' },
    openGraph: {
        title: 'Careers  -  Join the Engineering Economics Practice',
        description: 'Open roles at Richard Ewing Advisory. We hire for judgment, not syntax. Explore positions in AI economics, product engineering, and governance.',
        url: 'https://www.richardewing.io/careers',
        siteName: 'Richard Ewing',
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
