import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Code2, ShieldCheck, Sparkles, ArrowRight, FileText, Calculator } from 'lucide-react';
import CodeBlueprintViewer from '@/components/ai-product-builder/CodeBlueprintViewer';

export const metadata: Metadata = {
  title: 'AI Founder Blueprints: Code & Legal Contracts',
  description: 'Production FastAPI scaffolds, Redis semantic caching, Stripe webhooks, consulting SOW contracts, and 12-month financial models for AI founders.',
  alternates: {
    canonical: 'https://www.richardewing.io/vault/blueprints',
  },
  openGraph: {
    title: 'AI Founder Blueprints: Code, Legal Contracts & Pro-Formas',
    description: 'Production FastAPI scaffolds, Redis semantic caching, Stripe webhooks, consulting SOW contracts, and 12-month financial models.',
    url: 'https://www.richardewing.io/vault/blueprints',
    siteName: 'Richard Ewing',
    type: 'website',
  }
};

export default function BlueprintsPage() {
  return (
    <main className="min-h-screen bg-[#F5F0EB] text-zinc-950 pt-28 pb-24 selection:bg-purple-200 selection:text-purple-950">
      {/* Header */}
      <div className="relative pb-12 sm:pb-16 border-b border-zinc-300 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Code2 className="w-3.5 h-3.5 text-purple-700" />
            Production-Ready Architecture Assets
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 max-w-4xl">
            Technical Blueprints &amp; Operational Contracts
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-700 max-w-3xl leading-relaxed">
            Drop-in FastAPI scaffolding with correlation IDs, Redis vector semantic caching at 0.92 cosine similarity, Stripe subscription webhooks, legal SOW agreements, and interactive financial models.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              Apply for Pilot Cohort <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/curriculum"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-100 border border-zinc-300 text-zinc-900 font-semibold shadow-sm"
            >
              Master Syllabus
            </Link>
          </div>
        </div>
      </div>

      {/* Main Code & Financial Model Viewer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <CodeBlueprintViewer />
      </div>
    </main>
  );
}
