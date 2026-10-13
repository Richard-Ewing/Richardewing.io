import Link from 'next/link';

interface AdvisoryCTAProps {
  variant: 'tool-result' | 'compare' | 'educational' | 'industry';
  termTitle?: string;
}

const VARIANTS = {
  'tool-result': {
    headline: 'Your diagnostic revealed a P&L or AI margin leak?',
    body: "Start with the $29 Operating Kit + Live Workspace, or book a 60-minute 1-on-1 P&L & AI Tear-Down to isolate the exact capital leak.",
    primaryLabel: 'Book 60-Min P&L Tear-Down',
    primaryHref: '/api/buy/gut_check',
    primaryPrice: '$450',
    secondaryLabel: 'Get Operating Kit + Workspace',
    secondaryHref: '/toolkit',
    secondaryPrice: '$29',
    accentFrom: 'from-cyan-500/10',
    accentBorder: 'border-cyan-500/30',
    btnGradient: 'from-cyan-500 to-blue-600',
  },
  'compare': {
    headline: 'Need an independent Product Economist verdict?',
    body: "60-minute live P&L & AI architecture tear-down. Bring your numbers or stack and get a 48-hour executive action memo.",
    primaryLabel: 'Book 1-on-1 Tear-Down',
    primaryHref: '/api/buy/gut_check',
    primaryPrice: '$450',
    secondaryLabel: 'View All 3 Buying Paths',
    secondaryHref: '/services',
    secondaryPrice: '',
    accentFrom: 'from-amber-500/10',
    accentBorder: 'border-amber-500/30',
    btnGradient: 'from-amber-500 to-orange-500',
  },
  'educational': {
    headline: 'Want to apply Product Economics to your organization?',
    body: "Run a free diagnostic or launch the Live Product Economist Workspace. If the numbers concern you, book a 1-on-1 Tear-Down.",
    primaryLabel: 'Run Free Diagnostic',
    primaryHref: '/tools/pdi',
    primaryPrice: 'Free',
    secondaryLabel: 'Get Operating Kit ($29)',
    secondaryHref: '/toolkit',
    secondaryPrice: '',
    accentFrom: 'from-violet-500/10',
    accentBorder: 'border-violet-500/30',
    btnGradient: 'from-violet-500 to-purple-600',
  },
  'industry': {
    headline: 'Need a sector-specific Product & AI P&L turnaround?',
    body: "I run 7-day Product Economics Turnaround Sprints and PE M&A Due Diligence tailored to your industry's gross margin and scaling realities.",
    primaryLabel: 'View Advisory & Sprints',
    primaryHref: '/services',
    primaryPrice: '',
    secondaryLabel: '1-on-1 P&L Tear-Down',
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
            Product &amp; AI Economist Engagement Paths
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-amber-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-zinc-950 text-sm">1-on-1 P&amp;L &amp; AI Tear-Down</h3>
                  <span className="text-xs font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">$450</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed mb-3">
                  60-minute live Zoom working session + 48-hour executive action memo for founders and product leaders.
                </p>
              </div>
              <a href="/api/buy/gut_check" className="text-xs font-bold text-amber-900 hover:text-amber-950 uppercase tracking-wider inline-flex items-center gap-1">
                Book 1-on-1 Tear-Down &rarr;
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white border border-amber-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-zinc-950 text-sm">7-Day Product P&amp;L Turnaround Sprint</h3>
                  <span className="text-xs font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">$2,500</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed mb-3">
                  Hands-on 7-day forensic audit of your feature profitability, Zombie Feature carry cost, and AI unit economics.
                </p>
              </div>
              <a href="/api/buy/insolvency_diagnostic" className="text-xs font-bold text-amber-900 hover:text-amber-950 uppercase tracking-wider inline-flex items-center gap-1">
                Book Turnaround Sprint &rarr;
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white border border-amber-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-zinc-950 text-sm">0-to-1 AI Product Build Sprint</h3>
                  <span className="text-xs font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">$7,500</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed mb-3">
                  21-day hands-on engineering sprint: I design, build, and deploy a live AI product or interactive diagnostic tool for your business.
                </p>
              </div>
              <Link href="/services#path-b" className="text-xs font-bold text-amber-900 hover:text-amber-950 uppercase tracking-wider inline-flex items-center gap-1">
                View Build Sprint Scope &rarr;
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-white border border-amber-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-zinc-950 text-sm">Fractional CPO / Product Economist</h3>
                  <span className="text-xs font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">$10,000/mo</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed mb-3">
                  Ongoing executive leadership: P&amp;L ownership, pricing architecture, board reporting, and PM/engineering coaching.
                </p>
              </div>
              <Link href="/services#advisory_retainer" className="text-xs font-bold text-amber-900 hover:text-amber-950 uppercase tracking-wider inline-flex items-center gap-1">
                Inquire for Retainer &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}

      <p className="mt-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">
        Richard Ewing • Product &amp; AI Economist ($0 to $25M ARR • CS + Finance MBA)
      </p>
    </section>
  );
}

