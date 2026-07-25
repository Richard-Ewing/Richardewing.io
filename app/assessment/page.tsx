import type { Metadata } from 'next';
import AssessmentTool from './AssessmentTool';

export const metadata: Metadata = {
  title: 'AI Economics Assessment - Free AI Cost & Governance Score | Richard Ewing',
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
    <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
      <div className="page-container max-w-4xl mx-auto px-6">
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'AI Economics Assessment',
              description: 'Free 15-question assessment that produces an AI Economics Score with estimated margin leakage, governance maturity analysis, and recommended next steps.',
              url: 'https://www.richardewing.io/assessment',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              author: {
                '@type': 'Person',
                name: 'Richard Ewing',
                url: 'https://www.richardewing.io',
              },
            }),
          }}
        />
        <AssessmentTool />
      </div>
    </main>
  );
}
