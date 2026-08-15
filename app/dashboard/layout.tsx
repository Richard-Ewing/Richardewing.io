import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Executive R&D Dashboard',
    description: 'Executive command center for visualizing technical debt valuation, APER scores, and AI unit economics.',
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
