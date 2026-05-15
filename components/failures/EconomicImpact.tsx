import React from 'react';

interface EconomicImpactProps {
  title: string;
  description: string;
  marginCompression: string;
}

export function EconomicImpact({ title, description, marginCompression }: EconomicImpactProps) {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-[#111827] mb-8 flex items-center gap-3">
          <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Economic Drag Analysis
        </h3>
        
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h4 className="text-xl font-bold text-[#111827] mb-3">{title}</h4>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="w-full md:w-auto bg-red-50 border border-red-100 rounded-lg p-6 text-center shrink-0">
            <div className="text-sm font-semibold tracking-wide text-red-600 uppercase mb-2">Margin Compression</div>
            <div className="text-3xl md:text-4xl font-bold text-red-700 font-mono tracking-tight">{marginCompression}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
