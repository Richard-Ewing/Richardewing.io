import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'Executive AI & R&D Assessments',
  description: 'Score your engineering efficiency, AI gross margin durability, and technical debt exposure across interactive diagnostic assessments in minutes.',
  alternates: {
    canonical: 'https://www.richardewing.io/assessments',
  },
  openGraph: {
    title: 'Executive AI & R&D Assessments | Richard Ewing',
    description: 'Score your engineering efficiency, AI gross margin durability, and technical debt exposure across interactive diagnostic assessments in minutes.',
    url: 'https://www.richardewing.io/assessments',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/api/og?title=Executive+AI+%26+R%26D+Assessments&category=Diagnostics' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive AI & R&D Assessments | Richard Ewing',
    description: 'Score your engineering efficiency, AI gross margin durability, and technical debt exposure across interactive diagnostic assessments in minutes.',
    images: ['https://www.richardewing.io/api/og?title=Executive+AI+%26+R%26D+Assessments&category=Diagnostics'],
  },
};

export default function AssessmentsPage() {
  return <Content />;
}
