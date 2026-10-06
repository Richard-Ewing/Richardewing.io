"use client";

import { motion } from "motion/react";
import Link from "next/link";

const papers = [
  {
    number: "01",
    type: "CIO",
    title: "Your Claude API bill is higher than your revenue",
    date: "05.21.26",
    href: "/compare/why-anthropic-bills-spike-with-tool-use",
  },
  {
    number: "02",
    type: "MODEL",
    title: "The Inference Dividend Model",
    date: "08.13.26",
    href: "/concepts/inference-dividend-model",
  },
  {
    number: "03",
    type: "CIO",
    title: "GitHub Copilot is generating more code than your team can review",
    date: "06.10.26",
    href: "/compare/why-copilot-didnt-reduce-engineering-headcount",
  },
  {
    number: "04",
    type: "STRATEGY",
    title: "Why your CFO hates your agile transformation",
    date: "03.12.26",
    href: "/compare/vibe-coding-vs-agile",
  },
];

export default function ResearchStream() {
  return (
    <section className="research-section living-border">
      <div className="container">
        <div className="section-eyebrow">02 / RESEARCH</div>

        <div className="research-heading">
          <h2>
            What I am
            <br />
            <span>learning.</span>
          </h2>

          <Link href="/research">All research ↗</Link>
        </div>

        <div className="research-stream">
          {papers.map((paper) => (
            <motion.a
              href={paper.href}
              className="research-item"
              key={paper.number}
              whileHover="hover"
              initial="rest"
            >
              <span className="research-index">{paper.number}</span>
              <span className="research-type">{paper.type}</span>

              <motion.h3
                variants={{
                  rest: { x: 0 },
                  hover: { x: 12 },
                }}
              >
                {paper.title}
              </motion.h3>

              <span className="research-date">{paper.date}</span>

              <motion.span
                className="research-go"
                variants={{
                  rest: { opacity: 0.3, x: 0 },
                  hover: { opacity: 1, x: 5 },
                }}
              >
                ↗
              </motion.span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
