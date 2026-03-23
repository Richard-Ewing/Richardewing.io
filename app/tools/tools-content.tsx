"use client";

import React from 'react';
import Link from 'next/link';
import ShineBorder from '@/components/magicui/shine-border';

export default function ToolsContent() {
  return (
    <main className="pt-20">
      <div className="page-container">

        {/* Hero */}
        <section className="section-lg text-center">
          <div className="text-xs text-cyan-400 uppercase tracking-wide mb-4">Free Diagnostic Tools</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Boardroom-Ready Insights<br />
            <span className="text-cyan-400">in 60 Seconds</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            These are the same instruments I use in $7,500 audits.
            Try them free. If the results concern you, we should talk.
          </p>
        </section>

        {/* Tools grid */}
        <section className="section">
          <div className="grid-2 max-w-4xl mx-auto">

            <Link href="/tools/pdi" className="group block">
              <ShineBorder className="h-full bg-zinc-900/50 border border-white/5 p-6" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 font-bold">01</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400">Product Debt Index</h3>
                    <p className="text-gray-400 text-sm mb-3">Quantify hidden technical debt in dollar terms.</p>
                    <span className="text-purple-400 text-sm">Try Now →</span>
                  </div>
                </div>
              </ShineBorder>
            </Link>

            <Link href="/tools/ev-se" className="group block">
              <ShineBorder className="h-full bg-zinc-900/50 border border-white/5 p-6" color={["#22d3ee", "#8b5cf6", "#f472b6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-600/20 flex items-center justify-center text-cyan-400 font-bold">02</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400">Valuation Scenario Engine</h3>
                    <p className="text-gray-400 text-sm mb-3">Model how technical decisions impact enterprise value.</p>
                    <span className="text-cyan-400 text-sm">Try Now →</span>
                  </div>
                </div>
              </ShineBorder>
            </Link>

            <Link href="/tools/aueb" className="group block">
              <ShineBorder className="h-full bg-zinc-900/50 border border-white/5 p-6" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 font-bold">03</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400">AI Unit Economics Benchmark</h3>
                    <p className="text-gray-400 text-sm mb-3">Calculate your AI collapse point before you hit it.</p>
                    <span className="text-purple-400 text-sm">Try Now →</span>
                  </div>
                </div>
              </ShineBorder>
            </Link>

            <Link href="/tools/aper" className="group block">
              <ShineBorder className="h-full bg-zinc-900/50 border border-white/5 p-6" color={["#22d3ee", "#8b5cf6", "#f472b6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-600/20 flex items-center justify-center text-cyan-400 font-bold">04</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400">Engineering Ratio (APER)</h3>
                    <p className="text-gray-400 text-sm mb-3">Assess if you&apos;re overstaffed or understaffed for your stage.</p>
                    <span className="text-cyan-400 text-sm">Try Now →</span>
                  </div>
                </div>
              </ShineBorder>
            </Link>

            <Link href="/tools/audit-interview" className="group block col-span-1 md:col-span-2">
              <ShineBorder className="h-full bg-zinc-900/50 border border-white/5 p-6" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 font-bold">05</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400">Audit Interview Protocol</h3>
                    <p className="text-gray-400 text-sm mb-3">The hiring methodology for the AI age. Test judgment, not syntax.</p>
                    <span className="text-purple-400 text-sm">Try Now →</span>
                  </div>
                </div>
              </ShineBorder>
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="section-sm text-center">
          <p className="text-gray-400 mb-3">
            If the results concern you, the diagnosis is only the first step.
          </p>
          <p className="text-gray-500 text-sm mb-8 max-w-xl mx-auto">
            Your tools diagnosed the disease. Now choose your cure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500">
              Book a $2,500 Insolvency Diagnostic →
            </a>
            <a href="https://exogram.ai" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5">
              Implement Deterministic Routing →
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
