import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import CheckoutButton from '@/app/components/client/CheckoutButton';
import ProofRail from '@/app/components/ProofRail';
import AsSeenInBar from '@/components/social-proof/AsSeenInBar';
import ToolkitInteractivePreview from './ToolkitInteractivePreview';

export const metadata: Metadata = {
  title: 'Builder, PM & Operator Survival Kit ($29)',
  description:
    'Download 5 P&L spreadsheets, SPEC.md and AGENTS.md templates to ship AI apps without breaking code, pricing calculators, and 12-slide CFO board decks.',
  alternates: {
    canonical: 'https://www.richardewing.io/toolkit',
  },
  openGraph: {
    title: 'The Builder, PM & Operator Survival Kit ($29) | Richard Ewing',
    description:
      'Ship AI apps past the 80% trap, price features so power users do not bankrupt you, kill zombie busywork, and command $220K-$400K+ roles.',
    url: 'https://www.richardewing.io/toolkit',
    type: 'website',
  },
};

const kitModules = [
  {
    number: '01',
    badge: 'Financial Spreadsheet + Interactive Model',
    title: 'The AI Feature Pricing & Margin Stress-Tester',
    problemSolved:
      'You priced your product in flat monthly seats, but OpenAI, Anthropic, and AWS bill you by the token.',
    description:
      'Plug in your model API costs, average prompt lengths, retry rates, and seat price. Instantly calculate your P50, P90, and P99 customer gross margins, identify the exact usage threshold where heavy users become unprofitable, and model seat-plus-credit hybrid tiers.',
    includedFiles: [
      'AI_Unit_Economics_Stress_Tester.xlsx / .csv (Editable Formulas)',
      'P50 / P90 / P99 Token Margin Collapse Calculator',
      'Seat vs. Usage vs. Outcome Tier Pricing Decision Matrix',
    ],
  },
  {
    number: '02',
    badge: 'Vibe-to-Production Spec System + Backlog Kill-List ($5M Cost-Cut)',
    title: 'The SPEC.md / AGENTS.md Templates & Zombie Feature Kill-List Matrix',
    problemSolved:
      'Your AI coding agent breaks two old screens every time it fixes one bug, or 70% of your engineering week is trapped maintaining dead features.',
    description:
      'Cross the last 20% from browser prototype (Lovable, Bolt, Cursor, Claude Code, Antigravity) to production with our Blast Radius Guard SPEC.md and AGENTS.md contracts, paired with the exact spreadsheet matrix used to cut $5M in negative-margin product bloat and scale $0 to $25M ARR.',
    includedFiles: [
      'Production_SPEC_and_AGENTS_md_Templates.md (Blast Radius + Supabase RLS + Stripe Checklist)',
      'Zombie_Feature_Kill_List_Matrix.xlsx / .csv',
      'Engineering Capacity Reallocation & Deprecation Templates',
    ],
  },
  {
    number: '03',
    badge: 'Executive Presentation System',
    title: 'The 12-Slide CFO & Board Defense Deck Blueprint',
    problemSolved:
      'Your CEO and CFO eyes glaze over when you show sprint velocity, story points, or DORA metrics in quarterly reviews.',
    description:
      'A board-ready presentation template that reframes your product and engineering roadmap in terms of Capital Efficiency, Gross Margin Defense, and Return on Invested Capital (ROIC).',
    includedFiles: [
      '12-Slide CFO & Board Presentation (.pptx / .key)',
      'Product P&L Waterfall Slide Template',
      'R&D Capital Allocation Heatmap',
    ],
  },
  {
    number: '04',
    badge: 'Department Automation & Turnaround Runbook',
    title: 'First-30-Days Product P&L & Department Automation Runbook',
    problemSolved:
      'Taking over a stagnant, loss-making product line or drowning in 60 hours a week of manual support, ops, and status-update busywork.',
    description:
      'The step-by-step 30-day operational protocol for founders, CPOs, VPs of Product, Support/Ops Leads, and PE turnaround operators to forensic-audit a product line, wire Human-in-the-Loop MCP workflows, kill negative-carry features, and restructure pricing.',
    includedFiles: [
      '30-Day Forensic Audit & MCP Automation Checklist',
      'Executive 1-on-1 Stakeholder Question Bank',
      'Quick-Win Margin & SaaS Consolidation Guide',
    ],
  },
  {
    number: '05',
    badge: 'Career & Executive Positioning Dossier ($220K-$450K+ Roles)',
    title: 'The AI Builder & Product Economist Interview, Resume & Comp Guide',
    problemSolved:
      'Competing against 800 other Product Managers, Engineers, or Directors who all sound like generic Agile ticket routers.',
    description:
      'How to reposition your resume, LinkedIn, live prototype portfolio, and final-round interview narrative around P&L ownership, ARR expansion, and unit economics so CEOs, Boards, and hiring managers see you as a category-of-one commercial leader.',
    includedFiles: [
      'Executive P&L Resume Bullet Transformation Guide',
      'Top 15 CEO / CFO / CTO Final-Round Interview Questions & Answers',
      '90-Day CPO / VP / Senior PM Case Study Deck Template',
    ],
  },
];

export default function ToolkitPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'The Builder, PM & Operator Survival Kit (2026 Edition)',
    description:
      '5 actionable financial models, SPEC.md and AGENTS.md production templates, AI feature pricing stress-testers, Zombie Feature kill-lists, and 12-slide CFO board deck templates by Richard Ewing.',
    brand: {
      '@type': 'Brand',
      name: 'Richard Ewing - Product & AI Economist',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.richardewing.io/toolkit',
      priceCurrency: 'USD',
      price: '29.00',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero Section */}
      <section className="inner-hero">
        <div className="inner-art" />
        <div className="inner-copy">
          <p className="eyebrow">
            <i /> Instant Download · Live Browser Workspace (/workspace)
          </p>
          <h1>The Builder, PM &amp; Operator Survival Kit ($29)</h1>
          <p className="inner-lede">
            Unstick your AI app past the 80% trap, price your features so power users do not bankrupt you, kill zombie busywork, and walk into your next CEO review or $250K+ interview with a real P&amp;L. Includes all 5 spreadsheets, <code className="font-mono text-xs">SPEC.md</code> / <code className="font-mono text-xs">AGENTS.md</code> templates, 12-slide board deck, and instant <Link href="/workspace" className="underline font-semibold">/workspace</Link> access.
          </p>
          <div className="actions">
            <a href="#buy" className="button button-gold">
              Get the Survival Kit ($29) ↗
            </a>
            <Link href="/operating-kit" className="button button-outline">
              View Detailed Specs
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE OPERATING INVARIANT</span>
          <strong>Ship clean code. Run your product like a P&amp;L.</strong>
          <p>
            Built from scaling enterprise SaaS from $0 to $25M ARR at Tyler Technologies, cutting $5M in product waste, and shipping 3 production AI platforms.
          </p>
        </aside>
      </section>

      {/* Proof & Authority Rails */}
      <section className="section">
        <div className="max-w-4xl mx-auto space-y-6">
          <ProofRail />
          <AsSeenInBar />
        </div>
      </section>

      {/* Pricing / Buy Box Section */}
      <section id="buy" className="section border-t border-[var(--line)] scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="eyebrow center">Instant Access · Zero Calls Required</p>
            <h2 className="text-3xl font-serif text-[var(--ink)]">
              Choose your edition.
            </h2>
            <p className="text-sm text-[var(--muted)] mt-2">
              Instant digital download with expense-ready receipt. Lifetime file ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Standard Edition */}
            <div className="bg-white border border-[var(--line)] rounded-2xl p-7 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[var(--gold)] block mb-1">
                  Standard Edition · Builders, PMs &amp; Operators
                </span>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-serif font-bold text-[var(--ink)]">$29</span>
                  <span className="text-sm text-[var(--muted)] line-through font-mono">$299 value</span>
                </div>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
                  Includes all 5 core Excel/CSV spreadsheets, <code className="font-mono text-[11px]">SPEC.md</code> &amp; <code className="font-mono text-[11px]">AGENTS.md</code> production templates, 12-slide CFO board deck, 30-day turnaround checklist, $250K+ career/interview playbook, and{' '}
                  <strong className="text-[var(--ink)]">Live Interactive Workspace (/workspace)</strong> access.
                </p>
              </div>
              <div className="pt-4 border-t border-[var(--line)]">
                <CheckoutButton
                  productId="premium_guide_29"
                  label="Get the Survival Kit ($29) →"
                  variant="primary"
                />
              </div>
            </div>

            {/* Complete Executive Bundle */}
            <div className="bg-[var(--forest2)] text-white border-2 border-[var(--gold)] rounded-2xl p-7 flex flex-col justify-between shadow-xl relative">
              <div className="absolute -top-3 right-4 px-2.5 py-0.5 bg-[var(--gold)] text-[var(--ink)] text-[10px] font-bold font-mono uppercase tracking-wider rounded-full">
                Most Popular
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[var(--gold)] block mb-1">
                  Complete AI Builder &amp; Executive System (+13 Playbooks)
                </span>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-serif font-bold text-[var(--gold)]">$79</span>
                  <span className="text-sm text-zinc-300 line-through font-mono">$649 value</span>
                </div>
                <p className="text-xs text-zinc-200 leading-relaxed mb-6">
                  Everything in the $29 Survival Kit + Live Workspace PLUS all 13
                  specialized playbooks (Agentic AI Costs &amp; MCP Governance, Hybrid Credit Pricing,
                  Cloud FinOps, PE Due Diligence, Coding Tool ROI, and more).
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <CheckoutButton
                  productId="premium_guide_79"
                  label="Get Complete Kit + All 13 Playbooks ($79) →"
                  variant="secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Preview */}
      <section className="section border-t border-[var(--line)]">
        <div className="max-w-4xl mx-auto">
          <ToolkitInteractivePreview />
        </div>
      </section>

      {/* Detailed Breakdown of All 5 Modules */}
      <section className="section border-t border-[var(--line)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow center">What Is Inside</p>
            <h2 className="text-3xl font-serif text-[var(--ink)]">
              5 Plug-and-Play Operating &amp; Financial Instruments
            </h2>
            <p className="text-sm text-[var(--muted)] mt-2">
              Designed for indie builders, Product Managers, engineering leaders, and executives who want real numbers instead of hype.
            </p>
          </div>

          <div className="space-y-6">
            {kitModules.map((mod) => (
              <div
                key={mod.number}
                className="bg-white border border-[var(--line)] rounded-2xl p-6 sm:p-8 shadow-sm hover:border-[var(--gold)] transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-[var(--paper2)] text-[var(--gold)] font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-[var(--line)]">
                    {mod.number}
                  </span>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--gold)] block">
                      {mod.badge}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[var(--ink)]">
                      {mod.title}
                    </h3>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--paper)] border border-[var(--line)] text-xs text-[var(--ink)] font-medium mb-4">
                  <strong>The Problem It Solves:</strong> {mod.problemSolved}
                </div>

                <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
                  {mod.description}
                </p>

                <div className="border-t border-[var(--line)] pt-4">
                  <div className="text-[10px] font-mono font-bold uppercase text-[var(--muted)] mb-3">
                    Included Deliverables:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {mod.includedFiles.map((file, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs font-serif font-bold text-[var(--ink)] bg-[var(--paper)] p-3 rounded-xl border border-[var(--line)]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--forest)] shrink-0 mt-0.5" />
                        <span>{file}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Zero Consulting Bloat</p>
        <h2>Get the Complete Survival &amp; Operating Kit Today</h2>
        <p>
          Spend $29 once and get the exact templates, pricing models, and board decks that built a $25M ARR product line and 3 live AI platforms.
        </p>
        <div className="actions center">
          <a href="#buy" className="button button-gold">
            Download Survival Kit ($29) ↗
          </a>
          <Link href="/services#gut_check" className="button button-ghost-light">
            Or Book a Live 60-Min Unstick Session ($450) ↗
          </Link>
        </div>
      </section>
    </>
  );
}
