import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

import SkillHero from '@/components/skills/SkillHero';
import FailureCard from '@/components/skills/FailureCard';
import GovernanceSystemCard from '@/components/skills/GovernanceSystemCard';
import AssetGrid from '@/components/skills/AssetGrid';
import EcosystemPainSignals from '@/components/skills/EcosystemPainSignals';
import ExogramBridge from '@/components/skills/ExogramBridge';

export const metadata: Metadata = {
  title: 'Operational Governance Systems | Richard Ewing',
  description: 'Deployable operational remediation systems for runtime governance, hallucination debt, context rot, orchestration entropy, repository drift, and deterministic AI execution.',
  openGraph: {
    title: 'Operational Governance Systems',
    description: 'Deployable operational remediation systems for runtime governance, hallucination debt, context rot, orchestration entropy, repository drift, and deterministic AI execution.',
    url: 'https://richardewing.io/skills',
  },
  alternates: {
    canonical: 'https://richardewing.io/skills',
  }
};

const FAILURES = [
  {
    title: "Context Rot",
    definition: "Long-running Claude sessions gradually accumulate semantic contamination, stale assumptions, recursive patches, and repository drift until operational reliability collapses.",
    symptoms: ["Recursive patching loops", "Forgetting core instructions", "Stale architectural assumptions"],
    economicImpact: "Exploding inference costs from retry loops.",
    governanceImpact: "Total loss of deterministic execution state."
  },
  {
    title: "Hallucination Debt",
    definition: "The compounding operational cost of verifying, correcting, and maintaining probabilistic AI outputs that lack deterministic boundaries.",
    symptoms: ["Verification time > Generation time", "Synthetic QA bottleneck", "Silent architectural drift"],
    economicImpact: "Developer time wasted on manual output verification.",
    governanceImpact: "No cryptographic trust in agentic execution."
  },
  {
    title: "Retry Inflation",
    definition: "The exponential growth of prompts and token consumption required to correct an agent that has lost context or deviated from architectural intent.",
    symptoms: ["15+ prompts for simple features", "Massive token context drops", "Developer exhaustion"],
    economicImpact: "Wasted API usage & compute resources.",
    governanceImpact: "Signals a complete lack of runtime gating."
  },
  {
    title: "Repository Drift",
    definition: "The structural divergence between an AI agent's internal representation of a codebase and the actual deterministic state of the repository.",
    symptoms: ["Using deprecated APIs", "Ignoring new abstractions", "Reinventing existing utilities"],
    economicImpact: "Technical debt multiplier across the codebase.",
    governanceImpact: "Breaks CI/CD and institutional policy."
  },
  {
    title: "Orchestration Entropy",
    definition: "The systemic decay of multi-agent architectures where agents enter infinite loops, handoff failures, and recursive deadlocks without human intervention.",
    symptoms: ["Agent deadlocks", "Unbounded execution loops", "Lost tool handoffs"],
    economicImpact: "Compute burns on runaway agent processes.",
    governanceImpact: "Requires hard observability limits."
  },
  {
    title: "Governance Theater",
    definition: "The illusion of control created by using system prompts and text instructions to manage agents, rather than hard-coded runtime middleware and execution gating.",
    symptoms: ["Prompt injections succeed", "Agents bypass instructions", "No audit trails"],
    economicImpact: "Unquantifiable liability and compliance risks.",
    governanceImpact: "Zero actual security or deterministic control."
  }
];

const SKILLS = [
  {
    title: "Context Rot Prevention",
    category: "Cognitive Governance",
    failureSolved: "Context Rot & Semantic Contamination",
    description: "Prevents semantic contamination, recursive patching, retry inflation, and repository drift in long-horizon Claude sessions.",
    difficulty: "Intermediate",
    assetCount: 5,
    runtimeRelevance: "High",
    enterpriseRelevance: "Critical",
    exogramMapping: "Bounded Cognition Engine",
    price: 99,
    checkoutUrl: "https://buy.stripe.com/6oUaEQ0Iu1b4cO1b8c2B20E",
    assetsList: ["Governance manifests", "Rollback systems", "Runtime middleware", "Checkpoint architecture", "Reset workflows"]
  },
  {
    title: "Runtime Governance",
    category: "Execution Governance",
    failureSolved: "Unsafe Agent Execution",
    description: "Enforce execution gating, admissibility pipelines, rollback containment, and runtime interception to stop unsafe agentic actions before they execute.",
    difficulty: "Advanced",
    assetCount: 6,
    runtimeRelevance: "Critical",
    enterpriseRelevance: "Mandatory",
    exogramMapping: "Execution Gating Layer",
    price: 99,
    checkoutUrl: "https://buy.stripe.com/9B6cMY2QC4ng29na482B20F",
    assetsList: ["Execution middleware", "Admissibility pipelines", "Runtime interception schemas", "Rollback handlers", "Policy-as-code YAMLs", "Audit log templates"]
  },
  {
    title: "Hallucination Debt Reduction",
    category: "Output Governance",
    failureSolved: "Probabilistic Output Variance",
    description: "Mitigate the verification burden, retry inflation curves, and synthetic QA growth by structurally eliminating probabilistic assumptions in agentic workflows.",
    difficulty: "Intermediate",
    assetCount: 4,
    runtimeRelevance: "Medium",
    enterpriseRelevance: "High",
    exogramMapping: "Admissibility Validation",
    price: 99,
    checkoutUrl: "https://buy.stripe.com/4gM8wI9f04ng8xLb8c2B20G",
    assetsList: ["Validation checks", "Deterministic constraints", "QA automation flows", "Output templates"]
  },
  {
    title: "AI Engineering Economics",
    category: "Economic Governance",
    failureSolved: "Synthetic COGS Expansion",
    description: "Map and optimize synthetic COGS, orchestration cost curves, and governance drag expansion. Align your agentic strategy with deterministic economic reality.",
    difficulty: "Beginner",
    assetCount: 4,
    runtimeRelevance: "Low",
    enterpriseRelevance: "Strategic",
    exogramMapping: "Telemetry Ingestion",
    price: 99,
    checkoutUrl: "https://buy.stripe.com/9B63coezk1b415j4JO2B20H",
    assetsList: ["COGS calculators", "Cost curve models", "ROI templates", "Optimization checklists"]
  },
  {
    title: "MCP Governance",
    category: "Integration Governance",
    failureSolved: "Unconstrained Server Execution",
    description: "Establish enterprise-grade access and runtime limits for Model Context Protocol systems to prevent unconstrained server execution and data exfiltration.",
    difficulty: "Advanced",
    assetCount: 5,
    runtimeRelevance: "Critical",
    enterpriseRelevance: "Mandatory",
    exogramMapping: "Protocol Governance",
    price: 99,
    checkoutUrl: "https://buy.stripe.com/eVq28k3UGg5Y8xLfos2B20I",
    assetsList: ["Access matrices", "Server limits YAML", "Data exfiltration blocks", "Protocol audit tools", "Integration middleware"]
  }
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#F5F0EB]">
      {/* 1. HERO - Category Compression */}
      <SkillHero />

      <div className="page-container pb-24">
        {/* 2. THE OPERATIONAL FAILURE LAYER */}
        <section id="failures" className="section-lg">
          <div className="section-header text-center">
            <h2>The Real Operational Failures in Agentic Engineering</h2>
            <p>
              Before you can enforce governance, you must understand the exact failure modes causing operational collapse in production AI environments.
            </p>
          </div>
          
          <div className="grid-3 mt-10">
            {FAILURES.map((failure, idx) => (
              <FailureCard key={idx} {...failure} />
            ))}
          </div>
        </section>

        {/* 3. GOVERNANCE SYSTEMS GRID (The actual product marketplace) */}
        <section id="governance-systems" className="section-lg border-t border-[rgba(0,0,0,0.08)]">
          <div className="section-header text-center">
            <h2>Operational Governance Systems</h2>
            <p>
              Implementation-ready systems to remediate context rot, halt orchestration entropy, and enforce deterministic runtime governance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            {SKILLS.map((skill, idx) => (
              <GovernanceSystemCard key={idx} {...skill} />
            ))}
          </div>
        </section>

        {/* 4. WHAT'S INCLUDED */}
        <section className="section">
          <AssetGrid />
        </section>

        {/* 5. REAL ECOSYSTEM PAIN SIGNALS */}
        <section className="section">
          <EcosystemPainSignals />
        </section>

        {/* 6. EXOGRAM BRIDGE */}
        <section className="section-sm">
          <ExogramBridge />
        </section>

        {/* 7. FAILURE DATABASE CTA */}
        <section id="failure-database" className="section-lg mt-12 text-center">
          <div className="max-w-3xl mx-auto bg-white border border-[rgba(0,0,0,0.1)] rounded-xl p-10 shadow-sm">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Explore the Operational Failure Database</h2>
            <p className="text-[#4A4A4A] text-lg mb-8 leading-relaxed">
              A continuously expanding taxonomy of runtime instability, orchestration failures, hallucination debt, semantic contamination, retry inflation, and deterministic governance breakdowns in enterprise AI systems.
            </p>
            <Link 
              href="/answers" 
              className="inline-block px-8 py-4 bg-white text-[#1A1A1A] font-bold rounded border border-[#1A1A1A] hover:bg-[#F5F0EB] transition-colors"
            >
              View Failure Database
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
