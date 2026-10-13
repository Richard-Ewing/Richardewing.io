"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import WorkspaceHeader from '../../../components/workspace/WorkspaceHeader';
import { CustomerWorkspaceStore, CustomerOrganizationWorkspace } from '../../../lib/workspace/customerWorkspace';
import { Terminal, ArrowRight } from 'lucide-react';

export default function EngineeringWorkspacePage() {
  const [workspace, setWorkspace] = useState<CustomerOrganizationWorkspace | null>(null);

  useEffect(() => {
    const sync = () => setWorkspace({ ...CustomerWorkspaceStore.getWorkspace() });
    sync();
    window.addEventListener('re-workspace-updated', sync);
    return () => window.removeEventListener('re-workspace-updated', sync);
  }, []);

  if (!workspace) return null;

  const aperUSD = workspace.engineeringHeadcount > 0
    ? Math.round(workspace.annualArrUSD / workspace.engineeringHeadcount)
    : 0;
  const zombieFtes = Math.round(workspace.engineeringHeadcount * (workspace.zombieFeaturePct / 100) * 10) / 10;
  const zombieCarryUSD = Math.round(workspace.engineeringHeadcount * 185000 * (workspace.zombieFeaturePct / 100));

  const mockRepos = [
    {
      name: `${workspace.organizationName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-core`,
      lang: 'TypeScript / Next.js',
      fteAllocated: Math.max(1, Math.round(workspace.engineeringHeadcount * 0.5)),
      cycleTimeHours: 4.2,
      aiAssistedPct: 68,
      status: 'Core Revenue Engine'
    },
    {
      name: 'ai-inference-gateway',
      lang: 'Python / Rust Sidecar',
      fteAllocated: Math.max(1, Math.round(workspace.engineeringHeadcount * (1 - 0.5 - workspace.zombieFeaturePct / 100))),
      cycleTimeHours: 2.8,
      aiAssistedPct: 82,
      status: 'High Efficiency'
    },
    {
      name: 'legacy-zombie-modules',
      lang: 'Legacy Monolith',
      fteAllocated: zombieFtes,
      cycleTimeHours: 14.6,
      aiAssistedPct: 24,
      status: `${workspace.zombieFeaturePct}% Capacity Drag`
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 pt-20 pb-16">
      <WorkspaceHeader
        title="Engineering Workspace"
        subtitle="Developer productivity telemetry, APER revenue per engineer, AI usage impact, and Zombie Feature drag."
        badge="Product 4 • Engineering OS"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* Engineering KPI Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-cyan-700 font-bold uppercase">Engineering Headcount</span>
            <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">{workspace.engineeringHeadcount} FTEs</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">${(workspace.engineeringHeadcount * 185000).toLocaleString()} loaded payroll</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-emerald-700 font-bold uppercase">Revenue / Engineer (APER)</span>
            <h3 className="text-3xl font-grotesk font-bold text-emerald-700 mt-2">${aperUSD.toLocaleString()}</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">{aperUSD >= 350000 ? 'Above $350K benchmark' : 'Below $350K benchmark'}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-amber-700 font-bold uppercase">Zombie Maintenance FTEs</span>
            <h3 className="text-3xl font-grotesk font-bold text-amber-700 mt-2">{zombieFtes} FTEs</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">{workspace.zombieFeaturePct}% load (${zombieCarryUSD.toLocaleString()}/yr)</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-violet-700 font-bold uppercase">AI Assistance Penetration</span>
            <h3 className="text-3xl font-grotesk font-bold text-violet-700 mt-2">74.8%</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">Measured via commit diffs</p>
          </div>
        </div>

        {/* Repository Table */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-4 mb-6">
            <div>
              <span className="text-xs font-mono text-cyan-700 font-bold uppercase">Repository &amp; Capacity Allocation ({workspace.organizationName})</span>
              <h2 className="text-xl font-grotesk font-bold text-zinc-900">Developer Workflow Telemetry</h2>
            </div>
            <Link
              href="/tools/aper"
              className="px-4 py-2 rounded-xl bg-cyan-50 border border-cyan-200 hover:bg-cyan-100 text-cyan-900 text-xs font-mono font-bold inline-flex items-center gap-1.5 transition-colors"
            >
              Run APER Diagnostic <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 text-xs font-mono text-zinc-500 uppercase">
                  <th className="pb-3 font-bold">Workstream / Repository</th>
                  <th className="pb-3 font-bold">Language Stack</th>
                  <th className="pb-3 font-bold">Allocated FTEs</th>
                  <th className="pb-3 font-bold">Cycle Time</th>
                  <th className="pb-3 font-bold">AI Assistance</th>
                  <th className="pb-3 font-bold">P&amp;L Status</th>
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
                    <td className="py-4 text-zinc-900 font-bold">{repo.fteAllocated} FTEs</td>
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
