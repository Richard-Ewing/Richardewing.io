import React from 'react';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { failures } from '@/lib/content/failures';

export const metadata = {
    alternates: { canonical: 'https://www.richardewing.io/failures' },
  title: 'AI Failure Modes & Remediation Index',
  description: 'Catalog of nine common enterprise AI failure modes, from billing shocks to governance drift, with remediation steps. Protect software reliability today.',
};

export default function FailuresIndexPage() {
  return (
    <main className="min-h-screen bg-[#F5F0EB] text-zinc-950 pt-28 pb-24 selection:bg-purple-200 selection:text-purple-950">
      {/* Header */}
      <section className="pb-16 px-6 border-b border-zinc-300">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-rose-100 border border-rose-300 text-xs font-mono font-bold text-rose-900 uppercase tracking-widest mb-4">
            Operational Failure Modes
          </div>
          <h1 className="text-4xl sm:text-6xl font-grotesk font-bold tracking-tight mb-4 text-zinc-950">
            Operational Failure Database
          </h1>
          <p className="text-lg text-zinc-700 max-w-3xl mx-auto leading-relaxed">
            The definitive taxonomy of deterministic system collapse. Understand the symptoms, telemetry signals, and exact governance remediation protocols for the most critical agentic engineering failures.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {failures.map((failure) => (
            <Link 
              key={failure.id} 
              href={`/failures/${failure.slug}`}
              className="group block bg-white border border-zinc-300 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all hover:border-rose-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-zinc-200 group-hover:bg-rose-500 transition-colors"></div>
              <h3 className="text-2xl font-bold text-zinc-950 mb-2 font-grotesk group-hover:text-rose-600 transition-colors">
                {failure.title}
              </h3>
              <p className="text-xs font-mono font-semibold text-zinc-500 uppercase tracking-widest mb-4">
                {failure.subtitle}
              </p>
              <p className="text-zinc-600 leading-relaxed mb-6 line-clamp-3 text-sm">
                {failure.description}
              </p>
              <div className="flex items-center text-rose-700 font-semibold text-sm group-hover:text-rose-800">
                View Remediation Protocol
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
