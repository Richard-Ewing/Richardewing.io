import { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import ChainedDiagnosticNextStep from '@/app/components/calculators/ChainedDiagnosticNextStep';
import SpecQualityScorecardTool from './content';

export const metadata: Metadata = {
  title: 'AGENTS.md & SPEC.md Audit Scorecard',
  description:
    'Score your AGENTS.md, SPEC.md, and PRDs across executable acceptance criteria, blast-radius guards, and test gates before running AI coding agents.',
  keywords: [
    'AGENTS.md template',
    'SPEC.md checklist',
    'CLAUDE.md audit scorecard',
    'spec driven development',
    'AI coding agent rules',
    'executable PRD linter',
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/tools/spec-quality-scorecard',
  },
  openGraph: {
    title: 'AGENTS.md & SPEC.md Audit Scorecard | Richard Ewing',
    description:
      'Score your AGENTS.md, SPEC.md, and PRDs across executable acceptance criteria, blast-radius guards, and test gates before running AI coding agents.',
    url: 'https://www.richardewing.io/tools/spec-quality-scorecard',
    type: 'website',
    images: [
      {
        url: 'https://www.richardewing.io/api/og?title=AGENTS.md+%26+SPEC.md+Audit+Scorecard&category=Spec-Driven+SDLC',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AGENTS.md & SPEC.md Audit Scorecard | Richard Ewing',
    description:
      'Score your AGENTS.md, SPEC.md, and PRDs across executable acceptance criteria, blast-radius guards, and test gates before running AI coding agents.',
    images: [
      'https://www.richardewing.io/api/og?title=AGENTS.md+%26+SPEC.md+Audit+Scorecard&category=Spec-Driven+SDLC',
    ],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] space-y-8">
      <ToolServerHeader
        slug="spec-quality-scorecard"
        eyebrow="Spec-Driven SDLC · Repository Governance"
        h1="AGENTS.md, CLAUDE.md & SPEC.md Quality Scorecard"
        executiveAnswer="The AGENTS.md and SPEC.md Audit Scorecard grades your repository rule files and product specifications across data schemas, out-of-scope blast-radius guards, and deterministic test gates so CPOs, Engineering Managers, and technical founders stop autonomous coding agents from breaking production."
        appName="AGENTS.md & SPEC.md Audit Scorecard"
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
