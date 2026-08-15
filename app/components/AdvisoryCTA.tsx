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

      <p className="mt-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">
        Richard Ewing  -  AI Economist & Capital Auditor
      </p>
    </section>
  );
}
