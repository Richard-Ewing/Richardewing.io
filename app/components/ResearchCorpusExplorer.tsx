'use client';

import { useState, useMemo } from 'react';
import { RESEARCH_CORPUS, RESEARCH_DOMAINS, CorpusArticle } from '@/app/lib/research-corpus';

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
      {/* Search & Filters Controls */}
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">Research Corpus Explorer</h2>
            <p className="text-sm text-zinc-400">
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
              className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-zinc-500 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Knowledge Domains Filter */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
            Knowledge Domain
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedDomain('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedDomain === 'All'
                  ? 'bg-cyan-500 text-zinc-950 font-bold'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
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
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                    selectedDomain === domain
                      ? 'bg-cyan-500 text-zinc-950 font-bold'
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}
                >
                  {domain} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary Filters: Publisher & Knowledge Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-zinc-800/80">
          <div className="space-y-2">
            <label className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
              Publisher / Source
            </label>
            <div className="flex flex-wrap gap-1.5">
              {publishers.map((pub) => (
                <button
                  key={pub}
                  onClick={() => setSelectedPublisher(pub)}
                  className={`px-2.5 py-1 rounded-md text-xs transition ${
                    selectedPublisher === pub
                      ? 'bg-zinc-200 text-zinc-950 font-bold'
                      : 'bg-zinc-950 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'
                  }`}
                >
                  {pub}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
              Knowledge Type
            </label>
            <div className="flex flex-wrap gap-1.5">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-2.5 py-1 rounded-md text-xs transition ${
                    selectedType === type
                      ? 'bg-zinc-200 text-zinc-950 font-bold'
                      : 'bg-zinc-950 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredArticles.length === 0 ? (
          <div className="col-span-full p-12 text-center bg-zinc-900/50 border border-zinc-800 rounded-2xl">
            <p className="text-zinc-400 text-sm">No research entries match your selected filter criteria.</p>
            <button
              onClick={() => {
                setSelectedDomain('All');
                setSelectedPublisher('All');
                setSelectedType('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-cyan-500 text-zinc-950 rounded-lg text-xs font-bold hover:bg-cyan-400 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                {/* Badges Bar */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                    {article.domain}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-zinc-800 text-zinc-300">
                    {article.publisher}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold ${
                      article.type === 'Executable'
                        ? 'bg-amber-950 text-amber-400 border border-amber-800/40'
                        : article.type === 'Evergreen'
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/40'
                        : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    {article.type}
                  </span>
                  {article.editorsPick && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-950 text-purple-300 border border-purple-800/50">
                      ★ Editor&apos;s Pick
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </h3>

                {/* Executive Thesis */}
                <p className="text-sm text-zinc-400 leading-relaxed">{article.thesis}</p>
              </div>

              {/* Link Footer */}
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs text-zinc-500 font-mono">Source: {article.publisher}</span>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  Read Publication ↗
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
