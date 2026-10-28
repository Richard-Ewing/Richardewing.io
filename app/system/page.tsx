import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'The Product & AI Economics System',
  description: 'Audit R&D capital efficiency, AI token margins, and technical insolvency dates using Richard Ewing diagnostic calculators and board playbooks.',
  alternates: {
    canonical: 'https://www.richardewing.io/system',
  },
  openGraph: {
    title: 'The Product & AI Economics System | Richard Ewing',
    description: 'Audit R&D capital efficiency, AI token margins, and technical insolvency dates using Richard Ewing diagnostic calculators and board playbooks.',
    url: 'https://www.richardewing.io/system',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/api/og?title=The+AI+Economics+System&category=Operating+System' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Product & AI Economics System | Richard Ewing',
    description: 'Audit R&D capital efficiency, AI token margins, and technical insolvency dates using Richard Ewing diagnostic calculators and board playbooks.',
    images: ['https://www.richardewing.io/api/og?title=The+AI+Economics+System&category=Operating+System'],
  },
};

export default function SystemPage() {
  return <Content />;
}
