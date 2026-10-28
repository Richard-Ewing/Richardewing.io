import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Richard Ewing',
    default: 'Agent Operations Dashboard | Richard Ewing',
  },
  description: 'Administrative dashboard for monitoring autonomous agent operations, edge verification runs, and system prompt telemetry.',
  robots: { index: false, follow: false },
};

export default function AdminAgentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
