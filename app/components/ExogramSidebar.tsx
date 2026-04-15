"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { exogramDocs } from '@/lib/exogram-docs';

export default function ExogramSidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Group docs by category natively
    const categories = ['Architecture', 'Core Concepts', 'Integration', 'Protocols & Standards'];
    
    return (
        <>
            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center justify-between p-4 border-b border-zinc-400 bg-white sticky top-16 z-40">
                <span className="text-sm font-semibold font-bold text-zinc-950 uppercase tracking-wider">Docs Menu</span>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 text-zinc-900 hover:text-zinc-900"
                >
                    {isOpen ? 'Close' : 'Menu'}
                </button>
            </div>

            {/* Sidebar */}
            <aside className={`
                fixed md:sticky top-[120px] left-0 h-[calc(100vh-120px)] w-full md:w-64
                bg-white/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none
                border-r border-zinc-400 overflow-y-auto pb-20 z-30 transition-transform duration-300
                ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                <nav className="p-6 space-y-8">
                    {/* Index Link */}
                    <div>
                        <Link 
                            href="/exogram/docs" 
                            className={`text-sm font-semibold transition-colors ${pathname === '/exogram/docs' ? 'text-purple-900 font-extrabold font-semibold' : 'text-zinc-950 hover:text-zinc-900'}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Documentation Home
                        </Link>
                    </div>

                    {/* Category Groups */}
                    {categories.map(category => (
                        <div key={category} className="space-y-3">
                            <h4 className="text-xs font-bold font-medium font-mono font-bold text-zinc-950 font-bold uppercase tracking-widest">{category}</h4>
                            <ul className="space-y-2">
                                {exogramDocs.filter(doc => doc.category === category).map(doc => {
                                    const isActive = pathname === `/exogram/docs/${doc.slug}`;
                                    return (
                                        <li key={doc.slug}>
                                            <Link 
                                                href={`/exogram/docs/${doc.slug}`}
                                                className={`block text-sm font-semibold transition-colors border-l-2 pl-3 py-1 ${
                                                    isActive 
                                                        ? 'border-purple-500 text-purple-900 font-extrabold font-semibold font-medium bg-purple-500/5' 
                                                        : 'border-zinc-400 text-zinc-900 hover:text-zinc-950 font-bold hover:border-zinc-500'
                                                }`}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {doc.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>
        </>
    );
}
