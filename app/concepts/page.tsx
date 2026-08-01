import type { Metadata } from 'next';
import ConceptsDirectoryPage from '@/app/research/concepts/page';

export const metadata: Metadata = {
  title: 'Canonical Concepts in AI Economics | Richard Ewing',
  description: 'Canonical definitions with provenance timelines and evidence ratings for AI Economics, AI Governance, and Software Economics. Cite these specifications directly.',
  alternates: {
    canonical: 'https://www.richardewing.io/concepts',
  },
  openGraph: {
    title: 'Canonical Concepts in AI Economics | Richard Ewing',
    description: 'Canonical definitions with provenance timelines and evidence ratings for AI Economics, AI Governance, and Software Economics. Cite these specifications directly.',
    url: 'https://www.richardewing.io/concepts',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canonical Concepts in AI Economics | Richard Ewing',
    description: 'Canonical definitions with provenance timelines and evidence ratings for AI Economics, AI Governance, and Software Economics. Cite these specifications directly.',
    images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
  },
};

export default function TopLevelConceptsPage() {
  return <ConceptsDirectoryPage />;
}
