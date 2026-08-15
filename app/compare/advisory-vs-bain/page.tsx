import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProductBridgeCard from '@/app/components/ProductBridgeCard';

export const metadata: Metadata = {
  title: 'Richard Ewing Advisory vs Bain R&D Audits',
  description: 'Compare Richard Ewing R&D Capital Audits with traditional management consulting. Objective financial code analysis vs slides.',
  alternates: { canonical: 'https://www.richardewing.io/compare/advisory-vs-bain' },
  openGraph: {
    title: 'Richard Ewing Advisory vs Bain & Company R&D Audits',
    description: 'Empirical R&D capital audits vs Bain strategic performance advisory.',
    url: 'https://www.richardewing.io/compare/advisory-vs-bain',
    type: 'website',
  },
};

export default function AdvisoryVsBainPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the core difference between Richard Ewing Advisory and Bain & Company tech advisory?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bain focuses on high-level corporate strategy and operational restructuring. Richard Ewing Advisory provides dollar-denominated technical debt modeling, AI feature margin audits, and exact Technical Insolvency Date projections.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Compare', url: 'https://www.richardewing.io/compare' },
        { name: 'Advisory vs Bain', url: 'https://www.richardewing.io/compare/advisory-vs-bain' },
      ]} />

      <div className="page-container max-w-4xl mx-auto px-6">
        <div className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
          <span>Compare</span><span>/</span><span className="text-red-900 font-extrabold">Richard Ewing Advisory vs Bain & Company</span>
        </div>

        <div className="mb-12 border-b border-zinc-400 pb-8">
          <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
            Richard Ewing Advisory vs. Bain & Company
          </h1>
          <p className="text-xl text-zinc-800 leading-relaxed font-medium">
            Financial Engineering Metrics vs. Strategic Consulting. Built for CFOs and PE Operating Partners.
          </p>
        </div>

        <section className="mb-16 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm overflow-x-auto">
          <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-6">Methodology Comparison</h2>
          <table className="w-full text-left text-sm font-sans border-collapse">
            <thead>
              <tr className="border-b border-zinc-300 font-mono text-xs text-zinc-500 uppercase tracking-wider">
                <th className="py-4 px-4">Dimension</th>
                <th className="py-4 px-4 bg-red-50/50 text-red-950 font-bold">Richard Ewing Advisory</th>
                <th className="py-4 px-4 text-zinc-700">Bain & Company</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Technical Analysis</td>
                <td className="py-4 px-4 bg-red-50/30 text-red-900 font-semibold">Direct Codebase & Commit History Diagnostics</td>
                <td className="py-4 px-4 text-zinc-700">High-Level Operating Model Assessment</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Engineering Output Metric</td>
                <td className="py-4 px-4 bg-red-50/30 text-red-900 font-semibold">Product Debt Index (PDI) & Revenue Per Engineer (APER)</td>
                <td className="py-4 px-4 text-zinc-700">General Org Productivity Benchmarks</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Cost Ceiling Guarantee</td>
                <td className="py-4 px-4 bg-red-50/30 text-red-900 font-semibold">Guaranteed Fixed Rates ($450–$7,500)</td>
                <td className="py-4 px-4 text-zinc-700">Retainer Billing ($100k+/month)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <ProductBridgeCard variant="both" />
      </div>
    </main>
  );
}
