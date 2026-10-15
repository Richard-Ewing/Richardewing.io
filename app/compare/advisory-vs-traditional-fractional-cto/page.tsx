import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProductBridgeCard from '@/app/components/ProductBridgeCard';

export const metadata: Metadata = {
  title: 'Advisory vs Fractional CTOs',
  description: 'Compare fixed-fee economic outcome retainers with hourly fractional CTOs. Align engineering roadmaps directly with EBITDA and board-level balance sheets.',
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
    <main className="min-h-screen bg-[var(--paper,#f4f1e9)] pt-32 pb-24 text-zinc-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Compare', url: 'https://www.richardewing.io/compare' },
        { name: 'Advisory vs Fractional CTO', url: 'https://www.richardewing.io/compare/advisory-vs-traditional-fractional-cto' },
      ]} />

      <div className="page-container max-w-4xl mx-auto px-6">
        <div className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-zinc-700 uppercase tracking-widest">
          <Link href="/compare" className="hover:text-zinc-950 transition-colors">Compare</Link>
          <span>/</span>
          <span className="text-[var(--gold,#b77a35)] font-extrabold">Richard Ewing Advisory vs Fractional CTO</span>
        </div>

        <div className="mb-12 border-b border-[var(--line,#e2ded4)] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card,#ffffff)] border border-[var(--line,#e2ded4)] text-[var(--forest2,#162e26)] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--gold,#b77a35)]" />
            <span>Economic Outcomes &bull; Board Alignment</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[var(--forest2,#162e26)] mb-6 tracking-tight">
            Richard Ewing Advisory vs. Traditional Fractional CTOs
          </h1>
          <p className="text-xl text-zinc-800 leading-relaxed font-medium">
            AI Economic Outcome Retainers vs. Generalist Hourly Advisory.
          </p>
        </div>

        <section className="mb-16 bg-[var(--card,#ffffff)] border border-[var(--line,#e2ded4)] rounded-2xl p-6 sm:p-8 shadow-sm overflow-x-auto">
          <h2 className="text-2xl font-bold font-serif text-[var(--forest2,#162e26)] mb-6">Comparison Table</h2>
          <table className="w-full text-left text-sm font-sans border-collapse">
            <thead>
              <tr className="border-b border-[var(--line,#e2ded4)] font-mono text-xs text-zinc-600 uppercase tracking-wider">
                <th className="py-4 px-4">Focus Area</th>
                <th className="py-4 px-4 bg-[var(--forest2,#162e26)]/10 text-[var(--forest2,#162e26)] font-bold border-x border-[var(--line,#e2ded4)]">Richard Ewing Advisory</th>
                <th className="py-4 px-4 text-zinc-700">Traditional Fractional CTO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--line,#e2ded4)]">
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Core Specialization</td>
                <td className="py-4 px-4 bg-[var(--forest2,#162e26)]/[0.04] text-[var(--forest2,#162e26)] font-semibold border-x border-[var(--line,#e2ded4)]">AI Unit Economics &amp; Runtime Governance</td>
                <td className="py-4 px-4 text-zinc-700">General Agile Process &amp; Team Management</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Pricing Structure</td>
                <td className="py-4 px-4 bg-[var(--forest2,#162e26)]/[0.04] text-[var(--forest2,#162e26)] font-semibold border-x border-[var(--line,#e2ded4)]">Fixed-Fee Outcome Retainer ($10,000/mo)</td>
                <td className="py-4 px-4 text-zinc-700">Hourly Rate ($250–$500/hr)</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Platform Ecosystem</td>
                <td className="py-4 px-4 bg-[var(--forest2,#162e26)]/[0.04] text-[var(--forest2,#162e26)] font-semibold border-x border-[var(--line,#e2ded4)]">Exogram AI Governance &amp; CareerWin Intelligence Integration</td>
                <td className="py-4 px-4 text-zinc-700">No Integrated Software Products</td>
              </tr>
            </tbody>
          </table>
        </section>

        <ProductBridgeCard variant="both" />

        <div className="text-center pt-8">
          <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--forest2,#162e26)] hover:bg-[var(--forest,#224b3d)] text-[var(--paper,#f4f1e9)] font-bold font-mono text-xs uppercase tracking-widest rounded-xl transition-all shadow-md border border-[var(--gold,#b77a35)]/40">
            View Advisory Packages &amp; Rates <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
