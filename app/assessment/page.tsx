import type { Metadata } from 'next';
import AssessmentTool from './AssessmentTool';

export const metadata: Metadata = {
  title: 'AI Economics Assessment - Free AI Cost & Governance Score',
  description: 'Answer 15 questions about your AI infrastructure. Get an immediate AI Economics Score with estimated margin leakage, governance gaps, and recommended next steps. Free, no login required.',
  alternates: {
    canonical: 'https://www.richardewing.io/assessment',
  },
  openGraph: {
    title: 'AI Economics Assessment - Free AI Cost & Governance Score',
    description: 'Answer 15 questions about your AI infrastructure. Get an immediate AI Economics Score with estimated margin leakage and recommended next steps.',
    url: 'https://www.richardewing.io/assessment',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Economics Assessment - Free AI Cost & Governance Score',
    description: 'Answer 15 questions about your AI infrastructure. Get an immediate AI Economics Score with estimated margin leakage and recommended next steps.',
    images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
  },
};

export default function AssessmentPage() {
  return (
    <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24 px-6">
      <AssessmentTool />
    </main>
  );
}
