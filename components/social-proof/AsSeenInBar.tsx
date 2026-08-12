"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const publications = [
  { name: "CIO.com", tag: "Enterprise IT Leadership", url: "https://www.cio.com/author/richard-ewing/", icon: "CIO" },
  { name: "Built In", tag: "Tech Industry Insights", url: "https://builtin.com/authors/richard-ewing", icon: "BUILTIN" },
  { name: "HackerNoon", tag: "Software Architecture", url: "https://hackernoon.com/u/richardewing1", icon: "HN" },
  { name: "Mind the Product", tag: "Product Strategy", url: "https://www.mindtheproduct.com/profile/richard-ewing", icon: "MTP" },
  { name: "Amazon Author", tag: "Published Books", url: "https://www.amazon.com/author/richardewing", icon: "AMZN" },
  { name: "LinkedIn Top Voice", tag: "11K+ Executive Network", url: "https://linkedin.com/in/richard-ewing-mba", icon: "LI" }
];

export default function AsSeenInBar() {
  return (
    <section className="py-10 bg-gradient-to-b from-[#F5F0EB] to-white border-y border-zinc-200/60">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-2">As Published In & Cited By</h3>
        <p className="text-xs text-zinc-600 font-medium mb-6">Read by 1,400+ C-suite executives, financial analysts, and technology leadership</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {publications.map((pub, idx) => (
            <Link key={idx} href={pub.url} target="_blank" rel="noopener noreferrer" className="group">
              <motion.div
                whileHover={{ y: -2 }}
                className="h-full p-3 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md hover:border-purple-300 transition-all flex flex-col items-center justify-center text-center"
              >
                <span className="font-extrabold text-sm text-zinc-800 group-hover:text-purple-700 font-grotesk tracking-tight">
                  {pub.name}
                </span>
                <span className="text-[10px] text-zinc-500 font-medium mt-0.5">
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
