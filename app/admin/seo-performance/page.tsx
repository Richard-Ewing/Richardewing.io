import type { Metadata } from 'next';
import SeoPerformanceDashboard from './content';

export const metadata: Metadata = {
    title: 'SEO Performance Dashboard | Admin',
    description: 'Google Search Console performance data — impressions, clicks, CTR by category. Monitor glossary vs paid funnel ratio.',
    robots: { index: false, follow: false },
};

export default function SeoPerformancePage() {
    return <SeoPerformanceDashboard />;
}
