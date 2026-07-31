"use client";

import React, { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

export default function CiteThisPage({ title, author, date, url }: { title: string, author: string, date: string, url: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const formattedDate = new Date(date);
  const year = formattedDate.getFullYear();
  const monthDay = formattedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  
  const surname = author.split(' ').pop();
  const firstInitial = author.charAt(0);
  const citation = `${surname}, ${firstInitial}. (${year}, ${monthDay}). ${title}. Richard Ewing. ${url}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-zinc-300 rounded-xl overflow-hidden shadow-sm my-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-zinc-50 hover:bg-zinc-100 transition-colors text-left"
      >
        <span className="font-bold text-zinc-900 font-mono text-sm uppercase tracking-widest">Cite This Page</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-zinc-500" /> : <ChevronDown className="w-5 h-5 text-zinc-500" />}
      </button>
      
      {isOpen && (
        <div className="px-6 py-5 border-t border-zinc-200">
          <p className="text-xs text-zinc-600 mb-3 font-medium">APA Format</p>
          <div className="bg-zinc-100 p-4 rounded-lg relative group">
            <p className="text-sm font-mono text-zinc-800 break-all pr-10">{citation}</p>
            <button 
              onClick={copyToClipboard}
              className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-950 transition-colors cursor-pointer"
              title="Copy to clipboard"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
