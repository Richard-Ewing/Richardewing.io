import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Richard Ewing',
    default: 'AI Economics & R&D Research Reports | Richard Ewing',
  },
  description: 'Download empirical research reports on AI inference margins, technical debt valuation, and R&D capital allocation for CEOs, CFOs, and CTOs.',
};

export default function ReportsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
