import React from 'react';
import Link from 'next/link';

interface GovernanceSystemCardProps {
  title: string;
  category: string;
  failureSolved: string;
  description: string;
  difficulty: string;
  assetCount: number;
  runtimeRelevance: string;
  enterpriseRelevance: string;
  exogramMapping: string;
  price: number;
  checkoutUrl: string;
  assetsList: string[];
}

export default function GovernanceSystemCard({
  title,
  category,
  failureSolved,
  description,
  difficulty,
  assetCount,
  runtimeRelevance,
  enterpriseRelevance,
  exogramMapping,
  price,
  checkoutUrl,
  assetsList
}: GovernanceSystemCardProps) {
  return (
    <div className="card flex flex-col h-full bg-[#FFFFFF] border border-[rgba(0,0,0,0.1)] shadow-sm hover:shadow-lg transition-all relative overflow-hidden group">
      {/* Top Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] to-[#0891B2] opacity-80 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="mb-6 pt-2">
        <div className="flex justify-between items-start mb-3">
          <span className="inline-block px-2 py-1 bg-[#F5F0EB] text-[#3A3A3A] text-xs font-mono font-bold rounded border border-[rgba(0,0,0,0.08)] uppercase tracking-wider">
            {category}
          </span>
          <span className="text-[#1A1A1A] font-bold text-xl">${price}</span>
        </div>
        
        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">{title}</h3>
        <p className="text-[#4A4A4A] text-sm leading-relaxed mb-4 pb-4 border-b border-[rgba(0,0,0,0.08)]">
          {description}
        </p>
      </div>

      <div className="flex-grow space-y-4 mb-6">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="block text-xs font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">Failure Solved</span>
            <span className="text-[#1A1A1A] font-medium">{failureSolved}</span>
          </div>
          <div>
            <span className="block text-xs font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">Difficulty</span>
            <span className="text-[#1A1A1A] font-medium">{difficulty}</span>
          </div>
          <div>
            <span className="block text-xs font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">Runtime Relevance</span>
            <span className="text-[#1A1A1A] font-medium">{runtimeRelevance}</span>
          </div>
          <div>
            <span className="block text-xs font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">Enterprise Relevance</span>
            <span className="text-[#1A1A1A] font-medium">{enterpriseRelevance}</span>
          </div>
        </div>

        <div className="bg-[#F5F0EB] rounded p-3 border border-[rgba(0,0,0,0.05)]">
          <span className="block text-xs font-bold text-[#6B6B6B] uppercase tracking-wider mb-2">
            Includes ({assetCount} Assets)
          </span>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
            {assetsList.map((asset, idx) => (
              <li key={idx} className="flex items-center text-xs text-[#3A3A3A] font-mono">
                <span className="text-[#0891B2] mr-1.5 font-bold">-</span>
                {asset}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2">
          <span className="block text-xs font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">Exogram Mapping</span>
          <div className="flex items-center text-sm font-mono text-[#1A1A1A] bg-[rgba(124,58,237,0.03)] border border-[rgba(124,58,237,0.15)] rounded px-2 py-1.5">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] mr-2"></span>
            {exogramMapping}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-[rgba(0,0,0,0.08)]">
        <Link 
          href={checkoutUrl}
          className="block w-full py-3 bg-[#1A1A1A] hover:bg-[#3A3A3A] text-white font-bold rounded text-center transition-colors shadow-sm"
        >
          Deploy Governance Kit
        </Link>
      </div>
    </div>
  );
}
