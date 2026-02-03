import { Metadata } from 'next';
import BriefingsPage from './content';

export const metadata: Metadata = {
    title: 'Executive Briefings | Richard Ewing',
    description: 'High-signal intelligence for War-Time Executives. The "Briefs" that define the market and navigate the AI volatility tax.',
    openGraph: {
        title: 'Executive Briefings | War-Time Leadership Support',
        description: 'Read the latest intelligence briefings on Engineering Economics and AI Strategy.',
        url: 'https://richardewing.io/briefings',
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
