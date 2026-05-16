import React from 'react';
import Link from 'next/link';
import { Activity, ChevronRight } from 'lucide-react';
import { ontologyGraph } from '@/lib/ontology/relationships';

interface RelatedDiagnosticsProps {
  slugs?: string[];
  title?: string;
}

export default function RelatedDiagnostics({ slugs, title = "Recommended Diagnostics" }: RelatedDiagnosticsProps) {
  if (!slugs || slugs.length === 0) return null;

  const diagnostics = slugs
    .map(slug => ontologyGraph.find(n => n.id === slug || n.id === `diag_${slug}`))
    .filter(Boolean);

  if (diagnostics.length === 0) return null;

  return (
    <div className="my-10">
      <h3 className="flex items-center gap-2 text-sm font-bold font-mono text-violet-600 uppercase tracking-widest mb-6">
        <Activity className="w-4 h-4" /> {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {diagnostics.map(diag => {
          const urlSlug = diag!.id.replace('diag_', '');
          return (
            <Link 
              key={diag!.id} 
              href={`/tools/${urlSlug}`} 
              className="group block p-6 rounded-xl border border-violet-500/20 bg-violet-50 hover:border-violet-500/40 transition-all shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase tracking-widest bg-violet-100 text-violet-700">Measurement Tool</span>
              </div>
              <h4 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-violet-600 transition-colors">
                {diag!.name}
              </h4>
              <div className="flex items-center text-xs font-bold text-violet-600 uppercase tracking-widest mt-4">
                Run Diagnostic <ChevronRight className="w-3 h-3 ml-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
