import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProductBridgeCard from '@/app/components/ProductBridgeCard';

export const metadata: Metadata = {
  title: 'Richard Ewing Advisory vs Traditional Fractional CTO Services | Richard Ewing',
  description: 'Compare Richard Ewing Fractional CPO/CTO retainers vs traditional hourly fractional CTOs. Fixed-fee economic outcome retainers vs generalist hourly advice.',
  alternates: { canonical: 'https://www.richardewing.io/compare/advisory-vs-traditional-fractional-cto' },
  openGraph: {
    title: 'Richard Ewing Advisory vs Traditional Fractional CTO Services',
    description: 'Fixed-fee AI economic outcome retainers vs generalist hourly fractional CTO advice.',
    url: 'https://www.richardewing.io/compare/advisory-vs-traditional-fractional-cto',
    type: 'website',
  },
};

export default function AdvisoryVsTraditionalFractionalCTOPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does Richard Ewing Advisory differ from generalist fractional CTOs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Traditional fractional CTOs focus on general engineering management, hiring assistance, and team meetings billed by the hour. Richard Ewing Advisory provides specialized AI unit economics auditing, deterministic runtime governance, Product Debt Index calculation, and fixed-fee board-level financial reporting.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Compare', url: 'https://www.richardewing.io/compare' },
        { name: 'Advisory vs Fractional CTO', url: 'https://www.richardewing.io/compare/advisory-vs-traditional-fractional-cto' },
      ]} />

      <div className="page-container max-w-4xl mx-auto px-6">
        <div className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
          <span>Compare</span><span>/</span><span className="text-cyan-900 font-extrabold">Richard Ewing Advisory vs Fractional CTO</span>
        </div>

        <div className="mb-12 border-b border-zinc-400 pb-8">
          <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
            Richard Ewing Advisory vs. Traditional Fractional CTOs
          </h1>
          <p className="text-xl text-zinc-800 leading-relaxed font-medium">
            AI Economic Outcome Retainers vs. Generalist Hourly Advisory.
          </p>
        </div>

        <section className="mb-16 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm overflow-x-auto">
          <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-6">Comparison Table</h2>
          <table className="w-full text-left text-sm font-sans border-collapse">
            <thead>
              <tr className="border-b border-zinc-300 font-mono text-xs text-zinc-500 uppercase tracking-wider">
                <th className="py-4 px-4">Focus Area</th>
                <th className="py-4 px-4 bg-cyan-50/50 text-cyan-950 font-bold">Richard Ewing Advisory</th>
                <th className="py-4 px-4 text-zinc-700">Traditional Fractional CTO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Core Specialization</td>
                <td className="py-4 px-4 bg-cyan-50/30 text-cyan-900 font-semibold">AI Unit Economics & Runtime Governance</td>
                <td className="py-4 px-4 text-zinc-700">General Agile Process & Team Management</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Pricing Structure</td>
                <td className="py-4 px-4 bg-cyan-50/30 text-cyan-900 font-semibold">Fixed-Fee Outcome Retainer ($10,000/mo)</td>
                <td className="py-4 px-4 text-zinc-700">Hourly Rate ($250–$500/hr)</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Platform Ecosystem</td>
                <td className="py-4 px-4 bg-cyan-50/30 text-cyan-900 font-semibold">Exogram AI Governance & CareerWin Intelligence Integration</td>
                <td className="py-4 px-4 text-zinc-700">No Integrated Software Products</td>
              </tr>
            </tbody>
          </table>
        </section>

        <ProductBridgeCard variant="both" />
      </div>
    </main>
  );
}
