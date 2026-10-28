import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'Legal Terms, Privacy & Disclaimers',
  description: 'Review official terms of service, data privacy policies, diagnostic safe harbors, and intellectual property protections on richardewing.io.',
  alternates: {
    canonical: 'https://www.richardewing.io/legal',
  },
  openGraph: {
    title: 'Legal Terms, Privacy & Disclaimers | Richard Ewing',
    description: 'Review official terms of service, data privacy policies, diagnostic safe harbors, and intellectual property protections on richardewing.io.',
    url: 'https://www.richardewing.io/legal',
    siteName: 'Richard Ewing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Terms, Privacy & Disclaimers | Richard Ewing',
    description: 'Review official terms of service, data privacy policies, diagnostic safe harbors, and intellectual property protections on richardewing.io.',
  },
};

export default function LegalPage() {
  return <Content />;
}
