import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Spot Execution Risk & Margin Erosion | C-Suite Board Room',
    description: 'Stop relying on vanity metrics. Aggregate your Product Debt Index, AI unit economics collapse points, and R&D capital waste in a single executive view.',
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
