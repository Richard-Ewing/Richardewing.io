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
  title: 'Deterministic Runtime Infrastructure for Claude Code | Richard Ewing',
  description: 'Deployable runtime governance modules for Claude Code, Cursor, Windsurf, and agentic engineering. Identity, Skill, Tool, and Environment governance layers for deterministic AI execution.',
  openGraph: {
    title: 'Deterministic Runtime Infrastructure for Claude Code & Agentic Engineering',
    description: 'Deployable runtime governance modules across 4 architectural layers: Identity, Skill, Tool, and Environment governance for deterministic AI execution.',
    url: 'https://richardewing.io/skills',
  },
  alternates: {
    canonical: 'https://richardewing.io/skills',
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
