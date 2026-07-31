import type { Metadata } from 'next';
import AssessmentTool from './AssessmentTool';

export const metadata: Metadata = {
  title: 'AI Economics Assessment Free Governance Score | Richard Ewing',
  description: 'Calculate your AI economics score with a 15-question diagnostic. Identify governance gaps and estimate margin leakage immediately.',
  alternates: {
    canonical: 'https://www.richardewing.io/assessment',
  },
  openGraph: {
    title: 'AI Economics Assessment Free Governance Score | Richard Ewing',
    description: 'Calculate your AI economics score with a 15-question diagnostic. Identify governance gaps and estimate margin leakage immediately.',
    url: 'https://www.richardewing.io/assessment',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Economics Assessment Free Governance Score | Richard Ewing',
    description: 'Calculate your AI economics score with a 15-question diagnostic. Identify governance gaps and estimate margin leakage immediately.',
    images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
  },
};

export default function AssessmentPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Calculate Your AI Economics Score",
    "description": "Evaluate your AI infrastructure cost and governance gaps with our free assessment tool.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Answer Infrastructure Questions",
        "text": "Complete a 15-question diagnostic covering your current AI usage, APIs, and engineering velocity."
      },
      {
        "@type": "HowToStep",
        "name": "Calculate Margin Leakage",
        "text": "The tool automatically processes your inputs to estimate token waste and hidden liabilities."
      },
      {
        "@type": "HowToStep",
        "name": "Review Actionable Next Steps",
        "text": "Receive an immediate AI Economics Score with specific governance and architectural recommendations."
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24 px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <AssessmentTool />
    </main>
  );
}
