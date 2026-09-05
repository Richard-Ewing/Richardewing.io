'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ColorSwatch {
  name: string;
  role: string;
  hex: string;
  rgb: string;
  textColor: string;
}

export default function BrandAssetsKit() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [copiedBio, setCopiedBio] = useState<string | null>(null);

  const colors: ColorSwatch[] = [
    { name: 'Neon Cyan', role: 'Primary Logic & Identity Flare', hex: '#00F0FF', rgb: '0, 240, 255', textColor: '#09090B' },
    { name: 'Royal Purple', role: 'AI Runtime & Exogram Boundary', hex: '#8B5CF6', rgb: '139, 92, 246', textColor: '#FAFAFA' },
    { name: 'Vivid Magenta', role: 'Gradient Flare & Acceleration', hex: '#EC4899', rgb: '236, 72, 153', textColor: '#FAFAFA' },
    { name: 'Emerald Accent', role: 'Capital Growth & Verified State', hex: '#10B981', rgb: '16, 185, 129', textColor: '#09090B' },
    { name: 'Obsidian Dark', role: 'Primary Contrast & Terminal Base', hex: '#09090B', rgb: '9, 9, 11', textColor: '#FAFAFA' },
    { name: 'Alabaster Light', role: 'Light Theme Editorial Base', hex: '#F5F0EB', rgb: '245, 240, 235', textColor: '#09090B' },
  ];

  const bios = {
    short: 'Richard Ewing is an AI Economist and Founder helping technology executives audit R&D capital efficiency and govern enterprise AI systems.',
    medium: 'Richard Ewing is an AI Economist and founder specializing in R&D Capital Audits, technical debt diagnostics, and AI unit economics. His frameworks quantify engineering insolvency risk and optimize technology investments for enterprise leadership.',
    long: 'Richard Ewing is an AI Economist and advisor to CTOs, CFOs, and private equity operating partners. He developed the Product Debt Index (PDI), Revenue Per Engineer (APER) benchmarks, and AI Unit Economics models used to audit engineering productivity, detect technical debt accumulation, and govern production AI deployments.',
  };

  const copyText = (text: string, identifier: string, type: 'color' | 'bio') => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === 'color') {
        setCopiedColor(identifier);
        setTimeout(() => setCopiedColor(null), 2500);
      } else {
        setCopiedBio(identifier);
        setTimeout(() => setCopiedBio(null), 2500);
      }
    }
  };

  return (
    <section id="brand-assets" className="scroll-mt-24 mb-20">
      {/* Section Header */}
      <div className="border-t border-zinc-300 pt-16 mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-900 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              Official Media Kit &amp; Brand Assets
            </div>
            <h2 className="text-3xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-3">
              Brand Resources &amp; Assets
            </h2>
            <p className="text-base sm:text-lg text-zinc-800 max-w-2xl leading-relaxed">
              Official vector logos, high-resolution insignia marks, color tokens, typography specifications, founder media, and boilerplate copy for partner directories, co-marketing materials, and event announcements.
            </p>
          </div>

          <a
            href="/assets/brand/richard-ewing-brand-kit.zip"
            download="richard-ewing-brand-kit.zip"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-grotesk font-bold text-sm shadow-md hover:shadow-lg transition-all self-start md:self-auto whitespace-nowrap"
          >
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Brand Kit (.zip)
          </a>
        </div>
      </div>

      {/* Asset Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Brand Mark Card (Favicon Emblem) */}
        <div className="bg-white border border-zinc-300 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
          <div className="p-4 bg-zinc-950 border-b border-zinc-200 flex items-center justify-center min-h-[140px]">
            <img
              src="/assets/brand/richard-ewing-mark.png"
              alt="Richard Ewing Official Brand Emblem"
              className="w-20 h-20 object-contain drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]"
            />
          </div>
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-widest mb-1">Official Favicon &amp; Emblem</div>
              <h3 className="text-base font-bold font-grotesk text-zinc-950 mb-2">Insignia Mark (Hi-Res)</h3>
              <p className="text-xs text-zinc-600 font-semibold mb-4">Official glowing cyan/magenta ribbon flame emblem for app icons, favicons, and partner badges.</p>
            </div>
            <div className="space-y-2">
              <a
                href="/assets/brand/richard-ewing-mark.png"
                download="richard-ewing-mark.png"
                className="block text-center py-2 px-3 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white font-mono text-xs font-bold transition-colors"
              >
                Download PNG (1024px) ↓
              </a>
              <a
                href="/assets/brand/richard-ewing-mark.svg"
                download="richard-ewing-mark.svg"
                className="block text-center py-2 px-3 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-mono text-xs font-bold transition-colors"
              >
                Download SVG ↓
              </a>
            </div>
          </div>
        </div>

        {/* Dark Logo Card */}
        <div className="bg-white border border-zinc-300 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
          <div className="p-4 bg-zinc-950 border-b border-zinc-200 flex items-center justify-center min-h-[140px]">
            <img
              src="/assets/brand/richard-ewing-logo-dark.svg"
              alt="Richard Ewing Dark Vector Logo"
              className="max-h-20 w-auto object-contain"
            />
          </div>
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1">Primary Logotype</div>
              <h3 className="text-base font-bold font-grotesk text-zinc-950 mb-2">Dark Mode Vector</h3>
              <p className="text-xs text-zinc-600 font-semibold mb-4">Scalable SVG logo with insignia mark optimized for dark backgrounds and headers.</p>
            </div>
            <a
              href="/assets/brand/richard-ewing-logo-dark.svg"
              download="richard-ewing-logo-dark.svg"
              className="block text-center py-2.5 px-4 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-mono text-xs font-bold transition-colors"
            >
              Download SVG ↓
            </a>
          </div>
        </div>

        {/* Light Logo Card */}
        <div className="bg-white border border-zinc-300 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
          <div className="p-4 bg-zinc-100 border-b border-zinc-200 flex items-center justify-center min-h-[140px]">
            <img
              src="/assets/brand/richard-ewing-logo-light.svg"
              alt="Richard Ewing Light Vector Logo"
              className="max-h-20 w-auto object-contain"
            />
          </div>
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1">Secondary Logotype</div>
              <h3 className="text-base font-bold font-grotesk text-zinc-950 mb-2">Light Mode Vector</h3>
              <p className="text-xs text-zinc-600 font-semibold mb-4">Scalable SVG logo for print, white papers, and clean white application interfaces.</p>
            </div>
            <a
              href="/assets/brand/richard-ewing-logo-light.svg"
              download="richard-ewing-logo-light.svg"
              className="block text-center py-2.5 px-4 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-mono text-xs font-bold transition-colors"
            >
              Download SVG ↓
            </a>
          </div>
        </div>

        {/* Headshot Card */}
        <div className="bg-white border border-zinc-300 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
          <div className="relative h-[140px] bg-zinc-200 border-b border-zinc-200 overflow-hidden">
            <Image
              src="/assets/headshot.jpg"
              alt="Richard Ewing Official Executive Portrait"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1">Speaker &amp; Bio Media</div>
              <h3 className="text-base font-bold font-grotesk text-zinc-950 mb-2">Executive Portrait</h3>
              <p className="text-xs text-zinc-600 font-semibold mb-4">High-resolution portrait photo for keynote introductions and editorial author cards.</p>
            </div>
            <a
              href="/assets/headshot.jpg"
              download="richard-ewing-headshot.jpg"
              className="block text-center py-2.5 px-4 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-mono text-xs font-bold transition-colors"
            >
              Download Photo ↓
            </a>
          </div>
        </div>
      </div>

      {/* Color Tokens & Typography Specs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Color Palette */}
        <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold font-grotesk text-zinc-950">Official Color Tokens</h3>
            <span className="text-xs font-mono font-bold text-zinc-500">Click swatch to copy hex</span>
          </div>

          <div className="space-y-3">
            {colors.map((color) => {
              const isCopied = copiedColor === color.name;
              return (
                <button
                  key={color.name}
                  onClick={() => copyText(color.hex, color.name, 'color')}
                  className="w-full flex items-center justify-between p-3 rounded-xl border border-zinc-200 hover:border-zinc-400 bg-zinc-50 hover:bg-white transition-all text-left group"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-9 h-9 rounded-lg border border-black/10 shadow-xs flex items-center justify-center font-mono text-xs font-bold shrink-0"
                      style={{ backgroundColor: color.hex, color: color.textColor }}
                    >
                      {color.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-zinc-950 group-hover:text-emerald-700 transition-colors">
                        {color.name}
                      </div>
                      <div className="text-xs text-zinc-600 font-semibold">{color.role}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-zinc-800 bg-white px-2.5 py-1 rounded-md border border-zinc-200">
                      {isCopied ? '✓ Copied!' : color.hex}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Typography Specs */}
        <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold font-grotesk text-zinc-950 mb-6">Typography Architecture</h3>

            <div className="space-y-6">
              <div className="border-b border-zinc-200 pb-4">
                <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1">Display &amp; Headings</div>
                <div className="text-2xl font-bold font-grotesk text-zinc-950">Space Grotesk</div>
                <p className="text-xs text-zinc-600 font-semibold mt-1">Used for major headlines, metric callouts, and section titles.</p>
              </div>

              <div className="border-b border-zinc-200 pb-4">
                <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1">Body Text &amp; Prose</div>
                <div className="text-xl font-medium font-sans text-zinc-900">Inter / System Sans</div>
                <p className="text-xs text-zinc-600 font-semibold mt-1">Used for long-form essays, executive briefs, and diagnostic descriptions.</p>
              </div>

              <div>
                <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1">Code &amp; Metrics</div>
                <div className="text-lg font-mono font-bold text-zinc-900">JetBrains Mono</div>
                <p className="text-xs text-zinc-600 font-semibold mt-1">Used for mathematical formulas, PDI indices, SQL schemas, and JSON APIs.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center justify-between text-xs font-mono text-zinc-600 font-bold">
            <span>License: Open Editorial &amp; Partner Use</span>
            <a href="/assets/brand/brand-guidelines.json" target="_blank" className="text-cyan-800 hover:underline">
              View JSON Spec →
            </a>
          </div>
        </div>
      </div>

      {/* Official Boilerplates & Bios */}
      <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
        <h3 className="text-xl font-bold font-grotesk text-zinc-950 mb-2">Official Company &amp; Speaker Bios</h3>
        <p className="text-sm text-zinc-700 font-semibold mb-6">
          Pre-approved descriptions for conference booklets, partner directory profiles, and co-branded press releases.
        </p>

        <div className="space-y-6">
          {/* Short Bio */}
          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-wider">
                Short Bio (25 Words)  -  Directory Listings
              </span>
              <button
                onClick={() => copyText(bios.short, 'short', 'bio')}
                className="text-xs font-mono font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                {copiedBio === 'short' ? '✓ Copied!' : 'Copy Bio'}
              </button>
            </div>
            <p className="text-sm text-zinc-900 leading-relaxed font-medium">
              &quot;{bios.short}&quot;
            </p>
          </div>

          {/* Medium Bio */}
          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-wider">
                Medium Bio (50 Words)  -  Webinars &amp; Panels
              </span>
              <button
                onClick={() => copyText(bios.medium, 'medium', 'bio')}
                className="text-xs font-mono font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                {copiedBio === 'medium' ? '✓ Copied!' : 'Copy Bio'}
              </button>
            </div>
            <p className="text-sm text-zinc-900 leading-relaxed font-medium">
              &quot;{bios.medium}&quot;
            </p>
          </div>

          {/* Comprehensive Bio */}
          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-wider">
                Comprehensive Bio (100 Words)  -  Keynotes &amp; Advisory Profiles
              </span>
              <button
                onClick={() => copyText(bios.long, 'long', 'bio')}
                className="text-xs font-mono font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                {copiedBio === 'long' ? '✓ Copied!' : 'Copy Bio'}
              </button>
            </div>
            <p className="text-sm text-zinc-900 leading-relaxed font-medium">
              &quot;{bios.long}&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
