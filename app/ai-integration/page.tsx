import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Brain,
  Clock,
  Shield,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Zap,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enterprise AI Integration System | Richard Ewing',
  description:
    'A complete enterprise governance operating system. Deploy diagnostic tools, unit margin models, and 48-hour strategic roadmaps.',
  alternates: { canonical: 'https://www.richardewing.io/ai-integration' },
  openGraph: {
    title: 'Enterprise AI Integration System | Richard Ewing',
    description:
      'A complete enterprise governance operating system. Deploy diagnostic tools, unit margin models, and 48-hour strategic roadmaps.',
    url: 'https://www.richardewing.io/ai-integration',
    type: 'website',
  },
};

const painPoints = [
  {
    icon: AlertTriangle,
    title: '"I do not know where to start"',
    detail:
      'There are 10,000+ AI tools. You do not need 10,000. You need the 3 that will actually move your bottom line. We find them in 2 hours.',
  },
  {
    icon: Clock,
    title: '"I am falling behind my competitors"',
    detail:
      'Your competitors are experimenting with AI. Some are saving 20+ hours/week. Others are wasting $50K on tools that do not work. We show you which moves actually matter.',
  },
  {
    icon: DollarSign,
    title: '"I wasted money on AI that failed"',
    detail:
      'Over 90% of AI pilot projects fail to deliver ROI because they lack a unit economics model. A $450 Teardown or $2,500 Turnaround Sprint prevents $50,000+ in wasted implementation.',
  },
  {
    icon: Users,
    title: '"My team does not know how to use AI"',
    detail:
      'Your team does not need generic training. They need 3 specific workflows that save them 5 hours/week each. We identify those workflows and build the 30-day adoption plan.',
  },
  {
    icon: Shield,
    title: '"I am worried about data security"',
    detail:
      'Which AI tools can see your customer data? Which ones store it? We audit every tool against your compliance requirements before anything gets deployed.',
  },
  {
    icon: Brain,
    title: '"I just want someone to tell me what to do"',
    detail:
      'That is exactly what this is. A 2-hour audit, a prioritized roadmap, and a 30-day action plan. No jargon, no hype: just the 10 things that will impact your bottom line.',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Business Deep-Dive',
    duration: '1-2 hours',
    detail:
      'Virtual or on-site audit. We map your core processes, identify margin friction, uncover gaps, and find the high-ROI opportunities in your daily operations.',
  },
  {
    num: '02',
    title: 'AI Strategic Roadmap',
    duration: '48 hours',
    detail:
      'Everything from the audit gets synthesized into advanced unit-margin analysis. You receive an executive roadmap outlining the top 10 actions ranked by bottom-line impact.',
  },
  {
    num: '03',
    title: 'ROI-First Prioritization',
    duration: 'Included',
    detail:
      'Every recommendation is ranked by revenue impact, cost savings, and implementation difficulty. You know exactly which action generates the most ROI with the least effort.',
  },
  {
    num: '04',
    title: '30-Day Kickstart Plan',
    duration: 'Included',
    detail:
      'A step-by-step action plan to begin implementation immediately. No ambiguity. Every day has a specific task, tool, and measurable outcome.',
  },
];

export default function AIIntegrationPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Enterprise AI Integration System',
    description:
      'Enterprise AI integration advisory, unit margin audits, and 48-hour strategic roadmaps.',
    provider: {
      '@type': 'Person',
      name: 'Richard Ewing',
    },
    url: 'https://www.richardewing.io/ai-integration',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="inner-hero">
        <div className="inner-art" />
        <div className="inner-copy">
          <p className="eyebrow">
            <i /> Advisory · AI Integration System
          </p>
          <h1>Stop worrying about AI. Get a practical plan.</h1>
          <p className="inner-lede">
            You do not need another generic AI tool. You need a disciplined economic plan.
            A 2-hour audit, a prioritized roadmap, and a 30-day kickstart plan delivered in
            48 hours, not 8 weeks.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run the Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/pricing-sprints">
              View engagement tiers
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>DELIVERY SPEED</span>
          <strong>48-Hour Turnaround</strong>
          <p>
            No 8-week consulting engagements with slide decks that sit on a shelf. Actionable
            roadmaps delivered in 2 business days.
          </p>
        </aside>
      </section>

      {/* Interactive Workspace Callout */}
      <section className="section">
        <div className="max-w-4xl mx-auto bg-white border border-[var(--line)] rounded-2xl p-8 sm:p-10 shadow-sm text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--gold)] block mb-2">
            Interactive P&amp;L &amp; AI Studio
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--ink)] mb-3">
            Launch the Live Product &amp; AI Economist Workspace
          </h2>
          <p className="text-sm text-[var(--muted)] max-w-xl mx-auto mb-6">
            Model your ARR, engineering headcount, Zombie Feature load, and monthly AI spend
            in real time, or run our guided diagnostic suite to generate a custom roadmap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/workspace" className="button button-gold text-xs">
              Open Live P&amp;L Workspace ↗
            </Link>
            <Link href="/toolkit" className="button button-outline text-xs">
              Get Operating Kit ($29) ↗
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Gallery */}
      <section className="section border-t border-[var(--line)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="eyebrow center">Common Friction Points</p>
            <h2 className="text-3xl font-serif text-[var(--ink)]">
              Sound familiar?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {painPoints.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 bg-[var(--paper2)] text-[var(--gold)] rounded-xl w-fit mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-[var(--ink)] text-base mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                      {p.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="section border-t border-[var(--line)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="eyebrow center">Methodology</p>
            <h2 className="text-3xl font-serif text-[var(--ink)] mb-2">
              The Process
            </h2>
            <p className="text-sm text-[var(--muted)]">
              From P&amp;L audit to deployed execution in days, not quarters.
            </p>
          </div>

          <div className="space-y-4">
            {processSteps.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[var(--line)] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--paper2)] border border-[var(--line)] flex items-center justify-center font-mono font-bold text-[var(--gold)] text-sm flex-shrink-0">
                  {s.num}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-serif font-bold text-base text-[var(--ink)]">
                      {s.title}
                    </h3>
                    <span className="text-[10px] font-mono text-[var(--muted)] uppercase bg-[var(--paper2)] px-2 py-0.5 rounded">
                      {s.duration}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Buying Paths */}
      <section className="section border-t border-[var(--line)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="eyebrow center">Engagement Options</p>
            <h2 className="text-3xl font-serif text-[var(--ink)] mb-2">
              Choose Your Buying Path
            </h2>
            <p className="text-sm text-[var(--muted)]">
              Structured Product &amp; AI Economist engagements: whether you want
              self-serve models, a 48-hour teardown, or a 21-day build sprint.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Path 1: Operating Kit + Teardown */}
            <div className="bg-white rounded-2xl border border-[var(--line)] p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="text-xs font-mono font-bold text-[var(--gold)] uppercase tracking-wider mb-2">
                  Path A: Self-Serve &amp; Triage
                </div>
                <h3 className="text-xl font-serif font-bold text-[var(--ink)] mb-1">
                  Operating Kit or Teardown
                </h3>
                <div className="text-2xl font-serif font-bold text-[var(--ink)] mb-3">
                  $29 / $450
                </div>
                <p className="text-xs text-[var(--muted)] mb-5 leading-relaxed">
                  Start with the 5 working Excel/CSV P&amp;L spreadsheets + Live Browser
                  Workspace for $29, or book a 60-minute 1-on-1 P&amp;L &amp; AI Teardown on
                  Zoom for $450.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    'AI Feature Pricing & Margin Stress-Tester (.XLSX/.CSV)',
                    'Zombie Feature Kill-List Matrix ($5M Cost-Cut Model)',
                    '12-Slide CFO & Board Defense Deck Blueprint',
                    'Instant access to Live Browser Workspace (/workspace)',
                    '$450 option: 60-min live Zoom + 48-hour action memo',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[var(--ink)]">
                      <CheckCircle size={14} className="text-[var(--gold)] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2 pt-4 border-t border-[var(--line)]">
                <Link href="/toolkit" className="button button-gold w-full text-center block text-xs">
                  Get Operating Kit ($29) ↗
                </Link>
                <Link href="/contact?subject=P&L+Teardown" className="button button-outline w-full text-center block text-xs">
                  Book 60-Min Teardown ($450) ↗
                </Link>
              </div>
            </div>

            {/* Path 2: 2-Week Turnaround Sprint */}
            <div className="bg-[var(--forest2)] text-white rounded-2xl p-6 flex flex-col justify-between shadow-xl border-2 border-[var(--gold)] relative">
              <div className="absolute -top-3 right-4 px-2.5 py-0.5 bg-[var(--gold)] text-[var(--ink)] text-[10px] font-bold font-mono uppercase tracking-wider rounded-full">
                Most Popular
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[var(--gold)] uppercase tracking-wider mb-2">
                  Path A+: Forensic Overhaul
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-1">
                  2-Week Turnaround Sprint
                </h3>
                <div className="text-2xl font-serif font-bold text-[var(--gold)] mb-3">
                  $2,500 <span className="text-xs font-mono text-zinc-300">/ 14-day sprint</span>
                </div>
                <p className="text-xs text-zinc-200 mb-5 leading-relaxed">
                  A 14-day forensic audit of your product backlog, AI token bills, and
                  margins, or ongoing Fractional CPO leadership ($10,000/mo).
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Feature-level profitability & Zombie Feature kill-list',
                    'AI token & cloud infrastructure margin recovery plan',
                    'Pricing & packaging tier redesign (seat vs usage)',
                    '12-slide CFO & Board Defense Deck built for your numbers',
                    'Live readout with your executive leadership team',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-zinc-200">
                      <CheckCircle size={14} className="text-[var(--gold)] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/contact?subject=Turnaround+Sprint"
                  className="button button-gold w-full text-center block text-xs"
                >
                  Book Turnaround Sprint ($2,500) ↗
                </Link>
              </div>
            </div>

            {/* Path 3: 21-Day AI Build Sprint */}
            <div className="bg-white rounded-2xl border border-[var(--line)] p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="text-xs font-mono font-bold text-[var(--forest)] uppercase tracking-wider mb-2">
                  Path B: Deployed Software
                </div>
                <h3 className="text-xl font-serif font-bold text-[var(--ink)] mb-1">
                  21-Day AI Build Sprint
                </h3>
                <div className="text-2xl font-serif font-bold text-[var(--ink)] mb-3">
                  $7,500 <span className="text-xs font-mono text-[var(--muted)]">/ 21-day build</span>
                </div>
                <p className="text-xs text-[var(--muted)] mb-5 leading-relaxed">
                  Need an interactive diagnostic engine or AI platform like Exogram.ai,
                  CareerWin.ai, or RichardEwing.io? I architect, code, and deploy it in 21
                  days.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Production Next.js / TypeScript / Cloudflare Edge deployment',
                    '1-to-3 custom interactive diagnostic calculators or AI workflows',
                    'Hardened LLM routing with token cost caps & prompt guardrails',
                    'Lead capture, Stripe checkout, and CRM webhook wiring',
                    '100% IP & GitHub repository ownership handoff on Day 21',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[var(--ink)]">
                      <CheckCircle size={14} className="text-[var(--forest)] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-[var(--line)]">
                <Link
                  href="/contact?subject=AI+Build+Sprint"
                  className="button button-dark w-full text-center block text-xs"
                >
                  Commission 21-Day Build ($7,500) ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">48-Hour Strategic Delivery</p>
        <h2>Ready to build an actionable AI plan?</h2>
        <p>
          Compare your numbers in the free Reality Check or schedule a 1-on-1 P&amp;L
          Teardown.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/reality-check">
            Run the free Reality Check ↗
          </Link>
          <Link className="button button-ghost-light" href="/contact">
            Get in touch ↗
          </Link>
        </div>
      </section>
    </>
  );
}
