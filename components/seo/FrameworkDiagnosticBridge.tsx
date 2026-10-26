import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator, FileText, ShieldAlert, Sparkles, TrendingUp } from 'lucide-react';

interface RecommendedFramework {
  title: string;
  slug: string;
  badge: string;
  summary: string;
}

const FLAGSHIP_FRAMEWORKS: RecommendedFramework[] = [
  {
    title: 'Technical Insolvency Date',
    slug: 'technical-insolvency-date',
    badge: 'Capital Preservation',
    summary: 'Model the exact future quarter where technical debt maintenance consumes 100% of engineering bandwidth, bringing new feature velocity to a halt.',
  },
  {
    title: 'Vibe Coding Debt',
    slug: 'vibe-coding-debt',
    badge: 'Architectural Governance',
    summary: 'Quantify the architectural liability and incident recovery drag created when unverified AI copilot code is committed directly to production.',
  },
  {
    title: 'Shadow Agents',
    slug: 'shadow-agents',
    badge: 'Security & Admissibility',
    summary: 'Audit autonomous AI workflows operating across corporate APIs, vector stores, and financial systems without centralized security oversight.',
  },
];

interface FrameworkBridgeProps {
  variant: 'diagnostic-to-framework' | 'framework-to-diagnostic';
  slug?: string;
  title?: string;
  subtitle?: string;
  primaryTool?: {
    name: string;
    url: string;
    badge?: string;
    description: string;
  };
  advisorySource?: string;
  customDiagnosticTitle?: string;
  customDiagnosticDesc?: string;
}

export function FrameworkDiagnosticBridge({
  variant,
  slug,
  title,
  subtitle,
  primaryTool,
  advisorySource,
  customDiagnosticTitle,
  customDiagnosticDesc,
}: FrameworkBridgeProps) {
  if (variant === 'diagnostic-to-framework') {
    return (
      <section className="my-16 p-8 sm:p-10 rounded-2xl bg-white border border-[var(--line,rgba(36,51,43,0.14))] shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-[var(--line,rgba(36,51,43,0.12))]">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[var(--gold,#b77a35)] block mb-1">
              Foundational Economic Doctrine · Recommended Reading
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--ink,#1e2924)]">
              {title || 'Flagship Governance Frameworks'}
            </h2>
          </div>
          <Link
            href="/articles"
            className="text-xs font-mono font-bold text-[var(--forest,#29473b)] hover:text-[var(--gold,#b77a35)] transition-colors flex items-center gap-1 uppercase tracking-wider shrink-0"
          >
            All 32 Frameworks <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FLAGSHIP_FRAMEWORKS.map((fw) => (
            <Link
              key={fw.slug}
              href={`/articles/frameworks/${fw.slug}`}
              className="p-6 rounded-xl bg-[var(--paper2,#ebe7dc)] border border-[var(--line,rgba(36,51,43,0.12))] hover:border-[var(--forest,#29473b)] transition flex flex-col justify-between group"
            >
              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-[var(--paper,#f4f1e9)] text-[10px] font-mono font-bold text-[var(--forest,#29473b)] uppercase tracking-wider mb-3 border border-[var(--line,rgba(36,51,43,0.1))]">
                  {fw.badge}
                </span>
                <h3 className="font-serif text-lg font-bold text-[var(--ink,#1e2924)] group-hover:text-[var(--forest,#29473b)] transition-colors mb-2">
                  {fw.title}
                </h3>
                <p className="text-xs text-[var(--muted,#66716a)] leading-relaxed font-sans">
                  {fw.summary}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[var(--line,rgba(36,51,43,0.1))] text-[11px] font-mono font-bold text-[var(--forest,#29473b)] flex items-center justify-between">
                <span>Read Full Specification</span>
                <span className="text-[var(--gold,#b77a35)] group-hover:translate-x-1 transition-transform">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  // variant === 'framework-to-diagnostic'
  const source = advisorySource || slug || 'framework';
  const displayTitle = customDiagnosticTitle || title || 'Quantify Risk & Commission Remediation';
  const tool = primaryTool || {
    name: 'Product Debt Index (PDI)',
    url: '/tools/pdi',
    badge: 'Interactive Calculator',
    description: customDiagnosticDesc || "Calculate your organization's Technical Insolvency Date and model the dollar cost of engineering maintenance drag.",
  };

  return (
    <section className="my-16 p-8 sm:p-10 rounded-2xl bg-[var(--forest2,#162e26)] text-white border border-[var(--forest,#29473b)] shadow-md">
      <div className="pb-6 mb-8 border-b border-white/15">
        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#d8c7a8] block mb-1">
          {subtitle || 'Closed-Loop Operational Transition'}
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
          {displayTitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tool Card */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/15 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="inline-block px-2.5 py-1 rounded bg-white/10 text-[10px] font-mono font-bold text-[#d8c7a8] uppercase tracking-wider">
                {tool.badge || 'Forensic Diagnostic'}
              </span>
              <Calculator className="w-4 h-4 text-[#d8c7a8]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">
              {tool.name}
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              {tool.description}
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-white/10">
            <Link
              href={tool.url}
              className="inline-flex items-center justify-center w-full py-3 px-4 rounded-lg bg-[var(--gold,#b77a35)] text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition"
            >
              Open Diagnostic Calculator ↗
            </Link>
          </div>
        </div>

        {/* Advisory Session Card */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/15 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="inline-block px-2.5 py-1 rounded bg-white/10 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                Executive Advisory
              </span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">
              30-Minute Triage &amp; Strategy Session
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              Review your telemetry, sprint allocations, and cloud invoices directly with Richard Ewing. Isolate bottlenecks and scope a 14-day remediation plan.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-white/10">
            <Link
              href={`/schedule?source=${source}`}
              className="inline-flex items-center justify-center w-full py-3 px-4 rounded-lg border border-white/30 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition"
            >
              Book Triage Session on Cal.com ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExecutiveDefinitionBlock({
  kicker = 'Executive Definition',
  title,
  definition,
}: {
  kicker?: string;
  title?: string;
  definition: string;
}) {
  return (
    <div className="mb-10 text-left p-6 sm:p-8 bg-white border-l-4 border-l-[var(--gold,#b77a35)] border-y border-r border-[var(--line,rgba(36,51,43,0.12))] rounded-r-2xl shadow-sm">
      <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[var(--gold,#b77a35)] mb-2">
        {kicker}
      </div>
      {title && (
        <h2 className="text-lg font-serif font-bold text-[var(--ink,#1e2924)] mb-2">
          {title}
        </h2>
      )}
      <p className="text-base sm:text-lg text-[var(--ink,#1e2924)] leading-relaxed font-serif" itemProp="description">
        {definition}
      </p>
    </div>
  );
}

export default FrameworkDiagnosticBridge;

