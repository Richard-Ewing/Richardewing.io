import { Metadata } from 'next';
import BriefingsPage from './content';

export const metadata: Metadata = {
    title: 'Executive AI Briefings | Board-Ready Intel | Ewing',
    description: 'Concise executive briefings on AI economics, R&D risk, and competitive positioning. Designed for board presentations and C-suite strategy.',
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
        description: 'High-signal intelligence on engineering economics, AI cost governance, and the subprime code crisis.',
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
            </div>
        </main>
    );
}
