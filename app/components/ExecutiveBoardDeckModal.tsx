'use client';

import React, { useState } from 'react';
import { X, Copy, Check, Printer, ShieldAlert, Sparkles, ArrowRight, Building, FileText } from 'lucide-react';
import Link from 'next/link';

export interface BoardDeckMetric {
  label: string;
  value: string;
  subtext?: string;
  isNegative?: boolean;
}

export interface ExecutiveBoardDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  toolName: string;
  toolSlug: string;
  score: number;
  scoreLabel: string;
  scoreMax?: number;
  metrics: BoardDeckMetric[];
  executiveSummary: string[];
  remediationPlaybook: Array<{
    step: string;
    title: string;
    directive: string;
    actionItem: string;
  }>;
  remediationTrack: {
    trackNumber: number;
    title: string;
    href: string;
  };
  blueprint: {
    title: string;
    href: string;
  };
  roleContext: string;
}

export default function ExecutiveBoardDeckModal({
  isOpen,
  onClose,
  toolName,
  toolSlug,
  score,
  scoreLabel,
  scoreMax = 100,
  metrics,
  executiveSummary,
  remediationPlaybook,
  remediationTrack,
  blueprint,
  roleContext,
}: ExecutiveBoardDeckModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const generateMarkdownMemo = () => {
    let md = `# EXECUTIVE BOARD BRIEFING // R&D CAPITAL AUDIT\n\n`;
    md += `**Date:** ${currentDate}\n`;
    md += `**Prepared For:** Board Audit Committee, CEO, CFO, and Head of Engineering\n`;
    md += `**Diagnostic Instrument:** ${toolName} (richardewing.io/tools/${toolSlug})\n`;
    md += `**Operational Lens:** ${roleContext}\n\n`;
    md += `---\n\n`;
    md += `## 1. EXECUTIVE DIAGNOSTIC SCORE: ${score} / ${scoreMax} (${scoreLabel})\n\n`;
    
    md += `### Key Financial & Engineering Indicators:\n`;
    metrics.forEach(m => {
      md += `- **${m.label}:** ${m.value}${m.subtext ? ` (${m.subtext})` : ''}\n`;
    });
    md += `\n`;

    md += `## 2. EXECUTIVE OBSERVATIONS\n\n`;
    executiveSummary.forEach(item => {
      md += `- ${item}\n`;
    });
    md += `\n`;

    md += `## 3. 3-STEP BOARD REMEDIATION ROADMAP\n\n`;
    remediationPlaybook.forEach(step => {
      md += `### Step ${step.step}: ${step.title}\n`;
      md += `**Operational Directive:** ${step.directive}\n\n`;
      md += `**Immediate Execution:** ${step.actionItem}\n\n`;
    });

    md += `---\n\n`;
    md += `## 4. CLOSING THE LOOP: SOVEREIGN ASSET REMEDIATION\n\n`;
    md += `- **Remediating Academy Curriculum:** Track ${remediationTrack.trackNumber}: ${remediationTrack.title} (https://www.richardewing.io${remediationTrack.href})\n`;
    md += `- **Production Blueprint:** ${blueprint.title} (https://www.richardewing.io${blueprint.href})\n`;
    md += `- **Audit Certification:** Conducted under the Sovereign Operating Standard (richardewing.io)\n`;

    return md;
  };

  const handleCopyMemo = () => {
    const text = generateMarkdownMemo();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 print:p-0 print:bg-white">
      <div 
        id="board-deck-slip-content"
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-zinc-300 overflow-hidden text-zinc-950 print:border-none print:shadow-none print:rounded-none"
      >
        {/* Top Header Bar (Screen Only) */}
        <div className="flex items-center justify-between px-6 py-4 bg-zinc-900 text-white border-b border-zinc-800 print:hidden">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
              Board Deck Slip // Executive Briefing Exporter
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyMemo}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-zinc-200 transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied Memo' : 'Copy Markdown Memo'}
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-xs font-bold text-white transition shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Board Deck Slip Body */}
        <div className="p-6 sm:p-10 space-y-8 bg-[#FBF9F5]">
          
          {/* Header Masthead */}
          <div className="border-b-2 border-zinc-950 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-950 text-white text-[10px] font-mono font-bold uppercase tracking-widest mb-2">
                CONFIDENTIAL // BOARD AUDIT SLIP
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-grotesk tracking-tight text-zinc-950">
                {toolName} Executive Briefing
              </h1>
              <p className="text-xs font-mono text-zinc-600 mt-1">
                Operational Seat: <span className="font-bold text-zinc-900">{roleContext}</span> &bull; Audit Date: {currentDate}
              </p>
            </div>
            <div className="text-right sm:text-right">
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">Diagnostic Authority</div>
              <div className="text-sm font-bold font-mono text-zinc-900">richardewing.io</div>
            </div>
          </div>

          {/* Diagnostic Score & Primary Ratio */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-950 text-white flex flex-col justify-between shadow-sm">
              <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold">
                Audit Score ({scoreLabel})
              </div>
              <div className="text-4xl sm:text-5xl font-mono font-extrabold text-cyan-400 my-2">
                {score}<span className="text-lg text-zinc-400 font-normal">/{scoreMax}</span>
              </div>
              <div className="text-[11px] text-zinc-300 font-medium">
                Evaluated against 40+ audited enterprise software engineering organizations.
              </div>
            </div>

            {/* Dynamic Key Metric Cards */}
            {metrics.slice(0, 2).map((m, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-zinc-300 flex flex-col justify-between shadow-sm">
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
                  {m.label}
                </div>
                <div className={`text-3xl font-mono font-bold my-2 ${m.isNegative ? 'text-red-700' : 'text-zinc-950'}`}>
                  {m.value}
                </div>
                <div className="text-[11px] text-zinc-600 font-medium">
                  {m.subtext || 'Calculated baseline impact on operational margin.'}
                </div>
              </div>
            ))}
          </div>

          {/* Secondary Metrics Bar */}
          {metrics.length > 2 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {metrics.slice(2).map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-zinc-100 border border-zinc-200">
                  <div className="text-[9px] font-mono uppercase text-zinc-500 font-bold">{m.label}</div>
                  <div className="text-lg font-mono font-bold text-zinc-900 mt-1">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Executive Observations */}
          <div className="p-6 rounded-2xl bg-white border border-zinc-300 shadow-sm">
            <h2 className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-widest mb-3 flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-zinc-600" />
              Executive Staff Findings &amp; Balance Sheet Impact
            </h2>
            <ul className="space-y-2 text-sm text-zinc-800 leading-relaxed font-medium">
              {executiveSummary.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-cyan-800 font-bold mt-0.5">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3-Step Remediation Roadmap */}
          <div className="p-6 rounded-2xl bg-white border border-zinc-300 shadow-sm">
            <h2 className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-widest mb-4 flex items-center gap-2">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-700" />
              3-Step Board Remediation Protocol
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {remediationPlaybook.map((step) => (
                <div key={step.step} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1">
                      Step {step.step}
                    </div>
                    <h3 className="text-sm font-bold text-zinc-950 mb-2">{step.title}</h3>
                    <p className="text-xs text-zinc-700 leading-relaxed mb-3">{step.directive}</p>
                  </div>
                  <div className="p-2.5 rounded bg-white border border-zinc-200 text-[11px] font-mono text-zinc-800">
                    <span className="font-bold text-cyan-900">Action: </span>{step.actionItem}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sovereign Moat Resolution Links */}
          <div className="p-5 rounded-2xl bg-indigo-50/80 border border-indigo-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-950 mb-1">
                Closed-Loop Sovereign Moat Resolution
              </div>
              <div className="text-sm font-bold text-indigo-950">
                Track {remediationTrack.trackNumber}: {remediationTrack.title}
              </div>
              <div className="text-xs text-indigo-800 mt-0.5">
                Paired Architecture Blueprint: <span className="font-semibold">{blueprint.title}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0 print:hidden">
              <Link
                href={remediationTrack.href}
                className="px-4 py-2 rounded-xl bg-indigo-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-indigo-800 transition shadow-sm"
              >
                Access Track &rarr;
              </Link>
              <Link
                href={blueprint.href}
                className="px-4 py-2 rounded-xl bg-white border border-indigo-200 text-indigo-950 font-bold text-xs uppercase tracking-wider hover:bg-zinc-50 transition"
              >
                View Blueprint &rarr;
              </Link>
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-4 border-t border-zinc-300 text-[10px] font-mono text-zinc-500 flex flex-wrap items-center justify-between gap-2">
            <span>Generated via Sovereign Diagnostic Suite &bull; richardewing.io</span>
            <span>All calculations executed client-side. Proprietary balance sheet metrics are never stored.</span>
          </div>

        </div>
      </div>
    </div>
  );
}
