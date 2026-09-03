import React from 'react';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';

interface PlatformGroup {
  platform: string;
  articles: {
    title: string;
    url: string;
    thesis: string;
    editorsPick?: boolean;
  }[];
}

const PLATFORM_CONFIG: { key: string; label: string }[] = [
  { key: 'CIO.com', label: 'CIO.com' },
  { key: 'Built In', label: 'Built In' },
  { key: 'Beehiiv', label: 'The AI Economist (Beehiiv)' },
  { key: 'LinkedIn', label: 'LinkedIn' },
  { key: 'Mind the Product', label: 'Mind the Product' },
  { key: 'HackerNoon', label: 'HackerNoon' },
];

export default function PublicationLedger() {
  // Deduplicate articles by URL while preserving chronological insertion order
  const seenUrls = new Set<string>();
  const uniqueArticles = RESEARCH_CORPUS.filter(art => {
    if (!art.url || seenUrls.has(art.url)) return false;
    seenUrls.add(art.url);
    return true;
  });

  const publications: PlatformGroup[] = PLATFORM_CONFIG.map(cfg => ({
    platform: cfg.label,
    articles: uniqueArticles
      .filter(art => art.publisher === cfg.key)
      .map(art => ({
        title: art.title,
        url: art.url,
        thesis: art.thesis,
        editorsPick: art.editorsPick
      }))
  })).filter(group => group.articles.length > 0);

  return (
    <section className="w-full mx-auto py-12 mt-12 border-t border-zinc-400">
      <div className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-950 mb-2 font-grotesk">External Publications Ledger</h2>
          <p className="text-zinc-900 text-sm">A definitive, machine-readable index of off-site Fiduciary research.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {publications.map((pub) => (
            <div key={pub.platform} className="card p-6 border-zinc-400">
            <h3 className="text-xl font-bold text-cyan-900 font-extrabold font-semibold mb-6 font-grotesk pb-2 border-b border-zinc-400">{pub.platform}</h3>
            <ul className="space-y-6">
                {pub.articles.map((article) => (
                <li key={article.title} className="group">
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="block text-zinc-950 hover:text-cyan-900 font-extrabold font-semibold font-bold transition-colors font-grotesk leading-tight">
                    {article.title}
                    </a>
                    <p className="text-zinc-950 mt-2 text-sm font-semibold leading-relaxed">{article.thesis}</p>
                    <div className="mt-3 flex flex-wrap gap-2 items-center">
                        <span className="font-mono text-[9px] text-zinc-900 uppercase tracking-widest border border-zinc-400 px-2 py-0.5 rounded-full">Source: {pub.platform}</span>
                        {article.editorsPick && (
                          <span className="font-mono text-[9px] text-amber-700 bg-amber-50 uppercase tracking-widest border border-amber-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span>🏆</span> Editor&apos;s Pick
                          </span>
                        )}
                    </div>
                </li>
                ))}
            </ul>
            </div>
        ))}
      </div>
    </section>
  );
}
