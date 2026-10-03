'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface MetricItem {
  label: string;
  value: string;
}

interface SlackScorecardExportProps {
  toolName: string;
  primaryMetricLabel: string;
  primaryMetricValue: string;
  statusLabel?: string;
  metrics: MetricItem[];
  canonicalUrl: string;
  buttonLabel?: string;
}

export default function SlackScorecardExport({
  toolName,
  primaryMetricLabel,
  primaryMetricValue,
  statusLabel = 'HIGH MARGIN DRAG',
  metrics,
  canonicalUrl,
  buttonLabel = 'Copy Boardroom Slack Card'
}: SlackScorecardExportProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const lines = [
      `*EXECUTIVE AI CAPITAL & AUDIT SCORECARD*`,
      `*Assessment*: ${toolName}`,
      `*Primary Finding*: ${primaryMetricLabel} -> *${primaryMetricValue}*`,
      `*Status*: [ ${statusLabel} ]`,
      `---`,
      ...metrics.map((m) => `• *${m.label}*: ${m.value}`),
      `---`,
      `*Source Audit*: ${canonicalUrl}`,
      `*Auditor*: Richard Ewing (AI Economics & Enterprise R&D Capital Audits)`
    ];

    const textToCopy = lines.join('\n');

    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-black text-white font-mono text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer border border-zinc-700"
      title="Copy executive formatted scorecard for Slack or board updates"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-emerald-300">Copied Slack Card!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-zinc-300" />
          <span>{buttonLabel}</span>
        </>
      )}
    </button>
  );
}
