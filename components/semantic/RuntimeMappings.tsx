import React from 'react';
import { GitBranch, ShieldAlert } from 'lucide-react';

interface ExogramControlProps {
  mapping: string;
}

export default function RuntimeMappings({ mapping }: ExogramControlProps) {
  if (!mapping) return null;

  return (
    <div className="my-10 p-6 rounded-xl border border-zinc-900 bg-zinc-950 text-white shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center border border-zinc-700">
          <GitBranch className="w-4 h-4 text-zinc-400" />
        </div>
        <div>
          <h3 className="text-xs font-bold font-mono text-zinc-400 uppercase tracking-widest">Exogram Routing</h3>
          <p className="text-sm font-semibold text-zinc-200">System Control Plane Mappings</p>
        </div>
      </div>
      
      <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-base font-bold text-white mb-1">Enforced by: {mapping}</h4>
            <p className="text-sm font-semibold text-zinc-400 leading-relaxed">
              This failure mode is structurally blocked at runtime by the Exogram Operating System. The specified admissibility routing layer intercepts execution before probabilistic variance can affect the deterministic core.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
