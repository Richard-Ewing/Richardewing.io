import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'AI Builder & Operator 7-Day Sprint',
  description: 'Run the free 7-day executive sprint covering AI unit economics, spec-driven agent rules, pricing stress tests, and customer margin validation.',
  alternates: {
    canonical: 'https://www.richardewing.io/starter-kit',
  },
  openGraph: {
    title: 'AI Builder & Operator 7-Day Sprint | Richard Ewing',
    description: 'Run the free 7-day executive sprint covering AI unit economics, spec-driven agent rules, pricing stress tests, and customer margin validation.',
    url: 'https://www.richardewing.io/starter-kit',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/api/og?title=AI+Builder+7-Day+Sprint&category=Starter+Kit' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Builder & Operator 7-Day Sprint | Richard Ewing',
    description: 'Run the free 7-day executive sprint covering AI unit economics, spec-driven agent rules, pricing stress tests, and customer margin validation.',
    images: ['https://www.richardewing.io/api/og?title=AI+Builder+7-Day+Sprint&category=Starter+Kit'],
  },
};

export default function StarterKitPage() {
  return <Content />;
}
