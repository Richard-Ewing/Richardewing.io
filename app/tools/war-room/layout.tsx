import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'C-Suite War Room | Executive Dashboards',
    description: 'Real-time cross-departmental diagnostic dashboard. Aggregate your Product Debt Index, AI Unit Economics, and valuation erosion into a single pane of glass.',
    keywords: ['C-Suite War Room', 'Executive Dashboard', 'CTO Dashboard', 'CFO FinOps Dashboard', 'Enterprise Valuation Metrics'],
    openGraph: {
        title: 'C-Suite War Room | Executive Dashboards',
        description: 'Aggregate your execution risk and valuation metrics into a single pane of glass.',
        type: 'website',
        url: 'https://www.richardewing.io/tools/war-room',
    },
    alternates: {
        canonical: 'https://www.richardewing.io/tools/war-room',
    },
};

export default function WarRoomLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
