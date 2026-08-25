import React from 'react';

const publications = [
  {
    platform: "CIO.com",
    articles: [
      {
        title: "The Hidden Inflation of AI: Why Model Collapse Is a Business Risk",
        url: "https://www.cio.com/article/4151360/the-hidden-inflation-of-ai-why-model-collapse-is-a-business-risk.html", 
        thesis: "Examines the degrading economics and operational risks of recursive AI model training."
      },
      {
        title: "Why Your CFO Hates Your Agile Transformation",
        url: "https://www.cio.com/article/4143737/why-your-cfo-hates-your-agile-transformation.html", 
        thesis: "Details the hidden financial costs of velocity-centric Agile and their impact on CFO-level valuation."
      },
      {
        title: "Hey, Senior PMs: Shipping Faster Won’t Get You Promoted",
        url: "https://www.cio.com/article/4128139/hey-senior-pms-shipping-faster-wont-get-you-promoted.html", 
        thesis: "Shifts the product management focus from feature output to margin contribution and P&L ownership."
      }
    ]
  },
  {
    platform: "Built In",
    articles: [
      {
        title: "How Does Meta’s Muse Code Compare to Other AI Coding Tools?",
        url: "https://builtin.com/articles/meta-muse-code-comparison",
        thesis: "A technical evaluation of Meta Muse Code against Cursor, Claude Code, and Google Antigravity, examining multi-agent concurrency, Git worktree isolation vs. runtime environment collisions, and autonomous closed-loop verification."
      },
      {
        title: "I Used AI to Build My Startup. Here’s What I Learned. (Cursor vs. Google Antigravity)",
        url: "https://builtin.com/articles/ai-coding-tools-practical-evaluation",
        thesis: "I used both Cursor and Google Antigravity to build a business. Six months of late-night error messages taught me why unconstrained AI coding breaks complex codebases and how static root rules build reliable software."
      },
      {
        title: "Most AI Projects Just Burn Cash. Here's How to Make Them Profitable.",
        url: "https://builtin.com/articles/make-ai-projects-profitable", 
        thesis: "An expert analysis on AI unit economics, the 'Evergreen Ratio', and calculating the AI Volatility Tax to stop bleeding cash on inferencing."
      },
      {
        title: "In the Vibe Coding Era, What Does a Software Engineer Even Do?",
        url: "https://builtin.com/articles/vibe-coding-era-software-engineering-role", 
        thesis: "An expert analysis of the changing nature of software development work and the 4 Laws of Probabilistic Software Development.",
        editorsPick: true
      },
      {
        title: "AI Agents Won't Crash the Economy. Bad Governance Might.",
        url: "https://builtin.com/articles/agentic-ai-scientific-economic-analysis", 
        thesis: "An expert analysis of the AI science and economics behind the Citrini Research report on agentic AI."
      },
      {
        title: "Real Innovation Requires Deleting Code, Not Writing It",
        url: "https://builtin.com/articles/innovation-requires-deleting-code", 
        thesis: "Advocates for deleting zombie features to reclaim engineering capacity and improve R&D capital efficiency."
      },
      {
        title: "When AI Writes the Code, What Skills Are Employers Hiring For?",
        url: "https://builtin.com/articles/audit-interview-scorecard", 
        thesis: "An expert discussion of how to conduct better software engineering interviews in the age of AI using the 4 Dimensions of Engineering Judgment scorecard.",
        editorsPick: true
      },
      {
        title: "Is Anthropic’s ‘Cheating’ Scandal the End of the Coding Interview?",
        url: "https://builtin.com/articles/reimagining-coding-interview", 
        thesis: "AI can generate code. The scarce skill is catching what AI gets wrong. This article introduces the Audit Interview.",
        editorsPick: true
      },
      {
        title: "I Built an Incredible AI Product That Nobody Wanted. Here’s Why.",
        url: "https://builtin.com/editors-picks?i=08d8cc66-3dd4-4057-8e19-d79a11e32f55&utm_campaign=content_newsletter&utm_medium=email&utm_source=ses", 
        thesis: "A forensic breakdown of product-market fit failures in the AI space.",
        editorsPick: true
      },
      {
        title: "Fable 5 vs. GPT-5.6 Sol: Which Model Is Better?",
        url: "https://builtin.com/articles/fable-5-vs-gpt-56-sol",
        thesis: "I put each model through a series of everyday tasks. Here is what I learned about what they are good at - comparing frontier reasoning paradigms through enterprise cost-per-task efficiency.",
        editorsPick: true
      }
    ]
  },
  {
    platform: "Mind the Product",
    articles: [
      {
        title: "The 3 Financial Metrics Every PM Needs on Their Scorecard",
        url: "https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/", 
        thesis: "A deep dive into product P&L ownership, margin contribution, and capital efficiency for product leaders."
      },
      {
        title: "Community Post of the Week: The 3 Financial Metrics Every PM Needs on Their Scorecard",
        url: "https://go.pendo.io/index.php/email/emailWebview?email=MTg1LUxRVy0zNzAAAAGg-VozHnUlZENwwi1xI-qJJbTNChJkRXl5leffTwCm8dM8Szj9-Zw5fwHnDr4rvyyGNoXC4ecigJ1mXOEnZc8rX4ZDBtm2v95QhQ", 
        thesis: "Official Mind the Product Newsletter Feature showcasing the unit economics scorecard framework to thousands of global product managers."
      }
    ]
  },
  {
    platform: "HackerNoon",
    articles: [
      {
        title: "The Best AI Product I Ever Led Had Zero Customers",
        url: "https://hackernoon.com/the-best-ai-product-i-ever-led-had-zero-customers", 
        thesis: "A forensic breakdown of product-market fit failures and technical excellence in the AI space."
      }
    ]
  },
  {
    platform: "The AI Economist (Beehiiv)",
    articles: [
      {
        title: "The AI Coding Tool Battle Is Moving Somewhere More Important Than Code",
        url: "https://theaieconomist.beehiiv.com/p/the-ai-coding-tool-battle-is-moving-somewhere-more-important-than-code",
        thesis: "As foundation models become hot-swappable commodities, developer tool competition shifts to the surrounding execution harness: environment pre-provisioning, recovery mechanisms, and making failure cheap."
      },
      {
        title: "How Context Engines Power AI Career Intelligence",
        url: "https://theaieconomist.beehiiv.com/p/how-context-engines-power-ai-career-intelligence",
        thesis: "Explains how CareerWin.ai uses structured schemas, metadata retention, and relational databases to replace stateless prompt wrappers with a dynamic career operating system."
      },
      {
        title: "How to Reduce LLM API Token Costs in Production",
        url: "https://theaieconomist.beehiiv.com/p/how-to-reduce-llm-api-token-costs-in-production",
        thesis: "Details the Inference Dividend Model, semantic caching, and edge validation to protect enterprise SaaS gross margins."
      }
    ]
  },
  {
    platform: "LinkedIn",
    articles: [
      {
        title: "Most Companies Shouldn’t Be Using Autonomous Coding Agents Yet",
        url: "https://www.linkedin.com/pulse/most-companies-should-using-autonomous-coding-agents-yet-ewing-lanhc/",
        thesis: "Autonomous coding agents dropped into shared environments create investigation and cleanup bottlenecks that erase developer productivity. Teams must establish boundaries, verification loops, and failure recovery before scaling autonomy."
      },
      {
        title: "The AI Economist: Leading Product Strategy When Build Costs Approach Zero",
        url: "https://www.linkedin.com/pulse/ai-economist-leading-product-strategy-when-build-costs-richard-ewing-x5bic",
        thesis: "When generative AI collapses the cost of writing software toward zero, developer bandwidth ceases to be the constraint. The bottleneck shifts to managing uncertainty, evaluating system architecture efficiency, and preserving unit margins."
      },
      {
        title: "Why Static Resumes Are Dead: The Shift to Career Operating Systems",
        url: "https://www.linkedin.com/pulse/why-static-resumes-dead-shift-career-operating-systems-richard-ewing-iui1c",
        thesis: "Static PDF resumes fail in an AI-native hiring market. The future belongs to dynamic Career Operating Systems (like CareerWin.ai) that transform flat career claims into live, verified talent intelligence."
      },
      {
        title: "How to Reduce LLM Costs in Production: The Inference Dividend Model",
        url: "https://www.linkedin.com/pulse/how-reduce-llm-costs-production-inference-dividend-model-ewing-nwtgc/",
        thesis: "Introduces the Inference Dividend Model and empirical telemetry demonstrating 50%+ reduction in API runtime spend."
      }
    ]
  }
];

export default function PublicationLedger() {
  return (
    <section className="w-full mx-auto py-12 mt-12 border-t border-zinc-400">
      <div className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-950 mb-2 font-grotesk">External Publications Ledger</h2>
          <p className="text-zinc-900 text-sm">A definitive, machine-readable index of off-site Fiduciary research.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {publications.map((pub) => (
            <div key={pub.platform} className="card p-6 border-zinc-400">
            <h3 className="text-xl font-bold text-cyan-900 font-extrabold font-semibold mb-6 font-grotesk pb-2 border-b border-zinc-400">{pub.platform}</h3>
            <ul className="space-y-6">
                {pub.articles.map((article) => (
                <li key={article.title} className="group">
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="block text-zinc-950 hover:text-cyan-900 font-extrabold font-semibold font-bold transition-colors font-grotesk leading-tight">
                    {article.title}
                    </a>
                    <p className="text-zinc-950 mt-2 text-sm font-semibold leading-relaxed">{article.thesis}</p>
                    <div className="mt-3 flex flex-wrap gap-2 items-center">
                        <span className="font-mono text-[9px] text-zinc-900 uppercase tracking-widest border border-zinc-400 px-2 py-0.5 rounded-full">Source: {pub.platform}</span>
                        {article.editorsPick && (
                          <span className="font-mono text-[9px] text-amber-700 bg-amber-50 uppercase tracking-widest border border-amber-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span>🏆</span> Editor&apos;s Pick
                          </span>
                        )}
                    </div>
                </li>
                ))}
            </ul>
            </div>
        ))}
      </div>
    </section>
  );
}
