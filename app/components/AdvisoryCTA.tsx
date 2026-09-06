import Link from 'next/link';

interface AdvisoryCTAProps {
  variant: 'tool-result' | 'compare' | 'educational' | 'industry';
  termTitle?: string;
}

const VARIANTS = {
  'tool-result': {
    headline: 'Your diagnostic revealed a problem?',
    body: "Book a 60-minute session. I'll locate the exact capital leak and formulate an immediate reduction strategy.",
    primaryLabel: 'Book Insolvency Audit',
    primaryHref: '/api/buy/insolvency_diagnostic',
    primaryPrice: '$2,500',
    secondaryLabel: 'Quick Gut-Check',
    secondaryHref: '/api/buy/gut_check',
    secondaryPrice: '$450',
    accentFrom: 'from-cyan-500/10',
    accentBorder: 'border-cyan-500/30',
    btnGradient: 'from-cyan-500 to-blue-600',
  },
  'compare': {
    headline: 'Need an expert verdict?',
    body: "30-minute rapid-fire evaluation. You describe the problem, I tell you which approach wins  -  and why.",
    primaryLabel: 'Schedule Evaluation',
    primaryHref: '/api/buy/gut_check',
    primaryPrice: '$450',
    secondaryLabel: 'View All Advisory Options',
    secondaryHref: '/services',
    secondaryPrice: '',
    accentFrom: 'from-amber-500/10',
    accentBorder: 'border-amber-500/30',
    btnGradient: 'from-amber-500 to-orange-500',
  },
  'educational': {
    headline: 'Want to apply this to your organization?',
    body: "Run a free diagnostic first. If the numbers concern you, book a session to build a remediation plan.",
    primaryLabel: 'Run Free Diagnostic',
    primaryHref: '/tools/pdi',
    primaryPrice: 'Free',
    secondaryLabel: 'View Advisory Options',
    secondaryHref: '/services',
    secondaryPrice: '',
    accentFrom: 'from-violet-500/10',
    accentBorder: 'border-violet-500/30',
    btnGradient: 'from-violet-500 to-purple-600',
  },
  'industry': {
    headline: 'Need a sector-specific audit?',
    body: "I run R&D capital audits tailored to your industry's cost structures, compliance requirements, and scaling patterns.",
    primaryLabel: 'View Advisory',
    primaryHref: '/services',
    primaryPrice: '',
    secondaryLabel: 'Quick Gut-Check',
    secondaryHref: '/api/buy/gut_check',
    secondaryPrice: '$450',
    accentFrom: 'from-emerald-500/10',
    accentBorder: 'border-emerald-500/30',
    btnGradient: 'from-emerald-500 to-cyan-500',
  },
};

export default function AdvisoryCTA({ variant, termTitle }: AdvisoryCTAProps) {
  const v = VARIANTS[variant];
  const isInternalPrimary = v.primaryHref.startsWith('/') && !v.primaryHref.startsWith('/api/');
  const isInternalSecondary = v.secondaryHref.startsWith('/') && !v.secondaryHref.startsWith('/api/');

  return (
    <section className={`mt-12 mb-12 rounded-2xl ${v.accentBorder} border bg-gradient-to-br ${v.accentFrom} to-transparent p-8`}>
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#FCFAF7] flex items-center justify-center">
          <span className="text-zinc-900 text-lg">⚡</span>
        </div>
        <div>
          <h2 className="text-xl font-grotesk font-bold text-zinc-950">
            {termTitle ? `${v.headline.replace('?', '')} with ${termTitle}?` : v.headline}
          </h2>
          <p className="text-zinc-700 text-sm font-medium mt-1 leading-relaxed max-w-lg">
            {v.body}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mt-6">
        {isInternalPrimary ? (
          <Link
            href={v.primaryHref}
            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${v.btnGradient} text-zinc-900 font-bold text-sm rounded-lg hover:opacity-90 transition-opacity shadow-lg`}
          >
            {v.primaryLabel} {v.primaryPrice && <span className="opacity-80 font-mono text-xs">({v.primaryPrice})</span>}
            <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <a
            href={v.primaryHref}
            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${v.btnGradient} text-zinc-900 font-bold text-sm rounded-lg hover:opacity-90 transition-opacity shadow-lg`}
          >
            {v.primaryLabel} {v.primaryPrice && <span className="opacity-80 font-mono text-xs">({v.primaryPrice})</span>}
            <span aria-hidden="true">→</span>
          </a>
        )}

        {isInternalSecondary ? (
          <Link
            href={v.secondaryHref}
            className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-zinc-300 text-zinc-800 font-semibold text-sm rounded-lg hover:border-zinc-400 hover:bg-zinc-50 transition-all"
          >
            {v.secondaryLabel} {v.secondaryPrice && <span className="text-zinc-500 font-mono text-xs">({v.secondaryPrice})</span>}
          </Link>
        ) : (
          <a
            href={v.secondaryHref}
            className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-zinc-300 text-zinc-800 font-semibold text-sm rounded-lg hover:border-zinc-400 hover:bg-zinc-50 transition-all"
          >
            {v.secondaryLabel} {v.secondaryPrice && <span className="text-zinc-500 font-mono text-xs">({v.secondaryPrice})</span>}
          </a>
        )}
      </div>

      {variant === 'compare' && (
        <div className="mt-8 pt-6 border-t border-amber-500/20">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-900 mb-3">
            Immediate Forensic Advisory Tiers
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-amber-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-zinc-950 text-sm">The Gut-Check Evaluation</h3>
                  <span className="text-xs font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">$450</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed mb-3">
                  30-minute rapid triage for founders and executives who need to know if their architecture or cloud bill is on fire.
                </p>
              </div>
              <a href="/api/buy/gut_check" className="text-xs font-bold text-amber-900 hover:text-amber-950 uppercase tracking-wider inline-flex items-center gap-1">
                Book Gut-Check &rarr;
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white border border-amber-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-zinc-950 text-sm">60-Min Insolvency Audit</h3>
                  <span className="text-xs font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">$2,500</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed mb-3">
                  Dedicated teardown of your exact token leakage, retry settings, and technical debt bottlenecks with an immediate remediation plan.
                </p>
              </div>
              <a href="/api/buy/insolvency_diagnostic" className="text-xs font-bold text-amber-900 hover:text-amber-950 uppercase tracking-wider inline-flex items-center gap-1">
                Book Insolvency Audit &rarr;
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white border border-amber-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-zinc-950 text-sm">Full R&amp;D Capital Audit</h3>
                  <span className="text-xs font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">$7,500</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed mb-3">
                  Complete forensic examination across team payroll, codebase health, and cloud spend. Delivers a 40-page board-ready audit.
                </p>
              </div>
              <Link href="/services" className="text-xs font-bold text-amber-900 hover:text-amber-950 uppercase tracking-wider inline-flex items-center gap-1">
                View Audit Scope &rarr;
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-white border border-amber-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-zinc-950 text-sm">AI Cost Governance Retainer</h3>
                  <span className="text-xs font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">$10,000/mo</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed mb-3">
                  Ongoing fractional executive oversight, vendor contract negotiations, and runtime guardrails to stop margin decay permanently.
                </p>
              </div>
              <Link href="/services" className="text-xs font-bold text-amber-900 hover:text-amber-950 uppercase tracking-wider inline-flex items-center gap-1">
                Inquire for Retainer &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}

      <p className="mt-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">
        Richard Ewing: AI Economist &amp; Capital Auditor
      </p>
    </section>
  );
}
