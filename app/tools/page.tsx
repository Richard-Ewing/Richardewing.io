import type { Metadata } from 'next';
import Link from 'next/link';
import ToolsContent from './tools-content';

export const metadata: Metadata = {
  title: 'Diagnostics & Tools: AI Spend & Unit Economics',
  description:
    'Interactive tools to quantify AI unit economics, identify engineering waste, and model ROI. Free diagnostics for technology and finance leaders.',
  alternates: {
    canonical: 'https://www.richardewing.io/tools',
  },
  openGraph: {
    title: 'Diagnostics & Tools | AI Spend Leaks | Richard Ewing',
    description:
      'Turn AI activity into measurable outcomes. Free diagnostics to quantify token waste and margin drag.',
    url: 'https://www.richardewing.io/tools',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diagnostics & Tools | AI Spend Leaks | Richard Ewing',
    description:
      'Turn AI activity into measurable outcomes. Free diagnostics to quantify token waste and margin drag.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

export default function ToolsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AI Economics Diagnostics & Tools',
    description:
      'Turn AI activity into measurable outcomes. Find waste, model scenarios, and prioritize what to fix.',
    url: 'https://www.richardewing.io/tools',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
      { '@type': 'ListItem', position: 2, name: 'Diagnostics & Tools', item: 'https://www.richardewing.io/tools' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Dark Executive Telemetry Banner */}
      <section className="bg-[var(--forest2)] text-white py-20 px-[5vw] relative overflow-hidden">
        <div className="max-w-[var(--max)] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <p className="eyebrow text-[#d8c7a8]">
              <i /> Find the leaks · Quantify the opportunity
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-tight">
              See where your AI spend is leaking.
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed">
              Turn raw AI activity into measurable outcomes. Find engineering waste, model
              cost scenarios, and prioritize what to fix before your next board meeting.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link className="button button-gold" href="/reality-check">
                Run the Reality Check ↗
              </Link>
              <a className="button button-ghost-light" href="#how-it-works">
                See how it works
              </a>
            </div>
          </div>

          {/* Telemetry Snapshot Card */}
          <div className="lg:col-span-5 bg-white/5 border border-white/15 rounded-xl p-6 backdrop-blur-md">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#d8c7a8] uppercase tracking-wider mb-2">
              <span>AI Economics Snapshot</span>
              <span className="text-emerald-400">Live Telemetry</span>
            </div>
            <div className="text-xs text-zinc-400">Monthly AI spend</div>
            <div className="text-3xl font-serif font-bold text-white mt-1">
              $328,400 <span className="text-emerald-400 text-sm font-sans">↑ 32%</span>
            </div>

            {/* Simulated Upward Curve SVG */}
            <div className="h-28 w-full my-4">
              <svg
                viewBox="0 0 300 80"
                className="w-full h-full stroke-[var(--gold)] fill-none"
              >
                <path
                  d="M 10,70 Q 80,68 150,45 T 290,15"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="290" cy="15" r="4" fill="var(--gold)" />
              </svg>
            </div>

            {/* Metrics Triad */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center">
              <div>
                <div className="text-[10px] font-mono text-zinc-400">Eng Efficiency</div>
                <div className="text-lg font-serif font-bold text-white mt-0.5">4.8x</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-zinc-400">Margin Impact</div>
                <div className="text-lg font-serif font-bold text-emerald-400 mt-0.5">+18%</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-zinc-400">ROI (est.)</div>
                <div className="text-lg font-serif font-bold text-white mt-0.5">2.1x</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section id="how-it-works" className="section border-b border-[var(--line)]">
        <div className="section-heading mb-12">
          <p className="eyebrow">
            <i /> The Process
          </p>
          <h2>Three steps to clarity.</h2>
          <p>
            No complex installations or invasive permissions required to get immediate
            visibility into unit margins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-[#faf8f2] border border-[var(--line)] rounded-lg">
            <span className="text-xs font-mono text-[var(--gold)]">01 / INPUT</span>
            <h3 className="font-serif text-xl font-medium my-3">Upload your data</h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Connect model API usage, infrastructure spend, and team velocity metrics or
              use our guided questionnaire.
            </p>
          </div>
          <div className="p-8 bg-[#faf8f2] border border-[var(--line)] rounded-lg">
            <span className="text-xs font-mono text-[var(--gold)]">02 / DIAGNOSIS</span>
            <h3 className="font-serif text-xl font-medium my-3">Run the analysis</h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Isolate retry cascades, unoptimized prompts, and low-margin features
              eating into engineering time.
            </p>
          </div>
          <div className="p-8 bg-[#faf8f2] border border-[var(--line)] rounded-lg">
            <span className="text-xs font-mono text-[var(--gold)]">03 / ACTION</span>
            <h3 className="font-serif text-xl font-medium my-3">Get a plan</h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Receive a prioritized action plan with clear cost modeling, model routing
              recommendations, and ROI projections.
            </p>
          </div>
        </div>
      </section>

      {/* Full 25-Tool Forensic Diagnostic Suite & Role Routing */}
      <ToolsContent />
    </>
  );
}
