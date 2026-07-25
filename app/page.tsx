import type { Metadata } from 'next';
import Hero from './components/sections/Hero';
import ProofRail from './components/ProofRail';
import ThreeProblems from './components/sections/ThreeProblems';
import HowItWorks from './components/sections/HowItWorks';
import TransformationStory from './components/sections/TransformationStory';
import ClientOutcomes from './components/sections/ClientOutcomes';
import HighIntentConversionBlock from './components/sections/HighIntentConversionBlock';
import NewsletterSection from './components/sections/NewsletterSection';

export const metadata: Metadata = {
  title: 'AI Economist - Enterprise AI Audits & Cost Governance | Richard Ewing',
  description: 'Richard Ewing helps organizations measure, govern, and improve the economics of enterprise AI. 19 frameworks, 25 diagnostic tools, and advisory services for CTOs, CFOs, and PE operating partners.',
  alternates: {
    canonical: 'https://www.richardewing.io',
  },
  openGraph: {
    title: 'AI Economist - Enterprise AI Audits & Cost Governance | Richard Ewing',
    description: 'Richard Ewing helps organizations measure, govern, and improve the economics of enterprise AI. 19 frameworks, 25 diagnostic tools, and advisory services for CTOs, CFOs, and PE operating partners.',
    url: 'https://www.richardewing.io',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Economist - Enterprise AI Audits & Cost Governance | Richard Ewing',
    description: 'Richard Ewing helps organizations measure, govern, and improve the economics of enterprise AI. 19 frameworks, 25 diagnostic tools, and advisory services for CTOs, CFOs, and PE operating partners.',
    images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
  }
};

export default function Home() {
  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': 'https://www.richardewing.io/#website',
              'url': 'https://www.richardewing.io/',
              'name': 'AI Economist - Enterprise AI Audits & Cost Governance | Richard Ewing',
              'description': 'AI Economics translates engineering output into CFO-level financial outcomes. R&D capital audits, runtime cost-caps, and AI governance for PE-backed SaaS companies.',
            },
            {
              '@type': 'Organization',
              '@id': 'https://www.richardewing.io/#organization',
              'name': 'Richard Ewing',
              'url': 'https://www.richardewing.io/',
              'logo': 'https://www.richardewing.io/favicon.png'
            },
            {
              '@type': 'FAQPage',
              'mainEntity': [
                {
                  '@type': 'Question',
                  'name': 'What is an AI Economist?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'An AI Economist is the translation layer between engineering output and CFO-level financial outcomes. They audit R&D spend, analyze AI unit economics, and construct deterministic governance systems to prevent margin collapse.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'What is AI Economics?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'AI Economics is the discipline of measuring, modeling, and governing the financial impact of AI systems on enterprise profitability. It combines unit economics analysis, R&D capital auditing, and runtime cost governance to turn volatile AI investments into predictable business assets.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'What is AI governance?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'AI governance is the system of constraints, cost caps, and verification policies that prevent probabilistic models from causing margin erosion, security breaches, or regulatory liabilities. It turns volatile models into predictable enterprise assets.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'How much does a fractional CPO / CTO cost?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Fractional CPO / CTO advisory retainer is $10,000 per month. This provides senior technology leadership, cost-cap architecture reviews, and board-ready reporting.'
                  }
                }
              ]
            }
          ]
        }) }}
      />
      {/* Layer 1: Identity-first hero */}
      <Hero />
      {/* Layer 2: Persistent proof-of-authority bar */}
      <ProofRail />
      {/* Layer 3: Three measurable problems */}
      <ThreeProblems />
      {/* Layer 4: How It Works */}
      <HowItWorks />
      {/* Layer 5: Before vs After Transformation */}
      <TransformationStory />
      {/* Layer 6: Client Outcomes & Stats */}
      <ClientOutcomes />
      {/* Layer 7: High Intent Diagnostic & Advisory Conversion */}
      <HighIntentConversionBlock />
      {/* Layer 8: Newsletter Capture */}
      <NewsletterSection />
    </main>
  );
}
