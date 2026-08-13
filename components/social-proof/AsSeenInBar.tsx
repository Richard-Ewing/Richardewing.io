"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

function CioLogo() {
  return (
    <svg viewBox="0 0 100 30" className="h-7 w-auto max-w-[100px] transition-transform duration-200 group-hover:scale-105" aria-label="CIO.com logo">
      <text x="2" y="23" fontFamily="Inter, system-ui, sans-serif" fontWeight="900" fontSize="24" letterSpacing="-1" className="fill-zinc-900 dark:fill-white">
        CIO
      </text>
      <circle cx="56" cy="20" r="3.5" className="fill-red-600 dark:fill-red-500" />
      <text x="63" y="23" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" fontSize="13" className="fill-zinc-700 dark:fill-zinc-300">
        .com
      </text>
    </svg>
  );
}

function BuiltInLogo() {
  return (
    <svg viewBox="0 0 100 30" className="h-7 w-auto max-w-[100px] transition-transform duration-200 group-hover:scale-105" aria-label="Built In logo">
      <rect x="2" y="6" width="14" height="14" rx="2.5" className="fill-purple-600 dark:fill-purple-400" />
      <rect x="7" y="11" width="14" height="14" rx="2.5" className="fill-cyan-600 dark:fill-cyan-400 opacity-80 mix-blend-multiply dark:mix-blend-screen" />
      <text x="26" y="21" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="15" letterSpacing="-0.5" className="fill-zinc-900 dark:fill-white">
        built in
      </text>
    </svg>
  );
}

function HackerNoonLogo() {
  return (
    <svg viewBox="0 0 120 30" className="h-7 w-auto max-w-[110px] transition-transform duration-200 group-hover:scale-105" aria-label="HackerNoon logo">
      <rect x="2" y="6" width="18" height="16" rx="2" className="fill-[#00E676]" />
      <rect x="5" y="9" width="4" height="4" className="fill-zinc-950" />
      <rect x="11" y="9" width="4" height="4" className="fill-zinc-950" />
      <rect x="5" y="16" width="10" height="2" className="fill-zinc-950" />
      <text x="25" y="20" fontFamily="Space Grotesk, JetBrains Mono, monospace" fontWeight="700" fontSize="11" letterSpacing="0.5" className="fill-zinc-900 dark:fill-white">
        HACKERNOON
      </text>
    </svg>
  );
}

function MindTheProductLogo() {
  return (
    <svg viewBox="0 0 120 30" className="h-7 w-auto max-w-[110px] transition-transform duration-200 group-hover:scale-105" aria-label="Mind the Product logo">
      <circle cx="12" cy="15" r="9" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-cyan-600 dark:text-cyan-400" />
      <circle cx="12" cy="15" r="4" fill="currentColor" className="text-purple-600 dark:text-purple-400" />
      <text x="26" y="14" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="9" letterSpacing="0.5" className="fill-zinc-900 dark:fill-white">
        MIND THE
      </text>
      <text x="26" y="23" fontFamily="Inter, system-ui, sans-serif" fontWeight="900" fontSize="10" letterSpacing="0.5" className="fill-purple-700 dark:fill-purple-300">
        PRODUCT
      </text>
    </svg>
  );
}

function AmazonAuthorLogo() {
  return (
    <svg viewBox="0 0 110 30" className="h-7 w-auto max-w-[100px] transition-transform duration-200 group-hover:scale-105" aria-label="Amazon Author logo">
      <text x="2" y="18" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.5" className="fill-zinc-900 dark:fill-white">
        amazon
      </text>
      <text x="68" y="18" fontFamily="Inter, system-ui, sans-serif" fontWeight="500" fontSize="10" className="fill-amber-600 dark:fill-amber-400">
        author
      </text>
      <path d="M 6 22 Q 32 29 58 22" fill="none" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M 54 20 L 59 22 L 56 25" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInTopVoiceLogo() {
  return (
    <svg viewBox="0 0 120 30" className="h-7 w-auto max-w-[110px] transition-transform duration-200 group-hover:scale-105" aria-label="LinkedIn Top Voice logo">
      <rect x="2" y="6" width="18" height="18" rx="3.5" fill="#0A66C2" />
      <text x="6" y="20" fill="white" fontFamily="Inter, system-ui, sans-serif" fontWeight="900" fontSize="13">in</text>
      <path d="M28 15l1.6 3.2 3.6.5-2.6 2.5.6 3.5-3.2-1.7-3.2 1.7.6-3.5-2.6-2.5 3.6-.5z" className="fill-amber-500 dark:fill-amber-400" />
      <text x="37" y="20" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="11" letterSpacing="-0.2" className="fill-zinc-900 dark:fill-white">
        Top Voice
      </text>
    </svg>
  );
}

interface Publication {
  name: string;
  tag: string;
  url: string;
  LogoComponent: React.ComponentType;
}

const publications: Publication[] = [
  { name: "CIO.com", tag: "Enterprise IT Leadership", url: "https://www.cio.com/author/richard-ewing/", LogoComponent: CioLogo },
  { name: "Built In", tag: "Tech Industry Insights", url: "https://builtin.com/authors/richard-ewing", LogoComponent: BuiltInLogo },
  { name: "HackerNoon", tag: "Software Architecture", url: "https://hackernoon.com/u/richardewing1", LogoComponent: HackerNoonLogo },
  { name: "Mind the Product", tag: "Product Strategy", url: "https://www.mindtheproduct.com/profile/richard-ewing", LogoComponent: MindTheProductLogo },
  { name: "Amazon Author", tag: "Published Books", url: "https://www.amazon.com/author/richardewing", LogoComponent: AmazonAuthorLogo },
  { name: "LinkedIn Top Voice", tag: "11K+ Executive Network", url: "https://linkedin.com/in/richard-ewing-mba", LogoComponent: LinkedInTopVoiceLogo }
];

export default function AsSeenInBar() {
  return (
    <section className="py-10 bg-gradient-to-b from-[#F5F0EB] via-[#FAF7F4] to-white dark:from-zinc-900 dark:via-zinc-900/90 dark:to-zinc-950 border-y border-zinc-200/80 dark:border-zinc-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2">
          As Published In & Cited By
        </h3>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium mb-6 max-w-2xl mx-auto">
          Read by 1,400+ C-suite executives, financial analysts, and technology leadership
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {publications.map((pub, idx) => (
            <Link
              key={idx}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-xl"
              aria-label={`Read Richard Ewing on ${pub.name}`}
            >
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="h-full p-4 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/80 backdrop-blur-xs shadow-xs hover:shadow-md hover:border-purple-300 dark:hover:border-purple-500/50 hover:bg-white dark:hover:bg-zinc-900 transition-all flex flex-col items-center justify-between text-center min-h-[96px]"
              >
                <div className="flex-1 flex items-center justify-center py-1">
                  <pub.LogoComponent />
                </div>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium mt-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-1">
                  {pub.tag}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

