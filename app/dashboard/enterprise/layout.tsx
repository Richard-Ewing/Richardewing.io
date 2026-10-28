import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Richard Ewing',
    default: 'Enterprise Governance Dashboard | Richard Ewing',
  },
  description: 'Team-level monitoring portal for tracking developer agent expenditures, context health, and policy adherence across engineering teams.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
