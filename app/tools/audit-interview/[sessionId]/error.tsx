'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Audit Session Error:', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-white text-zinc-950 flex flex-col items-center justify-center p-4 font-mono">
            <div className="bg-zinc-50 border border-zinc-200 border border-red-900/50 p-8 rounded-xl max-w-md w-full text-center">
                <div className="w-12 h-12 bg-red-50/20 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500 text-2xl">
                    ⚠️
                </div>
                <h2 className="text-xl font-bold mb-2">Protocol Malfunction</h2>
                <p className="text-zinc-950 font-bold text-sm font-semibold mb-6">
                    A critical error occurred while rendering the scenario artifact.<br />
                    Details: {error.message || 'Unknown Error'}
                </p>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => reset()}
                        className="bg-[#238636] hover:bg-[#2ea043] text-zinc-950 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest font-bold transition-colors"
                    >
                        Try Again
                    </button>
                    <button
                        onClick={() => window.location.href = '/tools/audit-interview'}
                        className="bg-[#30363d] hover:bg-[#3c444d] text-zinc-950 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest font-bold transition-colors"
                    >
                        Abort
                    </button>
                </div>
            </div>
        </div>
    );
}
