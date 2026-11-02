import type { Metadata } from 'next';
import Link from 'next/link';
import ToolsContent from './tools-content';

export const metadata: Metadata = {
  title: 'Free AI Cost & Engineering Calculators',
  description:
    'Run 35+ free interactive calculators to model Claude and OpenAI API margins, technical debt dollars, Section 174 taxes, and SaaS automation ROI in 60s.',
  alternates: {
    canonical: 'https://www.richardewing.io/tools',
  },
  openGraph: {
    title: 'Free AI Cost & Engineering Calculators | Richard Ewing',
    description:
      'Run 35+ free interactive calculators to model Claude and OpenAI API margins, technical debt dollars, Section 174 taxes, and SaaS automation ROI in 60s.',
    url: 'https://www.richardewing.io/tools',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/api/og?title=Free+AI+Cost+%26+Engineering+Calculators&category=Diagnostic+Suite' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Cost & Engineering Calculators | Richard Ewing',
    description:
      'Run 35+ free interactive calculators to model Claude and OpenAI API margins, technical debt dollars, Section 174 taxes, and SaaS automation ROI in 60s.',
    images: ['https://www.richardewing.io/api/og?title=Free+AI+Cost+%26+Engineering+Calculators&category=Diagnostic+Suite'],
  },
};

const FLAGSHIP_TOOLS_LIST = [
  { name: 'Vibe-Coded App & AI Agent Security Scanner', url: 'https://www.richardewing.io/tools/vibe-security-scanner' },
  { name: 'Department AI Risk & SOP Playbook Generator', url: 'https://www.richardewing.io/tools/department-ai-playbook' },
  { name: 'Supabase RLS & PostgREST Security Checker', url: 'https://www.richardewing.io/tools/supabase-rls-checker' },
  { name: 'AI Credit vs Seat Calculator (AUEB)', url: 'https://www.richardewing.io/tools/aueb' },
  { name: 'Claude & OpenAI API Margin Calculator', url: 'https://www.richardewing.io/tools/ai-feature-margin' },
  { name: 'Self-Host LLM vs API Cost Calculator', url: 'https://www.richardewing.io/tools/slm-vs-api' },
  { name: 'Vibe-Coded App Launch & Security Checklist', url: 'https://www.richardewing.io/tools/vibe-coding-checklist' },
  { name: 'Department Automation & SaaS Replacement Calculator', url: 'https://www.richardewing.io/tools/automation-cost-calculator' },
  { name: 'AGENTS.md & SPEC.md Audit Scorecard', url: 'https://www.richardewing.io/tools/spec-quality-scorecard' },
  { name: 'Vibe-Coded App Debt & Risk Auditor', url: 'https://www.richardewing.io/tools/negative-carry-code-auditor' },
  { name: 'Department AI Automation ROI Model', url: 'https://www.richardewing.io/tools/fte-displacement' },
  { name: 'AI Hallucination Cost & QA Calculator', url: 'https://www.richardewing.io/tools/hallucination-tax' },
  { name: 'MCP Security Checklist & Risk Auditor', url: 'https://www.richardewing.io/tools/mcp-security-auditor' },
  { name: 'Enterprise Shadow AI Risk Calculator', url: 'https://www.richardewing.io/tools/shadow-ai' },
  { name: 'Technical Debt Dollar Calculator (PDI)', url: 'https://www.richardewing.io/tools/pdi' },
  { name: 'PE Software & AI Due Diligence Audit', url: 'https://www.richardewing.io/tools/due-diligence' },
  { name: 'Revenue Per Engineer Calculator (APER)', url: 'https://www.richardewing.io/tools/aper' },
  { name: 'Section 174 R&D Tax Cost Calculator', url: 'https://www.richardewing.io/tools/section-174-calculator' },
];

export default function ToolsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Free AI Cost & Engineering Calculators',
    description:
      'Interactive financial diagnostics for CEOs, CFOs, CPOs, and Engineering Managers to quantify AI unit margins, technical debt dollars, and automation ROI.',
    url: 'https://www.richardewing.io/tools',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: FLAGSHIP_TOOLS_LIST.length,
      itemListElement: FLAGSHIP_TOOLS_LIST.map((tool, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: tool.name,
        url: tool.url,
      })),
    },
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

      {/* Flagship Frameworks & Executive Diagnostics Feeder Section */}
      <section className="section border-b border-[var(--line)]">
        <div className="section-heading mb-10">
          <p className="eyebrow">
            <i /> Authority Feeder · Core Models
          </p>
          <h2>Flagship Frameworks &amp; Executive Diagnostics</h2>
          <p>
            Ground your diagnostics in peer-reviewed economic doctrine, capital models, and executive briefings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-[#faf8f2] border border-[var(--line)] rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[var(--gold)] uppercase font-bold tracking-wider">01 / DOCTRINE</span>
              <h3 className="font-serif text-lg font-bold text-[var(--ink)] my-2">Flagship Frameworks</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
                Foundational models quantifying technical liabilities and agentic workflow risks.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-mono font-bold text-[var(--forest)] border-t border-[var(--line)] pt-3">
              <li><Link href="/articles/frameworks/technical-insolvency-date" className="hover:underline">Technical Insolvency Date ↗</Link></li>
              <li><Link href="/articles/frameworks/vibe-coding-debt" className="hover:underline">Vibe Coding Debt ↗</Link></li>
              <li><Link href="/articles/frameworks/shadow-agents" className="hover:underline">Shadow Agents ↗</Link></li>
            </ul>
          </div>

          <div className="p-6 bg-[#faf8f2] border border-[var(--line)] rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[var(--gold)] uppercase font-bold tracking-wider">02 / DIAGNOSTICS</span>
              <h3 className="font-serif text-lg font-bold text-[var(--ink)] my-2">Primary Diagnostics</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
                Interactive calculators to stress-test your AI unit economics and technical debt.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-mono font-bold text-[var(--forest)] border-t border-[var(--line)] pt-3">
              <li><Link href="/tools/pdi" className="hover:underline">Product Debt Index (PDI) ↗</Link></li>
              <li><Link href="/reality-check" className="hover:underline">AI Reality Check ↗</Link></li>
              <li><Link href="/tools/aueb" className="hover:underline">AI Unit Economics (AUEB) ↗</Link></li>
            </ul>
          </div>

          <div className="p-6 bg-[#faf8f2] border border-[var(--line)] rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[var(--gold)] uppercase font-bold tracking-wider">03 / AUDITS &amp; SPRINTS</span>
              <h3 className="font-serif text-lg font-bold text-[var(--ink)] my-2">Financial Capital Audits</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
                Quantify engineering payroll leakage and scope fixed-timeline turnaround sprints.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-mono font-bold text-[var(--forest)] border-t border-[var(--line)] pt-3">
              <li><Link href="/roi-calculator" className="hover:underline">Executive ROI Calculator ↗</Link></li>
              <li><Link href="/pricing-sprints" className="hover:underline">Fixed-Scope Sprints ↗</Link></li>
              <li><Link href="/advisory" className="hover:underline">Executive Advisory ↗</Link></li>
            </ul>
          </div>

          <div className="p-6 bg-[#faf8f2] border border-[var(--line)] rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[var(--gold)] uppercase font-bold tracking-wider">04 / GOVERNANCE</span>
              <h3 className="font-serif text-lg font-bold text-[var(--ink)] my-2">Role Briefings &amp; Platforms</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
                Tailored executive playbooks and comparative runtime safety evaluations.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-mono font-bold text-[var(--forest)] border-t border-[var(--line)] pt-3">
              <li><Link href="/for-cfos" className="hover:underline">CFO Governance Briefing ↗</Link></li>
              <li><Link href="/for-ctos" className="hover:underline">CTO Governance Briefing ↗</Link></li>
              <li><Link href="/compare/ai-guardrails-platforms" className="hover:underline">AI Guardrails Comparison ↗</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Full 25-Tool Forensic Diagnostic Suite & Role Routing */}
      <ToolsContent />
    </>
  );
}
