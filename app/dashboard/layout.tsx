import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Enterprise R&D Command Center & Strategy Diagnostics | Richard Ewing',
    description: 'Enterprise R&D Command Center provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
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
