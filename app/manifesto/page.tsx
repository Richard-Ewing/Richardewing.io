import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'The Product & AI Economist Manifesto',
  description: 'Why B2B SaaS roadmaps require CFO-grade capital allocation, unit margin discipline, and deterministic runtime governance by Richard Ewing.',
  alternates: {
    canonical: 'https://www.richardewing.io/manifesto',
  },
  openGraph: {
    title: 'The Product & AI Economist Manifesto | Richard Ewing',
    description: 'Why B2B SaaS roadmaps require CFO-grade capital allocation, unit margin discipline, and deterministic runtime governance by Richard Ewing.',
    url: 'https://www.richardewing.io/manifesto',
    type: 'article',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Product & AI Economist Manifesto | Richard Ewing',
    description: 'Why B2B SaaS roadmaps require CFO-grade capital allocation, unit margin discipline, and deterministic runtime governance by Richard Ewing.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

export default function ManifestoPage() {
  return <Content />;
}
