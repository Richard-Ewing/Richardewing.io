import { Metadata } from 'next';
import BriefingsPage from './content';

export const metadata: Metadata = {
    title: 'Executive Briefings | War-Time Intelligence for AI-Era Leaders',
    description: 'High-signal intelligence for War-Time Executives. Briefings on engineering economics, AI cost governance, technical insolvency, and the subprime code crisis. By Richard Ewing, Product Economist.',
    keywords: [
        'executive briefings',
        'war-time leadership',
        'engineering economics',
        'AI strategy briefings',
        'technical insolvency',
        'product economist newsletter',
        'R&D capital intelligence',
        'AI volatility tax',
    ],
    alternates: {
        canonical: 'https://richardewing.io/briefings',
    },
    openGraph: {
        title: 'Executive Briefings | War-Time Leadership Support',
        description: 'High-signal intelligence on engineering economics, AI cost governance, and the subprime code crisis.',
        url: 'https://richardewing.io/briefings',
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
