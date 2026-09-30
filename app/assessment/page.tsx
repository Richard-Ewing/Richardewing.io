import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import FounderQuizEngine from '@/components/ai-product-builder/FounderQuizEngine';

export const metadata: Metadata = {
  title: 'AI Founder Readiness Diagnostic: 10-Question Benchmark',
  description: 'Benchmark your product validation, technical architecture, cost governance, and capital readiness in 5 minutes with immediate scoring.',
  alternates: {
    canonical: 'https://www.richardewing.io/assessment',
  },
  openGraph: {
    title: 'AI Founder Readiness Diagnostic: 10-Question Benchmark',
    description: 'Benchmark your product validation, technical architecture, cost governance, and capital readiness in 5 minutes with immediate scoring.',
    url: 'https://www.richardewing.io/assessment',
    siteName: 'Richard Ewing',
    type: 'website',
  }
};

export default function AssessmentPage() {
  return (
    <main className="min-h-screen bg-[#F5F0EB] text-zinc-950 pt-28 pb-24 selection:bg-purple-200 selection:text-purple-950">
      {/* Header */}
      <div className="relative pt-12 pb-12 sm:pt-16 sm:pb-16 border-b border-zinc-300 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            5-Minute Interactive Diagnostic
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 font-grotesk">
            AI Founder Readiness Diagnostic
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-700 max-w-2xl mx-auto leading-relaxed font-medium">
            Test your knowledge across cognitive architecture, semantic caching, legal entity formation, and GTM mechanics before investing months in code.
          </p>
        </div>
      </div>

      {/* Main Diagnostic Engine */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <FounderQuizEngine />
      </section>
    </main>
  );
}
