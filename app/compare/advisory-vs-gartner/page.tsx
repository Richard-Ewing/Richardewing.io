import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProductBridgeCard from '@/app/components/ProductBridgeCard';

export const metadata: Metadata = {
  title: 'Advisory vs Gartner Retainers',
  description: 'Compare hands-on R&D capital audits with Gartner analyst subscriptions. Get direct codebase remediation instead of generic high-level advisory slides.',
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
    <main className="min-h-screen bg-[var(--paper,#f4f1e9)] pt-32 pb-24 text-zinc-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Compare', url: 'https://www.richardewing.io/compare' },
        { name: 'Advisory vs Gartner', url: 'https://www.richardewing.io/compare/advisory-vs-gartner' },
      ]} />

      <div className="page-container max-w-4xl mx-auto px-6">
        <div className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-zinc-700 uppercase tracking-widest">
          <Link href="/compare" className="hover:text-zinc-950 transition-colors">Compare</Link>
          <span>/</span>
          <span className="text-[var(--gold,#b77a35)] font-extrabold">Richard Ewing Advisory vs Gartner</span>
        </div>

        <div className="mb-12 border-b border-[var(--line,#e2ded4)] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card,#ffffff)] border border-[var(--line,#e2ded4)] text-[var(--forest2,#162e26)] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--gold,#b77a35)]" />
            <span>Remediation Roadmap &bull; Direct Implementation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[var(--forest2,#162e26)] mb-6 tracking-tight">
            Richard Ewing Advisory vs. Gartner Executive Advisory
          </h1>
          <p className="text-xl text-zinc-800 leading-relaxed font-medium">
            Actionable Technical Audits vs. Analyst Research Subscriptions.
          </p>
        </div>

        <section className="mb-16 bg-[var(--card,#ffffff)] border border-[var(--line,#e2ded4)] rounded-2xl p-6 sm:p-8 shadow-sm overflow-x-auto">
          <h2 className="text-2xl font-bold font-serif text-[var(--forest2,#162e26)] mb-6">Comparison Matrix</h2>
          <table className="w-full text-left text-sm font-sans border-collapse">
            <thead>
              <tr className="border-b border-[var(--line,#e2ded4)] font-mono text-xs text-zinc-600 uppercase tracking-wider">
                <th className="py-4 px-4">Dimension</th>
                <th className="py-4 px-4 bg-[var(--forest2,#162e26)]/10 text-[var(--forest2,#162e26)] font-bold border-x border-[var(--line,#e2ded4)]">Richard Ewing Advisory</th>
                <th className="py-4 px-4 text-zinc-700">Gartner Subscriptions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--line,#e2ded4)]">
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Scope of Work</td>
                <td className="py-4 px-4 bg-[var(--forest2,#162e26)]/[0.04] text-[var(--forest2,#162e26)] font-semibold border-x border-[var(--line,#e2ded4)]">Custom Codebase &amp; AI Unit Economics Audit</td>
                <td className="py-4 px-4 text-zinc-700">Generic Industry Research Reports &amp; Quadrants</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Actionability</td>
                <td className="py-4 px-4 bg-[var(--forest2,#162e26)]/[0.04] text-[var(--forest2,#162e26)] font-semibold border-x border-[var(--line,#e2ded4)]">90-Day Remediation Plan &amp; Runtime Gateways</td>
                <td className="py-4 px-4 text-zinc-700">High-Level Executive Guidance</td>
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
