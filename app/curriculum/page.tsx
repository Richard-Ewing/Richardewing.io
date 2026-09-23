import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ArrowRight, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';
import CurriculumMindmapViewer from '@/components/ai-product-builder/CurriculumMindmapViewer';

export const metadata: Metadata = {
  title: 'The AI Product Builder: Complete Master Curriculum',
  description: 'Exhaustive 4-week syllabus for technical founders. Day-by-day sprint guides covering product validation, FastAPI, semantic caching, and GTM.',
  alternates: {
    canonical: 'https://www.richardewing.io/curriculum',
  },
  openGraph: {
    title: 'The AI Product Builder: Complete Master Curriculum',
    description: 'Exhaustive 4-week syllabus for technical founders. Day-by-day sprint guides covering product validation, FastAPI, semantic caching, and GTM.',
    url: 'https://www.richardewing.io/curriculum',
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
            20-Day Production Syllabus &bull; Sovereign Asset Engine
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-4xl font-grotesk">
            The AI Product Builder: Master Curriculum
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-medium">
            Not another passive video course. A concrete, day-by-day operational blueprint taking technical engineers through actual problem validation, FastAPI architectures, semantic caching, and securing your first 10 paying customers.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold uppercase tracking-wider transition-all shadow-md shadow-sky-400/20"
            >
              Apply for Pilot ($1,500) <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/vault/curriculum/tracks"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 transition-all font-semibold"
            >
              Explore All 25 Academy Tracks &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Operational Modules: The Sovereign Asset Engine */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-b border-slate-900">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <div className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest mb-1">
              Sovereign Asset Engine &bull; Research to Production
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-grotesk">
              Core Governance & Economics Modules
            </h2>
          </div>
          <Link
            href="/vault/curriculum/tracks"
            className="text-xs font-mono font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 uppercase tracking-wider"
          >
            View All Academy Tracks <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Module 1 */}
          <div className="rounded-2xl border border-sky-500/20 bg-slate-900/60 p-6 flex flex-col justify-between hover:border-sky-500/40 transition">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                <span className="text-sky-400 font-bold">Track 2 &bull; Module 2.2</span>
                <span className="bg-sky-500/10 text-sky-300 px-2 py-0.5 rounded border border-sky-500/20">Built In (Sep 2026)</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Frontier Model Sizing & Inference Economics
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Establish task ambiguity thresholds before routing queries to $78M-$191M frontier models. Prevent gross margin collapse by benchmarking against specialized SLMs.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <Link
                href="/vault/curriculum/tracks/ai-product-economics/2-2"
                className="font-bold text-sky-400 hover:underline flex items-center gap-1"
              >
                Launch Module <ArrowRight className="w-3 h-3" />
              </Link>
              <Link
                href="/concepts/frontier-model-economics"
                className="text-slate-400 hover:text-white"
              >
                Concept &rarr;
              </Link>
            </div>
          </div>

          {/* Module 2 */}
          <div className="rounded-2xl border border-emerald-500/20 bg-slate-900/60 p-6 flex flex-col justify-between hover:border-emerald-500/40 transition">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                <span className="text-emerald-400 font-bold">Track 58 &bull; Module 58.5</span>
                <span className="bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/20">Built In (Sep 2026)</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Persistence vs. Authority: Background vs. Interactive Agents
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Compare Claude Code terminal oversight with Gemini Spark unattended cloud persistence. Decouple runtime duration from write authorization to prevent forensic data corruption.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <Link
                href="/vault/curriculum/tracks/agentic-governance/58-5"
                className="font-bold text-emerald-400 hover:underline flex items-center gap-1"
              >
                Launch Module <ArrowRight className="w-3 h-3" />
              </Link>
              <Link
                href="/concepts/persistence-vs-authority"
                className="text-slate-400 hover:text-white"
              >
                Concept &rarr;
              </Link>
            </div>
          </div>

          {/* Module 3 */}
          <div className="rounded-2xl border border-rose-500/20 bg-slate-900/60 p-6 flex flex-col justify-between hover:border-rose-500/40 transition">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                <span className="text-rose-400 font-bold">Track 58 &bull; Module 58.6</span>
                <span className="bg-rose-500/10 text-rose-300 px-2 py-0.5 rounded border border-rose-500/20">CIO.com (Sep 2026)</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                The Transaction That Succeeds & The 4 Pillars
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Catch silent business failures where operations dashboards show green but corporate policies are breached. Enforce Monitoring, Auditability, Authorization, and Accountability.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <Link
                href="/vault/curriculum/tracks/agentic-governance/58-6"
                className="font-bold text-rose-400 hover:underline flex items-center gap-1"
              >
                Launch Module <ArrowRight className="w-3 h-3" />
              </Link>
              <Link
                href="/concepts/the-transaction-that-succeeds"
                className="text-slate-400 hover:text-white"
              >
                Concept &rarr;
              </Link>
            </div>
          </div>

          {/* Module 4 */}
          <div className="rounded-2xl border border-amber-500/20 bg-slate-900/60 p-6 flex flex-col justify-between hover:border-amber-500/40 transition">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                <span className="text-amber-400 font-bold">Track 58 &bull; Module 58.7</span>
                <span className="bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">Built In (Sep 2026)</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                The Supervisory Review Queue & Air Traffic Control Tax
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Calculate the cognitive drag of auditing plausible AI output. Catch silent syntax failures in database refactors and implement the 4 Operational Laws for bounded delegation.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <Link
                href="/vault/curriculum/tracks/agentic-governance/58-7"
                className="font-bold text-amber-400 hover:underline flex items-center gap-1"
              >
                Launch Module <ArrowRight className="w-3 h-3" />
              </Link>
              <Link
                href="/concepts/supervisory-review-queue"
                className="text-slate-400 hover:text-white"
              >
                Concept &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Empirical Research Provenance: The Sovereign Asset Engine Foundation */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-b border-slate-900">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <div className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest mb-1">
              Step 1 of Sovereign Asset Engine &bull; Research to Curriculum
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-grotesk">
              Empirical Research Provenance
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl font-medium">
              Every curriculum track is grounded in peer-reviewed and executive publications across CIO.com, Built In, Beehiiv, and industry journals.
            </p>
          </div>
          <Link
            href="/research/publications"
            className="text-xs font-mono font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 uppercase tracking-wider"
          >
            Explore All {RESEARCH_CORPUS.length}+ Published Works <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {RESEARCH_CORPUS.slice(0, 6).map((pub) => (
            <a
              key={pub.id}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-sky-500/40 hover:bg-slate-900/90 transition flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                  <span className="text-sky-400 font-bold uppercase">{pub.publisher}</span>
                  <span className="text-slate-400">{pub.date}</span>
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors mb-2 line-clamp-2">
                  {pub.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {pub.thesis}
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-800 text-[11px] font-mono text-sky-400 flex items-center gap-1">
                Read Publication &rarr;
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Main Interactive Curriculum Viewer */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <CurriculumMindmapViewer />
      </main>
    </div>
  );
}
