import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Careers at Richard Ewing | AI Economics Practice',
    description: 'Join the engineering economics practice. Open roles in AI product economics, generative UI architecture, and technical due diligence.',
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
