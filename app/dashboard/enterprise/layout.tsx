import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Enterprise Governance Dashboard',
    description: 'Team-level monitoring portal for tracking developer agent expenditures, context health, and policy adherence.',
};

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
    return children;
}
