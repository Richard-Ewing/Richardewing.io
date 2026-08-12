import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProductBridgeCard from '@/app/components/ProductBridgeCard';

export const metadata: Metadata = {
  title: 'Exogram vs Lakera Guard',
  description: 'Compare deterministic runtime execution controls vs probabilistic prompt guardrails.',
  alternates: { canonical: 'https://www.richardewing.io/compare/exogram-vs-lakera' },
  openGraph: {
    title: 'Exogram vs Lakera & Guardrails AI Comparison',
    description: 'Pre-execution admissibility runtime vs post-hoc LLM monitoring tools.',
    url: 'https://www.richardewing.io/compare/exogram-vs-lakera',
    type: 'website',
  },
};

export default function ExogramVsLakeraPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does Exogram differ from Lakera Guard and Guardrails AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lakera Guard focuses primarily on prompt injection security and post-hoc observability. Exogram is a comprehensive four-layer runtime substrate that maintains persistent context, dynamic governance, binary admissibility, and an append-only audit ledger.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Compare', url: 'https://www.richardewing.io/compare' },
        { name: 'Exogram vs Lakera', url: 'https://www.richardewing.io/compare/exogram-vs-lakera' },
      ]} />

      <div className="page-container max-w-4xl mx-auto px-6">
        <div className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
          <span>Compare</span><span>/</span><span className="text-cyan-900 font-extrabold">Exogram vs Lakera & Guardrails AI</span>
        </div>

        <div className="mb-12 border-b border-zinc-400 pb-8">
          <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
            Exogram vs. Lakera & Guardrails AI
          </h1>
          <p className="text-xl text-zinc-800 leading-relaxed font-medium">
            Comparing Pre-Execution Admissibility Gateways against Post-Hoc Prompt Security and Observability Tools.
          </p>
        </div>

        <section className="mb-16 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm overflow-x-auto">
          <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-6">Architectural Comparison</h2>
          <table className="w-full text-left text-sm font-sans border-collapse">
            <thead>
              <tr className="border-b border-zinc-300 font-mono text-xs text-zinc-500 uppercase tracking-wider">
                <th className="py-4 px-4">Capability</th>
                <th className="py-4 px-4 bg-cyan-50/50 text-cyan-950 font-bold">Exogram</th>
                <th className="py-4 px-4 text-zinc-700">Lakera / Guardrails AI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Primary Focus</td>
                <td className="py-4 px-4 bg-cyan-50/30 text-cyan-900 font-semibold">Zero-Trust Execution Admissibility</td>
                <td className="py-4 px-4 text-zinc-700">Prompt Injection & Content Moderation</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Interception Latency</td>
                <td className="py-4 px-4 bg-cyan-50/30 text-cyan-900 font-semibold">0.07ms Local Policy Engine</td>
                <td className="py-4 px-4 text-zinc-700">20ms–150ms Cloud API Checks</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">State Machine</td>
                <td className="py-4 px-4 bg-cyan-50/30 text-cyan-900 font-semibold">Multi-Turn Persistent State Graph</td>
                <td className="py-4 px-4 text-zinc-700">Stateless Inspection</td>
              </tr>
            </tbody>
          </table>
        </section>

        <ProductBridgeCard variant="exogram" />
      </div>
    </main>
  );
}
