import { PublishedProfiles } from '@/components/PublishedProfiles';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Media & Publications & Strategy Diagnostics | Richard Ewing',
    description: 'Media & Publications provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: [
        'Richard Ewing publications',
        'CIO.com contributor',
        'Built In author',
        'AI economist articles',
        'Mind the Product',
        'HackerNoon',
        'AI unit economics articles',
        'R&D audit thought leadership',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/profiles',
    },
    openGraph: {
        title: 'Published Profiles & Media | Richard Ewing',
        description: 'Expert contributor at CIO.com, Built In, Mind the Product, and HackerNoon. Read Richard Ewing\'s published work on AI economics and AI strategy.',
        url: 'https://www.richardewing.io/profiles',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Published Profiles | Richard Ewing',
        description: 'Expert contributor at CIO.com, Built In, Mind the Product. AI Economist (AI Economics Domain).',
    },
};

export default function ProfilesPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <PublishedProfiles />
            
                    <AdvisoryCTA variant="educational" />
                </div>
        </main>
    );
}
