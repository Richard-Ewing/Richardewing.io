import type { Metadata } from 'next';
import Hero from './components/sections/Hero';
import NarrativeCompression from './components/sections/NarrativeCompression';
import ProofRail from './components/ProofRail';
import WhatWhyHow from './components/sections/WhatWhyHow';
import ClientOutcomes from './components/sections/ClientOutcomes';
import FourHorsemen from './components/sections/FourHorsemen';
import ToolsPreview from './components/sections/ToolsPreview';
import HighIntentConversionBlock from './components/sections/HighIntentConversionBlock';
import PricingPreview from './components/sections/PricingPreview';
import NewsletterSection from './components/sections/NewsletterSection';
import FAQItem from './components/FAQItem';

export const metadata: Metadata = {
  title: 'AI Economist & Enterprise Capital Audits | Richard Ewing',
  description: 'An AI Economist translates engineering output into CFO-level financial outcomes. Secure deterministic governance and stop margin erosion.',
  alternates: {
    canonical: 'https://www.richardewing.io',
  },
  openGraph: {
    title: 'AI Economist & Enterprise Capital Audits | Richard Ewing',
    description: 'An AI Economist translates engineering output into CFO-level financial outcomes. Secure deterministic governance and stop margin erosion.',
    url: 'https://www.richardewing.io',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Economist & Enterprise Capital Audits | Richard Ewing',
    description: 'An AI Economist translates engineering output into CFO-level financial outcomes. Secure deterministic governance and stop margin erosion.',
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
              'name': 'AI Economist & Enterprise Capital Audits | Richard Ewing',
              'description': 'An AI Economist translates engineering output into CFO-level financial outcomes. Secure deterministic governance and stop margin erosion.',
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
                  'name': 'What is AI governance?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'AI governance is the system of constraints, cost caps, and verification policies that prevent probabilistic models from causing margin erosion, security breaches, or regulatory liabilities. It turns volatile models into predictable enterprise assets.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'How much does a fractional CPO cost?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Fractional CPO / CTO advisory services typically range from $7,500 to $10,000 per month, depending on team size and scope. This provides senior technology leadership, cost-cap architecture reviews, and board-ready reporting.'
                  }
                }
              ]
            }
          ]
        }) }}
      />
      {/* Layer 1: Identity-first hero — who you are, what you do, what you offer */}
      <Hero />
      {/* Layer 2: Persistent proof-of-authority bar */}
      <ProofRail />
      {/* Layer 2.5: What Is / Why You Need / How It Works */}
      <WhatWhyHow />
      {/* Layer 3: 15-second comprehension layer — What Breaks → Costs → Why → Fix → Engine */}
      <NarrativeCompression />
      {/* Layer 4: Why enterprise AI fails — the pain points */}
      <FourHorsemen />
      {/* Layer 5: High-Intent Conversion Block */}
      <HighIntentConversionBlock />
      {/* Layer 6: Proof of outcomes */}
      <ClientOutcomes />
      {/* Layer 7: Free tools — lead generation */}
      <ToolsPreview />
      {/* Layer 8: Advisory escalation — conversion */}
      <PricingPreview />

      {/* Visual FAQ Section */}
      <section className="py-20 bg-[#FCFAF7] border-t border-zinc-200">
        <div className="page-container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-zinc-950 font-grotesk">Frequently Asked Questions</h2>
            <p className="text-zinc-600 mt-2 font-medium">Direct answers to core technology governance and economic questions.</p>
          </div>
          <div className="space-y-4">
            <FAQItem 
              question="What is an AI Economist?" 
              answer="An AI Economist serves as the translation layer between engineering output and CFO-level financial outcomes. By auditing R&D capital, diagnosing AI unit economics, and building deterministic governance infrastructure, they align model scaling costs directly with enterprise profitability."
            />
            <FAQItem 
              question="What is AI governance?" 
              answer="AI governance is the system of constraints, cost caps, and verification policies that prevent probabilistic models from causing margin erosion, security breaches, or regulatory liabilities. It locks down verified code states at the network layer to turn volatile models into predictable enterprise assets."
            />
            <FAQItem 
              question="How much does a fractional CPO / CTO cost?" 
              answer="Advisory packages start at $7,500/month for Fractional CTO support, providing senior technical leadership, strict token cost-cap enforcement, and board meeting representation. Board-level advisory retainers for PE/VC portfolios are priced at $15,000/month."
            />
          </div>
        </div>
      </section>

      {/* Layer 9: Newsletter — capture */}
      <NewsletterSection />
    </main>
  );
}
