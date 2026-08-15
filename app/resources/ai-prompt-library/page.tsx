import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Terminal, Sparkles, ArrowRight, Layers, Cpu } from 'lucide-react';
import PromptLibraryViewer from '@/components/ai-product-builder/PromptLibraryViewer';

export const metadata: Metadata = {
  title: 'AI Founder System Prompt Library: 50+ Production Prompts',
  description: 'Production prompt catalog for AI builders. Cognitive division of labor prompts for Perplexity Pro, Claude 3.5 Sonnet, Kimi, and GPT-4o.',
  alternates: {
    canonical: 'https://richardewing.io/resources/ai-prompt-library',
  },
  openGraph: {
    title: 'AI Founder System Prompt Library: 50+ Production Prompts',
    description: 'Production prompt catalog for AI builders. Cognitive division of labor prompts for Perplexity Pro, Claude 3.5 Sonnet, Kimi, and GPT-4o.',
    url: 'https://richardewing.io/resources/ai-prompt-library',
    siteName: 'Richard Ewing',
    type: 'website',
  }
};

export default function PromptLibraryPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      {/* Header */}
      <div className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-slate-950 to-slate-950 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Terminal className="w-3.5 h-3.5" />
            Cognitive Division of Labor Catalog
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-4xl">
            AI System Prompt Library for Technical Founders
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Stop using generic one-line prompts. These battle-tested multi-turn system prompts are mapped strictly to the cognitive strengths of Perplexity, Claude 3.5, Kimi, and GPT-4o.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold uppercase tracking-wider transition-all shadow-md shadow-sky-400/20"
            >
              Apply for Pilot Cohort <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/vault/blueprints"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold"
            >
              View Code Blueprints
            </Link>
          </div>
        </div>
      </div>

      {/* Main Prompt Library Viewer */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <PromptLibraryViewer />
      </main>
    </div>
  );
}
