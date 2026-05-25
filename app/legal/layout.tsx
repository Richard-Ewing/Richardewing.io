import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Legal & Terms of Use | Richard Ewing Advisory',
    description: 'Terms of service, privacy policy, intellectual property rights, and advisory engagement disclaimers for richardewing.io.',
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
