import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProductBridgeCard from '@/app/components/ProductBridgeCard';

export const metadata: Metadata = {
  title: 'Richard Ewing Advisory vs Big-4 Tech Due Diligence | AI Capital Audits',
  description: 'Compare Richard Ewing R&D Capital Audits vs traditional Big-4 accounting firm tech due diligence. Empirical code diagnostics vs survey checklists.',
  alternates: { canonical: 'https://www.richardewing.io/compare/advisory-vs-big4' },
  openGraph: {
    title: 'Richard Ewing Advisory vs Big-4 Tech Due Diligence',
    description: 'Empirical R&D capital audits vs survey checklists for CFOs and PE operating partners.',
    url: 'https://www.richardewing.io/compare/advisory-vs-big4',
    type: 'website',
  },
};

export default function AdvisoryVsBig4Page() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between an R&D Capital Audit and Big-4 Tech Due Diligence?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Big-4 consulting firms rely on high-level management interview checklists and static documentation. Richard Ewing Advisory performs empirical code analysis, technical debt index modeling (PDI), AI unit economics calculations, and precise insolvency date determination.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Compare', url: 'https://www.richardewing.io/compare' },
        { name: 'Advisory vs Big-4', url: 'https://www.richardewing.io/compare/advisory-vs-big4' },
      ]} />

      <div className="page-container max-w-4xl mx-auto px-6">
        <div className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
          <span>Compare</span><span>/</span><span className="text-indigo-900 font-extrabold">Richard Ewing Advisory vs Big-4</span>
        </div>

        <div className="mb-12 border-b border-zinc-400 pb-8">
          <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
            Richard Ewing Advisory vs. Big-4 Tech Due Diligence
          </h1>
          <p className="text-xl text-zinc-800 leading-relaxed font-medium">
            Empirical Code/Capital Diagnostics vs. Management Interview Checklists. Designed for CFOs, Board Members, and PE Operating Partners.
          </p>
        </div>

        <section className="mb-16 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm overflow-x-auto">
          <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-6">Methodology Comparison</h2>
          <table className="w-full text-left text-sm font-sans border-collapse">
            <thead>
              <tr className="border-b border-zinc-300 font-mono text-xs text-zinc-500 uppercase tracking-wider">
                <th className="py-4 px-4">Audit Criterion</th>
                <th className="py-4 px-4 bg-indigo-50/50 text-indigo-950 font-bold">Richard Ewing Advisory</th>
                <th className="py-4 px-4 text-zinc-700">Big-4 Consulting Firm</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Primary Metric</td>
                <td className="py-4 px-4 bg-indigo-50/30 text-indigo-900 font-semibold">Technical Insolvency Date & PDI ($)</td>
                <td className="py-4 px-4 text-zinc-700">Qualitative Risk Scorecard</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Data Extraction</td>
                <td className="py-4 px-4 bg-indigo-50/30 text-indigo-900 font-semibold">Forensic Codebase & Cloud Billing Telemetry</td>
                <td className="py-4 px-4 text-zinc-700">Management Questionnaires</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Turnaround Time</td>
                <td className="py-4 px-4 bg-indigo-50/30 text-indigo-900 font-semibold">3-Week Fixed Engagement</td>
                <td className="py-4 px-4 text-zinc-700">8–12 Week Advisory Program</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Cost Structure</td>
                <td className="py-4 px-4 bg-indigo-50/30 text-indigo-900 font-semibold">Fixed-Fee Guarantee ($450–$7,500)</td>
                <td className="py-4 px-4 text-zinc-700">$50,000–$150,000 Time & Materials</td>
              </tr>
            </tbody>
          </table>
        </section>

        <ProductBridgeCard variant="both" />

        <div className="text-center pt-8">
          <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold font-mono text-xs uppercase tracking-widest rounded-xl transition-all shadow-md">
            View Advisory Packages <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
