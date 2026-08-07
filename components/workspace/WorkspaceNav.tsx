"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Target, 
  ShieldCheck, 
  Building2, 
  Code2, 
  BarChart3, 
  Presentation, 
  DollarSign, 
  Inbox, 
  Database, 
  Search 
} from 'lucide-react';

export const workspaceLinks = [
  { name: 'Organization', href: '/workspace/organization', icon: Building2, tag: 'OS' },
  { name: 'AI Strategy', href: '/workspace/strategy', icon: Target, tag: 'Product 1' },
  { name: 'Governance', href: '/workspace/governance', icon: ShieldCheck, tag: 'Product 2' },
  { name: 'Vendors', href: '/workspace/vendors', icon: Building2, tag: 'Product 3' },
  { name: 'Engineering', href: '/workspace/engineering', icon: Code2, tag: 'Product 4' },
  { name: 'Products', href: '/workspace/products', icon: BarChart3, tag: 'Product 5' },
  { name: 'Board', href: '/workspace/board', icon: Presentation, tag: 'Product 6' },
  { name: 'Finance', href: '/workspace/finance', icon: DollarSign, tag: 'Product 7' },
  { name: 'Advisory', href: '/workspace/advisory', icon: Inbox, tag: 'Product 8' },
  { name: 'Memory', href: '/workspace/memory', icon: Database, tag: 'Product 9' },
  { name: 'Search', href: '/workspace/search', icon: Search, tag: 'Product 10' }
];

export default function WorkspaceNav() {
  const pathname = usePathname();

  return (
    <div className="bg-zinc-900 border-b border-zinc-800 text-zinc-300 px-4 py-2 overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto flex items-center gap-1 sm:gap-2 min-w-max">
        {workspaceLinks.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                isActive
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-bold'
                  : 'hover:bg-zinc-800 text-zinc-400 hover:text-white border border-transparent'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-zinc-500'}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
