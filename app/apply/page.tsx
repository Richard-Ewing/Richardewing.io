import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import IntakeApplicationForm from '@/components/ai-product-builder/IntakeApplicationForm';

export const metadata: Metadata = {
  title: 'Apply: The AI Product Builder 4-Week Cohort',
  description: 'Apply for the upcoming 4-week technical founder cohort. Capped at 15 builders. 1:1 code audits, cost governance, and pilot customer acquisition.',
  alternates: {
    canonical: 'https://www.richardewing.io/apply',
  },
  openGraph: {
    title: 'Apply: The AI Product Builder 4-Week Cohort',
    description: 'Apply for the upcoming 4-week technical founder cohort. Capped at 15 builders. 1:1 code audits, cost governance, and pilot customer acquisition.',
    url: 'https://www.richardewing.io/apply',
    siteName: 'Richard Ewing',
    type: 'website',
  }
};

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#F5F0EB] text-zinc-950 pt-28 pb-24 selection:bg-purple-200 selection:text-purple-950">
      {/* Header */}
      <div className="relative pt-12 pb-8 sm:pt-16 sm:pb-12 border-b border-zinc-300 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
            Admissions Application
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 font-grotesk">
            Join The AI Product Builder Cohort
          </h1>

          <p className="mt-3 text-sm sm:text-base text-zinc-700 max-w-xl mx-auto leading-relaxed font-medium">
            Please complete the 18-question diagnostic intake below. Applications are reviewed within 24 hours.
          </p>
        </div>
      </div>

      {/* Main Intake Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <IntakeApplicationForm />
      </section>
    </main>
  );
}
