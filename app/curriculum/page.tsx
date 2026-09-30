import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ArrowRight, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';
import CurriculumMindmapViewer from '@/components/ai-product-builder/CurriculumMindmapViewer';
import { GooglePreferredBadge } from '@/app/components/GooglePreferredBadge';

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
    <main className="min-h-screen bg-[#F5F0EB] text-zinc-950 pt-28 pb-24 selection:bg-purple-200 selection:text-purple-950">
      {/* Header */}
      <div className="relative pt-12 pb-12 sm:pt-16 sm:pb-16 border-b border-zinc-300 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
            <BookOpen className="w-3.5 h-3.5 text-purple-700" />
            20-Day Production Syllabus &bull; Sovereign Asset Engine
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 max-w-4xl font-grotesk">
            The AI Product Builder: Master Curriculum
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-700 max-w-3xl leading-relaxed font-medium">
            Not another passive video course. A concrete, day-by-day operational blueprint taking technical engineers through actual problem validation, FastAPI architectures, semantic caching, and securing your first 10 paying customers.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold uppercase tracking-wider transition-all shadow-md shadow-purple-700/20"
            >
              Apply for Pilot ($1,500) <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/vault/curriculum/tracks"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-100 border border-zinc-300 text-zinc-900 transition-all font-semibold shadow-sm"
            >
              Explore All 25 Academy Tracks &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Operational Modules: The Sovereign Asset Engine */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-b border-zinc-300">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <div className="text-xs font-mono font-bold text-purple-700 uppercase tracking-widest mb-1">
              Sovereign Asset Engine &bull; Research to Production
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 font-grotesk">
              Core Governance &amp; Economics Modules
            </h2>
          </div>
          <Link
            href="/vault/curriculum/tracks"
            className="text-xs font-mono font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1.5 uppercase tracking-wider"
          >
            View All Academy Tracks <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Module 1 */}
          <div className="rounded-2xl border border-zinc-300 bg-white p-6 flex flex-col justify-between hover:border-purple-400 hover:shadow-md transition shadow-sm">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-3">
                <span className="text-purple-700 font-bold">Track 2 &bull; Module 2.2</span>
                <span className="bg-purple-50 text-purple-800 px-2 py-0.5 rounded border border-purple-200">Built In (Sep 2026)</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2 font-grotesk">
                Frontier Model Sizing &amp; Inference Economics
              </h3>
              <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                Establish task ambiguity thresholds before routing queries to $78M-$191M frontier models. Prevent gross margin collapse by benchmarking against specialized SLMs.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-200 flex items-center justify-between text-xs">
              <Link
                href="/vault/curriculum/tracks/ai-product-economics/2-2"
                className="font-bold text-purple-700 hover:underline flex items-center gap-1"
              >
                Launch Module <ArrowRight className="w-3 h-3" />
              </Link>
              <Link
                href="/concepts/frontier-model-economics"
                className="text-zinc-600 hover:text-zinc-950 font-semibold"
              >
                Concept &rarr;
              </Link>
            </div>
          </div>

          {/* Module 2 */}
          <div className="rounded-2xl border border-zinc-300 bg-white p-6 flex flex-col justify-between hover:border-emerald-400 hover:shadow-md transition shadow-sm">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-3">
                <span className="text-emerald-700 font-bold">Track 58 &bull; Module 58.5</span>
                <span className="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">Built In (Sep 2026)</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2 font-grotesk">
                Persistence vs. Authority: Background vs. Interactive Agents
              </h3>
              <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                Compare Claude Code terminal oversight with Gemini Spark unattended cloud persistence. Decouple runtime duration from write authorization to prevent forensic data corruption.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-200 flex items-center justify-between text-xs">
              <Link
                href="/vault/curriculum/tracks/agentic-governance/58-5"
                className="font-bold text-emerald-700 hover:underline flex items-center gap-1"
              >
                Launch Module <ArrowRight className="w-3 h-3" />
              </Link>
              <Link
                href="/concepts/persistence-vs-authority"
                className="text-zinc-600 hover:text-zinc-950 font-semibold"
              >
                Concept &rarr;
              </Link>
            </div>
          </div>

          {/* Module 3 */}
          <div className="rounded-2xl border border-zinc-300 bg-white p-6 flex flex-col justify-between hover:border-rose-400 hover:shadow-md transition shadow-sm">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-3">
                <span className="text-rose-700 font-bold">Track 58 &bull; Module 58.6</span>
                <span className="bg-rose-50 text-rose-800 px-2 py-0.5 rounded border border-rose-200">CIO.com (Sep 2026)</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2 font-grotesk">
                The Transaction That Succeeds &amp; The 4 Pillars
              </h3>
              <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                Catch silent business failures where operations dashboards show green but corporate policies are breached. Enforce Monitoring, Auditability, Authorization, and Accountability.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-200 flex items-center justify-between text-xs">
              <Link
                href="/vault/curriculum/tracks/agentic-governance/58-6"
                className="font-bold text-rose-700 hover:underline flex items-center gap-1"
              >
                Launch Module <ArrowRight className="w-3 h-3" />
              </Link>
              <Link
                href="/concepts/the-transaction-that-succeeds"
                className="text-zinc-600 hover:text-zinc-950 font-semibold"
              >
                Concept &rarr;
              </Link>
            </div>
          </div>

          {/* Module 4 */}
          <div className="rounded-2xl border border-zinc-300 bg-white p-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition shadow-sm">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-3">
                <span className="text-amber-700 font-bold">Track 58 &bull; Module 58.7</span>
                <span className="bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-200">Built In (Sep 2026)</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2 font-grotesk">
                The Supervisory Review Queue &amp; Air Traffic Control Tax
              </h3>
              <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                Calculate the cognitive drag of auditing plausible AI output. Catch silent syntax failures in database refactors and implement the 4 Operational Laws for bounded delegation.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-200 flex items-center justify-between text-xs">
              <Link
                href="/vault/curriculum/tracks/agentic-governance/58-7"
                className="font-bold text-amber-700 hover:underline flex items-center gap-1"
              >
                Launch Module <ArrowRight className="w-3 h-3" />
              </Link>
              <Link
                href="/concepts/supervisory-review-queue"
                className="text-zinc-600 hover:text-zinc-950 font-semibold"
              >
                Concept &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Empirical Research Provenance: The Sovereign Asset Engine Foundation */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-b border-zinc-300">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <div className="text-xs font-mono font-bold text-purple-700 uppercase tracking-widest mb-1">
              Step 1 of Sovereign Asset Engine &bull; Research to Curriculum
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 font-grotesk">
              Empirical Research Provenance
            </h2>
            <p className="mt-2 text-sm text-zinc-700 max-w-2xl font-medium">
              Every curriculum track is grounded in peer-reviewed and executive publications across CIO.com, Built In, Beehiiv, and industry journals.
            </p>
          </div>
          <Link
            href="/research/publications"
            className="text-xs font-mono font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1.5 uppercase tracking-wider"
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
              className="p-5 rounded-2xl border border-zinc-300 bg-white hover:border-purple-400 hover:shadow-md transition flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                  <span className="text-purple-700 font-bold uppercase">{pub.publisher}</span>
                  <span className="text-zinc-500">{pub.date}</span>
                </div>
                <h3 className="text-sm font-bold text-zinc-950 group-hover:text-purple-700 transition-colors mb-2 line-clamp-2 font-grotesk">
                  {pub.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed line-clamp-2">
                  {pub.thesis}
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-zinc-200 text-[11px] font-mono text-purple-700 flex items-center gap-1 font-bold group-hover:text-purple-900">
                Read Publication &rarr;
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Main Interactive Curriculum Viewer */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <GooglePreferredBadge variant="card" />
        <CurriculumMindmapViewer />
      </section>
    </main>
  );
}
