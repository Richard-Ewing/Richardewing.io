import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import { getSkillBySlug } from '@/lib/content/skills';

interface RelatedSkillsProps {
  slugs: string[];
  title?: string;
}

export default function RelatedSkills({ slugs, title = "Recommended Governance Systems" }: RelatedSkillsProps) {
  if (!slugs || slugs.length === 0) return null;

  const skills = slugs
    .map(slug => getSkillBySlug(slug.replace('skill_', '')))
    .filter(Boolean);

  if (skills.length === 0) return null;

  return (
    <div className="my-10">
      <h3 className="flex items-center gap-2 text-sm font-bold font-mono text-cyan-700 uppercase tracking-widest mb-6">
        <ShieldCheck className="w-4 h-4" /> {title}
      </h3>
      <div className="grid grid-cols-1 gap-4">
        {skills.map(skill => (
          <Link 
            key={skill!.slug} 
            href={`/skills/${skill!.slug}`} 
            className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl border border-cyan-500/20 bg-white hover:border-cyan-500/40 transition-all shadow-sm"
          >
            <div className="flex-1 pr-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase tracking-widest bg-cyan-50 text-cyan-800 border border-cyan-100">
                  {skill!.category}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase tracking-widest bg-zinc-100 text-zinc-600 border border-zinc-200">
                  {skill!.version}
                </span>
              </div>
              <h4 className="text-xl font-bold text-zinc-950 mb-2 group-hover:text-cyan-700 transition-colors">
                {skill!.title}
              </h4>
              <p className="text-sm font-semibold text-zinc-600 font-medium">
                {skill!.description}
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex-shrink-0 flex items-center text-xs font-bold text-cyan-600 uppercase tracking-widest bg-cyan-50 px-4 py-2 rounded">
              View Infrastructure <ChevronRight className="w-3 h-3 ml-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
