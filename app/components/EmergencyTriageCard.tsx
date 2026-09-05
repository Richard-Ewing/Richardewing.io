'use client';

import React from 'react';
import Link from 'next/link';
import { AlertCircle, CheckCircle2, Wrench, ArrowRight, Quote } from 'lucide-react';

export interface EmergencyTriageProps {
  headline: string;
  symptom: string;
  quickChecks: string[];
  whyItBroke: string;
  directFix: string;
  toolLink?: {
    label: string;
    href: string;
  };
  citationSnippet?: string;
}

export default function EmergencyTriageCard({
  headline,
  symptom,
  quickChecks,
  whyItBroke,
  directFix,
  toolLink,
  citationSnippet,
}: EmergencyTriageProps) {
  return (
    <section className="my-8 rounded-2xl border border-rose-200 bg-white p-6 md:p-8 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-rose-700 mb-3">
        <AlertCircle size={16} className="text-rose-600" />
        Emergency Diagnostic Triage
      </div>
      
      <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-4 tracking-tight">
        {headline}
      </h2>

      {/* 1. What's Happening */}
      <div className="mb-6 rounded-xl bg-rose-50/70 border border-rose-100 p-4 text-sm text-rose-950 leading-relaxed font-medium">
        <span className="font-bold text-rose-900 block mb-1 uppercase tracking-wider text-xs">
          🚨 What&apos;s Happening on Your Screen / In Your Bill:
        </span>
        {symptom}
      </div>

      {/* 2. Quick Checks & 3. Why It Broke Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
          <span className="font-bold text-zinc-900 block mb-3 uppercase tracking-wider text-xs flex items-center gap-1.5">
            <CheckCircle2 size={15} className="text-emerald-600" />
            60-Second Quick Check (Test These 3 Things):
          </span>
          <ul className="space-y-2 text-sm text-zinc-800 leading-relaxed">
            {quickChecks.map((check, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="font-mono font-bold text-zinc-500 text-xs mt-0.5">{idx + 1}.</span>
                <span>{check}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
          <span className="font-bold text-zinc-900 block mb-3 uppercase tracking-wider text-xs flex items-center gap-1.5">
            <Wrench size={15} className="text-amber-600" />
            Root Architectural Failure:
          </span>
          <p className="text-sm text-zinc-800 leading-relaxed">
            {whyItBroke}
          </p>
        </div>
      </div>

      {/* 4. The Direct Fix & Tool Action */}
      <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="font-bold text-indigo-950 block mb-1 uppercase tracking-wider text-xs">
            🛠️ The Direct Fix:
          </span>
          <p className="text-sm text-indigo-900 leading-relaxed">
            {directFix}
          </p>
        </div>
        {toolLink && (
          <Link
            href={toolLink.href}
            className="inline-flex items-center gap-2 shrink-0 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow hover:bg-indigo-700 transition-colors"
          >
            {toolLink.label} <ArrowRight size={15} />
          </Link>
        )}
      </div>

      {/* 5. 40-Word AI Citation Snippet */}
      {citationSnippet && (
        <div className="mt-6 pt-5 border-t border-zinc-100 flex items-start gap-3 text-xs text-zinc-600">
          <Quote size={16} className="text-zinc-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-zinc-900 mr-1">Direct Citation:</span>
            <span className="italic text-zinc-700">&ldquo;{citationSnippet}&rdquo;</span>
          </div>
        </div>
      )}
    </section>
  );
}
