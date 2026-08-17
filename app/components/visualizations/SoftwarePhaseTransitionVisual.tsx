'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Activity, CloudRain, Sparkles, Compass, AlertCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';

type PhaseType = 'solid' | 'liquid' | 'gas' | 'inflection';

export default function SoftwarePhaseTransitionVisual() {
  const [activePhase, setActivePhase] = useState<PhaseType>('inflection');

  const phaseDetails = {
    solid: {
      title: 'SOLID Phase: Traditional Product Management',
      subtitle: 'High Cost to Write Software • Medium Organizational Complexity',
      icon: Layers,
      color: 'amber',
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-300',
      borderClass: 'border-amber-400',
      description: 'The pre-AI regime where developer bandwidth was scarce and expensive. Product management centered on allocating scarce engineering capacity, managing backlog velocity, and writing exhaustive PRDs.',
      operatingModel: 'Fixed roadmaps, 2-week sprints, granular ticket grooming, and output-based velocity metrics.',
      bottleneck: 'Developer bandwidth and engineering throughput.',
      failureVector: 'Over-specifying features before validation; building large monolithic architectures that become legacy debt.',
      economistAction: 'Transition from managing feature backlog output to auditing feature carrying cost and margin contribution.'
    },
    liquid: {
      title: 'LIQUID Phase: Adaptive Teams',
      subtitle: 'Medium Cost to Write Software • Low Organizational Complexity',
      icon: Activity,
      color: 'cyan',
      badgeClass: 'bg-cyan-100 text-cyan-900 border-cyan-300',
      borderClass: 'border-cyan-400',
      description: 'The transitional agile regime where cross-functional pods iterate with modular codebases and rapid feedback loops. Coordination overhead remains manageable as tooling accelerates prototyping.',
      operatingModel: 'Autonomous cross-functional pods, continuous deployment, hypothesis testing, and rapid customer telemetry.',
      bottleneck: 'Rapid discovery velocity vs. architectural consistency.',
      failureVector: 'Accumulating fragmented microservices and loose state management across fast-moving squads.',
      economistAction: 'Establish automated unit economics bounds and enforce feature deprecation protocols before complexity spills into the gas state.'
    },
    gas: {
      title: 'GAS Phase: Autonomous AI-Driven Creation',
      subtitle: 'Near-Zero / $0 Cost to Write Software • High Organizational Complexity',
      icon: CloudRain,
      color: 'purple',
      badgeClass: 'bg-purple-100 text-purple-900 border-purple-300',
      borderClass: 'border-purple-400',
      description: 'The post-code regime where generative agents produce arbitrary software capabilities in hours. Developer capacity is unconstrained, collapsing code generation costs to near zero while organizational complexity explodes.',
      operatingModel: 'Autonomous agent swarms, continuous prompt-to-code pipelines, self-healing runtime systems, and deterministic policy gates.',
      bottleneck: 'Managing uncertainty, system architecture efficiency, and unit margin preservation.',
      failureVector: 'Vibe coding debt, unbounded inference token burn, logic drift, and unmanaged hallucination liabilities.',
      economistAction: 'Act as a financial steward: enforce strict capital allocation, unit margin floors, and deterministic runtime governance.'
    },
    inflection: {
      title: 'The Inflection Point: "We Are Here"',
      subtitle: 'The Phase Transition from Code Scarcity to Code Abundance',
      icon: Sparkles,
      color: 'emerald',
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      borderClass: 'border-emerald-500',
      description: 'The current industry inflection point where traditional PM frameworks break down. As developer capacity ceases to be the constraint, product leaders must stop managing output and start managing capital and uncertainty.',
      operatingModel: 'Bridging agile backlog workflows with AI-assisted generation while restructuring governance around product economics.',
      bottleneck: 'Executive cognitive models locked in legacy output metrics while engineers deploy AI-generated code.',
      failureVector: 'Measuring sprint velocity rather than capital efficiency; allowing unchecked token COGS to erode SaaS margins.',
      economistAction: 'Deploy the Product Economist playbook: audit R&D capital allocation, measure Product Debt Index (PDI), and gate AI feature margins.'
    }
  };

  const current = phaseDetails[activePhase];

  return (
    <div className="w-full bg-white border border-zinc-300 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-cyan-100 text-cyan-900 border border-cyan-300 uppercase tracking-wider">
              Richard Ewing Canon
            </span>
            <span className="text-xs font-mono font-bold text-zinc-500">
              Interactive Systems Model
            </span>
          </div>
          <h3 className="text-2xl font-black text-zinc-950 font-grotesk tracking-tight">
            The Software Creation Phase Transition
          </h3>
          <p className="text-sm text-zinc-600 font-medium mt-1">
            Organizational Complexity vs. Cost to Write Software (Solid &rarr; Liquid &rarr; Gas)
          </p>
        </div>

        {/* Phase Selector Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-zinc-100 border border-zinc-200 rounded-2xl self-start sm:self-auto">
          {(['inflection', 'solid', 'liquid', 'gas'] as PhaseType[]).map((phaseKey) => {
            const isActive = activePhase === phaseKey;
            const labels: Record<PhaseType, string> = {
              inflection: 'We Are Here',
              solid: 'Solid Phase',
              liquid: 'Liquid Phase',
              gas: 'Gas Phase'
            };
            return (
              <button
                key={phaseKey}
                onClick={() => setActivePhase(phaseKey)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  isActive
                    ? 'bg-zinc-950 text-white shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60'
                }`}
              >
                {labels[phaseKey]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Diagram Area */}
      <div className="relative w-full bg-[#FAF7F2] border border-zinc-300 rounded-2xl p-4 sm:p-6 overflow-hidden">
        {/* SVG Visualization Canvas */}
        <div className="w-full aspect-[16/10] sm:aspect-[16/9] max-h-[480px] relative">
          <svg
            viewBox="0 0 800 500"
            className="w-full h-full select-none"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Arrowhead marker */}
              <marker
                id="axis-arrow"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#18181b" />
              </marker>

              {/* Glowing filters */}
              <filter id="glow-gold" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Coordinate Axes */}
            {/* Y-Axis: Organizational Complexity */}
            <line
              x1="90"
              y1="430"
              x2="90"
              y2="40"
              stroke="#18181b"
              strokeWidth="3.5"
              markerEnd="url(#axis-arrow)"
            />
            {/* X-Axis: Cost to Write Software */}
            <line
              x1="90"
              y1="430"
              x2="750"
              y2="430"
              stroke="#18181b"
              strokeWidth="3.5"
              markerEnd="url(#axis-arrow)"
            />

            {/* Y-Axis Label */}
            <text
              x="-240"
              y="38"
              transform="rotate(-90)"
              textAnchor="middle"
              className="text-base font-black font-grotesk fill-zinc-950 tracking-tight"
              style={{ fontSize: '18px', fontWeight: 900 }}
            >
              Organizational Complexity
            </text>

            {/* Y-Axis Ticks */}
            <text x="80" y="420" textAnchor="end" className="fill-zinc-900 font-mono text-[11px] font-bold">LOW</text>
            <text x="80" y="245" textAnchor="end" className="fill-zinc-900 font-mono text-[11px] font-bold">MEDIUM</text>
            <text x="80" y="70" textAnchor="end" className="fill-zinc-900 font-mono text-[11px] font-bold">HIGH</text>

            {/* X-Axis Label */}
            <text
              x="420"
              y="485"
              textAnchor="middle"
              className="text-base font-black font-grotesk fill-zinc-950 tracking-tight"
              style={{ fontSize: '18px', fontWeight: 900 }}
            >
              Cost to Write Software
            </text>

            {/* X-Axis Ticks */}
            <text x="180" y="450" textAnchor="middle" className="fill-zinc-900 font-mono text-[11px] font-bold">HIGH (EXPENSIVE)</text>
            <text x="400" y="450" textAnchor="middle" className="fill-zinc-900 font-mono text-[11px] font-bold">MEDIUM</text>
            <text x="600" y="450" textAnchor="middle" className="fill-zinc-900 font-mono text-[11px] font-bold">LOW (NEAR ZERO)</text>
            <text x="735" y="450" textAnchor="middle" className="fill-zinc-950 font-mono text-[13px] font-black">$0</text>

            {/* Phase Boundary Curves */}
            {/* Top-Left to Center Curve */}
            <path
              d="M 230 60 Q 240 200 395 245"
              fill="none"
              stroke="#1e3a8a"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Center to Bottom-Left Curve */}
            <path
              d="M 120 420 Q 230 360 395 245"
              fill="none"
              stroke="#1e3a8a"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Center to Top-Right Hyperbola Curve */}
            <path
              d="M 395 245 Q 520 280 720 180"
              fill="none"
              stroke="#1e3a8a"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Region 1: SOLID (Traditional PM) */}
            <g
              className="cursor-pointer transition-opacity hover:opacity-100"
              onClick={() => setActivePhase('solid')}
              style={{ opacity: activePhase === 'solid' || activePhase === 'inflection' ? 1 : 0.45 }}
            >
              <rect x="115" y="170" width="165" height="150" rx="16" fill={activePhase === 'solid' ? '#FEF3C7' : 'transparent'} stroke={activePhase === 'solid' ? '#D97706' : 'transparent'} strokeWidth="2" />
              <text x="195" y="210" textAnchor="middle" className="fill-zinc-950 font-grotesk text-[20px] font-black tracking-tight">SOLID</text>
              <text x="195" y="230" textAnchor="middle" className="fill-zinc-700 font-sans text-[12px] font-bold">Traditional PM</text>
              <text x="195" y="246" textAnchor="middle" className="fill-zinc-600 font-sans text-[11px] font-medium">(Roadmaps, Sprints, PRDs)</text>
              
              {/* Cube Scaffold Icon */}
              <g transform="translate(165, 260) scale(1.1)">
                {/* Isometric Cube Lines */}
                <path d="M30 5 L55 18 L55 45 L30 32 Z" fill="#FDE68A" stroke="#D97706" strokeWidth="1.8" />
                <path d="M5 18 L30 5 L55 18 L30 32 Z" fill="#FEF08A" stroke="#D97706" strokeWidth="1.8" />
                <path d="M5 18 L30 32 L30 58 L5 45 Z" fill="#FCD34D" stroke="#D97706" strokeWidth="1.8" />
                {/* Grid markings */}
                <line x1="17" y1="12" x2="42" y2="25" stroke="#B45309" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="42" y1="12" x2="17" y2="25" stroke="#B45309" strokeWidth="1" strokeDasharray="2 2" />
              </g>
            </g>

            {/* Region 2: LIQUID (Adaptive Teams) */}
            <g
              className="cursor-pointer transition-opacity hover:opacity-100"
              onClick={() => setActivePhase('liquid')}
              style={{ opacity: activePhase === 'liquid' || activePhase === 'inflection' ? 1 : 0.45 }}
            >
              <rect x="330" y="300" width="150" height="110" rx="16" fill={activePhase === 'liquid' ? '#CFFAFE' : 'transparent'} stroke={activePhase === 'liquid' ? '#0891B2' : 'transparent'} strokeWidth="2" />
              <text x="405" y="325" textAnchor="middle" className="fill-zinc-950 font-grotesk text-[20px] font-black tracking-tight">LIQUID</text>
              <text x="405" y="345" textAnchor="middle" className="fill-zinc-700 font-sans text-[12px] font-bold">Adaptive Teams</text>
              
              {/* Waves Icon */}
              <g transform="translate(365, 360)">
                <path d="M0 5 Q 15 -2, 30 5 T 60 5 T 80 5" fill="none" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
                <path d="M0 13 Q 15 6, 30 13 T 60 13 T 80 13" fill="none" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
                <path d="M0 21 Q 15 14, 30 21 T 60 21 T 80 21" fill="none" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
              </g>
            </g>

            {/* Region 3: GAS (Autonomous AI Creation) */}
            <g
              className="cursor-pointer transition-opacity hover:opacity-100"
              onClick={() => setActivePhase('gas')}
              style={{ opacity: activePhase === 'gas' || activePhase === 'inflection' ? 1 : 0.45 }}
            >
              <rect x="520" y="50" width="190" height="150" rx="16" fill={activePhase === 'gas' ? '#F3E8FF' : 'transparent'} stroke={activePhase === 'gas' ? '#9333EA' : 'transparent'} strokeWidth="2" />
              <text x="615" y="80" textAnchor="middle" className="fill-zinc-950 font-grotesk text-[22px] font-black tracking-tight">GAS</text>
              <text x="615" y="100" textAnchor="middle" className="fill-zinc-700 font-sans text-[12px] font-bold">Autonomous</text>
              <text x="615" y="115" textAnchor="middle" className="fill-zinc-700 font-sans text-[12px] font-bold">AI-driven Creation</text>
              
              {/* Cloud with Radiating Expansion Arrows */}
              <g transform="translate(565, 125)">
                {/* Dotted Cloud Outline */}
                <path
                  d="M25 35 Q10 35 15 22 Q12 10 25 10 Q32 0 45 6 Q58 0 65 10 Q78 10 75 22 Q80 35 65 35 Z"
                  fill="#FEF3C7"
                  stroke="#D97706"
                  strokeWidth="2.5"
                  strokeDasharray="4 3"
                />
                {/* Outward Arrows */}
                <line x1="45" y1="5" x2="45" y2="-12" stroke="#D97706" strokeWidth="2.5" markerEnd="url(#axis-arrow)" />
                <line x1="20" y1="12" x2="5" y2="0" stroke="#D97706" strokeWidth="2.5" markerEnd="url(#axis-arrow)" />
                <line x1="70" y1="12" x2="85" y2="0" stroke="#D97706" strokeWidth="2.5" markerEnd="url(#axis-arrow)" />
                <line x1="15" y1="28" x2="-2" y2="28" stroke="#D97706" strokeWidth="2.5" markerEnd="url(#axis-arrow)" />
                <line x1="75" y1="28" x2="92" y2="28" stroke="#D97706" strokeWidth="2.5" markerEnd="url(#axis-arrow)" />
              </g>
            </g>

            {/* Center Inflection Marker: "We Are Here" */}
            <g
              className="cursor-pointer"
              onClick={() => setActivePhase('inflection')}
            >
              {/* Multi-point Star */}
              <g transform="translate(395, 245)">
                <circle r="18" fill="#FDE68A" opacity="0.6" className="animate-ping" />
                <path
                  d="M0 -15 L4 -4 L15 -4 L7 3 L10 14 L0 7 L-10 14 L-7 3 L-15 -4 L-4 -4 Z"
                  fill="#D97706"
                  stroke="#B45309"
                  strokeWidth="1.5"
                  filter="url(#glow-gold)"
                />
              </g>

              {/* Dotted connecting line */}
              <line x1="410" y1="250" x2="495" y2="295" stroke="#D97706" strokeWidth="2" strokeDasharray="3 3" />

              {/* Callout Box: We are here. */}
              <g transform="translate(495, 275)">
                <rect
                  x="0"
                  y="0"
                  width="135"
                  height="36"
                  rx="6"
                  fill="#FFFBEB"
                  stroke="#D97706"
                  strokeWidth="2"
                />
                <text
                  x="67"
                  y="23"
                  textAnchor="middle"
                  className="fill-amber-900 font-sans text-[13px] font-black"
                >
                  We are here.
                </text>
              </g>
            </g>
          </svg>
        </div>

        {/* Legend Footer */}
        <div className="mt-4 pt-3 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-600">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
              Solid State (Traditional)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 inline-block"></span>
              Liquid State (Adaptive)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block"></span>
              Gas State (Autonomous AI)
            </span>
          </div>
          <span className="text-[11px] text-zinc-500">
            Click any phase in the diagram to inspect operating dynamics
          </span>
        </div>
      </div>

      {/* Dynamic Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className={`bg-zinc-50 border-2 ${current.borderClass} rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm`}
        >
          {/* Title row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white border border-zinc-200 shadow-sm text-zinc-900">
                <current.icon className="w-6 h-6 text-zinc-900" />
              </div>
              <div>
                <h4 className="text-xl font-bold font-grotesk text-zinc-950">
                  {current.title}
                </h4>
                <p className="text-xs font-mono font-bold text-zinc-600">
                  {current.subtitle}
                </p>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border self-start sm:self-auto ${current.badgeClass}`}>
              {activePhase.toUpperCase()} REGIME
            </span>
          </div>

          {/* Description */}
          <p className="text-zinc-900 text-sm sm:text-base leading-relaxed font-medium">
            {current.description}
          </p>

          {/* 4-Column Structural Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 bg-white border border-zinc-200 rounded-xl space-y-1.5">
              <span className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-zinc-700" />
                Operating Model
              </span>
              <p className="text-xs text-zinc-800 font-medium leading-normal">
                {current.operatingModel}
              </p>
            </div>

            <div className="p-4 bg-white border border-zinc-200 rounded-xl space-y-1.5">
              <span className="text-[11px] font-mono font-bold text-amber-700 uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                Primary Bottleneck
              </span>
              <p className="text-xs text-zinc-800 font-medium leading-normal">
                {current.bottleneck}
              </p>
            </div>

            <div className="p-4 bg-white border border-zinc-200 rounded-xl space-y-1.5">
              <span className="text-[11px] font-mono font-bold text-red-700 uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-red-700" />
                Key Failure Vector
              </span>
              <p className="text-xs text-zinc-800 font-medium leading-normal">
                {current.failureVector}
              </p>
            </div>

            <div className="p-4 bg-white border border-cyan-200 rounded-xl space-y-1.5 bg-cyan-50/40">
              <span className="text-[11px] font-mono font-bold text-cyan-900 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-900" />
                Product Economist Imperative
              </span>
              <p className="text-xs text-zinc-900 font-semibold leading-normal">
                {current.economistAction}
              </p>
            </div>
          </div>

          {/* Bottom Callout */}
          <div className="pt-3 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <span className="text-zinc-600 font-mono font-bold">
              Core Axiom: &ldquo;Stop managing output. Start managing capital and uncertainty.&rdquo;
            </span>
            <a
              href="https://www.linkedin.com/in/richard-ewing-mba/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono font-bold text-cyan-900 hover:text-cyan-950 hover:underline"
            >
              View original LinkedIn publication <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
