import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import ArticlesPage from './content';

export const metadata: Metadata = {
    title: 'Forensic Engineering Research & Strategy Diagnostics | Richard Ewing',
    description: 'Forensic Engineering Research provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
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
            
                    <AdvisoryCTA variant="educational" />
                </div>
        </main>
    );
}
