import Hero from './components/sections/Hero';
import NarrativeCompression from './components/sections/NarrativeCompression';
import ClientOutcomes from './components/sections/ClientOutcomes';
import FourHorsemen from './components/sections/FourHorsemen';
import ToolsPreview from './components/sections/ToolsPreview';
import ExogramSection from './components/sections/ExogramSection';
import PricingPreview from './components/sections/PricingPreview';
import NewsletterSection from './components/sections/NewsletterSection';

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
      {/* Layer 2: Proof of outcomes */}
      <ClientOutcomes />
      {/* Layer 3: Why enterprise AI fails — operational specificity */}
      <FourHorsemen />
      {/* Layer 4: Frameworks & Diagnostics */}
      <ToolsPreview />
      {/* Layer 5: Exogram — the enforcement infrastructure */}
      <ExogramSection />
      {/* Layer 6: Advisory escalation */}
      <PricingPreview />
      {/* Layer 7: Newsletter */}
      <NewsletterSection />
    </main>
  );
}
