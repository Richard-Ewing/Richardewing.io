import type { Metadata } from 'next';
import { permanentRedirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Canonical Concepts Directory | Richard Ewing',
  description: 'Index of canonical definitions across AI Economics, AI Governance, and Software Economics.',
  alternates: {
    canonical: 'https://www.richardewing.io/concepts',
  },
};

export default function ResearchConceptsIndexPage() {
  permanentRedirect('/concepts');
}
