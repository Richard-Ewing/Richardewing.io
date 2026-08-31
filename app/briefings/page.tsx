import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import BriefingsPage from './content';

export const metadata: Metadata = {
    title: 'Executive AI Research Briefings',
    description: 'Curated monthly briefings on enterprise AI unit economics, R&D capital efficiency, and agentic governance.',
    keywords: [
        'executive briefings',
        'war-time leadership',
        'engineering economics',
        'AI strategy briefings',
        'technical insolvency',
        'AI economist newsletter',
        'R&D capital intelligence',
        'AI volatility tax',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/briefings',
    },
    openGraph: {
        title: 'Executive Briefings | War-Time Leadership Support',
        description: 'High-signal intelligence on engineering economics, AI cost governance, and the negative-carry code crisis.',
        url: 'https://www.richardewing.io/briefings',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Executive Briefings | Richard Ewing',
        description: 'High-signal intelligence for War-Time Executives navigating AI volatility.',
    },
};

export default function Page() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <BriefingsPage />
                <AdvisoryCTA variant="educational" />
            </div>
        </main>
    );
}
