import { Metadata } from 'next';
import FrameworksPage from './content';

export const metadata: Metadata = {
    title: 'AI Diagnostic Frameworks | Free Downloads | Ewing',
    description: 'Operational frameworks for AI economics: Innovation Tax, Technical Insolvency Date, APER ratio, and 16 more diagnostic models. Free access.',
    keywords: [
        'AI governance frameworks',
        'technical debt frameworks',
        'AI margin collapse',
        'cost of predictivity',
        'synthetic COGS',
        'enterprise AI operations',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/frameworks',
    },
    openGraph: {
        title: 'Operational Frameworks & Diagnostics | Richard Ewing',
        description: 'Enterprise governance frameworks for AI integration. Technical Insolvency, Innovation Tax, Cost of Predictivity, and Synthetic COGS.',
        url: 'https://www.richardewing.io/frameworks',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Operational Frameworks | Richard Ewing',
        description: 'Enterprise governance frameworks for AI integration and technical debt management.',
    },
};

export default function Page() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <FrameworksPage />
            </div>
        </main>
    );
}
