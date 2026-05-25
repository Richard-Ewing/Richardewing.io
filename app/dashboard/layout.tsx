import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Enterprise R&D Command Center | Richard Ewing',
    description: 'Track engineering economics, unit margins, and calculate your Technical Insolvency Date from your central command dashboard.',
    alternates: {
        canonical: 'https://www.richardewing.io/dashboard',
    },
    robots: {
        index: false, // Keep authenticated dashboard pages hidden from public search engines
        follow: false,
    },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
