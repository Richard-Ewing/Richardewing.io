"use client";

import React from 'react';
import Link from 'next/link';
import { allSeoLinks, SeoLink } from '@/lib/seo-links';

interface RelatedContentProps {
    currentSlug: string;
    type: 'guide' | 'comparison';
    count?: number;
}

export default function RelatedContent({ currentSlug, type, count = 3 }: RelatedContentProps) {
    // Deterministic pseudo-random selection based primarily on string hashing of the current page slug
    // Assures hydrating identically across client and server.
    const deterministicSelect = (arr: SeoLink[], current: string, limit: number) => {
        let hash = 0;
        for (let i = 0; i < current.length; i++) {
            hash = current.charCodeAt(i) + ((hash << 5) - hash);
        }
        
        const targetType = arr.filter(item => item.slug !== current);
        
        // Slightly bias towards the opposite type to cross-pollinate, but ensure deterministic pull
        const seedValue = Math.abs(hash);
        const selected = [];
        
        for (let i = 0; i < limit && targetType.length > 0; i++) {
            const index = (seedValue + i * 13) % targetType.length;
            selected.push(targetType[index]);
            targetType.splice(index, 1);
        }
        
        return selected;
    };

    const related = deterministicSelect(allSeoLinks, currentSlug, count);

    if (related.length === 0) return null;

    return (
        <div className="mt-16 pt-12 border-t border-zinc-200">
            <h2 className="text-xl font-bold font-grotesk text-zinc-950 mb-6">
                Keep exploring
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map(item => (
                    <Link 
                        key={item.slug} 
                        href={`/${item.type}s/${item.slug}`}
                        className="group p-5 rounded-xl border border-zinc-200 bg-white hover:bg-white/5 transition-all"
                    >
                        <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-2 block">
                            {item.type}
                        </span>
                        <h3 className="text-sm font-bold text-zinc-950 leading-snug group-hover:text-cyan-400 transition-colors">
                            {item.title}
                        </h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}
