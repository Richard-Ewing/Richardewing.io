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
            Operational Governance Infrastructure for <span className="gradient-text">Deterministic Agentic Engineering</span>
          </h1>
          <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Deploy runtime governance systems for Claude Code, Cursor, Cline, Windsurf, Google Antigravity, and agentic engineering workflows.
          </p>
          
          <div className="mb-10 max-w-3xl mx-auto text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6 text-center uppercase tracking-tight">
              Your AI agents are not failing randomly.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-rose-100 shadow-sm">
                <p className="text-rose-800 font-bold mb-4 uppercase tracking-widest text-sm border-b border-rose-100 pb-2">They are failing through:</p>
                <ul className="space-y-2 text-[#4A4A4A] font-medium">
                  <li className="flex items-center gap-2"><span className="text-rose-500 font-bold">•</span> Context rot</li>
                  <li className="flex items-center gap-2"><span className="text-rose-500 font-bold">•</span> Retry inflation</li>
                  <li className="flex items-center gap-2"><span className="text-rose-500 font-bold">•</span> Hallucinated execution</li>
                  <li className="flex items-center gap-2"><span className="text-rose-500 font-bold">•</span> Repository drift</li>
                  <li className="flex items-center gap-2"><span className="text-rose-500 font-bold">•</span> Orchestration entropy</li>
                  <li className="flex items-center gap-2"><span className="text-rose-500 font-bold">•</span> Verification collapse</li>
                </ul>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg border border-zinc-800 shadow-xl text-white">
                <p className="text-cyan-400 font-bold mb-4 uppercase tracking-widest text-sm border-b border-zinc-800 pb-2">The systems below contain them through:</p>
                <ul className="space-y-2 text-zinc-300 font-mono text-sm">
                  <li className="flex items-center gap-2"><span className="text-cyan-500 font-bold">+</span> runtime interception</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-500 font-bold">+</span> admissibility enforcement</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-500 font-bold">+</span> bounded cognition</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-500 font-bold">+</span> rollback containment</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-500 font-bold">+</span> deterministic orchestration</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-500 font-bold">+</span> policy-as-code governance</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-[#4A4A4A] mt-6 font-semibold italic text-lg">These are operational governance failures.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="#governance-systems" 
              className="px-8 py-4 bg-[#1A1A1A] hover:bg-[#3A3A3A] text-white font-bold rounded shadow-lg hover:shadow-xl transition-all w-full sm:w-auto text-center"
            >
              Deploy Governance Infrastructure
            </Link>
            <Link 
              href="/runtime-architecture" 
              className="px-8 py-4 bg-white hover:bg-[#F5F0EB] text-[#1A1A1A] font-bold rounded border border-violet-200 shadow-sm hover:shadow transition-all w-full sm:w-auto text-center"
            >
              View Runtime Architecture →
            </Link>
            <Link 
              href="#failure-database" 
              className="px-8 py-4 bg-white hover:bg-[#F5F0EB] text-[#1A1A1A] font-bold rounded border border-[rgba(0,0,0,0.15)] shadow-sm hover:shadow transition-all w-full sm:w-auto text-center"
            >
              View Failure Database
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
