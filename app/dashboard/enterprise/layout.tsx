import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Enterprise Team Governance Dashboard | Cross-Division AI Risk | Richard Ewing',
    description: 'Cross-departmental governance observability and hallucination debt tracking. Monitor Product Debt Index and AI Gross Margins across all organizational divisions.',
};

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
    return children;
}
