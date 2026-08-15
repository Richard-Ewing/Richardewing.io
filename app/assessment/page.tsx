import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import FounderQuizEngine from '@/components/ai-product-builder/FounderQuizEngine';

export const metadata: Metadata = {
  title: 'AI Founder Readiness Diagnostic: 10-Question Benchmark',
  description: 'Benchmark your product validation, technical architecture, cost governance, and capital readiness in 5 minutes with immediate scoring.',
  alternates: {
    canonical: 'https://richardewing.io/assessment',
  },
  openGraph: {
    title: 'AI Founder Readiness Diagnostic: 10-Question Benchmark',
    description: 'Benchmark your product validation, technical architecture, cost governance, and capital readiness in 5 minutes with immediate scoring.',
    url: 'https://richardewing.io/assessment',
    siteName: 'Richard Ewing',
    type: 'website',
  }
};

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      {/* Header */}
      <div className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-slate-950 to-slate-950 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            5-Minute Interactive Diagnostic
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            AI Founder Readiness Diagnostic
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Test your knowledge across cognitive architecture, semantic caching, legal entity formation, and GTM mechanics before investing months in code.
          </p>
        </div>
      </div>

      {/* Main Diagnostic Engine */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <FounderQuizEngine />
      </main>
    </div>
  );
}
