import React from 'react';
import Link from 'next/link';

interface RemediationAsset {
  title: string;
  url: string;
}

interface RemediationBlockProps {
  governanceResponse: string;
  exogramMapping: string;
  assets: RemediationAsset[];
}

export function RemediationBlock({ governanceResponse, exogramMapping, assets }: RemediationBlockProps) {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-12 font-serif text-center">
          Institutional Remediation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 bg-[#FAFAFA] border border-gray-200 rounded-xl">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Governance Response</div>
            <p className="text-gray-800 text-lg leading-relaxed">{governanceResponse}</p>
          </div>
          <div className="p-8 bg-[#111827] text-white border border-gray-800 rounded-xl flex flex-col justify-center relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10">
              <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 relative z-10">Exogram Inevitability Mapping</div>
            <p className="text-2xl font-serif text-[#F9FAFB] relative z-10">{exogramMapping}</p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Deployable Operational Assets</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {assets.map((asset, idx) => (
              <Link 
                key={idx} 
                href={asset.url}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#111827] text-white rounded-lg font-medium tracking-wide hover:bg-gray-800 transition-colors group"
              >
                <span>Download {asset.title}</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
