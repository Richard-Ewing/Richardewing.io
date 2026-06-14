import type { Metadata } from 'next';
import Hero from './components/sections/Hero';
import NarrativeCompression from './components/sections/NarrativeCompression';
import ProofRail from './components/ProofRail';
import ClientOutcomes from './components/sections/ClientOutcomes';
import FourHorsemen from './components/sections/FourHorsemen';
import ToolsPreview from './components/sections/ToolsPreview';
import RuntimeEscalationSimulator from './components/RuntimeEscalationSimulator';
import PricingPreview from './components/sections/PricingPreview';
import NewsletterSection from './components/sections/NewsletterSection';

export const metadata: Metadata = {
  title: 'Stop AI Billing Shock & Vibe Coding Debt | Richard Ewing',
  description: 'Enterprise AI integrations fail operationally. Extract failed AI pilots, stop shadow AI risk, and install deterministic runtime governance infrastructure.',
  alternates: {
    canonical: 'https://www.richardewing.io',
  },
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
              'name': 'Richard Ewing | AI Economist — R&D Capital Audits & AI Governance',
              'description': 'Most AI failures are not model failures. They are operational failures. I audit R&D capital, diagnose AI unit economics, and build deterministic governance infrastructure.',
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
                  'name': 'Why do enterprise AI pilots fail?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Enterprise AI pilots fail because of unpredictable token costs, brittle abstraction layers like LangChain, and a lack of measurable LLM ROI. We deploy deterministic guardrails to solve this.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'How do you prevent an LLM agent from going rogue?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'We implement deterministic guardrails and runtime observability to intercept tool calls before they execute, preventing non-deterministic agents from causing massive data leaks or infrastructure damage.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'How to migrate away from LangChain in production?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'LangChain abstraction often leads to latency spikes and excessive OpenAI token costs. We audit your AI architecture and replace it with lean, deterministic orchestration designed for production scale.'
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
      {/* Layer 3: 15-second comprehension layer — What Breaks → Costs → Why → Fix → Engine */}
      <NarrativeCompression />
      {/* Layer 4: Why enterprise AI fails — the pain points */}
      <FourHorsemen />
      {/* Layer 5: FEEL the escalation — interactive failure cascade */}
      <RuntimeEscalationSimulator />
      {/* Layer 6: Proof of outcomes */}
      <ClientOutcomes />
      {/* Layer 7: Free tools — lead generation */}
      <ToolsPreview />
      {/* Layer 8: Advisory escalation — conversion */}
      <PricingPreview />
      {/* Layer 9: Newsletter — capture */}
      <NewsletterSection />
    </main>
  );
}
