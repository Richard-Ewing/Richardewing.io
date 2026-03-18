import { PublishedProfiles } from '@/components/PublishedProfiles';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Published Profiles & Media | Richard Ewing',
    description: 'Richard Ewing\'s published work across CIO.com (Foundry), Built In, Mind the Product, and HackerNoon. Expert contributor on product economics, R&D auditing, and AI unit economics.',
    keywords: [
        'Richard Ewing publications',
        'CIO.com contributor',
        'Built In author',
        'product economist articles',
        'Mind the Product',
        'HackerNoon',
        'AI unit economics articles',
        'R&D audit thought leadership',
    ],
    alternates: {
        canonical: 'https://richardewing.io/profiles',
    },
    openGraph: {
        title: 'Published Profiles & Media | Richard Ewing',
        description: 'Expert contributor at CIO.com, Built In, Mind the Product, and HackerNoon. Read Richard Ewing\'s published work on product economics and AI strategy.',
        url: 'https://richardewing.io/profiles',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Published Profiles | Richard Ewing',
        description: 'Expert contributor at CIO.com, Built In, Mind the Product. Product Economist & AI Capital Auditor.',
    },
};

export default function ProfilesPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <PublishedProfiles />
            </div>
        </main>
    );
}
