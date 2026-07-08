import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';

import SkillHero from '@/components/skills/SkillHero';
import FailureCard from '@/components/skills/FailureCard';
import GovernanceSystemCard from '@/components/skills/GovernanceSystemCard';
import AssetGrid from '@/components/skills/AssetGrid';
import EcosystemPainSignals from '@/components/skills/EcosystemPainSignals';
import ExogramBridge from '@/components/skills/ExogramBridge';

export const metadata: Metadata = {
  title: 'Governance Skills for Claude C & Strategy Diagnostics | Richard Ewing',
  description: 'Governance Skills for Claude C provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
  openGraph: {
    title: 'Deterministic Runtime Infrastructure for Claude Code & Agentic Engineering',
    description: 'Deployable runtime governance modules across 4 architectural layers: Identity, Skill, Tool, and Environment governance for deterministic AI execution.',
    url: 'https://www.richardewing.io/skills',
  },
  alternates: {
    canonical: 'https://www.richardewing.io/skills',
  }
};

import { SKILLS, FAILURES } from '@/lib/content/skills';

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
          <div className="section-header text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-rose-200 bg-rose-50 text-rose-700 font-mono text-sm tracking-widest font-bold uppercase">
              Deterministic Runtime Infrastructure
            </div>
            <h2>Runtime governance modules for Claude Code, Cursor, Windsurf, and agentic engineering systems.</h2>
            <p className="text-lg mt-4">
              15 deployable runtime infrastructure modules across 4 architectural layers — Identity, Skill, Tool, and Environment governance. Install deterministic containment directly into your agentic workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
            {SKILLS.map((skill, idx) => (
              <GovernanceSystemCard 
                key={idx} 
                slug={skill.slug}
                title={skill.title}
                category={skill.category}
                price={skill.price}
                checkoutUrl={skill.checkoutUrl}
                runtimeLayer={skill.runtimeLayer}
                whatBreaks={skill.whatBreaks}
                ecosystemPainQuotes={skill.ecosystemPainQuotes}
                whatSystemInstalls={skill.whatSystemInstalls}
                exogramMapping={skill.exogramMapping}
                ctaText={skill.ctaText}
              />
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

        {/* 7. INSTITUTIONAL CROSS-LINKS — Hub & Spoke */}
        <section className="section-lg border-t border-[rgba(0,0,0,0.08)]">
          <div className="section-header text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-violet-200 bg-violet-50 text-violet-700 font-mono text-sm tracking-widest font-bold uppercase">
              Infrastructure Resources
            </div>
            <h2>Operational Intelligence for Governance Deployment</h2>
            <p className="text-lg mt-4">
              Architecture diagrams, failure databases, governance telemetry, executive briefings, and maturity assessments — everything you need to deploy, measure, and communicate governance impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            <Link href="/runtime-failure-index" className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-6 shadow-sm hover:border-rose-200 hover:shadow-md transition-all group">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-600">Failure Intelligence</span>
              <h3 className="text-lg font-bold text-[#1A1A1A] mt-2 group-hover:text-rose-700 transition-colors">Runtime Failure Index →</h3>
              <p className="text-sm text-[#4A4A4A] mt-2">15 ranked failure modes with frequency, cost, blast radius, and governance containment mapping.</p>
            </Link>
            <Link href="/telemetry" className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-6 shadow-sm hover:border-emerald-200 hover:shadow-md transition-all group">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600">Operational Data</span>
              <h3 className="text-lg font-bold text-[#1A1A1A] mt-2 group-hover:text-emerald-700 transition-colors">Runtime Telemetry →</h3>
              <p className="text-sm text-[#4A4A4A] mt-2">Governance impact metrics, retry curves, context degradation timelines, and cost comparison data.</p>
            </Link>
            <Link href="/diagrams" className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-6 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Architecture</span>
              <h3 className="text-lg font-bold text-[#1A1A1A] mt-2 group-hover:text-blue-700 transition-colors">Diagram Library →</h3>
              <p className="text-sm text-[#4A4A4A] mt-2">10 architectural diagrams: compilation pipelines, orchestration patterns, and containment models.</p>
            </Link>
            <Link href="/case-studies/runtime-incidents" className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-6 shadow-sm hover:border-amber-200 hover:shadow-md transition-all group">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600">Evidence</span>
              <h3 className="text-lg font-bold text-[#1A1A1A] mt-2 group-hover:text-amber-700 transition-colors">15 Incident Reports →</h3>
              <p className="text-sm text-[#4A4A4A] mt-2">Documented production failures with telemetry, blast radius, root cause, and governance containment.</p>
            </Link>
            <Link href="/executive-briefing" className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-6 shadow-sm hover:border-violet-200 hover:shadow-md transition-all group">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-600">Executive</span>
              <h3 className="text-lg font-bold text-[#1A1A1A] mt-2 group-hover:text-violet-700 transition-colors">Board-Ready Briefing →</h3>
              <p className="text-sm text-[#4A4A4A] mt-2">Maturity model, risk matrix, governance scorecards, and ROI analysis for engineering leadership.</p>
            </Link>
            <Link href="/certification" className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-6 shadow-sm hover:border-cyan-200 hover:shadow-md transition-all group">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-600">Maturity</span>
              <h3 className="text-lg font-bold text-[#1A1A1A] mt-2 group-hover:text-cyan-700 transition-colors">Governance Maturity →</h3>
              <p className="text-sm text-[#4A4A4A] mt-2">5-level maturity model with certification tracks for governance practitioners and architects.</p>
            </Link>
          </div>
        </section>

        {/* 8. FAILURE DATABASE CTA */}
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
