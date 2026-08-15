'use client';

import React, { useState } from 'react';
import { FileText, Copy, Check, Download, ShieldCheck } from 'lucide-react';

interface ExecutiveMemoExportProps {
  toolName: string;
  metrics: Array<{ label: string; value: string }>;
  executiveSummary: string;
  remediationSteps: string[];
}

export default function ExecutiveMemoExport({
  toolName,
  metrics,
  executiveSummary,
  remediationSteps,
}: ExecutiveMemoExportProps) {
  const [copied, setCopied] = useState(false);

  const generateMemoText = () => {
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    let text = `# EXECUTIVE BOARD MEMORANDUM\n`;
    text += `**To:** Executive Committee / Board of Directors\n`;
    text += `**From:** Diagnostic Baseline (${toolName})\n`;
    text += `**Date:** ${date}\n`;
    text += `**Methodology:** Production AI Governance Framework (richardewing.io)\n\n`;
    text += `---\n\n`;
    text += `## 1. KEY FINANCIAL & OPERATIONAL METRICS\n`;
    metrics.forEach((m) => {
      text += `- **${m.label}:** ${m.value}\n`;
    });
    text += `\n## 2. EXECUTIVE SUMMARY\n${executiveSummary}\n\n`;
    text += `## 3. RECOMMENDED REMEDIATION PATH\n`;
    remediationSteps.forEach((step, idx) => {
      text += `${idx + 1}. ${step}\n`;
    });
    text += `\n---\n*Audit Framework by Richard Ewing, AI Economist (https://www.richardewing.io)*\n`;
    return text;
  };

  const handleCopy = () => {
    const text = generateMemoText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const text = generateMemoText();
    const blob = new Blob([text], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${toolName.toLowerCase().replace(/[^a-z0-9]/g, '-')}-board-memo.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-8 bg-zinc-950 text-white rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-zinc-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full font-mono text-[10px] uppercase tracking-widest mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Boardroom Deliverable</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-grotesk text-white">
            Export Executive Board Memo
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs font-bold rounded-xl transition-all inline-flex items-center gap-2 border border-zinc-700"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Markdown'}</span>
          </button>
          <button
            type="button"
            onClick={handleDownload}
            className="px-4 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-bold rounded-xl transition-all shadow-md inline-flex items-center gap-2 uppercase tracking-wider"
          >
            <Download className="w-4 h-4" />
            <span>Download .MD</span>
          </button>
        </div>
      </div>

      {/* Live Preview Container */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 font-mono text-xs text-zinc-300 space-y-4 max-h-60 overflow-y-auto leading-relaxed">
        <div className="text-cyan-400 font-bold border-b border-zinc-800 pb-2">
          [PREVIEW] EXECUTIVE BOARD MEMORANDUM  -  {toolName.toUpperCase()}
        </div>
        <div>
          <span className="text-zinc-500 block mb-1">Key Metrics:</span>
          {metrics.map((m, idx) => (
            <div key={idx} className="flex justify-between border-b border-zinc-800/50 py-1">
              <span className="text-zinc-400">{m.label}</span>
              <span className="text-white font-bold">{m.value}</span>
            </div>
          ))}
        </div>
        <div>
          <span className="text-zinc-500 block mb-1">Executive Summary:</span>
          <p className="text-zinc-300 font-sans">{executiveSummary}</p>
        </div>
      </div>
    </div>
  );
}
