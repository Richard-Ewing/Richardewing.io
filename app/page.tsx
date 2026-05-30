import type { Metadata } from 'next';
import Hero from './components/sections/Hero';
import NarrativeCompression from './components/sections/NarrativeCompression';
import EcosystemMap from './components/EcosystemMap';
import ProofRail from './components/ProofRail';
import ClientOutcomes from './components/sections/ClientOutcomes';
import FourHorsemen from './components/sections/FourHorsemen';
import ToolsPreview from './components/sections/ToolsPreview';
import RuntimeEscalationSimulator from './components/RuntimeEscalationSimulator';
import GovernanceDashboard from './components/GovernanceDashboard';
import ExogramSection from './components/sections/ExogramSection';
import PricingPreview from './components/sections/PricingPreview';
import NewsletterSection from './components/sections/NewsletterSection';

export const metadata: Metadata = {
  title: 'Stop Funding Failed AI Pilots & R&D Waste | Richard Ewing',
  description: 'Most enterprise AI integrations fail at the operational level, not the model level. I audit R&D capital, locate silent cash leaks, and install deterministic margins.',
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
            }
          ]
        }) }}
      />
      {/* Layer 1: Executive Diagnosis — static thesis + pain recognition */}
      <Hero />
      {/* 15-second comprehension layer — What Breaks → Costs → Why → Fix → Engine */}
      <NarrativeCompression />
      
      {/* The Ecosystem Mesh — How All Work Connects */}
      <section className="py-12 border-t border-b border-zinc-200 bg-[#FCFAF7]/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold font-grotesk text-zinc-950">How All My Work Connects</h2>
            <p className="text-xs text-zinc-900 mt-1 max-w-lg mx-auto">Every article, calculator, curriculum course, and software proxy mapped to one research program.</p>
          </div>
          <EcosystemMap />
        </div>
      </section>

      {/* Persistent proof-of-authority bar */}
      <ProofRail />
      {/* Layer 2: Proof of outcomes */}
      <ClientOutcomes />
      {/* Layer 3: Why enterprise AI fails — operational specificity */}
      <FourHorsemen />
      {/* Layer 4: FEEL the escalation — operational inevitability simulator */}
      <RuntimeEscalationSimulator />
      {/* Layer 5: Frameworks & Diagnostics */}
      <ToolsPreview />
      {/* Layer 6: SHOW the governance control plane — visible runtime mechanics */}
      <GovernanceDashboard />
      {/* Layer 7: Exogram — the enforcement infrastructure */}
      <ExogramSection />
      {/* Layer 6: Advisory escalation */}
      <PricingPreview />
      {/* Layer 7: Newsletter */}
      <NewsletterSection />
    </main>
  );
}
