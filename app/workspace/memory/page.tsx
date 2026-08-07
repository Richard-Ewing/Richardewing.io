"use client";

import React, { useState } from 'react';
import WorkspaceHeader from '../../../components/workspace/WorkspaceHeader';
import { EnterpriseMemoryStore, MemoryEntry } from '../../../lib/memory/enterpriseMemoryStore';
import { Database, Search, Filter, Calendar, Tag, FileText, Lock } from 'lucide-react';

const categories = ['All', 'Meeting', 'Policy', 'Architecture', 'Budget', 'Project', 'Incident', 'Question', 'Presentation', 'Memo', 'Roadmap', 'Task', 'Approval'];

export default function EnterpriseMemoryWorkspacePage() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [filterTag, setFilterTag] = useState('');

  const entries = EnterpriseMemoryStore.getMemoryEntries(selectedCat, filterTag || undefined);

  return (
    <div className="min-h-screen bg-zinc-50 pt-20 pb-16">
      <WorkspaceHeader
        title="Enterprise Memory Workspace"
        subtitle="Persistent searchable repository for executive decisions, architecture RFCs, meetings, and audit logs."
        badge="Product 9 • Memory OS"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* Category Filters */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
          <span className="text-xs font-mono text-cyan-700 font-bold uppercase tracking-wider block mb-3">
            Taxonomy Filter
          </span>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-zinc-900 text-white border-zinc-900 font-bold'
                    : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Memory Ledger Entries */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
            <div>
              <span className="text-xs font-mono text-cyan-700 font-bold uppercase">Immutable Log Ledger</span>
              <h2 className="text-xl font-grotesk font-bold text-zinc-900">Enterprise Memory Entries</h2>
            </div>
            <span className="text-xs font-mono text-zinc-500">{entries.length} Entries Returned</span>
          </div>

          <div className="space-y-4">
            {entries.map(entry => (
              <div key={entry.id} className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="px-2.5 py-0.5 rounded bg-cyan-100 text-cyan-800 font-bold uppercase text-[10px]">
                      {entry.category}
                    </span>
                    <span className="text-zinc-500">{new Date(entry.timestamp).toLocaleDateString()}</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">Author: <strong className="text-zinc-900">{entry.author}</strong></span>
                </div>

                <h3 className="text-base font-grotesk font-bold text-zinc-900">{entry.title}</h3>
                <p className="text-xs font-mono text-zinc-600 leading-relaxed">{entry.summary}</p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-200/60">
                  {entry.tags.map(t => (
                    <span key={t} className="text-[10px] font-mono text-zinc-500 bg-zinc-200/70 px-2 py-0.5 rounded">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
