import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Terminal, Sparkles, ArrowRight, Layers, Cpu } from 'lucide-react';
import PromptLibraryViewer from '@/components/ai-product-builder/PromptLibraryViewer';

export const metadata: Metadata = {
  title: 'AI System Prompt Library: 50+ Production Prompts',
  description: 'Production prompt catalog for AI founders. Cognitive division of labor system prompts for Perplexity Pro, Claude 3.5 Sonnet, Kimi, and GPT-4o.',
  alternates: {
    canonical: 'https://www.richardewing.io/resources/ai-prompt-library',
  },
  openGraph: {
    title: 'AI Founder System Prompt Library: 50+ Production Prompts',
    description: 'Production prompt catalog for AI builders. Cognitive division of labor prompts for Perplexity Pro, Claude 3.5 Sonnet, Kimi, and GPT-4o.',
    url: 'https://www.richardewing.io/resources/ai-prompt-library',
    siteName: 'Richard Ewing',
    type: 'website',
  }
};

export default function PromptLibraryPage() {
  return (
    <main className="min-h-screen bg-[#F5F0EB] text-zinc-950 pt-28 pb-24 selection:bg-purple-200 selection:text-purple-950">
      {/* Header */}
      <div className="relative pb-12 sm:pb-16 border-b border-zinc-300 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Terminal className="w-3.5 h-3.5 text-purple-700" />
            Cognitive Division of Labor Catalog
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 max-w-4xl">
            AI System Prompt Library for Technical Founders
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-700 max-w-3xl leading-relaxed">
            Stop using generic one-line prompts. These battle-tested multi-turn system prompts are mapped strictly to the cognitive strengths of Perplexity, Claude 3.5, Kimi, and GPT-4o.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              Apply for Pilot Cohort <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/vault/blueprints"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-100 border border-zinc-300 text-zinc-900 font-semibold shadow-sm"
            >
              View Code Blueprints
            </Link>
          </div>
        </div>
      </div>

      {/* Main Prompt Library Viewer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <PromptLibraryViewer />
      </div>
    </main>
  );
}
