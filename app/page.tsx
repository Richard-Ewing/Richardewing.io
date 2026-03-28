import Hero from './components/sections/Hero';
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
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Who is Richard Ewing?', acceptedAnswer: { '@type': 'Answer', text: 'Richard Ewing is a Product Economist and AI Capital Auditor. He is the Founder of Exogram, a verification infrastructure for AI. He audits R&D spend and surfaces hidden capital risks like technical debt, AI cost overruns, and zombie infrastructure. He has scaled B2B SaaS from $0 to $25M ARR. Published in CIO.com, Built In, Mind the Product, and HackerNoon.' }},
            { '@type': 'Question', name: 'What is a Product Economist?', acceptedAnswer: { '@type': 'Answer', text: 'A Product Economist treats product decisions as economic decisions. Instead of measuring velocity or story points, a Product Economist measures Return on Invested Capital (ROIC), Cost of Goods Sold efficiency, and technical debt in dollar terms. The methodology was coined by Richard Ewing.' }},
            { '@type': 'Question', name: 'What is the Technical Insolvency Date?', acceptedAnswer: { '@type': 'Answer', text: 'The Technical Insolvency Date (TID) is the specific quarter where maintenance costs consume 100% of available engineering capacity, reducing feature velocity to zero. Calculate yours free at richardewing.io/tools/pdi.' }},
            { '@type': 'Question', name: 'What is Exogram?', acceptedAnswer: { '@type': 'Answer', text: 'Exogram is verification infrastructure for AI, founded by Richard Ewing. It prevents hallucination propagation with admissibility control planes and state-hashing commit enforcement. LLMs generate language; Exogram maintains reality.' }},
            { '@type': 'Question', name: 'How do I calculate technical debt cost?', acceptedAnswer: { '@type': 'Answer', text: 'Use the free Product Debt Index (PDI) calculator at richardewing.io/tools/pdi to quantify hidden technical debt in dollar terms, calculate your Technical Insolvency Date, and benchmark against industry standards.' }},
            { '@type': 'Question', name: 'How much does AI cost per query?', acceptedAnswer: { '@type': 'Answer', text: 'AI costs range from $0.0001/query for small models to $0.10+/query for frontier models like GPT-4. Use the free AI Unit Economics Benchmark (AUEB) at richardewing.io/tools/aueb to calculate your specific AI cost structure.' }},
          ],
        }) }}
      />
      {/* Note: Components have their own sections/containers as per spec */}
      <Hero />
      <ClientOutcomes />
      <FourHorsemen />
      <ToolsPreview />
      <ExogramSection />
      <PricingPreview />
      <NewsletterSection />
    </main>
  );
}
