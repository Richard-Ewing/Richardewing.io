import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import CheckoutButton from '@/app/components/client/CheckoutButton';
import ProofRail from '@/app/components/ProofRail';
import AsSeenInBar from '@/components/social-proof/AsSeenInBar';
import ToolkitInteractivePreview from './ToolkitInteractivePreview';

export const metadata: Metadata = {
  title: 'Product & AI Economist Operating Kit ($29)',
  description:
    'Download 5 battle-tested P&L spreadsheets, AI feature pricing calculators, Zombie Feature kill-list matrices, and 12-slide CFO board deck templates.',
  alternates: {
    canonical: 'https://www.richardewing.io/toolkit',
  },
  openGraph: {
    title: 'The Product & AI Economist Operating Kit ($29) | Richard Ewing',
    description:
      'Zero fluff. The exact financial models, AI pricing stress-testers, and board deck templates used to scale $0 to $25M ARR and cut $5M in product waste.',
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
    badge: 'Backlog Audit Matrix ($5M Cost-Cut System)',
    title: 'The "Zombie Feature" Kill-List & R&D Capital Matrix',
    problemSolved:
      'Your engineering team is working 60-hour weeks, yet your core roadmap barely moves because 70% of capacity is trapped maintaining old features.',
    description:
      'The exact spreadsheet matrix used to cut $5M in negative-margin product bloat and scale $0 to $25M ARR. Score every feature in your product by Fully-Loaded Engineering Maintenance Hours + Cloud Carry Cost vs. Attributed ARR and Active Seat Adoption.',
    includedFiles: [
      'Zombie_Feature_Kill_List_Matrix.xlsx / .csv',
      'Customer Deprecation & Migration Communication Templates',
      'Engineering Capacity Reallocation Calculator',
    ],
  },
  {
    number: '03',
    badge: 'Executive Presentation System',
    title: 'The 12-Slide CFO & Board Defense Deck Blueprint',
    problemSolved:
      'Your CFO eyes glaze over when you show sprint velocity, story points, or DORA metrics in quarterly business reviews.',
    description:
      'A board-ready presentation template that reframes your product roadmap in terms of Capital Efficiency, Gross Margin Defense, and Return on Invested Capital (ROIC).',
    includedFiles: [
      '12-Slide CFO & Board Presentation (.pptx / .key)',
      'Product P&L Waterfall Slide Template',
      'R&D Capital Allocation Heatmap',
    ],
  },
  {
    number: '04',
    badge: 'Executive Runbook & Playbook',
    title: 'First-30-Days Product P&L Turnaround Runbook',
    problemSolved:
      'Taking over a stagnant, loss-making, or margin-compressed product line with no clear starting point.',
    description:
      'The step-by-step 30-day operational protocol for new CPOs, VPs of Product, and PE turnaround operators to forensic-audit a product line, kill negative-carry features, and restructure pricing.',
    includedFiles: [
      '30-Day Forensic Audit Action Checklist',
      'Executive 1-on-1 Interview Question Bank',
      'Quick-Win Margin Recovery Identification Guide',
    ],
  },
  {
    number: '05',
    badge: 'Career & Executive Positioning Dossier',
    title: 'The "Product Economist" Executive Interview & Comp Guide',
    problemSolved:
      'Competing against 800 other Product Managers or VPs who all sound like generic "Agile backlog managers."',
    description:
      'How to reposition your resume, LinkedIn, and executive interview narrative around P&L ownership, ARR expansion, and unit economics so CEOs, Boards, and PE firms see you as a commercial leader worth $220K-$400K+ total compensation.',
    includedFiles: [
      'Executive P&L Resume Bullet Transformation Guide',
      'Top 15 CEO / CFO Final-Round Interview Questions & Answers',
      '90-Day CPO / VP of Product Case Study Presentation Template',
    ],
  },
];

export default function ToolkitPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'The Product & AI Economist Operating Kit (2026 Edition)',
    description:
      '5 actionable financial models, AI feature pricing stress-testers, Zombie Feature kill-lists, and 12-slide CFO board deck templates by Richard Ewing.',
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
            <i /> Instant Download · Live Browser Workspace
          </p>
          <h1>The Product &amp; AI Economist Operating Kit</h1>
          <p className="inner-lede">
            Stop looking like a backlog manager. Run your product like a P&amp;L. 5
            production spreadsheets, AI feature pricing stress-testers, Zombie Feature
            kill-lists, and 12-slide CFO board deck templates.
          </p>
          <div className="actions">
            <a href="#buy" className="button button-gold">
              Get the Operating Kit ($29) ↗
            </a>
            <Link href="/operating-kit" className="button button-outline">
              View Detailed Specs
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE OPERATING INVARIANT</span>
          <strong>Run your product like a P&amp;L.</strong>
          <p>
            Built from scaling enterprise SaaS from $0 to $25M ARR at Tyler Technologies
            and cutting $5M in product waste.
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
            <p className="eyebrow center">Instant Access</p>
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
                  Standard Edition · Direct Digital Download
                </span>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-serif font-bold text-[var(--ink)]">$29</span>
                  <span className="text-sm text-[var(--muted)] line-through font-mono">$299 value</span>
                </div>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
                  Includes all 5 core Excel/CSV spreadsheets, CFO board deck templates,
                  30-day turnaround checklist, executive career playbook, and{' '}
                  <strong className="text-[var(--ink)]">Live Interactive Workspace (/workspace)</strong> access.
                </p>
              </div>
              <div className="pt-4 border-t border-[var(--line)]">
                <CheckoutButton
                  productId="premium_guide_29"
                  label="Get the Operating Kit ($29) →"
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
                  Complete Executive Bundle (+13 Playbooks)
                </span>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-serif font-bold text-[var(--gold)]">$79</span>
                  <span className="text-sm text-zinc-300 line-through font-mono">$649 value</span>
                </div>
                <p className="text-xs text-zinc-200 leading-relaxed mb-6">
                  Everything in the $29 Operating Kit + Live Workspace PLUS all 13
                  specialized executive guides (PE Due Diligence, Consumption Pricing,
                  Cloud FinOps, Agentic AI Costs, and more).
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
              5 Plug-and-Play Financial Instruments
            </h2>
            <p className="text-sm text-[var(--muted)] mt-2">
              Designed to make you the most financially grounded leader in the room.
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
        <h2>Get the Complete Operating Kit Today</h2>
        <p>
          Spend $29 once and walk into your next CFO review, board meeting, or VP of
          Product interview with the exact math that built a $25M ARR product line.
        </p>
        <div className="actions center">
          <a href="#buy" className="button button-gold">
            Download Operating Kit ($29) ↗
          </a>
          <Link href="/services" className="button button-ghost-light">
            Explore 1-on-1 Turnaround Sprints ↗
          </Link>
        </div>
      </section>
    </>
  );
}
