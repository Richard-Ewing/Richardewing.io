import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Legal Terms & Privacy Policy',
    description: 'Official legal terms of service, privacy policy, enterprise advisory disclaimers, and intellectual property protections for Richard Ewing.',
    alternates: {
        canonical: 'https://www.richardewing.io/legal',
    },
    openGraph: {
        title: 'Legal Terms & Privacy Policy | Richard Ewing',
        description: 'Official legal terms of service, privacy policy, enterprise advisory disclaimers, and intellectual property protections.',
        url: 'https://www.richardewing.io/legal',
        type: 'website',
        siteName: 'Richard Ewing',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Legal Terms & Privacy Policy | Richard Ewing',
        description: 'Official legal terms of service, privacy policy, enterprise advisory disclaimers, and intellectual property protections.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
        },
    },
};

const legalSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Legal Terms, Terms of Service & Privacy Policy',
    description: 'Master legal terms, enterprise advisory disclaimers, privacy policy, and intellectual property declarations for Richard Ewing.',
    url: 'https://www.richardewing.io/legal',
    publisher: {
        '@type': 'Person',
        name: 'Richard Ewing',
        url: 'https://www.richardewing.io',
    },
};

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }}
            />
            {children}
        </>
    );
}

