import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'Operator Diagnostic Missions & Sprints',
  description: 'Complete guided diagnostic missions to audit Zombie Features, stress-test AI pricing margins, and prepare CFO-ready R&D capital readouts.',
  alternates: {
    canonical: 'https://www.richardewing.io/missions',
  },
  openGraph: {
    title: 'Operator Diagnostic Missions & Sprints | Richard Ewing',
    description: 'Complete guided diagnostic missions to audit Zombie Features, stress-test AI pricing margins, and prepare CFO-ready R&D capital readouts.',
    url: 'https://www.richardewing.io/missions',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/api/og?title=Operator+Diagnostic+Missions&category=Guided+Audits' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operator Diagnostic Missions & Sprints | Richard Ewing',
    description: 'Complete guided diagnostic missions to audit Zombie Features, stress-test AI pricing margins, and prepare CFO-ready R&D capital readouts.',
    images: ['https://www.richardewing.io/api/og?title=Operator+Diagnostic+Missions&category=Guided+Audits'],
  },
};

export default function MissionsPage() {
  return <Content />;
}
