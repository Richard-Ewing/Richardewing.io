'use client';

import React, { useState } from 'react';
import { X, Copy, Check, Printer, FileCheck, Shield, DollarSign, Calendar, ArrowRight, Building, Award } from 'lucide-react';
import Link from 'next/link';

export interface EnterpriseSOWModalProps {
  isOpen: boolean;
  onClose: () => void;
  clientName?: string;
  annualWaste: number;
  pdiScore?: number;
  grossMargin?: number;
  arrPerEngineer?: number;
  insolvencyHorizon?: string;
  recommendedRemediation?: string[];
}

export default function EnterpriseSOWModal({
  isOpen,
  onClose,
  clientName = 'Enterprise Client',
  annualWaste,
  pdiScore = 48,
  grossMargin = 42,
  arrPerEngineer = 210000,
  insolvencyHorizon = 'Q3 2027',
  recommendedRemediation = [
    'Freeze feature development on quarantined modules operating above 35% maintenance allocation.',
    'Deploy semantic intent router to deflect 40% to 60% of baseline LLM inference queries.',
    'Institute pre-commit schema assertion gates to eliminate AI pull request review bottlenecks.'
  ]
}: EnterpriseSOWModalProps) {
  const [copied, setCopied] = useState(false);
  const sowId = `SOW-AUDIT-2026-${Math.abs(Math.round(annualWaste % 8999) + 1000)}`;
  const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  if (!isOpen) return null;

  const formatMoney = (val: number) => {
    if (val >= 1000000) return `$${(val / 1000000).toFixed(2)}M`;
    if (val >= 1000) return `$${(val / 1000).toFixed(0)}K`;
    return `$${val.toLocaleString()}`;
  };

  const generateMarkdownSOW = () => {
    return `# STATEMENT OF WORK (SOW): FORENSIC R&D CAPITAL & AI GOVERNANCE AUDIT
**Document Reference:** ${sowId}
**Date:** ${dateStr}
**Executive Sponsor:** Chief Executive Officer / Chief Financial Officer / VP of Engineering
**Principal Auditor:** Richard Ewing, The AI Economist (richardewing.io / Exogram)

---

## 1. Executive Summary & Problem Formulation
Preliminary automated diagnostics indicate that ${clientName} carries substantial operational friction across its software engineering and AI inference cost centers:
- **Quantified Annual Capital Waste:** ${formatMoney(annualWaste)}
- **Product Debt Health Score:** ${pdiScore} / 100
- **Net AI Feature Gross Margin:** ${grossMargin}%
- **Revenue Generated per Engineer (APER):** ${formatMoney(arrPerEngineer)}
- **Projected Technical Insolvency Date:** ${insolvencyHorizon}

Without proactive intervention, compounding code debt and un-gated AI inference queries will continue to erode operating margins and freeze feature delivery capacity.

---

## 2. Scope of Engagement: 3-Week Forensic Audit
The audit will be conducted across three sequential phases over a 21-calendar-day sprint:

### Phase 1: Forensic Backlog & API Token Flow Inspection (Days 1 to 7)
- Forensic triage of Jira/Linear issue queues across 4 consecutive quarters.
- Categorization of backlog capacity into Growth, Retention, and Un-Accretive Maintenance.
- Deep-packet inspection of vendor API logs (OpenAI, Anthropic, AWS Bedrock) to isolate unmonitored retry loops and prompt bloat.

### Phase 2: R&D Capitalization & Margin Modeling (Days 8 to 14)
- Reconciliation of engineering payroll allocation against ASC 350-40 software capitalization rules.
- Unit economic modeling to identify the exact query volume where AI features invert into negative gross margin.
- Analysis of team topology coordination tax and pull request review queue latency.

### Phase 3: Board Audit Deliverable & Remediation Architecture (Days 15 to 21)
- Formulation of the 90-Day Capital Remediation Roadmap (ICE prioritized).
- Design of the Sovereign Runtime Gatekeeper architecture to quarantine unstable modules.
- Preparation of the Board Audit Committee Executive Briefing Deck.

---

## 3. Core Deliverables
1. **The Comprehensive R&D Capital Audit Report (40+ Pages):** Complete forensic accounting of engineering spend, code entropy, and inference costs.
2. **Board of Directors 4-Quadrant Briefing Deck:** High-contrast, non-technical executive presentation quantifying risk and remediation in financial terms.
3. **90-Day Execution Roadmap:** Tactical sprint-by-sprint playbook for engineering leadership to reclaim 20% to 35% of lost capacity.
4. **Sovereign Runtime Policy Manifests:** Ready-to-deploy TypeScript middleware and gateway configuration to halt runaway model calls.

---

## 4. Investment & Commercial Terms
- **Fixed Advisory Fee:** $7,500 USD (One-time engagement fee)
- **Payment Structure:** 50% due at signing, 50% due upon delivery of final Board Audit Report.
- **Estimated ROI:** 4x to 12x annual payback through immediate reduction of maintenance waste and token billing leakage.

---
*Authorized by Richard Ewing, The AI Economist (richardewing@exogram.ai)*
*Canonical Platform: https://www.richardewing.io*`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMarkdownSOW());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md print:p-0 print:bg-white print:static">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl border border-zinc-300 shadow-2xl overflow-hidden my-8 print:border-none print:shadow-none print:my-0 print:max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Header (Hidden in Print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-50 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-700">
              Formal Statement of Work &bull; {sowId}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 text-white text-xs font-bold hover:bg-zinc-800 transition"
              title="Copy SOW Markdown"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied to Clipboard' : 'Copy Markdown'}
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-900 border border-zinc-300 text-xs font-bold hover:bg-zinc-200 transition"
              title="Print SOW"
            >
              <Printer className="w-3.5 h-3.5" />
              Print SOW
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Formal SOW Body */}
        <div className="p-6 sm:p-10 space-y-8 text-zinc-900 print:p-0">
          
          {/* SOW Document Title & Identification */}
          <div className="border-b-2 border-zinc-900 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-100 border border-zinc-300 text-[11px] font-mono font-bold text-zinc-700 uppercase tracking-widest mb-3">
                <FileCheck className="w-3.5 h-3.5 text-emerald-600" /> Executive Engagement Proposal
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
                Statement of Work: R&D Capital &amp; AI Audit
              </h1>
              <p className="text-sm font-medium text-zinc-600 mt-1">
                Forensic software debt triage, unit margin defense, and executive remediation.
              </p>
            </div>
            <div className="text-right sm:text-right font-mono text-xs space-y-1 text-zinc-600 shrink-0">
              <div><strong className="text-zinc-900">Ref:</strong> {sowId}</div>
              <div><strong className="text-zinc-900">Date:</strong> {dateStr}</div>
              <div><strong className="text-zinc-900">Auditor:</strong> Richard Ewing</div>
            </div>
          </div>

          {/* Quantified Exposure Grid */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-3">
              Section 1: Baseline Quantified Exposure
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200">
                <div className="text-[11px] font-mono font-bold text-rose-800 uppercase tracking-wider">Annual Capital Waste</div>
                <div className="text-2xl font-black text-rose-950 mt-1">{formatMoney(annualWaste)}</div>
                <div className="text-[10px] text-rose-700 mt-1">Un-accretive maintenance</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-300">
                <div className="text-[11px] font-mono font-bold text-zinc-600 uppercase tracking-wider">PDI Health Score</div>
                <div className="text-2xl font-black text-zinc-950 mt-1">{pdiScore} <span className="text-xs text-zinc-500 font-normal">/ 100</span></div>
                <div className="text-[10px] text-zinc-500 mt-1">{pdiScore < 50 ? 'Insolvency Risk' : 'Sustainable'}</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-300">
                <div className="text-[11px] font-mono font-bold text-zinc-600 uppercase tracking-wider">AI Gross Margin</div>
                <div className="text-2xl font-black text-zinc-950 mt-1">{grossMargin}%</div>
                <div className="text-[10px] text-zinc-500 mt-1">Net of model API tokens</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-300">
                <div className="text-[11px] font-mono font-bold text-zinc-600 uppercase tracking-wider">Insolvency Horizon</div>
                <div className="text-2xl font-black text-zinc-950 mt-1">{insolvencyHorizon}</div>
                <div className="text-[10px] text-zinc-500 mt-1">100% maintenance lock</div>
              </div>
            </div>
          </div>

          {/* Engagement Phasing */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-3">
              Section 2: Engagement Phasing (3-Week Sprint)
            </h2>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white border border-zinc-300 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  W1
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-950">Phase 1: Forensic Backlog &amp; API Token Flow Audit (Days 1 to 7)</h3>
                  <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                    Audit Jira/Linear issue queues across 4 quarters to isolate true maintenance drag from feature velocity. Reconstruct raw LLM API consumption logs to detect silent retry storms and prompt token inflation.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-zinc-300 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  W2
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-950">Phase 2: R&amp;D Capitalization &amp; Unit Economics Modeling (Days 8 to 14)</h3>
                  <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                    Map R&amp;D payroll to GAAP/IFRS software capitalization standards. Calculate per-query unit margins to pinpoint the exact customer usage scale where subscription features invert into financial losses.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-zinc-300 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  W3
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-950">Phase 3: Board Audit Deliverable &amp; Remediation Architecture (Days 15 to 21)</h3>
                  <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                    Synthesize findings into an executive-ready 40-page audit report and board presentation slide deck. Provide deployable runtime gateway policies to cap token spend and quarantine negative-carry code.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Deliverables & Investment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-200">
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-3">
                Section 3: Formal Deliverables
              </h2>
              <ul className="space-y-2 text-xs text-zinc-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Full Forensic R&amp;D Audit Package:</strong> Comprehensive written report detailing all systemic capital leaks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Board Audit Committee Deck:</strong> Executive slide deck ready for CEO, CFO, and Board review.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>90-Day Capital Remediation Roadmap:</strong> Clear sequence to reclaim 20% to 35% of wasted engineering payroll.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-300 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-1">
                  Section 4: Commercial Investment
                </div>
                <div className="text-3xl font-black text-zinc-950">$7,500 <span className="text-sm font-semibold text-zinc-500 font-sans">USD (Fixed)</span></div>
                <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                  Projected engagement payback is 4x to 12x within 90 days by structurally eliminating recurring API bill surges and maintenance drag.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-200 flex items-center justify-between text-xs font-mono text-zinc-600">
                <span>Terms: 50% start / 50% delivery</span>
                <span className="font-bold text-emerald-700">Immediate Scheduling</span>
              </div>
            </div>
          </div>

          {/* Signoff & CTA Footer */}
          <div className="pt-6 border-t-2 border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-500 font-mono">
              Issued by Richard Ewing, The AI Economist &bull; Exogram Verification Infrastructure
            </div>
            <div className="flex items-center gap-3 print:hidden">
              <Link
                href="/services"
                className="px-6 py-3 rounded-xl bg-zinc-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-zinc-800 transition inline-flex items-center gap-2 shadow-md"
              >
                Schedule Kickoff Call <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
