import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import IntakeApplicationForm from '@/components/ai-product-builder/IntakeApplicationForm';

export const metadata: Metadata = {
  title: 'Apply: The AI Product Builder 4-Week Cohort',
  description: 'Apply for the upcoming 4-week technical founder cohort. Capped at 15 builders. 1:1 code audits, cost governance, and pilot customer acquisition.',
  alternates: {
    canonical: 'https://richardewing.io/apply',
  },
  openGraph: {
    title: 'Apply: The AI Product Builder 4-Week Cohort',
    description: 'Apply for the upcoming 4-week technical founder cohort. Capped at 15 builders. 1:1 code audits, cost governance, and pilot customer acquisition.',
    url: 'https://richardewing.io/apply',
    siteName: 'Richard Ewing',
    type: 'website',
  }
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      {/* Header */}
      <div className="relative pt-24 pb-8 sm:pt-32 sm:pb-12 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-slate-950 to-slate-950 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Admissions Application
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Join The AI Product Builder Cohort
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Please complete the 18-question diagnostic intake below. Applications are reviewed within 24 hours.
          </p>
        </div>
      </div>

      {/* Main Intake Form */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <IntakeApplicationForm />
      </main>
    </div>
  );
}
