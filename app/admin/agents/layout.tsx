import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Agent Operations Dashboard & Strategy Diagnostics | Richard Ewing',
    description: 'Agent Operations Dashboard provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    robots: 'noindex, nofollow',
};

export default function AdminAgentsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
