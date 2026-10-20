export type PageData = { slug: string; title: string; description: string };
export const pageData: PageData[] = [
  {
    "slug": "industry-briefings",
    "title": "Industry Briefings",
    "description": "Executive analysis of changes in AI economics, software margins, and technology operations across enterprise verticals."
  },
  {
    "slug": "platform-comparisons",
    "title": "Platform Comparisons",
    "description": "Compare enterprise AI, FinOps, and engineering governance platforms using financial criteria and operational trade-offs."
  },
  {
    "slug": "platform-directory",
    "title": "Platform Directory",
    "description": "A curated directory of AI unit economics, engineering efficiency, product strategy, and runtime governance platforms."
  },
  {
    "slug": "platforms",
    "title": "Platforms & Ecosystem",
    "description": "Explore sovereign tools, diagnostic engines, and runtime control platforms connected to the AI Economist research ecosystem."
  },
  {
    "slug": "post-qa-verification-career",
    "title": "Post-QA Verification Career",
    "description": "Research on deterministic verification skills, AI code auditing, and the changing unit economics of software engineering careers."
  },
  {
    "slug": "site-map",
    "title": "Complete Site Map & Directory",
    "description": "Browse the complete index of diagnostic calculators, governance frameworks, canonical concepts, research essays, and advisory hubs on RichardEwing.io."
  }
];
export const nav = [
 {label:"Research",href:"/research",children:[{label:"Research Library",href:"/research"},{label:"Publications",href:"/research/publications"},{label:"The AI Economist",href:"/blog"},{label:"Newsletter",href:"/newsletter"},{label:"Canonical Concepts",href:"/concepts"},{label:"Glossary",href:"/glossary"}]},
 {label:"Portfolio",href:"/portfolio",children:[{label:"Executive Portfolio",href:"/portfolio"},{label:"Case Studies",href:"/case-studies"},{label:"Exogram",href:"/exogram"},{label:"CareerWin",href:"/careerwin"}]},
 {label:"Diagnostics",href:"/tools",children:[{label:"Reality Check",href:"/reality-check"},{label:"All Diagnostics",href:"/tools"},{label:"AI ROI Calculator",href:"/roi-calculator"},{label:"Product Debt Index",href:"/tools/pdi"},{label:"AI Unit Economics",href:"/ai-unit-economics"}]},
 {label:"Advisory",href:"/advisory",children:[{label:"Executive Advisory",href:"/advisory"},{label:"Engagement Paths",href:"/engagement-paths"},{label:"Pricing & Sprints",href:"/pricing-sprints"},{label:"Speaking",href:"/speaking"}]},
 {label:"Explore",href:"/resources",children:[{label:"Resources",href:"/resources"},{label:"Framework",href:"/framework"},{label:"Operating Kit",href:"/operating-kit"},{label:"Book",href:"/ai-economist-book"},{label:"About",href:"/about"},{label:"Contact",href:"/contact"}]}
];
export const siteUrl = "https://www.richardewing.io";
