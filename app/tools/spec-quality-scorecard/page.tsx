import { Metadata } from 'next';
import Link from 'next/link';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import ChainedDiagnosticNextStep from '@/app/components/calculators/ChainedDiagnosticNextStep';
import SpecQualityScorecardTool from './content';

export const metadata: Metadata = {
  title: 'Spec-Driven Development Audit Scorecard',
  description:
    'Practice Spec-Driven Development by auditing AGENTS.md, CLAUDE.md, and SPEC.md contracts across data schemas, blast-radius guards, and CI test gates.',
  keywords: [
    'spec driven development',
    'what is spec driven development',
    'AGENTS.md template',
    'SPEC.md checklist',
    'CLAUDE.md audit scorecard',
    'AI coding agent rules',
    'executable PRD linter',
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/tools/spec-quality-scorecard',
  },
  openGraph: {
    title: 'Spec-Driven Development Audit Scorecard | Richard Ewing',
    description:
      'Practice Spec-Driven Development by auditing AGENTS.md, CLAUDE.md, and SPEC.md contracts across data schemas, blast-radius guards, and CI test gates.',
    url: 'https://www.richardewing.io/tools/spec-quality-scorecard',
    type: 'website',
    images: [
      {
        url: 'https://www.richardewing.io/api/og?title=Spec-Driven+Development+Audit+Scorecard&category=Spec-Driven+SDLC',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spec-Driven Development Audit Scorecard | Richard Ewing',
    description:
      'Practice Spec-Driven Development by auditing AGENTS.md, CLAUDE.md, and SPEC.md contracts across data schemas, blast-radius guards, and CI test gates.',
    images: [
      'https://www.richardewing.io/api/og?title=Spec-Driven+Development+Audit+Scorecard&category=Spec-Driven+SDLC',
    ],
  },
};

export default function Page() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Spec-Driven Development (SDD)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Spec-Driven Development (SDD) is a software engineering discipline where teams write explicit data schemas, out-of-scope blast-radius boundaries, and deterministic verification gates in SPEC.md and AGENTS.md before allowing AI coding agents to touch production code.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you score an AGENTS.md or SPEC.md specification?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Grade the specification across four pillars: typed input/output data contracts, explicit out-of-scope file boundaries, edge-case failure handling, and automated build and test pass criteria required prior to commit.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ToolServerHeader
        slug="spec-quality-scorecard"
        eyebrow="Spec-Driven Development · Repository Governance"
        h1="Spec-Driven Development (AGENTS.md & SPEC.md) Audit Scorecard"
        executiveAnswer="Spec-Driven Development replaces ad-hoc chat prompting with locked data schemas, explicit blast-radius guards, and automated compiler test gates before an AI coding agent edits a single file. CTOs, CPOs, VPs of Engineering, and Engineering Managers use this scorecard to grade repository rule files and prevent multi-file regressions."
        appName="Spec-Driven Development & AGENTS.md Audit Scorecard"
        appDescription="Interactive specification audit grading AGENTS.md, CLAUDE.md, and SPEC.md contracts before dispatching Claude Code, Cursor, or Google Antigravity agents."
        howToName="How to Audit Your AGENTS.md and Feature Specification Before Coding"
        howToDescription="Score your feature specification across schema clarity, forbidden file boundaries, edge cases, and automated verification gates."
        steps={[
          { name: 'Score schema and state contracts', text: 'Verify whether API payloads, database types, and error states are explicitly defined.' },
          { name: 'Check blast-radius boundaries', text: 'Confirm forbidden files, frozen routes, and authentication invariants are listed out-of-scope.' },
          { name: 'Audit verification gates', text: 'Check that deterministic build, typecheck, and regression test commands are mandated before commit.' },
          { name: 'Remediate weak sections', text: 'Copy starter AGENTS.md and SPEC.md blocks to raise your readiness score above 85/100.' },
        ]}
      />

      <SpecQualityScorecardTool />

      <div className="page-container max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <div className="bg-white border border-[#24332b]/15 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#b77a35]">
              Canonical Methodology &amp; Verification Pair
            </p>
            <p className="text-sm font-sans text-[#1e2924]">
              Read the full{' '}
              <Link href="/articles/frameworks/spec-driven-development" className="font-semibold text-[#162e26] underline hover:text-[#b77a35]">
                Spec-Driven Development (SDD) Framework
              </Link>{' '}
              and pair upfront repository contracts with{' '}
              <Link href="/concepts/eval-driven-development" className="font-semibold text-[#162e26] underline hover:text-[#b77a35]">
                Eval-Driven Development (EDD)
              </Link>{' '}
              in your CI pipeline.
            </p>
          </div>
          <Link
            href="/articles/frameworks/spec-driven-development"
            className="shrink-0 px-4 py-2.5 rounded-lg bg-[#162e26] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#29473b] transition-colors"
          >
            Read SDD Guide ↗
          </Link>
        </div>

        <ChainedDiagnosticNextStep
          chainName="Vibe-Coding Rescue & Spec Governance Chain"
          stepLabel="Step 2 of 3 · Connected Diagnostic Chain"
          currentToolSlug="spec-quality-scorecard"
          currentToolName="AGENTS.md & SPEC.md Audit Scorecard"
          defaultScorecardMetricLabel="Agent Drift Reduction"
          defaultScorecardMetricValue="-85% Rework Drag"
          defaultScorecardStatus="SPEC AUDIT"
          nextDiagnostic={{
            slug: 'negative-carry-code-auditor',
            title: 'Vibe-Coded App Debt & Risk Auditor',
            reason: 'Already shipped code written without a strict SPEC.md? Quantify the exact annual maintenance payroll and refactor cost hiding inside your repository.',
          }}
          secondaryDiagnostic={{
            slug: 'vibe-coding-checklist',
            title: 'Vibe-Coded App Launch & Security Checklist',
          }}
          commercialStep={{
            href: '/services',
            label: 'Book $450 Unstick or $7,500 21-Day Build',
            priceTag: '$450 / $7,500',
            description: 'Get stuck AI-built features across the finish line with battle-tested auth, Stripe billing, RLS security, and deterministic CI gates.',
          }}
        />

        <CalculatorIntentProposal
          toolName="AGENTS.md &amp; SPEC.md Audit Scorecard"
          problemDomain="Conversational Hallucinations &amp; Vague Requirement Drift"
          calculatedMetricLabel="Typical Hallucination Reduction"
          calculatedMetricValue="-85% Reduction in Multi-File Agent Drift"
          severityLevel="ELEVATED"
          primaryPathway={{
            destination: 'EXOGRAM_SOFTWARE',
            relationshipType: 'OPERATIONALIZES',
            channel: 'ENGINEERING_RUNTIME',
            headline: 'Enforce Specification Boundaries with Exogram',
            subtext: 'Exogram preserves architecture decisions, prior fixes, and active constraints across sessions so coding agents stop repeating regressions.',
            actionUrl: '/exogram',
            actionLabel: 'Explore Exogram Architecture ↗',
            targetRole: 'Chief Product Officers & Staff Engineers',
          }}
          secondaryPathway={{
            destination: 'RICHARD_EWING_ADVISORY',
            relationshipType: 'ADVISES_ON',
            channel: 'EXECUTIVE_ADVISORY',
            headline: 'Spec-Driven Product & Engineering Operating System',
            subtext: 'Train Product Managers and Engineering Managers to write executable specifications that cut PR review rework in half.',
            actionUrl: '/operating-kit',
            actionLabel: 'Get the $29 Operating Kit ↗',
            targetRole: 'VPs of Product & Engineering Managers',
          }}
        />
      </div>
    </div>
  );
}
