import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Richard Ewing',
    default: 'AI Economics Careers & Fellowships | Richard Ewing',
  },
  description: 'Explore AI Economist career tracks, compensation bands, and fellowship roles helping CEOs, CFOs, and CTOs protect software gross margins.',
  openGraph: {
    title: 'AI Economics Careers & Fellowships | Richard Ewing',
    description: 'Explore AI Economist career tracks, compensation bands, and fellowship roles helping CEOs, CFOs, and CTOs protect software gross margins.',
    url: 'https://www.richardewing.io/careers',
    siteName: 'Richard Ewing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Economics Careers & Fellowships | Richard Ewing',
    description: 'Explore AI Economist career tracks, compensation bands, and fellowship roles helping CEOs, CFOs, and CTOs protect software gross margins.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
