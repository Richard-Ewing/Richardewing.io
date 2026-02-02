'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WordRotate } from './components/magicui/word-rotate';
import { NumberTicker } from './components/magicui/number-ticker';
import { ShineBorder } from './components/magicui/shine-border';
import { Meteors } from './components/magicui/meteors';
import { ScrollReveal } from './components/magicui/scroll-reveal';
import { GlowCard } from './components/magicui/glow-card';
import { PathSelector } from './components/path-selector';
import { NewsletterForm } from './components/newsletter-form';
import { StatsBar } from './components/ui/stats-bar';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Effects */}
      <Meteors count={15} />
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-500/5 rounded-full blur-[100px] sm:blur-[128px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-cobalt/5 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center max-w-5xl mx-auto relative z-10 py-12 sm:py-20 px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-mono uppercase tracking-widest mb-8 w-fit animate-pulse">
          <span className="w-2 h-2 bg-cyan-400 rounded-full" />
          Now Accepting Q1 2026 Engagements
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-grotesk font-bold text-white tracking-tight leading-[1.05] mb-6">
          Your AI Investment is<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Bleeding Cash.</span>
        </h1>

        <div className="mb-10">
          <span className="text-gray-500 text-xl sm:text-2xl font-grotesk">I find the leaks in </span>
          <WordRotate
            words={["AI they don't understand.", "Features nobody uses.", "Headcount without ROI.", "Zombie Infrastructure."]}
            className="text-xl sm:text-2xl font-grotesk font-bold text-white"
            duration={3000}
          />
        </div>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed mb-12 font-sans">
          I'm <span className="text-white font-bold">Richard Ewing</span>, a Product Economist.
          I run forensic audits that find the capital leaks inside your AI investments—then I help you plug them.
          <span className="text-cyan-400"> No consulting theater. Just hard numbers.</span>
        </p>

        {/* Path Selector (Replaces Standard Buttons) */}
        <div className="mb-16">
          <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">Choose Your Path</h3>
          <PathSelector />
        </div>

        {/* Authority Stats Bar */}
        <StatsBar
          stats={[
            { value: <><NumberTicker value={25} prefix="$" suffix="M" /></>, label: "ARR Scaled" },
            { value: <><NumberTicker value={15} suffix="+" /></>, label: "Years Exp." },
            { value: <><NumberTicker value={7} suffix="M+" /></>, label: "Users Impacted" },
            { value: <span className="text-gold"><NumberTicker value={100} suffix="%" /></span>, label: "Independence" }
          ]}
          className="mb-8"
        />

        {/* Social Proof */}
        <div className="pt-8">
          <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">Authority Established In</p>
          <div className="flex flex-wrap items-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-lg font-bold text-white">CIO</span>
            <span className="text-lg font-bold text-white">Built In</span>
            <span className="text-lg font-bold text-white">Mind the Product</span>
            <span className="text-lg font-bold text-white">HackerNoon</span>
          </div>
        </div>
      </section>

      {/* Section: The Exposure Layer */}
      <ScrollReveal className="relative z-10 py-20">
        <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-12 h-1 bg-red-600"></span>
          The Four Horsemen of Technical Insolvency
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlowCard className="p-8 h-full" glowColor="red">
            <h3 className="text-xl font-bold text-white mb-2 font-grotesk">1. Zombie Infrastructure</h3>
            <p className="text-gray-400">Legacy systems compounded by interest. Maintenance costs consuming 100% of engineering capacity.</p>
          </GlowCard>
          <GlowCard className="p-8 h-full" glowColor="red">
            <h3 className="text-xl font-bold text-white mb-2 font-grotesk">2. Feature Bloat</h3>
            <p className="text-gray-400">The silent killer. Code that generates no revenue but incurs 100% of the testing and security tax.</p>
          </GlowCard>
          <GlowCard className="p-8 h-full" glowColor="red">
            <h3 className="text-xl font-bold text-white mb-2 font-grotesk">3. AI Hallucination Debt</h3>
            <p className="text-gray-400">The cost of verifying probabilistic output. When "90% accurate" means "100% liability".</p>
          </GlowCard>
          <GlowCard className="p-8 h-full" glowColor="red">
            <h3 className="text-xl font-bold text-white mb-2 font-grotesk">4. Capital Misallocation</h3>
            <p className="text-gray-400">Calling OpEx "Innovation". 80% of your R&D budget is just keeping the lights on.</p>
          </GlowCard>
        </div>
      </ScrollReveal>

      {/* Section: Tools / Proof of Methodology */}
      <ScrollReveal delay={100} className="relative z-10 py-20 border-t border-white/5">
        <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-12 h-1 bg-cyan-400"></span>
          Proof of Methodology
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "PDI", desc: "Product Debt Index", href: "/tools/pdi" },
            { name: "EV-SE", desc: "Enterprise Value Simulator", href: "/tools/ev-se" },
            { name: "AUEB", desc: "AI Unit Economics", href: "/tools/aueb" },
            { name: "APER", desc: "Audit Probability", href: "/tools/aper" }
          ].map((tool) => (
            <Link key={tool.name} href={tool.href} className="group block p-6 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400 hover:bg-white/10 transition-all">
              <div className="text-2xl font-bold text-white mb-2 font-grotesk group-hover:text-cyan-400">{tool.name}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">{tool.desc}</div>
              <div className="mt-4 text-cyan-500 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">Launch Tool →</div>
            </Link>
          ))}
        </div>
      </ScrollReveal>

      {/* Section: The Exogram (What I'm Building) */}
      <ScrollReveal delay={100} className="relative z-10 py-20 border-t border-white/5">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-white mb-6 flex items-center gap-4">
              <span className="w-12 h-1 bg-purple-500"></span>
              The Exogram
            </h2>
            <h3 className="text-xl font-mono text-purple-400 mb-4 uppercase tracking-widest">Active Development</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I don't just advise. I build. <strong className="text-white">Mnemosyne</strong> is my active research into AI memory systems and long-context reasoning.
              It is the engine that powers my own agency.
            </p>
            <Link href="/exogram" className="inline-flex items-center gap-2 text-purple-400 font-bold uppercase tracking-widest hover:text-purple-300 transition-colors">
              View Project Status <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex-1 w-full">
            <GlowCard className="p-8 h-full bg-purple-900/10 border-purple-500/20" glowColor="purple">
              <div className="flex justify-between items-start mb-6">
                <div className="text-2xl font-bold text-white font-grotesk">Mnemosyne</div>
                <div className="px-3 py-1 bg-green-500/20 text-green-400 text-[10px] font-mono uppercase tracking-widest rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Online
                </div>
              </div>
              <div className="space-y-4 font-mono text-sm text-gray-400">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>System Load</span>
                  <span className="text-white">42%</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Memory Nodes</span>
                  <span className="text-white">14,205</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Last Ingestion</span>
                  <span className="text-white">Just now</span>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </ScrollReveal>

      {/* Section: Governance Tiers */}
      <ScrollReveal delay={200} className="relative z-10 py-20 border-t border-white/5">
        <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-12 h-1 bg-gold"></span>
          Intervention Protocols
        </h2>
        <div className="space-y-4">
          {[
            { name: "Diagnostic Call", price: "$450", desc: "30-Min Rapid Assessment" },
            { name: "Insolvency Diagnostic", price: "$2,500", desc: "60-Min Deep Dive + Risk Report" },
            { name: "AI Cost Governance", price: "$5,000", desc: "Unit Economics Analysis" },
            { name: "R&D Capital Audit", price: "$7,500", desc: "Full Forensic Review" },
            { name: "Oversight Retainer", price: "$5,000/mo", desc: "Board-Level Sanity Checks" }
          ].map((tier) => (
            <div key={tier.name} className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
              <div className="text-center sm:text-left mb-4 sm:mb-0">
                <div className="text-xl font-bold text-white font-grotesk">{tier.name}</div>
                <div className="text-sm text-gray-500">{tier.desc}</div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-xl font-mono text-cyan-400">{tier.price}</div>
                <Link href="/advisory" className="text-sm font-bold text-white uppercase tracking-wider hover:text-cyan-400 transition-colors">Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Newsletter */}
      <ScrollReveal delay={300} className="max-w-4xl relative z-10 py-20 border-t border-white/10 mt-8">
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 sm:p-12 rounded-2xl border border-white/10 text-center">
          <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-white mb-4">Join the Executive Briefing</h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            No fluff. Just weekly analysis of why products fail and how to fix them.
            Join 2,500+ board members and product leaders.
          </p>
          {/* Newsletter Form */}
          <div className="max-w-md mx-auto">
            <NewsletterForm buttonText="Subscribe" />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
