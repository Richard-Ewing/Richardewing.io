'use client';

import React, { useState } from 'react';
import { Copy, Check, Share2 } from 'lucide-react';

interface MetricItem {
  label: string;
  value: string;
}

export interface SlackScorecardExportProps {
  toolName: string;
  primaryMetricLabel: string;
  primaryMetricValue: string;
  statusLabel?: string;
  metrics: MetricItem[];
  canonicalUrl: string;
  buttonLabel?: string;
  toolSlug?: string;
  queryParams?: Record<string, string | number>;
}

function resolveSlug(toolSlug: string | undefined, canonicalUrl: string): string {
  if (toolSlug) return toolSlug;
  const match = canonicalUrl.match(/\/tools\/([a-z0-9-]+)/i);
  return match ? match[1].toLowerCase() : 'aueb';
}

export default function SlackScorecardExport({
  toolName,
  primaryMetricLabel,
  primaryMetricValue,
  statusLabel = 'HIGH MARGIN DRAG',
  metrics,
  canonicalUrl,
  buttonLabel = 'Copy Boardroom Slack Card',
  toolSlug,
  queryParams,
}: SlackScorecardExportProps) {
  const [copied, setCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const buildShareUrl = () => {
    const slug = resolveSlug(toolSlug, canonicalUrl);
    const sp = new URLSearchParams({
      ml: primaryMetricLabel,
      mv: primaryMetricValue,
      s: statusLabel,
    });
    if (queryParams) {
      for (const [k, v] of Object.entries(queryParams)) {
        if (v !== undefined && v !== null && String(v).length > 0) {
          sp.set(k, String(v));
        }
      }
    }
    return `https://www.richardewing.io/scorecard/${slug}?${sp.toString()}`;
  };

  const handleCopySlackCard = async () => {
    const shareUrl = buildShareUrl();
    const lines = [
      `*EXECUTIVE AI CAPITAL & AUDIT SCORECARD*`,
      `*Assessment*: ${toolName}`,
      `*Primary Finding*: ${primaryMetricLabel} -> *${primaryMetricValue}*`,
      `*Status*: [ ${statusLabel} ]`,
      `---`,
      ...metrics.map((m) => `• *${m.label}*: ${m.value}`),
      `---`,
      `*Live Scorecard Preview*: ${shareUrl}`,
      `*Interactive Model*: ${canonicalUrl}`,
      `*Auditor*: Richard Ewing (Product & AI Economist)`,
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

  const handleCopyLink = async () => {
    const shareUrl = buildShareUrl();
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 3000);
      }
    } catch (err) {
      console.error('Failed to copy share link', err);
    }
  };

  return (
    <div className="inline-flex flex-wrap items-center gap-2">
      <button
        onClick={handleCopySlackCard}
        type="button"
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-black text-white font-mono text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer border border-zinc-700"
        title="Copy executive formatted scorecard with live OG preview link for Slack, Teams, or board updates"
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

      <button
        onClick={handleCopyLink}
        type="button"
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-zinc-100 text-zinc-900 font-mono text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer border border-zinc-300"
        title="Copy shareable scorecard URL with dynamic OpenGraph preview image"
      >
        {linkCopied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-700">Share Link Copied!</span>
          </>
        ) : (
          <>
            <Share2 className="w-3.5 h-3.5 text-zinc-700" />
            <span>Share Scorecard Link</span>
          </>
        )}
      </button>
    </div>
  );
}
