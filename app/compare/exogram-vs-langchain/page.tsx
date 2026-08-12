import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2, XCircle } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProductBridgeCard from '@/app/components/ProductBridgeCard';

export const metadata: Metadata = {
  title: 'Exogram vs LangChain Governance',
  description: 'Compare enterprise runtime governance vs agentic orchestration frameworks.',
  alternates: { canonical: 'https://www.richardewing.io/compare/exogram-vs-langchain' },
  openGraph: {
    title: 'Exogram vs LangChain Guardrails Comparison',
    description: 'Deterministic policy enforcement vs probabilistic prompt wrappers in production AI systems.',
    url: 'https://www.richardewing.io/compare/exogram-vs-langchain',
    type: 'website',
  },
};

export default function ExogramVsLangChainPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the main difference between Exogram and LangChain Guardrails?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Exogram is a deterministic runtime execution gateway that intercepts and validates AI payloads in 0.07ms before execution, whereas LangChain guardrails rely on prompt wrappers and probabilistic model checks after output generation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do prompt wrappers fail in production enterprise AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prompt wrappers ask an unpredictable LLM to police another unpredictable LLM, stacking probabilistic uncertainty. Exogram uses zero-trust policy-as-code to enforce binary go/no-go execution decisions.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Compare', url: 'https://www.richardewing.io/compare' },
        { name: 'Exogram vs LangChain', url: 'https://www.richardewing.io/compare/exogram-vs-langchain' },
      ]} />

      <div className="page-container max-w-4xl mx-auto px-6">
        <div className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
          <span>Compare</span><span>/</span><span className="text-cyan-900 font-extrabold">Exogram vs LangChain Guardrails</span>
        </div>

        <div className="mb-12 border-b border-zinc-400 pb-8">
          <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
            Exogram vs. LangChain Guardrails
          </h1>
          <p className="text-xl text-zinc-800 leading-relaxed font-medium">
            Deterministic Runtime Interception vs. Probabilistic Prompt Wrappers. A structural comparison for enterprise VPs of Engineering and CISOs.
          </p>
        </div>

        {/* Structured Comparison Table */}
        <section className="mb-16 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm overflow-x-auto">
          <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-6">Feature Comparison Matrix</h2>
          <table className="w-full text-left text-sm font-sans border-collapse">
            <thead>
              <tr className="border-b border-zinc-300 font-mono text-xs text-zinc-500 uppercase tracking-wider">
                <th className="py-4 px-4">Evaluation Dimension</th>
                <th className="py-4 px-4 bg-cyan-50/50 text-cyan-950 font-bold">Exogram Platform</th>
                <th className="py-4 px-4 text-zinc-700">LangChain Guardrails</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Enforcement Model</td>
                <td className="py-4 px-4 bg-cyan-50/30 text-cyan-900 font-semibold">Deterministic Policy Gateway (0.07ms)</td>
                <td className="py-4 px-4 text-zinc-700">Probabilistic Prompt Wrapping</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Execution Boundary</td>
                <td className="py-4 px-4 bg-cyan-50/30 text-cyan-900 font-semibold">Pre-Execution Interception</td>
                <td className="py-4 px-4 text-zinc-700">Post-Generation Filtering</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">State Persistence</td>
                <td className="py-4 px-4 bg-cyan-50/30 text-cyan-900 font-semibold">Four-Layer Substrate State Graph</td>
                <td className="py-4 px-4 text-zinc-700">Ephemeral Session Context</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">Audit Traceability</td>
                <td className="py-4 px-4 bg-cyan-50/30 text-cyan-900 font-semibold">Append-Only Immutable Execution Ledger</td>
                <td className="py-4 px-4 text-zinc-700">Standard Text Logs</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-zinc-950">EU AI Act Compliance</td>
                <td className="py-4 px-4 bg-cyan-50/30 text-cyan-900 font-semibold">Verifiable Admissibility Records</td>
                <td className="py-4 px-4 text-zinc-700">Manual Evidence Assembly</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Detailed Breakdown */}
        <section className="mb-16 space-y-8">
          <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold font-grotesk text-zinc-950 mb-3">Why Prompt Wrappers Fail in Enterprise Production</h3>
            <p className="text-zinc-800 leading-relaxed font-medium text-base mb-4">
              When an enterprise AI agent attempts to execute an action—such as executing SQL queries, altering cloud permissions, or dispatching API webhooks—asking a second LLM to evaluate the prompt introduces stacked uncertainty.
            </p>
            <p className="text-zinc-800 leading-relaxed font-medium text-base">
              <strong>Exogram eliminates guessing.</strong> By embedding a zero-trust binary execution gateway, Exogram evaluates policies deterministically before payloads reach production infrastructure.
            </p>
          </div>
        </section>

        <ProductBridgeCard variant="exogram" />

        <div className="text-center pt-8">
          <Link href="/exogram" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold font-mono text-xs uppercase tracking-widest rounded-xl transition-all shadow-md">
            Explore Exogram Architecture <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
