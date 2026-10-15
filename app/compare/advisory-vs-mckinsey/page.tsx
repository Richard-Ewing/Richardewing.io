import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProductBridgeCard from '@/app/components/ProductBridgeCard';

export const metadata: Metadata = {
  title: 'Advisory vs McKinsey Due Diligence',
  description: 'Compare Richard Ewing R&D capital audits with McKinsey tech due diligence. Replace survey checklists with empirical codebase analysis and unit economics.',
  alternates: { canonical: 'https://www.richardewing.io/compare/advisory-vs-mckinsey' },
  openGraph: {
    title: 'Richard Ewing Advisory vs McKinsey Tech Due Diligence',
    description: 'Empirical codebase and R&D capital audits vs survey-based management consulting checklists.',
    url: 'https://www.richardewing.io/compare/advisory-vs-mckinsey',
    type: 'website',
  },
};

export default function AdvisoryVsMcKinseyPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does a Richard Ewing R&D Capital Audit compare to McKinsey Tech Due Diligence?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'McKinsey relies primarily on high-level management interviews, qualitative scorecards, and strategy frameworks. Richard Ewing Advisory performs empirical codebase diagnostics, Product Debt Index (PDI) financial modeling, AI unit economics calculations, and Technical Insolvency Date determination.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the pricing and timeline difference between Richard Ewing Advisory and McKinsey?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'McKinsey tech engagements typically run 8 to 12 weeks with fees ranging from $150,000 to $500,000+. Richard Ewing R&D Capital Audits are fixed-fee ($7,500) completed in 3 weeks with clear, quantitative deliverables.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[var(--paper,#f4f1e9)] pt-32 pb-24 text-zinc-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Compare', url: 'https://www.richardewing.io/compare' },
        { name: 'Advisory vs McKinsey', url: 'https://www.richardewing.io/compare/advisory-vs-mckinsey' },
      ]} />

      <div className="page-container max-w-4xl mx-auto px-6">
        <div className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-zinc-700 uppercase tracking-widest">
          <Link href="/compare" className="hover:text-zinc-950 transition-colors">Compare</Link>
          <span>/</span>
          <span className="text-[var(--gold,#b77a35)] font-extrabold">Richard Ewing Advisory vs McKinsey &amp; Company</span>
        </div>

        <div className="mb-12 border-b border-[var(--line,#e2ded4)] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card,#ffffff)] border border-[var(--line,#e2ded4)] text-[var(--forest2,#162e26)] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--gold,#b77a35)]" />
            <span>Empirical Methodology &bull; Capital Due Diligence</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[var(--forest2,#162e26)] mb-6 tracking-tight">
            Richard Ewing Advisory vs. McKinsey Tech Due Diligence
          </h1>
          <p className="text-xl text-zinc-800 leading-relaxed font-medium">
            Empirical Code &amp; Cloud Telemetry Audits vs. Management Interview Checklists. A methodology comparison for CFOs, Board Members, and PE Operating Partners.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <section className="mb-16 bg-[var(--card,#ffffff)] border border-[var(--line,#e2ded4)] rounded-2xl p-6 sm:p-8 shadow-sm overflow-x-auto">
          <h2 className="text-2xl font-bold font-serif text-[var(--forest2,#162e26)] mb-6">Methodology &amp; Deliverable Comparison</h2>
          <table className="w-full text-left text-sm font-sans border-collapse">
            <thead>
              <tr className="border-b border-[var(--line,#e2ded4)] font-mono text-xs text-zinc-600 uppercase tracking-wider">
                <th className="py-4 px-4">Evaluation Dimension</th>
                <th className="py-4 px-4 bg-[var(--forest2,#162e26)]/10 text-[var(--forest2,#162e26)] font-bold border-x border-[var(--line,#e2ded4)]">Richard Ewing Advisory</th>
                <th className="py-4 px-4 text-zinc-700">McKinsey Digital / Tech Due Diligence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--line,#e2ded4)]">
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Audit Foundation</td>
                <td className="py-4 px-4 bg-[var(--forest2,#162e26)]/[0.04] text-[var(--forest2,#162e26)] font-semibold border-x border-[var(--line,#e2ded4)]">Empirical Codebase &amp; Cloud Telemetry Diagnostics</td>
                <td className="py-4 px-4 text-zinc-700">Executive &amp; Management Interviews</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Primary Metric</td>
                <td className="py-4 px-4 bg-[var(--forest2,#162e26)]/[0.04] text-[var(--forest2,#162e26)] font-semibold border-x border-[var(--line,#e2ded4)]">Technical Insolvency Date &amp; Product Debt Index ($)</td>
                <td className="py-4 px-4 text-zinc-700">Qualitative Maturity Scorecard (1-5)</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">AI Unit Economics</td>
                <td className="py-4 px-4 bg-[var(--forest2,#162e26)]/[0.04] text-[var(--forest2,#162e26)] font-semibold border-x border-[var(--line,#e2ded4)]">Inference Cost Margin Erosion per Feature Interaction</td>
                <td className="py-4 px-4 text-zinc-700">Strategic AI Transformation Frameworks</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Turnaround &amp; Fee Structure</td>
                <td className="py-4 px-4 bg-[var(--forest2,#162e26)]/[0.04] text-[var(--forest2,#162e26)] font-semibold border-x border-[var(--line,#e2ded4)]">3 Weeks Fixed ($7,500 Audit / $450 Gut-Check)</td>
                <td className="py-4 px-4 text-zinc-700">8–12 Weeks T&amp;M ($150,000–$500,000+)</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Runtime Enforcement Integration</td>
                <td className="py-4 px-4 bg-[var(--forest2,#162e26)]/[0.04] text-[var(--forest2,#162e26)] font-semibold border-x border-[var(--line,#e2ded4)]">Direct Gateway Integration with Exogram Platform</td>
                <td className="py-4 px-4 text-zinc-700">Hand-off to Third-Party SI Partners</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Narrative Section */}
        <section className="mb-16 space-y-8">
          <div className="bg-[var(--card,#ffffff)] border border-[var(--line,#e2ded4)] rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold font-serif text-[var(--forest2,#162e26)] mb-3">Why Empirical Code Diagnostics Beat Interview Checklists</h3>
            <p className="text-zinc-800 leading-relaxed font-medium text-base mb-4">
              Traditional management consulting firms audit technology organizations by interviewing key personnel and reviewing org charts. In an age of AI-augmented software development, management interviews miss the invisible accumulation of technical debt and unverified AI code.
            </p>
            <p className="text-zinc-800 leading-relaxed font-medium text-base">
              <strong>Richard Ewing Advisory measures the code, not opinions.</strong> We calculate exact dollar figures for your R&amp;D waste, establish your Technical Insolvency Date, and provide actionable 90-day remediation roadmaps.
            </p>
          </div>
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
