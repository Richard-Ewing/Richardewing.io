'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { ShieldAlert, TrendingDown } from 'lucide-react';

export function ScheduleDiagnosticBanner() {
  const searchParams = useSearchParams();
  const source = searchParams.get('source');
  const leak = searchParams.get('leak');

  if (source !== 'reality-check') {
    return null;
  }

  const formattedLeak = leak && !isNaN(Number(leak)) ? Number(leak).toLocaleString() : null;

  return (
    <div className="mb-8 p-5 bg-[var(--forest2)] text-white border border-[var(--gold)]/30 rounded-2xl shadow-md">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)] flex items-center justify-center shrink-0 mt-0.5">
          <ShieldAlert className="w-5 h-5 text-[var(--gold)]" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d8c7a8]">
              Diagnostic Review Protocol
            </span>
            {formattedLeak && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                <TrendingDown className="w-3 h-3" />
                ${formattedLeak} Annual Leak
              </span>
            )}
          </div>
          <h2 className="font-serif text-lg font-medium text-white">
            Reviewing Your AI Reality Check Scorecard
          </h2>
          <p className="text-xs text-zinc-300 leading-relaxed max-w-3xl">
            Select a 30-Minute Rapid Gut-Check or 1-on-1 Advisory session below. Bring your cloud invoices, token logs, or vendor contracts. We will isolate your primary engineering bottleneck and map out an immediate 30-day remediation priority.
          </p>
        </div>
      </div>
    </div>
  );
}
