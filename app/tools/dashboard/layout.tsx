import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Intelligence Dashboard & Analytics',
    description: 'Diagnostic performance metrics, benchmark trends, and executive analytics across enterprise engineering portfolios. Quantify R&D waste and debt.',
    openGraph: {
        title: 'Intelligence Dashboard | Longitudinal Data',
        description: 'Track the evolution of your Product Debt, margins, and valuation gaps over time securely in the cloud.',
        type: 'website',
        url: 'https://www.richardewing.io/tools/dashboard',
    },
    alternates: {
        canonical: 'https://www.richardewing.io/tools/dashboard',
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
