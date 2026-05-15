import React from 'react';
import Link from 'next/link';
import GovernanceDiagram from './GovernanceDiagram';

export default function SkillHero() {
  return (
    <section className="section-lg bg-gradient-to-b from-[#F5F0EB] to-[#FFFFFF] border-b border-[rgba(0,0,0,0.05)] relative overflow-hidden">
      {/* Decorative background grid (light theme) */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(124,58,237,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="page-container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[rgba(124,58,237,0.2)] bg-[rgba(124,58,237,0.05)] text-purple font-mono text-sm tracking-widest font-semibold uppercase">
            Operational Command Center
          </div>
          
          <h1 className="mb-6 text-[#1A1A1A]">
            Deterministic Operational Governance for <span className="gradient-text">Claude & Agentic Systems</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#3A3A3A] mb-8 leading-relaxed max-w-3xl mx-auto font-medium">
            Operational remediation systems for runtime governance, hallucination debt, context rot, orchestration entropy, repository drift, and deterministic AI execution.
          </p>

          <p className="text-lg text-[#6B6B6B] mb-10 max-w-2xl mx-auto font-mono bg-[#FFFFFF] p-4 rounded border border-[rgba(0,0,0,0.08)] shadow-sm">
            Most AI systems fail because organizations govern prompts instead of execution.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="#governance-systems" 
              className="px-8 py-4 bg-[#1A1A1A] hover:bg-[#3A3A3A] text-white font-bold rounded shadow-lg hover:shadow-xl transition-all w-full sm:w-auto text-center"
            >
              Explore Governance Systems
            </Link>
            <Link 
              href="#failure-database" 
              className="px-8 py-4 bg-white hover:bg-[#F5F0EB] text-[#1A1A1A] font-bold rounded border border-[rgba(0,0,0,0.15)] shadow-sm hover:shadow transition-all w-full sm:w-auto text-center"
            >
              View Operational Failure Database
            </Link>
          </div>
        </div>

        {/* Visual Governance Flow Representation */}
        <div className="max-w-5xl mx-auto mt-20">
          <GovernanceDiagram type="hero-flow" />
        </div>
      </div>
    </section>
  );
}
