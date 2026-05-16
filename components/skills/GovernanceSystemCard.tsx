import React from 'react';
import Link from 'next/link';

interface GovernanceSystemCardProps {
  slug: string;
  title: string;
  category: string;
  price: number;
  checkoutUrl: string;
  runtimeLayer?: string;
  whatBreaks?: string[];
  ecosystemPainQuotes?: string[];
  whatSystemInstalls?: string[];
  exogramMapping: string;
  ctaText?: string;
}

export default function GovernanceSystemCard({
  slug,
  title,
  category,
  price,
  checkoutUrl,
  runtimeLayer,
  whatBreaks = [],
  ecosystemPainQuotes = [],
  whatSystemInstalls = [],
  exogramMapping,
  ctaText
}: GovernanceSystemCardProps) {
  return (
    <div className="card flex flex-col h-full bg-[#FFFFFF] border border-[rgba(0,0,0,0.1)] shadow-sm hover:shadow-lg transition-all relative overflow-hidden group">
      {/* Top Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] to-[#0891B2] opacity-80 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="mb-6 pt-2">
        <div className="flex justify-between items-start mb-3">
          <div className="flex flex-col gap-1">
            <span className="inline-block px-2 py-1 bg-[#F5F0EB] text-[#3A3A3A] text-xs font-mono font-bold rounded border border-[rgba(0,0,0,0.08)] uppercase tracking-wider">
              {category}
            </span>
            {runtimeLayer && (
              <span className="inline-block px-2 py-0.5 bg-violet-50 text-violet-700 text-[10px] font-mono font-bold rounded border border-violet-200 uppercase tracking-wider">
                {runtimeLayer}
              </span>
            )}
          </div>
          <span className="text-[#1A1A1A] font-bold text-xl">${price}</span>
        </div>
        
        <Link href={`/skills/${slug}`} className="block group-hover:text-cyan-700 transition-colors">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">{title}</h3>
        </Link>
      </div>

      <div className="flex-grow space-y-6 mb-6">
        
        {/* FAILURE */}
        <div>
          <span className="block text-xs font-bold text-rose-700 uppercase tracking-widest mb-2 border-b border-rose-100 pb-1">
            Failure: What Breaks
          </span>
          <ul className="space-y-1">
            {whatBreaks.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start text-sm text-[#1A1A1A] font-semibold">
                <span className="text-rose-500 mr-2 mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* SIGNALS */}
        <div>
          <span className="block text-xs font-bold text-violet-700 uppercase tracking-widest mb-2 border-b border-violet-100 pb-1">
            Signals: What Engineers Observe
          </span>
          <ul className="space-y-2">
            {ecosystemPainQuotes.slice(0, 2).map((item, idx) => (
              <li key={idx} className="flex items-start text-sm text-zinc-600 italic font-medium">
                "{item}"
              </li>
            ))}
          </ul>
        </div>

        {/* CONTAINMENT */}
        <div className="bg-[#F5F0EB] rounded p-4 border border-[rgba(0,0,0,0.05)]">
          <span className="block text-xs font-bold text-cyan-800 uppercase tracking-widest mb-2">
            Containment: What System Installs
          </span>
          <ul className="grid grid-cols-1 gap-y-1">
            {whatSystemInstalls.slice(0, 4).map((asset, idx) => (
              <li key={idx} className="flex items-center text-xs text-[#1A1A1A] font-mono font-bold">
                <span className="text-[#0891B2] mr-1.5">+</span>
                {asset}
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="mt-auto pt-4 border-t border-[rgba(0,0,0,0.08)]">
        <Link 
          href={`/skills/${slug}`}
          className="block w-full py-3 bg-[#1A1A1A] hover:bg-[#3A3A3A] text-white font-bold rounded text-center transition-colors shadow-sm"
        >
          {ctaText || 'Deploy Governance System'}
        </Link>
      </div>
    </div>
  );
}
