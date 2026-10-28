import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'AI Economics Careers & Fellowships',
  description: 'Explore AI Economist career tracks, compensation bands, and fellowship roles helping CEOs, CFOs, and CTOs protect software gross margins.',
  alternates: {
    canonical: 'https://www.richardewing.io/careers',
  },
  openGraph: {
    title: 'AI Economics Careers & Fellowships | Richard Ewing',
    description: 'Explore AI Economist career tracks, compensation bands, and fellowship roles helping CEOs, CFOs, and CTOs protect software gross margins.',
    url: 'https://www.richardewing.io/careers',
    siteName: 'Richard Ewing',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/api/og?title=AI+Economics+Careers+%26+Fellowships&category=Career+Architecture' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Economics Careers & Fellowships | Richard Ewing',
    description: 'Explore AI Economist career tracks, compensation bands, and fellowship roles helping CEOs, CFOs, and CTOs protect software gross margins.',
    images: ['https://www.richardewing.io/api/og?title=AI+Economics+Careers+%26+Fellowships&category=Career+Architecture'],
  },
};

export default function CareersPage() {
  return <Content />;
}
