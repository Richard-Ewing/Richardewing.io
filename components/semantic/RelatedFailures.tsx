import React from 'react';
import Link from 'next/link';
import { AlertTriangle, ChevronRight } from 'lucide-react';
import { getFailureBySlug } from '@/lib/content/skills';

interface RelatedFailuresProps {
  slugs: string[];
  title?: string;
}

export default function RelatedFailures({ slugs, title = "Related Operational Failures" }: RelatedFailuresProps) {
  if (!slugs || slugs.length === 0) return null;

  const failures = slugs
    .map(slug => getFailureBySlug(slug.replace('failure_', '')))
    .filter(Boolean);

  if (failures.length === 0) return null;

  return (
    <div className="my-10">
      <h3 className="flex items-center gap-2 text-sm font-bold font-mono text-rose-600 uppercase tracking-widest mb-6">
        <AlertTriangle className="w-4 h-4" /> {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {failures.map(failure => (
          <Link 
            key={failure!.slug} 
            href={`/answers#${failure!.slug}`} 
            className="group block p-6 rounded-xl border border-rose-500/20 bg-rose-50 hover:border-rose-500/40 transition-all shadow-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase tracking-widest bg-rose-100 text-rose-700">Failure Mode</span>
            </div>
            <h4 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-rose-600 transition-colors">
              {failure!.title}
            </h4>
            <p className="text-sm font-semibold text-zinc-700 font-medium line-clamp-2 mb-4">
              {failure!.definition}
            </p>
            <div className="flex items-center text-xs font-bold text-rose-600 uppercase tracking-widest">
              View Symptoms <ChevronRight className="w-3 h-3 ml-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
