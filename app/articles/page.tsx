import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import ArticlesPage from './content';
import { GooglePreferredBadge } from '@/app/components/GooglePreferredBadge';

export const metadata: Metadata = {
    title: 'Forensic AI & Engineering Research',
    description: 'Published research, essays, and empirical articles on AI unit economics, R&D capital efficiency, and tech debt. Written for CTOs and engineering leaders.',
    keywords: [
        'AI economist articles',
        'R&D capital efficiency',
        'technical debt valuation articles',
        'AI unit economics research',
        'engineering economics',
        'Richard Ewing CIO.com',
        'Richard Ewing Built In',
        'product management thought leadership',
        'forensic engineering',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/articles',
    },
    openGraph: {
        title: 'Forensic Engineering Research & Articles | Richard Ewing',
        description: 'Deep essays on R&D capital efficiency, AI unit economics, and technical debt valuation. Published in CIO.com, Built In, and Mind the Product.',
        url: 'https://www.richardewing.io/articles',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Forensic Engineering Research & Articles | Richard Ewing',
        description: 'Deep essays on R&D capital efficiency, AI unit economics, and technical debt valuation. Published in CIO.com, Built In, and Mind the Product.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

export default function Page() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <ArticlesPage />
                <GooglePreferredBadge variant="card" />
                <AdvisoryCTA variant="educational" />
            </div>
        </main>
    );
}
