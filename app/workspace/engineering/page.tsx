"use client";

import React from 'react';
import WorkspaceHeader from '../../../components/workspace/WorkspaceHeader';
import { Code2, GitPullRequest, Users, Activity, CheckCircle2, TrendingUp, Cpu, Terminal } from 'lucide-react';

const mockRepos = [
  { name: 'richardewing-io-core', lang: 'TypeScript / Next.js', prs24h: 14, cycleTimeHours: 4.2, aiAssistedPct: 68, status: 'Healthy' },
  { name: 'exogram-governance-engine', lang: 'Rust / WASM', prs24h: 8, cycleTimeHours: 2.8, aiAssistedPct: 82, status: 'High Efficiency' },
  { name: 'enterprise-token-sidecar', lang: 'Go / Docker', prs24h: 5, cycleTimeHours: 3.5, aiAssistedPct: 74, status: 'Healthy' }
];

export default function EngineeringWorkspacePage() {
  return (
    <div className="min-h-screen bg-zinc-50 pt-20 pb-16">
      <WorkspaceHeader
        title="Engineering Workspace"
        subtitle="Developer productivity telemetry, repository operations, AI usage impact, and cycle time tracking."
        badge="Product 4 • Engineering OS"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* Engineering KPI Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-cyan-700 font-bold uppercase">Active Repositories</span>
            <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">18 Repos</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">100% telemetry coverage</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-emerald-700 font-bold uppercase">Average PR Cycle Time</span>
            <h3 className="text-3xl font-grotesk font-bold text-emerald-700 mt-2">3.5 Hours</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">22% speedup vs Q2</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-violet-700 font-bold uppercase">AI Assistance Penetration</span>
            <h3 className="text-3xl font-grotesk font-bold text-violet-700 mt-2">74.8%</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">Measured via commit diffs</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-amber-700 font-bold uppercase">Code Egress Violations</span>
            <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">0 Blocked</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">Sidecars active</p>
          </div>
        </div>

        {/* Repository Table */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-6">
            <div>
              <span className="text-xs font-mono text-cyan-700 font-bold uppercase">Repository Operations</span>
              <h2 className="text-xl font-grotesk font-bold text-zinc-900">Developer Workflow Telemetry</h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 text-xs font-mono text-zinc-500 uppercase">
                  <th className="pb-3 font-bold">Repository</th>
                  <th className="pb-3 font-bold">Language Stack</th>
                  <th className="pb-3 font-bold">PRs (24h)</th>
                  <th className="pb-3 font-bold">Cycle Time</th>
                  <th className="pb-3 font-bold">AI Assistance</th>
                  <th className="pb-3 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 font-mono text-xs">
                {mockRepos.map(repo => (
                  <tr key={repo.name} className="hover:bg-zinc-50/80">
                    <td className="py-4 font-bold text-zinc-900 flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-cyan-600" />
                      {repo.name}
                    </td>
                    <td className="py-4 text-zinc-600">{repo.lang}</td>
                    <td className="py-4 text-zinc-900 font-bold">{repo.prs24h} merged</td>
                    <td className="py-4 text-emerald-700 font-bold">{repo.cycleTimeHours}h</td>
                    <td className="py-4 text-violet-700 font-bold">{repo.aiAssistedPct}%</td>
                    <td className="py-4">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 text-[10px]">
                        {repo.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
