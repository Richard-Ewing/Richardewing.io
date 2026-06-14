import React from 'react';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { failures } from '@/lib/content/failures';

export const metadata = {
    alternates: { canonical: 'https://www.richardewing.io/failures' },
  title: 'AI Failure Database | 15+ Incident Analyses | Ewing',
  description: 'Documented AI failures with cost analysis and root causes: hallucination debt, retry inflation, context rot, and agentic drift incidents.',
};

export default function FailuresIndexPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-24">
      {/* Header */}
      <section className="bg-[#111827] text-zinc-900 py-24 px-6 border-b border-[#374151]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 font-serif">
            Operational Failure Database
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The definitive taxonomy of deterministic system collapse. Understand the symptoms, telemetry signals, and exact governance remediation protocols for the most critical agentic engineering failures.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {failures.map((failure) => (
            <Link 
              key={failure.id} 
              href={`/failures/${failure.slug}`}
              className="group block bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all hover:border-red-200 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-red-500 transition-colors"></div>
              <h3 className="text-2xl font-bold text-[#111827] mb-2 font-serif group-hover:text-red-600 transition-colors">
                {failure.title}
              </h3>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
                {failure.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                {failure.description}
              </p>
              <div className="flex items-center text-red-600 font-medium">
                View Remediation Protocol
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
