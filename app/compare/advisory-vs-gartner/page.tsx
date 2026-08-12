import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProductBridgeCard from '@/app/components/ProductBridgeCard';

export const metadata: Metadata = {
  title: 'Richard Ewing Advisory vs Gartner Executive Advisory | Richard Ewing',
  description: 'Compare Richard Ewing R&D Capital Audits vs Gartner research & executive advisory subscriptions. Actionable code-level execution vs analyst reports.',
  alternates: { canonical: 'https://www.richardewing.io/compare/advisory-vs-gartner' },
  openGraph: {
    title: 'Richard Ewing Advisory vs Gartner Executive Advisory',
    description: 'Empirical codebase audits vs analyst research subscriptions.',
    url: 'https://www.richardewing.io/compare/advisory-vs-gartner',
    type: 'website',
  },
};

export default function AdvisoryVsGartnerPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the main difference between Richard Ewing Advisory and Gartner?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gartner provides broad industry research reports, Magic Quadrants, and subscription analyst calls. Richard Ewing Advisory performs hands-on technical audits of your specific code, cloud architecture, and AI unit margins with guaranteed remediation plans.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Compare', url: 'https://www.richardewing.io/compare' },
        { name: 'Advisory vs Gartner', url: 'https://www.richardewing.io/compare/advisory-vs-gartner' },
      ]} />

      <div className="page-container max-w-4xl mx-auto px-6">
        <div className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
          <span>Compare</span><span>/</span><span className="text-blue-900 font-extrabold">Richard Ewing Advisory vs Gartner</span>
        </div>

        <div className="mb-12 border-b border-zinc-400 pb-8">
          <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
            Richard Ewing Advisory vs. Gartner Executive Advisory
          </h1>
          <p className="text-xl text-zinc-800 leading-relaxed font-medium">
            Actionable Technical Audits vs. Analyst Research Subscriptions.
          </p>
        </div>

        <section className="mb-16 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm overflow-x-auto">
          <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-6">Comparison Matrix</h2>
          <table className="w-full text-left text-sm font-sans border-collapse">
            <thead>
              <tr className="border-b border-zinc-300 font-mono text-xs text-zinc-500 uppercase tracking-wider">
                <th className="py-4 px-4">Dimension</th>
                <th className="py-4 px-4 bg-blue-50/50 text-blue-950 font-bold">Richard Ewing Advisory</th>
                <th className="py-4 px-4 text-zinc-700">Gartner Subscriptions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Scope of Work</td>
                <td className="py-4 px-4 bg-blue-50/30 text-blue-900 font-semibold">Custom Codebase & AI Unit Economics Audit</td>
                <td className="py-4 px-4 text-zinc-700">Generic Industry Research Reports & Quadrants</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Actionability</td>
                <td className="py-4 px-4 bg-blue-50/30 text-blue-900 font-semibold">90-Day Remediation Plan & Runtime Gateways</td>
                <td className="py-4 px-4 text-zinc-700">High-Level Executive Guidance</td>
              </tr>
            </tbody>
          </table>
        </section>

        <ProductBridgeCard variant="both" />
      </div>
    </main>
  );
}
