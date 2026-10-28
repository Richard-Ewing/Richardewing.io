import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Richard Ewing',
    default: 'Intelligence Dashboard & Analytics | Richard Ewing',
  },
  description: 'Diagnostic performance metrics, benchmark trends, and executive analytics across enterprise engineering portfolios on richardewing.io.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
