import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Code2, ShieldCheck, Sparkles, ArrowRight, FileText, Calculator } from 'lucide-react';
import CodeBlueprintViewer from '@/components/ai-product-builder/CodeBlueprintViewer';

export const metadata: Metadata = {
  title: 'AI Founder Blueprints: Code, Legal Contracts & Pro-Formas',
  description: 'Production FastAPI scaffolds, Redis semantic caching, Stripe webhooks, consulting SOW contracts, and 12-month financial models.',
  alternates: {
    canonical: 'https://richardewing.io/vault/blueprints',
  },
  openGraph: {
    title: 'AI Founder Blueprints: Code, Legal Contracts & Pro-Formas',
    description: 'Production FastAPI scaffolds, Redis semantic caching, Stripe webhooks, consulting SOW contracts, and 12-month financial models.',
    url: 'https://richardewing.io/vault/blueprints',
    siteName: 'Richard Ewing',
    type: 'website',
  }
};

export default function BlueprintsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      {/* Header */}
      <div className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-slate-950 to-slate-950 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Code2 className="w-3.5 h-3.5" />
            Production-Ready Architecture Assets
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-4xl">
            Technical Blueprints &amp; Operational Contracts
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Drop-in FastAPI scaffolding with correlation IDs, Redis vector semantic caching at 0.92 cosine similarity, Stripe subscription webhooks, legal SOW agreements, and interactive financial models.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold uppercase tracking-wider transition-all shadow-md shadow-sky-400/20"
            >
              Apply for Pilot Cohort <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/curriculum"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold"
            >
              Master Syllabus
            </Link>
          </div>
        </div>
      </div>

      {/* Main Code & Financial Model Viewer */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <CodeBlueprintViewer />
      </main>
    </div>
  );
}
