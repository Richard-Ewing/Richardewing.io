import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Legal Terms & Privacy Policy',
    description: 'Legal terms, privacy policy, trademark declarations, and advisory disclaimers for Richard Ewing Advisory.',
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
