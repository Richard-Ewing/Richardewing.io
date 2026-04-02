import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'C-Suite Board Room | Executive Dashboards',
    description: 'Real-time cross-departmental diagnostic dashboard. Aggregate your Product Debt Index, AI Unit Economics, and valuation erosion into a single pane of glass.',
    keywords: ['C-Suite Board Room', 'Executive Dashboard', 'CTO Dashboard', 'CFO FinOps Dashboard', 'Enterprise Valuation Metrics'],
    openGraph: {
        title: 'C-Suite Board Room | Executive Dashboards',
        description: 'Aggregate your execution risk and valuation metrics into a single pane of glass.',
        type: 'website',
        url: 'https://www.richardewing.io/tools/board-room',
    },
    alternates: {
        canonical: 'https://www.richardewing.io/tools/board-room',
    },
};

export default function BoardRoomLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
