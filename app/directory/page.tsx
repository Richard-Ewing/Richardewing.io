import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { DollarSign, GitBranch, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import CapitalDirectoryGrid from '@/components/ai-product-builder/CapitalDirectoryGrid';

export const metadata: Metadata = {
  title: 'Startup Capital & Open-Source Directory: 60+ Programs',
  description: 'Search 60+ accelerators, SBIR grants, and $500k in cloud credits, alongside 120 open-source AI boilerplates and vector caching repos.',
  alternates: {
    canonical: 'https://www.richardewing.io/directory',
  },
  openGraph: {
    title: 'Startup Capital & Open-Source Directory: 60+ Programs',
    description: 'Search 60+ accelerators, SBIR grants, and $500k in cloud credits, alongside 120 open-source AI boilerplates and vector caching repos.',
    url: 'https://www.richardewing.io/directory',
    siteName: 'Richard Ewing',
    type: 'website',
  }
};

export default function DirectoryPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      {/* Header */}
      <div className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-slate-950 to-slate-950 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <DollarSign className="w-3.5 h-3.5" />
            Founder Resource Infrastructure
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-4xl">
            Startup Capital &amp; Open-Source Directory
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            A comprehensive database of 60 top venture accelerators, non-dilutive federal SBIR/STTR grants, and cloud credit programs, mapped with 120 open-source AI repositories.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold uppercase tracking-wider transition-all shadow-md shadow-sky-400/20"
            >
              Apply for Pilot Cohort <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/programs/ai-product-builder"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold"
            >
              Curriculum Overview
            </Link>
          </div>
        </div>
      </div>

      {/* Main Directory Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <CapitalDirectoryGrid />
      </main>
    </div>
  );
}
