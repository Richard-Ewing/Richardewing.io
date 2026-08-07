"use client";

import React, { useState } from 'react';
import WorkspaceHeader from '../../../components/workspace/WorkspaceHeader';
import { EnterpriseSearchEngine, SearchResultItem } from '../../../lib/search/enterpriseSearchEngine';
import { Search, Sparkles, ArrowRight, Database, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const categories = ['All', 'Contract', 'License', 'Repository', 'Usage', 'Meeting', 'Decision', 'Policy', 'Roadmap', 'Project', 'Cost', 'Approval', 'Question'];

export default function UniversalSearchWorkspacePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const results = EnterpriseSearchEngine.query(searchTerm, selectedCategory);

  return (
    <div className="min-h-screen bg-zinc-50 pt-20 pb-16">
      <WorkspaceHeader
        title="Enterprise Search Workspace"
        subtitle="Universal search box across all enterprise operational entities, artifacts, and decisions."
        badge="Product 10 • Search OS"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* Single Search Cursor Box */}
        <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 shadow-2xl space-y-6">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Universal Enterprise Search
          </div>

          <div className="relative">
            <Search className="w-6 h-6 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search contracts, licenses, repos, meetings, budgets, policies..."
              className="w-full bg-zinc-950 border border-zinc-700 text-white rounded-xl pl-13 pr-4 py-4 font-mono text-sm placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 font-bold'
                    : 'bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results Display */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
            <div>
              <span className="text-xs font-mono text-cyan-700 font-bold uppercase">Search Index Results</span>
              <h2 className="text-xl font-grotesk font-bold text-zinc-900">
                {results.length} Executable Entities Found
              </h2>
            </div>
            {searchTerm && (
              <span className="text-xs font-mono text-zinc-500">Query: "{searchTerm}"</span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map(item => (
              <div key={item.id} className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-cyan-100 text-cyan-800">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">{item.updatedAt}</span>
                  </div>

                  <h3 className="text-base font-grotesk font-bold text-zinc-900">{item.title}</h3>
                  <p className="text-xs font-mono text-zinc-600 mt-1">{item.summary}</p>
                </div>

                <Link
                  href={item.url}
                  className="pt-3 border-t border-zinc-200/80 text-xs font-mono text-cyan-700 font-bold flex items-center justify-between hover:underline"
                >
                  Navigate to Workspace <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
