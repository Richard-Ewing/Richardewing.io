import React from 'react';

interface SymptomGridProps {
  symptoms: string[];
  causes: string[];
}

export function SymptomGrid({ symptoms, causes }: SymptomGridProps) {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Symptoms */}
        <div>
          <h3 className="text-2xl font-semibold text-[#111827] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center font-bold">!</span>
            Observed Symptoms
          </h3>
          <div className="space-y-4">
            {symptoms.map((symptom, idx) => (
              <div key={idx} className="p-5 bg-white border border-gray-200 shadow-sm rounded-lg flex items-start gap-4">
                <svg className="w-6 h-6 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="text-gray-700 leading-relaxed">{symptom}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Causes */}
        <div>
          <h3 className="text-2xl font-semibold text-[#111827] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded bg-gray-200 text-gray-700 flex items-center justify-center font-bold">?</span>
            Structural Causes
          </h3>
          <div className="space-y-4">
            {causes.map((cause, idx) => (
              <div key={idx} className="p-5 bg-white border border-gray-200 shadow-sm rounded-lg flex items-start gap-4">
                <svg className="w-6 h-6 text-gray-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <p className="text-gray-700 leading-relaxed">{cause}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
