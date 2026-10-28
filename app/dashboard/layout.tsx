import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Richard Ewing',
    default: 'Executive R&D Dashboard | Richard Ewing',
  },
  description: 'Executive command center for visualizing technical debt valuation, APER scores, and AI unit economics across engineering portfolios.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
