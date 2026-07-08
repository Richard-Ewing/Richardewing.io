import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Enterprise Team Governance Das & Strategy Diagnostics | Richard Ewing',
    description: 'Enterprise Team Governance Das provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
};

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
    return children;
}
