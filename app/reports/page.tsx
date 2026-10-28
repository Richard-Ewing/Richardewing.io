import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'AI Economics & R&D Research Reports',
  description: 'Download empirical research reports on AI inference margins, technical debt valuation, and R&D capital allocation for CEOs, CFOs, and CTOs.',
  alternates: {
    canonical: 'https://www.richardewing.io/reports',
  },
  openGraph: {
    title: 'AI Economics & R&D Research Reports | Richard Ewing',
    description: 'Download empirical research reports on AI inference margins, technical debt valuation, and R&D capital allocation for CEOs, CFOs, and CTOs.',
    url: 'https://www.richardewing.io/reports',
    siteName: 'Richard Ewing',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/api/og?title=AI+Economics+Research+Reports&category=Empirical+Research' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Economics & R&D Research Reports | Richard Ewing',
    description: 'Download empirical research reports on AI inference margins, technical debt valuation, and R&D capital allocation for CEOs, CFOs, and CTOs.',
    images: ['https://www.richardewing.io/api/og?title=AI+Economics+Research+Reports&category=Empirical+Research'],
  },
};

export default function ReportsPage() {
  return <Content />;
}
