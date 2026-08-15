import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ArrowRight, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import CurriculumMindmapViewer from '@/components/ai-product-builder/CurriculumMindmapViewer';

export const metadata: Metadata = {
  title: 'The AI Product Builder: Complete Master Curriculum',
  description: 'Exhaustive 4-week syllabus for technical founders. Day-by-day sprint guides covering product validation, FastAPI, semantic caching, and GTM.',
  alternates: {
    canonical: 'https://richardewing.io/curriculum',
  },
  openGraph: {
    title: 'The AI Product Builder: Complete Master Curriculum',
    description: 'Exhaustive 4-week syllabus for technical founders. Day-by-day sprint guides covering product validation, FastAPI, semantic caching, and GTM.',
    url: 'https://richardewing.io/curriculum',
    siteName: 'Richard Ewing',
    type: 'website',
  }
};

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      {/* Header */}
      <div className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-slate-950 to-slate-950 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            20-Day Interactive Syllabus
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-4xl">
            The AI Product Builder: Master Curriculum
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            The comprehensive operational blueprint taking technical engineers from problem validation to production deployment, legal incorporation, and 10 paying customers.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold uppercase tracking-wider transition-all shadow-md shadow-sky-400/20"
            >
              Apply for Pilot ($1,500) <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/programs/ai-product-builder"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 transition-all font-semibold"
            >
              Program Overview
            </Link>
          </div>
        </div>
      </div>

      {/* Main Interactive Curriculum Viewer */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <CurriculumMindmapViewer />
      </main>
    </div>
  );
}
