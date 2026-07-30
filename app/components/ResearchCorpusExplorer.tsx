'use client';

import { useState, useMemo } from 'react';
import { RESEARCH_CORPUS, RESEARCH_DOMAINS } from '@/app/lib/research-corpus';

export default function ResearchCorpusExplorer() {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [selectedPublisher, setSelectedPublisher] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const publishers = ['All', 'CIO.com', 'Built In', 'Beehiiv', 'LinkedIn', 'Mind the Product', 'HackerNoon'];
  const types = ['All', 'Evergreen', 'Executable', 'Time-Sensitive'];

  const filteredArticles = useMemo(() => {
    return RESEARCH_CORPUS.filter((art) => {
      if (selectedDomain !== 'All' && art.domain !== selectedDomain) return false;
      if (selectedPublisher !== 'All' && art.publisher !== selectedPublisher) return false;
      if (selectedType !== 'All' && art.type !== selectedType) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          art.title.toLowerCase().includes(q) ||
          art.thesis.toLowerCase().includes(q) ||
          art.domain.toLowerCase().includes(q) ||
          art.publisher.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedDomain, selectedPublisher, selectedType, searchQuery]);

  return (
    <div className="w-full space-y-8">
      {/* Search & Filters Controls Container */}
      <div className="bg-white border border-zinc-300 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold font-grotesk text-zinc-950 tracking-tight">
              Research Corpus Explorer
            </h2>
            <p className="text-sm text-zinc-600 font-medium">
              Filtering {filteredArticles.length} of {RESEARCH_CORPUS.length} published works across 6 Knowledge Domains
            </p>
          </div>
          {/* Search Bar */}
          <div className="relative min-w-[280px]">
            <input
              type="text"
              placeholder="Search by topic, thesis, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-cyan-600 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-zinc-400 hover:text-zinc-700 text-xs font-mono font-bold"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Knowledge Domains Filter */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
            Knowledge Domain
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedDomain('All')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                selectedDomain === 'All'
                  ? 'bg-cyan-900 text-white font-bold shadow-sm'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200'
              }`}
            >
              All Domains ({RESEARCH_CORPUS.length})
            </button>
            {RESEARCH_DOMAINS.map((domain) => {
              const count = RESEARCH_CORPUS.filter((a) => a.domain === domain).length;
              return (
                <button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                    selectedDomain === domain
                      ? 'bg-cyan-900 text-white font-bold shadow-sm'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200'
                  }`}
                >
                  {domain} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary Filters: Publisher & Knowledge Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-zinc-200">
          {/* Publisher */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-wider">
              Publisher
            </label>
            <div className="flex flex-wrap gap-1.5">
              {publishers.map((pub) => (
                <button
                  key={pub}
                  onClick={() => setSelectedPublisher(pub)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                    selectedPublisher === pub
                      ? 'bg-zinc-900 text-white font-bold'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                  }`}
                >
                  {pub}
                </button>
              ))}
            </div>
          </div>

          {/* Knowledge Type */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-wider">
              Knowledge Type
            </label>
            <div className="flex flex-wrap gap-1.5">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                    selectedType === t
                      ? 'bg-emerald-900 text-white font-bold'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArticles.map((art) => (
          <div
            key={art.id}
            className="bg-white border border-zinc-300 hover:border-cyan-600 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-100 text-cyan-900 border border-cyan-200">
                  {art.domain}
                </span>
                <div className="flex items-center gap-2">
                  {art.editorsPick && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300">
                      Editor's Pick
                    </span>
                  )}
                  <span className="text-xs font-mono font-bold text-zinc-500">
                    {art.publisher}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold font-grotesk text-zinc-950 group-hover:text-cyan-800 transition-colors leading-snug">
                <a href={art.url} target="_blank" rel="noopener noreferrer">
                  {art.title} ↗
                </a>
              </h3>

              {/* Thesis */}
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium">
                {art.thesis}
              </p>
            </div>

            {/* Footer Metadata */}
            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>Published: {art.publishDate}</span>
              <a
                href={art.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-cyan-800 hover:text-cyan-900 hover:underline"
              >
                Read Article ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-16 bg-white border border-zinc-300 rounded-3xl">
          <p className="text-base text-zinc-600 font-semibold">No publications match your selected filter criteria.</p>
          <button
            onClick={() => {
              setSelectedDomain('All');
              setSelectedPublisher('All');
              setSelectedType('All');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 bg-cyan-900 text-white font-mono font-bold text-xs rounded-xl hover:bg-cyan-800 transition"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
