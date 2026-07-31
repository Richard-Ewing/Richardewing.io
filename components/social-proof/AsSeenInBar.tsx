"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const publications = [
  { name: "CIO.com", url: "https://www.cio.com/author/richard-ewing/" },
  { name: "Built In", url: "https://builtin.com/authors/richard-ewing" },
  { name: "HackerNoon", url: "https://hackernoon.com/u/richardewing1" },
  { name: "Mind the Product", url: "https://www.mindtheproduct.com/profile/richard-ewing" },
  { name: "Amazon Author", url: "https://www.amazon.com/author/richardewing" },
  { name: "LinkedIn", url: "https://linkedin.com/in/richard-ewing-mba" }
];

export default function AsSeenInBar() {
  return (
    <section className="py-8 bg-[#F5F0EB]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-6">Published In</h3>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {publications.map((pub, idx) => (
            <Link key={idx} href={pub.url} target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full border border-zinc-300 bg-white/50 text-zinc-500 hover:text-zinc-950 hover:border-zinc-400 hover:bg-white transition-all text-sm font-bold shadow-sm"
              >
                {pub.name}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
