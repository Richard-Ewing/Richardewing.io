import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import CareerWinBenchmarkVisual from '@/app/components/CareerWinBenchmarkVisual';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';
import { careerwinSoftwareSchema } from '@/app/lib/schemas';

export const metadata: Metadata = {
  title: 'CareerWin.ai (Official) | Honest Resume Tailoring',
  description:
    'Official CareerWin.ai by Richard Ewing: check your resume free with no sign-up, tailor 1-page resumes from real facts, autofill ATS forms, and track jobs.',
  alternates: { canonical: 'https://www.richardewing.io/careerwin' },
  openGraph: {
    title: 'CareerWin.ai (Official) | Honest Resume Tailoring | Richard Ewing',
    description:
      'Official CareerWin.ai by Richard Ewing: check your resume free with no sign-up, tailor 1-page resumes from real facts, autofill ATS forms, and track jobs.',
    url: 'https://www.richardewing.io/careerwin',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CareerWin.ai (Official) | Honest Resume Tailoring | Richard Ewing',
    description:
      'Official CareerWin.ai by Richard Ewing: check your resume free with no sign-up, tailor 1-page resumes from real facts, autofill ATS forms, and track jobs.',
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
            <i /> Venture · Official CareerWin.ai
          </p>
          <h1>Apply Faster, Without the AI Making Things Up</h1>
          <p className="inner-lede">
            For experienced professionals in an active search, CareerWin.ai keeps your real
            work history in one place, so every tailored resume, cover letter, job application
            form, and interview answer comes from facts you can defend. Built for healthcare,
            operations, trades, finance, public sector, and tech.
          </p>
          <div className="actions">
            <a
              href="https://careerwin.ai/teardown"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-gold"
            >
              Check My Resume Free (No Sign-Up) ↗
            </a>
            <a
              href="https://careerwin.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            >
              Visit Official CareerWin.ai ↗
            </a>
            <Link href="/case-studies" className="button button-outline">
              Read verified case studies
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE OPERATING PRINCIPLE</span>
          <strong>Your real facts. Never invented ones.</strong>
          <p>
            Upload your resume once, answer quick questions where a job posting shows gaps, and
            export clean single-column PDF and Word resumes without made-up metrics.
          </p>
        </aside>
      </section>

      {/* Official Domain Verification & Workflow Visual */}
      <section className="section">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white border border-[var(--line)] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="px-3 py-1 bg-[var(--paper2)] text-[var(--forest)] text-xs font-mono font-bold rounded-full">
                Official Domain Verification · CareerWin.ai
              </span>
              <a
                href="https://careerwin.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-[var(--gold)] hover:underline"
              >
                https://careerwin.ai ↗
              </a>
            </div>
            <h2 className="text-xl font-serif font-bold text-[var(--ink)] mb-2">
              Official CareerWin.ai Platform Access &amp; Free Tools
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
              CareerWin operates exclusively at <strong>https://careerwin.ai</strong>, founded by
              Richard Ewing. Official CareerWin (<code>careerwin.ai</code>) is unaffiliated with
              third-party lookalike websites operating on <code>career.win</code> or{' '}
              <code>careerwin.app</code> domain extensions. Open the official tools directly:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-mono font-bold">
              <a
                href="https://careerwin.ai/teardown"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[var(--paper)] border border-[var(--line)] text-[var(--ink)] hover:border-[var(--gold)] transition-colors"
              >
                Free Resume Check (No Sign-Up) ↗
              </a>
              <a
                href="https://careerwin.ai/ai-resume-tailoring"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[var(--paper)] border border-[var(--line)] text-[var(--ink)] hover:border-[var(--gold)] transition-colors"
              >
                Grounded Resume Tailoring ↗
              </a>
              <a
                href="https://careerwin.ai/chrome-extension"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[var(--paper)] border border-[var(--line)] text-[var(--ink)] hover:border-[var(--gold)] transition-colors"
              >
                Workday &amp; Greenhouse Autofill ↗
              </a>
              <a
                href="https://careerwin.ai/how-it-works"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[var(--paper)] border border-[var(--line)] text-[var(--ink)] hover:border-[var(--gold)] transition-colors"
              >
                5-Step Search Walkthrough ↗
              </a>
              <a
                href="https://careerwin.ai/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[var(--paper)] border border-[var(--line)] text-[var(--ink)] hover:border-[var(--gold)] transition-colors"
              >
                Public Monthly Pricing ($29/mo) ↗
              </a>
              <a
                href="https://careerwin.ai/compare"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[var(--paper)] border border-[var(--line)] text-[var(--ink)] hover:border-[var(--gold)] transition-colors"
              >
                40 Tool Comparisons (Nov 2026) ↗
              </a>
            </div>
          </div>

          <CareerWinBenchmarkVisual />
        </div>
      </section>

      {/* Sourced Stack Comparison & Transparent Pricing */}
      <section className="section border-t border-[var(--line)]">
        <div className="max-w-3xl mx-auto bg-white border border-[var(--line)] rounded-2xl p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[var(--paper2)] text-[var(--gold)] rounded-full shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-[var(--ink)] mb-2">
                One Plan ($29/mo) Instead of a $118.94/mo Subscription Stack
              </h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                Active job seekers routinely pay separately for a tracker and builder (Teal+ at
                $29/mo), a keyword scanner (Jobscan at $49.95/mo), and AI form autofill
                (Simplify+ at $39.99/mo), totaling $118.94/mo based on vendor pricing pages
                verified November 2026. CareerWin.ai bundles honest resume tailoring,
                human-confirmed Chrome autofill, LinkedIn alignment, job tracking, and mock
                interview practice into one $29/mo Founding Member plan with two-click
                cancellation and a 30-day money-back refund policy, plus an optional $5/mo
                Career Keeper plan after you get hired.
              </p>
              <div className="text-xs font-mono font-bold text-[var(--ink)]">
                Prices verified directly against vendor pricing pages (Nov 2026) · Public monthly billing, no hidden checkout passes
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
            How CareerWin.ai was built in public.
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
                Built In: &quot;I Used AI to Build My Startup. Here&apos;s What I Learned.&quot;
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

          {/* LinkedIn Career Architecture Spotlight */}
          <div className="bg-white border border-[var(--line)] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="px-3 py-1 bg-[var(--paper2)] text-[var(--ink)] text-xs font-mono font-bold rounded-full">
                LinkedIn Newsletter · August 20, 2026
              </span>
              <span className="text-xs font-mono text-[var(--muted)]">
                Candidate Architecture Essay
              </span>
            </div>
            <h3 className="text-xl font-serif font-bold text-[var(--ink)] mb-2">
              Why One-Off Resume Rewrites Break Down Across an Active Search
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
              Rewriting disconnected PDF files from scratch for every job posting introduces
              date drift, conflicting job titles against LinkedIn, and exaggerated AI claims
              that collapse during background checks or hiring manager screens. Keeping one
              verified work record lets every application draw from facts you already proved.
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
              How Structured Work Records Stop AI Hallucinations
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed italic mb-4">
              &quot;When people hear about AI career tools, they usually picture a basic
              prompt wrapper that takes a job description and rewrites a resume bullet
              point. Those wrappers fail because they lack persistent memory. CareerWin.ai
              solves this by structuring career history into discrete, verified relational
              objects.&quot;
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

      {/* Core Capabilities */}
      <section className="section border-t border-[var(--line)]">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow center">How It Works</p>
          <h2 className="text-3xl font-serif text-[var(--ink)] mb-8 text-center">
            One Grounded Record Across Your Entire Search
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[var(--line)] rounded-2xl p-7 shadow-sm">
              <div className="p-3 bg-[var(--paper2)] text-[var(--gold)] rounded-xl w-fit mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[var(--ink)] mb-2">
                1. Requirement Coverage &amp; Tailoring
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Checks which job requirements your work history already covers, asks plain
                questions where proof is missing, and exports clean 1-page PDF and Word (.docx)
                resumes.
              </p>
            </div>

            <div className="bg-white border border-[var(--line)] rounded-2xl p-7 shadow-sm">
              <div className="p-3 bg-[var(--paper2)] text-[var(--gold)] rounded-xl w-fit mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[var(--ink)] mb-2">
                2. Human-Confirmed ATS Autofill
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Fills repetitive Workday, Greenhouse, Lever, Ashby, iCIMS, and Taleo application
                fields from the same verified record while keeping you in control of final submit.
              </p>
            </div>

            <div className="bg-white border border-[var(--line)] rounded-2xl p-7 shadow-sm">
              <div className="p-3 bg-[var(--paper2)] text-[var(--gold)] rounded-xl w-fit mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[var(--ink)] mb-2">
                3. Tracking, Interviews &amp; Raises
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Tracks every application stage, runs voice mock interview practice on your real
                stories, and logs wins after you land the job for promotion and raise reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Venture Portfolio Fit Banner */}
      <section className="section border-t border-[var(--line)]">
        <div className="max-w-4xl mx-auto bg-[var(--forest2)] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold text-[var(--gold)] uppercase tracking-widest mb-3 block">
              Venture Portfolio
            </span>
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              How CareerWin.ai Fits Alongside Exogram
            </h2>
            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              While <strong>Exogram</strong> enforces runtime memory and verification gates for
              enterprise AI systems and <strong>Advisory Services</strong> audits R&amp;D capital
              spend for executives, <strong>CareerWin.ai</strong> brings that same no-hallucination
              grounding directly to working professionals managing job searches and raises.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-mono">
              <span className="px-3 py-1.5 bg-white/10 rounded-lg text-white">
                ✓ Grounded Work History
              </span>
              <span className="px-3 py-1.5 bg-white/10 rounded-lg text-white">
                ✓ Workday &amp; Greenhouse Autofill
              </span>
              <span className="px-3 py-1.5 bg-white/10 rounded-lg text-white">
                ✓ Public Monthly Pricing &amp; 30-Day Refund
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
        <p className="eyebrow">Official CareerWin.ai</p>
        <h2>Ready to check your resume against real job postings?</h2>
        <p>
          Run a free resume check with no sign-up at CareerWin.ai or build your permanent work
          record in minutes.
        </p>
        <div className="actions center">
          <a
            href="https://careerwin.ai/teardown"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-gold"
          >
            Check My Resume Free at CareerWin.ai ↗
          </a>
          <a
            href="https://careerwin.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-ghost-light"
          >
            Visit CareerWin.ai Homepage ↗
          </a>
          <Link href="/portfolio" className="button button-ghost-light">
            Back to Executive Portfolio ↗
          </Link>
        </div>
      </section>
    </>
  );
}
