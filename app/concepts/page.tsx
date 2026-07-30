import type { Metadata } from 'next';
import ConceptsDirectoryPage from '@/app/research/concepts/page';

export const metadata: Metadata = {
  title: 'Canonical Concepts Directory | Richard Ewing',
  description: 'Authoritative canonical definitions, provenance timelines, and evidence ratings for core concepts in AI Economics, AI Governance, and Software Economics.',
  alternates: {
    canonical: 'https://www.richardewing.io/concepts',
  },
};

export default function TopLevelConceptsPage() {
  return <ConceptsDirectoryPage />;
}
