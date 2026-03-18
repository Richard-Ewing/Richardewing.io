import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Legal & Terms of Use',
    description: 'Terms of service, privacy policy, intellectual property, and advisory disclaimers for richardewing.io.',
    alternates: {
        canonical: 'https://richardewing.io/legal',
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
