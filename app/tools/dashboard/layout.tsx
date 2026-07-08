import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Intelligence Dashboard & Strategy Diagnostics | Richard Ewing',
    description: 'Intelligence Dashboard provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: ['Longitudinal intelligence Dashboard', 'Historical Metric Repository', 'Product Debt tracking', 'Margin Erosion Tracker'],
    openGraph: {
        title: 'Intelligence Dashboard | Longitudinal Data',
        description: 'Track the evolution of your Product Debt, margins, and valuation gaps over time securely in the cloud.',
        type: 'website',
        url: 'https://www.richardewing.io/tools/dashboard',
    },
    alternates: {
        canonical: 'https://www.richardewing.io/tools/dashboard',
    },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
