import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import ArticlesPage from './content';

export const metadata: Metadata = {
    title: 'The Cost of Insolvent Software | AI Engineering & Economics Articles',
    description: 'Deeper essays on technical due diligence, feature-bloat calculations, and the hidden operational inflation of enterprise generative AI integrations.',
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
        description: 'The canonical hub for frameworks and research used by top PE firms. Published in CIO.com, Built In, Mind the Product, and HackerNoon.',
        url: 'https://www.richardewing.io/articles',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Forensic Engineering Articles | Richard Ewing',
        description: 'Deep dives into R&D capital efficiency, AI unit economics, and technical debt valuation. Published across Tier 1 media.',
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
