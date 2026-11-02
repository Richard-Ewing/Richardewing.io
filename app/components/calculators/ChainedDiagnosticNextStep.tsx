'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Layers, ShieldCheck } from 'lucide-react';
import { loadDiagnosticSession, saveDiagnosticSession } from '@/lib/storage/session';
import SlackScorecardExport from '@/components/SlackScorecardExport';

export interface ChainedDiagnosticNextStepProps {
  chainName: string;
  stepLabel?: string;
  currentToolSlug: string;
  currentToolName: string;
  defaultScorecardMetricLabel: string;
  defaultScorecardMetricValue: string;
  defaultScorecardStatus?: string;
  nextDiagnostic: {
    slug: string;
    title: string;
    reason: string;
    defaultParams?: Record<string, string | number>;
  };
  secondaryDiagnostic?: {
    slug: string;
    title: string;
  };
  commercialStep: {
    href: string;
    label: string;
    priceTag: string;
    description: string;
  };
}

export default function ChainedDiagnosticNextStep({
  chainName,
  stepLabel = 'Step 1 of 3 · Connected Diagnostic Chain',
  currentToolSlug,
  currentToolName,
  defaultScorecardMetricLabel,
  defaultScorecardMetricValue,
  defaultScorecardStatus = 'AUDIT COMPLETE',
  nextDiagnostic,
  secondaryDiagnostic,
  commercialStep,
}: ChainedDiagnosticNextStepProps) {
  const [handoffQuery, setHandoffQuery] = useState<string>('');
  const [liveMetricValue, setLiveMetricValue] = useState<string>(defaultScorecardMetricValue);
  const [liveStatus, setLiveStatus] = useState<string>(defaultScorecardStatus);
  const [liveParamsRecord, setLiveParamsRecord] = useState<Record<string, string | number>>({});

  useEffect(() => {
    const syncState = () => {
      const params = new URLSearchParams();
      const scorecardParams: Record<string, string | number> = {};
      params.set('from', currentToolSlug);

      if (nextDiagnostic.defaultParams) {
        for (const [k, v] of Object.entries(nextDiagnostic.defaultParams)) {
          params.set(k, String(v));
        }
      }

      if (typeof window !== 'undefined') {
        const currentSp = new URLSearchParams(window.location.search);
        const sensitiveKeys = new Set([
          'from',
          'session_id',
          'run_id',
          'paid_sku',
          'token',
          'badge',
        ]);
        currentSp.forEach((v, k) => {
          if (!sensitiveKeys.has(k)) {
            params.set(k, v);
            scorecardParams[k] = v;
          }
        });

        const saved = loadDiagnosticSession(currentToolSlug);
        if (saved && typeof saved === 'object') {
          if (saved.primaryMetricValue && typeof saved.primaryMetricValue === 'string') {
            setLiveMetricValue(saved.primaryMetricValue);
          } else if (typeof saved.score === 'number') {
            setLiveMetricValue(`${saved.score}/100`);
          }
          if (saved.statusLabel && typeof saved.statusLabel === 'string') {
            setLiveStatus(saved.statusLabel);
          }
          for (const [k, v] of Object.entries(saved)) {
            if (
              k !== 'primaryMetricValue' &&
              k !== 'statusLabel' &&
              k !== 'chainedTo' &&
              (typeof v === 'string' || typeof v === 'number')
            ) {
              params.set(k, String(v));
              scorecardParams[k] = v;
            }
          }
        }
      }

      setLiveParamsRecord(scorecardParams);
      setHandoffQuery(params.toString());
    };

    syncState();

    const onSessionUpdated = (evt: Event) => {
      const custom = evt as CustomEvent<{ key?: string }>;
      if (!custom.detail || custom.detail.key === currentToolSlug) {
        syncState();
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('diagnostic-session-updated', onSessionUpdated);
      return () => window.removeEventListener('diagnostic-session-updated', onSessionUpdated);
    }
  }, [currentToolSlug, nextDiagnostic.defaultParams]);

  const nextHref = handoffQuery
    ? `/tools/${nextDiagnostic.slug}?${handoffQuery}`
    : `/tools/${nextDiagnostic.slug}?from=${currentToolSlug}`;

  const handleChainClick = () => {
    const existing = loadDiagnosticSession(currentToolSlug);
    saveDiagnosticSession(currentToolSlug, {
      ...(existing && typeof existing === 'object' ? existing : {}),
      chainedTo: nextDiagnostic.slug,
      primaryMetricValue: liveMetricValue,
    });
  };

  return (
    <section
      aria-label={chainName}
      className="rounded-3xl border border-[#24332b]/15 bg-[#FAF9F6] p-6 sm:p-8 shadow-sm space-y-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#24332b]/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#b77a35]">
            <Layers className="w-3.5 h-3.5" />
            {stepLabel} · {chainName}
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#162e26] mt-1">
            Continue Your Audit Without Losing Context
          </h2>
        </div>

        <SlackScorecardExport
          toolName={currentToolName}
          toolSlug={currentToolSlug}
          primaryMetricLabel={defaultScorecardMetricLabel}
          primaryMetricValue={liveMetricValue}
          statusLabel={liveStatus}
          metrics={[
            { label: 'Next Connected Model', value: nextDiagnostic.title },
            { label: 'Implementation Path', value: `${commercialStep.label} (${commercialStep.priceTag})` },
          ]}
          canonicalUrl={`https://www.richardewing.io/tools/${currentToolSlug}`}
          queryParams={liveParamsRecord}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Step 2: Next Free Connected Calculator */}
        <div className="rounded-2xl bg-white border border-[#24332b]/12 p-5 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#162e26] bg-[#162e26]/10 px-2.5 py-0.5 rounded-full">
              Next Diagnostic (Free · 60 Sec)
            </span>
            <h3 className="font-serif text-xl font-bold text-[#162e26]">
              {nextDiagnostic.title}
            </h3>
            <p className="text-sm text-[#4a5850] leading-relaxed">
              {nextDiagnostic.reason}
            </p>
          </div>
          <div className="space-y-2">
            <Link
              href={nextHref}
              onClick={handleChainClick}
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#162e26] hover:bg-[#29473b] text-white font-bold text-sm transition-all"
            >
              Pass Inputs to {nextDiagnostic.title} <ArrowRight className="w-4 h-4" />
            </Link>
            {secondaryDiagnostic && (
              <Link
                href={`/tools/${secondaryDiagnostic.slug}?from=${currentToolSlug}`}
                className="block text-center text-xs font-mono font-bold text-[#162e26] hover:underline pt-1"
              >
                Or run {secondaryDiagnostic.title} →
              </Link>
            )}
          </div>
        </div>

        {/* Step 3: Commercial Implementation Step */}
        <div className="rounded-2xl bg-white border border-[#b77a35]/30 p-5 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#b77a35] bg-[#b77a35]/10 px-2.5 py-0.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              Implementation · {commercialStep.priceTag}
            </span>
            <h3 className="font-serif text-xl font-bold text-[#162e26]">
              {commercialStep.label}
            </h3>
            <p className="text-sm text-[#4a5850] leading-relaxed">
              {commercialStep.description}
            </p>
          </div>
          <Link
            href={commercialStep.href}
            className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#b77a35] hover:opacity-95 text-white font-bold text-sm transition-all"
          >
            {commercialStep.label} ({commercialStep.priceTag}) <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
