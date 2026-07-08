import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Legal & Terms of Use & Strategy Diagnostics | Richard Ewing',
    description: 'Legal & Terms of Use provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    alternates: {
        canonical: 'https://www.richardewing.io/legal',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
