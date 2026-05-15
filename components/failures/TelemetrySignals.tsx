import React from 'react';

interface TelemetrySignal {
  metric: string;
  value: string;
  interpretation: string;
}

interface TelemetrySignalsProps {
  signals: TelemetrySignal[];
}

export function TelemetrySignals({ signals }: TelemetrySignalsProps) {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 bg-white border-y border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-[#111827] mb-8 flex items-center gap-3">
          <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Telemetry Signatures
        </h3>
        
        <div className="bg-[#111827] rounded-xl p-6 sm:p-8 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-indigo-500"></div>
          
          <div className="space-y-6">
            {signals.map((signal, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-700 pb-6 last:border-0 last:pb-0 gap-4">
                <div className="flex-1">
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-mono">Monitored Metric</div>
                  <div className="text-lg font-medium text-white">{signal.metric}</div>
                </div>
                
                <div className="flex-1">
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-mono">Trigger Threshold</div>
                  <div className="inline-flex px-3 py-1 bg-red-900/50 text-red-400 rounded text-sm font-mono border border-red-800/50">
                    {signal.value}
                  </div>
                </div>
                
                <div className="flex-1 sm:text-right">
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-mono">Interpretation</div>
                  <div className="text-sm text-gray-300">{signal.interpretation}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
