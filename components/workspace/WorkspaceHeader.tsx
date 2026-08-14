"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import WorkspaceNav from './WorkspaceNav';
import { CustomerWorkspaceStore, CustomerOrganizationWorkspace } from '../../lib/workspace/customerWorkspace';
import { LayoutDashboard, ArrowRight, Sparkles } from 'lucide-react';

interface WorkspaceHeaderProps {
  title: string;
  subtitle: string;
  badge: string;
}

export default function WorkspaceHeader({ title, subtitle, badge }: WorkspaceHeaderProps) {
  const [workspace, setWorkspace] = useState<CustomerOrganizationWorkspace | null>(null);

  useEffect(() => {
    setWorkspace(CustomerWorkspaceStore.getWorkspace());
  }, []);

  return (
    <div className="bg-white border-b border-zinc-200">
      <WorkspaceNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-50 text-cyan-700 border border-cyan-200">
                {badge}
              </span>
              {workspace && (
                <span className="text-xs font-mono text-zinc-500">
                  {workspace.organizationName} • {workspace.subscriptionTier}
                </span>
              )}
            </div>
            <h1 className="text-3xl font-grotesk font-bold text-zinc-900">{title}</h1>
            <p className="text-xs font-mono text-zinc-600 mt-1">{subtitle}</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/workspace"
              className="px-3.5 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-zinc-600" /> Executive OS Dashboard
            </Link>
            <Link
              href="/workspace/search"
              className="px-3.5 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" /> Enterprise Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
