import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, TrendingUp, ShieldCheck, Zap, ExternalLink, Quote } from 'lucide-react';
import CareerWinBenchmarkVisual from '@/app/components/CareerWinBenchmarkVisual';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';
import { careerwinSoftwareSchema } from '@/app/lib/schemas';

export const metadata: Metadata = {
  title: 'CareerWin Platform: Career Intelligence',
  description:
    'Career intelligence platform for engineers and product leaders. Access role benchmarks and build a data-backed compensation strategy.',
  alternates: { canonical: 'https://www.richardewing.io/careerwin' },
  openGraph: {
    title: 'CareerWin Platform · Career Intelligence | Richard Ewing',
    description:
      'CareerWin is a career intelligence platform for engineers and product leaders. Access role benchmarks and build a data-backed compensation strategy.',
    url: 'https://www.richardewing.io/careerwin',
    type: 'website',
  },
};

export default function CareerWinPage() {
  const careerResearch = RESEARCH_CORPUS.filter(
    (art) => art.domain === 'Career Economics' || art.domain === 'Product Leadership'
  ).slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careerwinSoftwareSchema) }}
      />

      {/* Hero Section */}
      <section className="inner-hero">
        <div className="inner-art" />
        <div className="inner-copy">
          <p className="eyebrow">
            <i /> Venture · Talent Intelligence
          </p>
          <h1>Career Intelligence for Engineers &amp; Product Leaders</h1>
          <p className="inner-lede">
            Role benchmarks, leveling intelligence, and compensation strategy powered by
            the AI Economics Knowledge Engine. Replace flat resumes with verified talent
            evidence.
          </p>
          <div className="actions">
            <a
              href="https://careerwin.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-gold"
            >
              Explore CareerWin.ai Platform ↗
            </a>
            <Link href="/case-studies" className="button button-outline">
              Read verified case studies
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE OPERATING PRINCIPLE</span>
          <strong>Evidence beats claims. Every single time.</strong>
          <p>
            Static PDF resumes are dead. Dynamic career operating systems quantify your real
            engineering and product impact.
          </p>
        </aside>
      </section>

      {/* Benchmark Visual */}
      <section className="section">
        <div className="max-w-4xl mx-auto">
          <CareerWinBenchmarkVisual />
        </div>
      </section>

      {/* Verified Testimonial Quote */}
      <section className="section border-t border-[var(--line)]">
        <div className="max-w-3xl mx-auto bg-white border border-[var(--line)] rounded-2xl p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[var(--paper2)] text-[var(--gold)] rounded-full shrink-0">
              <Quote className="w-6 h-6" />
            </div>
            <div>
              <blockquote className="text-[var(--ink)] font-serif text-lg leading-relaxed mb-4">
                &ldquo;Richard&apos;s leveling intelligence helped me negotiate a $40K
                compensation increase and a Staff Engineer title I didn&apos;t know I qualified
                for. CareerWin OS turns vague resume claims into recruiter-stopping
                evidence.&rdquo;
              </blockquote>
              <div className="text-xs font-mono font-bold text-[var(--muted)]">
                - Senior Engineer to Staff Engineer, Series B SaaS (Verified Outcome)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media & Research Spotlights */}
      <section className="section border-t border-[var(--line)]">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="eyebrow center">Research &amp; Case Studies</p>
          <h2 className="text-3xl font-serif text-[var(--ink)] text-center mb-8">
            How CareerWin was built in public.
          </h2>

          {/* Built In Case Study Spotlight */}
          <div className="bg-white border border-[var(--line)] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="px-3 py-1 bg-[var(--paper2)] text-[var(--ink)] text-xs font-mono font-bold rounded-full">
                Featured in Built In · August 18, 2026
              </span>
              <span className="text-xs font-mono text-[var(--muted)]">
                Architecture Case Study
              </span>
            </div>
            <h3 className="text-xl font-serif font-bold text-[var(--ink)] mb-2">
              The Production Architecture Behind CareerWin.ai
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed italic mb-4">
              &quot;CareerWin.ai became the first production application I built on top of
              this system. On previous builds without this layer, setting up authentication,
              user state, database rules, and API limits consumed weeks before I could touch
              core product features. Using Google Antigravity alongside Exogram as the
              underlying runtime engine, setting up security rules, state checks, and safety
              gates no longer resulted in broken routes or runaway token costs.&quot;
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4 pt-3 border-t border-[var(--line)]">
              <span className="text-xs font-mono font-bold text-[var(--ink)]">
                Built In: &quot;I Used AI to Build My Startup. Here’s What I Learned.&quot;
              </span>
              <a
                href="https://builtin.com/articles/ai-coding-tools-practical-evaluation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-[var(--gold)] hover:underline inline-flex items-center gap-1"
              >
                Read Article on Built In ↗
              </a>
            </div>
          </div>

          {/* LinkedIn Career OS Architecture Spotlight */}
          <div className="bg-white border border-[var(--line)] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="px-3 py-1 bg-[var(--paper2)] text-[var(--ink)] text-xs font-mono font-bold rounded-full">
                LinkedIn Newsletter · August 20, 2026
              </span>
              <span className="text-xs font-mono text-[var(--muted)]">
                Executive Career Strategy
              </span>
            </div>
            <h3 className="text-xl font-serif font-bold text-[var(--ink)] mb-2">
              Why Static Resumes Are Dead: The Shift to Career Operating Systems
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed italic mb-4">
              &quot;For decades, career management revolved around a single document: the PDF
              resume. In an era where AI screens candidates in milliseconds and work outputs
              evolve dynamically, static resumes fail to capture real-time competency,
              verifiable problem-solving, and continuous architectural skill evolution. The
              future belongs to dynamic Career Operating Systems that replace flat claims with
              verified talent intelligence.&quot;
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4 pt-3 border-t border-[var(--line)]">
              <span className="text-xs font-mono font-bold text-[var(--ink)]">
                By Richard Ewing: &quot;Why Static Resumes Are Dead&quot;
              </span>
              <a
                href="https://www.linkedin.com/pulse/why-static-resumes-dead-shift-career-operating-systems-richard-ewing-iui1c"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-[var(--gold)] hover:underline inline-flex items-center gap-1"
              >
                Read Essay on LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Beehiiv Context Engines Architecture Spotlight */}
          <div className="bg-white border border-[var(--line)] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="px-3 py-1 bg-[var(--paper2)] text-[var(--ink)] text-xs font-mono font-bold rounded-full">
                The AI Economist (Beehiiv) · August 21, 2026
              </span>
              <span className="text-xs font-mono text-[var(--muted)]">
                Deep Architecture Note
              </span>
            </div>
            <h3 className="text-xl font-serif font-bold text-[var(--ink)] mb-2">
              How Context Engines Power AI Career Intelligence
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed italic mb-4">
              &quot;When people hear about AI career tools, they usually picture a basic
              prompt wrapper that takes a job description and rewrites a resume bullet
              point. Those wrappers fail because they lack persistent memory. CareerWin.ai
              solves this by structuring career history into discrete, verified relational
              objects. Shifting from flat text prompts to structured context databases drops
              hallucination rates to near zero and generates tailored application sets in
              under 60 seconds.&quot;
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4 pt-3 border-t border-[var(--line)]">
              <span className="text-xs font-mono font-bold text-[var(--ink)]">
                By Richard Ewing: &quot;Schemas, Memory Retention, and Building CareerWin.ai&quot;
              </span>
              <a
                href="https://theaieconomist.beehiiv.com/p/how-context-engines-power-ai-career-intelligence"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-[var(--gold)] hover:underline inline-flex items-center gap-1"
              >
                Read Research on Beehiiv ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="section border-t border-[var(--line)]">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow center">Framework</p>
          <h2 className="text-3xl font-serif text-[var(--ink)] mb-8 text-center">
            Three Pillars of Career Intelligence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[var(--line)] rounded-2xl p-7 shadow-sm">
              <div className="p-3 bg-[var(--paper2)] text-[var(--gold)] rounded-xl w-fit mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[var(--ink)] mb-2">
                1. Market Value Benchmarks
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Real-time compensation data and equity valuation models adjusted for AI use,
                remote tiering, and engineering specialization.
              </p>
            </div>

            <div className="bg-white border border-[var(--line)] rounded-2xl p-7 shadow-sm">
              <div className="p-3 bg-[var(--paper2)] text-[var(--gold)] rounded-xl w-fit mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[var(--ink)] mb-2">
                2. Leveling Intelligence
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Map your technical scope from Senior to Staff, Principal, and VP of
                Engineering based on architectural impact and systems scope, not just tenure.
              </p>
            </div>

            <div className="bg-white border border-[var(--line)] rounded-2xl p-7 shadow-sm">
              <div className="p-3 bg-[var(--paper2)] text-[var(--gold)] rounded-xl w-fit mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[var(--ink)] mb-2">
                3. Negotiation Strategy
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Data-backed playbooks to negotiate executive compensation packages,
                performance bonuses, and advisory equity allocations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Integration Banner */}
      <section className="section border-t border-[var(--line)]">
        <div className="max-w-4xl mx-auto bg-[var(--forest2)] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold text-[var(--gold)] uppercase tracking-widest mb-3 block">
              Ecosystem Integration
            </span>
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              How CareerWin Fits Into the Ecosystem
            </h2>
            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              While <strong>Exogram</strong> governs enterprise AI runtime architecture and{' '}
              <strong>Advisory Services</strong> audits R&amp;D capital spend for CTOs and
              CFOs, <strong>CareerWin.ai</strong> applies that same financial data for
              individual career growth.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-mono">
              <span className="px-3 py-1.5 bg-white/10 rounded-lg text-white">
                ✓ Role Benchmarking
              </span>
              <span className="px-3 py-1.5 bg-white/10 rounded-lg text-white">
                ✓ Leveling Playbooks
              </span>
              <span className="px-3 py-1.5 bg-white/10 rounded-lg text-white">
                ✓ Executive Equity Analysis
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Research Foundations */}
      <section className="section border-t border-[var(--line)]">
        <div className="max-w-4xl mx-auto bg-white border border-[var(--line)] rounded-3xl p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-[var(--gold)] uppercase tracking-wider block mb-1">
              Empirical Foundations
            </span>
            <h2 className="text-2xl font-serif font-bold text-[var(--ink)]">
              Career Economics Research
            </h2>
          </div>

          <div className="space-y-3">
            {careerResearch.map((art) => (
              <div
                key={art.id}
                className="bg-[var(--paper)] border border-[var(--line)] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-[var(--muted)] mb-1">
                    <span className="text-[var(--gold)] uppercase">{art.publisher}</span>
                    {art.date && <span>· {art.date}</span>}
                  </div>
                  <h3 className="text-sm font-serif font-bold text-[var(--ink)]">
                    {art.title}
                  </h3>
                </div>
                <a
                  href={art.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-outline text-xs whitespace-nowrap self-start sm:self-center"
                >
                  Read Work ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Career Strategy</p>
        <h2>Ready to baseline your career market value?</h2>
        <p>
          Access CareerWin.ai&apos;s career intelligence suite or explore our executive
          curriculum.
        </p>
        <div className="actions center">
          <a
            href="https://careerwin.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-gold"
          >
            Launch CareerWin.ai Platform ↗
          </a>
          <Link href="/portfolio" className="button button-ghost-light">
            Back to Executive Portfolio ↗
          </Link>
        </div>
      </section>
    </>
  );
}
