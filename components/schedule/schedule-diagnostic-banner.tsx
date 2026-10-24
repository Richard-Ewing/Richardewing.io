'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { ShieldAlert, TrendingDown } from 'lucide-react';

interface DiagnosticSourceConfig {
  title: string;
  badgeLabel: string;
  description: string;
}

const SOURCE_CONFIGS: Record<string, DiagnosticSourceConfig> = {
  'reality-check': {
    title: 'Reviewing Your AI Reality Check Scorecard',
    badgeLabel: 'Annual AI Spend Leak',
    description: 'Select a 30-Minute Rapid Gut-Check or 1-on-1 Advisory session below. Bring your cloud invoices, token logs, or vendor contracts. We will isolate your primary engineering bottleneck and map out an immediate 30-day remediation priority.',
  },
  'pdi': {
    title: 'Reviewing Your Product Debt Index (PDI) Audit',
    badgeLabel: 'Annual Maintenance Waste',
    description: 'Select a 30-Minute Triage or Executive Advisory session below. Bring your sprint allocations, backlog estimates, or headcount data. We will isolate your technical debt drag and establish a structural neutralization plan.',
  },
  'aueb': {
    title: 'Reviewing Your AI Unit Economics Audit',
    badgeLabel: 'Annual Carrying Cost Drag',
    description: 'Select a 30-Minute Triage session below. Bring your inference logs, token bills, or GPU hosting estimates to map out unit margin protection.',
  },
  'ev-se': {
    title: 'Reviewing Your Enterprise Valuation & Software Economics Audit',
    badgeLabel: 'EBITDA Margin Leak',
    description: 'Select an Executive Advisory session below. Bring your capitalization schedules or balance sheet data to review your software asset valuation.',
  },
};

export function ScheduleDiagnosticBanner() {
  const searchParams = useSearchParams();
  const source = searchParams.get('source');
  const leak = searchParams.get('leak');

  if (!source) {
    return null;
  }

  const config = SOURCE_CONFIGS[source] || {
    title: 'Reviewing Your Diagnostic Scorecard',
    badgeLabel: 'Annual Operational Drag',
    description: 'Select a 30-Minute Triage or Executive Advisory session below. Bring your data and estimates to isolate your primary capital leak.',
  };

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
                ${formattedLeak} {config.badgeLabel}
              </span>
            )}
          </div>
          <h2 className="font-serif text-lg font-medium text-white">
            {config.title}
          </h2>
          <p className="text-xs text-zinc-300 leading-relaxed max-w-3xl">
            {config.description}
          </p>
        </div>
      </div>
    </div>
  );
}
