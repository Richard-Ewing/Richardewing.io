import React from 'react';
import Link from 'next/link';
import type { CommercialPathway } from '@/app/lib/concept-corpus';

interface CalculatorIntentProposalProps {
  toolName: string;
  problemDomain: string;
  calculatedMetricLabel: string;
  calculatedMetricValue: string;
  severityLevel?: 'CRITICAL' | 'ELEVATED' | 'OPTIMAL';
  primaryPathway: CommercialPathway;
  secondaryPathway?: CommercialPathway;
}

export default function CalculatorIntentProposal({
  toolName,
  problemDomain,
  calculatedMetricLabel,
  calculatedMetricValue,
  severityLevel = 'ELEVATED',
  primaryPathway,
  secondaryPathway,
}: CalculatorIntentProposalProps) {
  const getSeverityBadge = (level: string) => {
    switch (level) {
      case 'CRITICAL':
        return 'bg-red-100 text-red-950 border-red-300';
      case 'ELEVATED':
        return 'bg-amber-100 text-amber-950 border-amber-300';
      case 'OPTIMAL':
        return 'bg-emerald-100 text-emerald-950 border-emerald-300';
      default:
        return 'bg-zinc-100 text-zinc-950 border-zinc-300';
    }
  };

  const getChannelBadge = (channel: string) => {
    switch (channel) {
      case 'ENGINEERING_RUNTIME':
        return 'bg-cyan-100 text-cyan-950 border-cyan-300';
      case 'EXECUTIVE_ADVISORY':
        return 'bg-amber-100 text-amber-950 border-amber-300';
      case 'CAREER_INTELLIGENCE':
        return 'bg-emerald-100 text-emerald-950 border-emerald-300';
      default:
        return 'bg-zinc-100 text-zinc-950 border-zinc-300';
    }
  };

  return (
    <div className="mt-8 bg-gradient-to-b from-white to-zinc-50 border-2 border-cyan-900/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="space-y-2 border-b border-zinc-200 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
            Actionable Operational Proposal
          </span>
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold border ${getSeverityBadge(severityLevel)}`}>
              Status: {severityLevel}
            </span>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-900 text-white">
              Derived from {toolName}
            </span>
          </div>
        </div>
        <h3 className="text-2xl font-bold font-grotesk text-zinc-950">
          Remediating {problemDomain}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-700 font-medium max-w-3xl leading-relaxed">
          Calculated Exposure: <span className="font-bold text-zinc-950">{calculatedMetricLabel} = {calculatedMetricValue}</span>. The following operational realization pathways are available based on your parameters.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* Primary Pathway */}
        <div className="bg-white border border-zinc-300 hover:border-cyan-700 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-sm transition group">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-1.5">
              <div className="flex items-center gap-1.5">
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold border ${getChannelBadge(primaryPathway.channel)}`}>
                  [{primaryPathway.channel.replace(/_/g, ' ')}]
                </span>
                <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-zinc-100 text-zinc-800 border border-zinc-300">
                  {primaryPathway.relationshipType.replace(/_/g, ' ')}
                </span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 font-bold">
                For: {primaryPathway.targetRole}
              </span>
            </div>
            <h4 className="text-lg font-bold font-grotesk text-zinc-950 group-hover:text-cyan-900 transition-colors">
              {primaryPathway.headline}
            </h4>
            <p className="text-xs text-zinc-700 leading-relaxed font-medium">
              {primaryPathway.subtext}
            </p>
          </div>

          <div className="pt-2">
            <Link
              href={primaryPathway.actionUrl}
              className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-cyan-900 hover:bg-cyan-800 text-white text-xs font-mono font-bold rounded-xl transition shadow-sm"
            >
              {primaryPathway.actionLabel}
            </Link>
          </div>
        </div>

        {/* Secondary Pathway */}
        {secondaryPathway && (
          <div className="bg-white border border-zinc-300 hover:border-cyan-700 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-sm transition group">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-1.5">
                <div className="flex items-center gap-1.5">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold border ${getChannelBadge(secondaryPathway.channel)}`}>
                    [{secondaryPathway.channel.replace(/_/g, ' ')}]
                  </span>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-zinc-100 text-zinc-800 border border-zinc-300">
                    {secondaryPathway.relationshipType.replace(/_/g, ' ')}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500 font-bold">
                  For: {secondaryPathway.targetRole}
                </span>
              </div>
              <h4 className="text-lg font-bold font-grotesk text-zinc-950 group-hover:text-cyan-900 transition-colors">
                {secondaryPathway.headline}
              </h4>
              <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                {secondaryPathway.subtext}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href={secondaryPathway.actionUrl}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-mono font-bold rounded-xl transition shadow-sm"
              >
                {secondaryPathway.actionLabel}
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="pt-2 text-center">
        <p className="text-[11px] font-mono text-zinc-500">
          Non-Contamination Invariant: Diagnostic calculations remain strictly mathematical and objective. Operational pathways provide verified implementation and advisory options.
        </p>
      </div>
    </div>
  );
}
