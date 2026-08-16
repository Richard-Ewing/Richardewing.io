'use client';

import React, { useState } from 'react';
import { ShieldCheck, Cpu, Terminal, CheckCircle2, AlertTriangle, ArrowRight, Zap, RefreshCw } from 'lucide-react';

interface SystemNode {
  id: string;
  name: string;
  role: string;
  status: 'active' | 'optimal' | 'guarded';
  description: string;
  failurePrevented: string;
  metric: string;
  substeps: string[];
}

const NODES: SystemNode[] = [
  {
    id: 'input',
    name: '1. Ingestion & Directive Router',
    role: 'Context Bounding',
    status: 'optimal',
    description: 'Ingests prompts, classifies operational mode (Mode 1 Direct, Mode 2 Targeted, Mode 3 Swarm), and bounds initial context space.',
    failurePrevented: 'Unbounded context bloat & prompt drift',
    metric: '< 50ms Routing',
    substeps: ['Operational Mode Classification', 'Context Token Pruning', 'Intent Extraction']
  },
  {
    id: 'swarm',
    name: '2. Multi-Agent War Room Swarm',
    role: 'Parallel Execution',
    status: 'active',
    description: 'Deploys specialized subagents (writer, UI designer, SEO architect, code architect) across isolated git worktree branches.',
    failurePrevented: 'Workspace state collisions & single-agent blindspots',
    metric: '5x Parallelism',
    substeps: ['Git Worktree Spawning', 'Role Specialization', 'Asynchronous Branch Processing']
  },
  {
    id: 'qa',
    name: '3. Deterministic 4-Pass QA Gate',
    role: 'Verification & Linting',
    status: 'guarded',
    description: 'Executes out-of-band automated verification scripts, linting zero em-dashes, valid TypeScript signatures, and layout constraints.',
    failurePrevented: 'Model self-rationalization & hallucinations committed to codebase',
    metric: '100% Zero-Drift',
    substeps: ['TypeScript Static Checks', 'verify-qa.mjs Automated Lint', 'REWS Editorial Compliance', 'Next.js Build Gate']
  },
  {
    id: 'deploy',
    name: '4. Autonomous Production Auto-Push',
    role: 'Continuous Delivery',
    status: 'optimal',
    description: 'Automatically commits verified work to GitHub main branch and deploys to global edge CDN with zero manual friction.',
    failurePrevented: 'Stale uncommitted code & deployment latency',
    metric: '0-Touch Deploy',
    substeps: ['Git Commit & Branch Merge', 'Edge CDN Cache Invalidation', 'Instant Search Engine Pinging']
  }
];

export default function InteractiveSystemsDiagram() {
  const [selectedNode, setSelectedNode] = useState<string>('qa');

  const activeNode = NODES.find(n => n.id === selectedNode) || NODES[2];

  return (
    <div className="w-full my-10 bg-zinc-950/90 border border-zinc-800/80 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-zinc-800/80 relative z-10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-1.5">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Architecture Map</span>
          </div>
          <h3 className="text-xl font-bold text-zinc-100 tracking-tight">
            Sovereign Agentic Pipeline (MOD v3.0)
          </h3>
        </div>
        <div className="text-xs font-mono text-zinc-500">
          Click any node below to inspect mechanisms
        </div>
      </div>

      {/* Interactive System Pipeline Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative z-10 mb-8">
        {NODES.map((node, index) => {
          const isSelected = selectedNode === node.id;
          return (
            <div
              key={node.id}
              onClick={() => setSelectedNode(node.id)}
              className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 relative ${
                isSelected
                  ? 'bg-zinc-900 border-emerald-500/70 shadow-lg shadow-emerald-500/10 scale-[1.02]'
                  : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                  Step 0{index + 1}
                </span>
                <span className={`w-2 h-2 rounded-full ${
                  node.status === 'guarded' ? 'bg-emerald-400 animate-pulse' : 'bg-teal-400'
                }`} />
              </div>
              <h4 className="text-sm font-semibold text-zinc-200 mb-1 leading-snug">
                {node.name.replace(/^\d+\.\s*/, '')}
              </h4>
              <p className="text-xs text-zinc-400 font-mono">
                {node.role}
              </p>
            </div>
          );
        })}
      </div>

      {/* Deep-Dive Inspection Panel */}
      <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-xl p-5 md:p-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              Mechanism Inspection: {activeNode.role}
            </span>
            <h4 className="text-lg font-bold text-zinc-100 mt-0.5">
              {activeNode.name}
            </h4>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300">
            <span className="text-emerald-400 font-bold">{activeNode.metric}</span>
          </div>
        </div>

        <p className="text-sm text-zinc-300 my-4 leading-relaxed">
          {activeNode.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Sub-steps */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
              Active Sub-Processes
            </span>
            {activeNode.substeps.map((sub, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>{sub}</span>
              </div>
            ))}
          </div>

          {/* Failure Prevented Box */}
          <div className="bg-zinc-950/80 border border-zinc-800 rounded-lg p-3.5 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/90 block">
                Failure Mode Neutralized
              </span>
              <p className="text-xs text-zinc-300 mt-0.5">
                {activeNode.failurePrevented}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
