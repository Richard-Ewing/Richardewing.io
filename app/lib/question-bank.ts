export type Role = 'engineering' | 'pm';

export interface Question {
    id: string;
    title: string;
    prompt: string;
    expected_signal: string;
    constraint?: string;
    context?: string;
    chart_type?: 'line' | 'bar' | 'bar_stacked' | 'code_snippet' | 'table_backlog';
    chart_data?: any;
}

export const QUESTION_BANK: Record<Role, Record<string, Question[]>> = {
    engineering: {
        orientation: [
            {
                id: "ENG-O1",
                title: "The Cloud Bill Spike",
                prompt: "Cloud costs increased 40% last month. Traffic is flat. No new features shipped. The CFO is threatening to freeze hiring. What is your Day 1 hypothesis, and what one dashboard do you open first?",
                expected_signal: "Constraint recognition before action",
                chart_type: "line",
                chart_data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [
                        { label: "Traffic", data: [100, 102, 98, 105, 101, 100], borderColor: "#58a6ff" },
                        { label: "Cost", data: [5000, 5200, 5100, 5300, 5200, 8400], borderColor: "#da3633" }
                    ]
                }
            },
            {
                id: "ENG-O2",
                title: "The Latency Creep",
                prompt: "Our P99 latency has drifted from 200ms to 900ms over the last quarter. We just onboarded 10 junior engineers using Copilot. What is the correlation, and how do you prove it?",
                expected_signal: "Correlation vs Causation",
                chart_type: "line",
                chart_data: {
                    labels: ["W1", "W2", "W3", "W4", "W5", "W6"],
                    datasets: [
                        { label: "P99 Latency (ms)", data: [210, 230, 280, 450, 700, 920], borderColor: "#da3633" },
                        { label: "PRs Merged", data: [15, 18, 25, 40, 60, 85], borderColor: "#58a6ff" }
                    ]
                }
            },
            {
                id: "ENG-O3",
                title: "The Deployment Freeze",
                prompt: "Deploy times have gone from 15 minutes to 4 hours. The team says 'tests are slow.' You are not allowed to buy more CI/CD runners. How do you fix the velocity constraint?",
                expected_signal: "Process optimization under constraint",
                chart_type: "bar",
                chart_data: {
                    labels: ["Jan", "Feb", "Mar", "Apr"],
                    datasets: [{ label: "Deploy Time (min)", data: [15, 22, 90, 240], backgroundColor: "#da3633" }]
                }
            },
            {
                id: "ENG-O4",
                title: "The 'Works on My Machine'",
                prompt: "Production incidents are up 300%. The team swears 'it worked in staging.' Staging data is 1% of Prod volume. What is the systemic failure here?",
                expected_signal: "Environment parity awareness",
                chart_type: "bar_stacked",
                chart_data: {
                    labels: ["Q1", "Q2", "Q3", "Q4"],
                    datasets: [
                        { label: "Staging Incidents", data: [2, 1, 3, 2], backgroundColor: "#238636" },
                        { label: "Prod Incidents", data: [5, 4, 12, 38], backgroundColor: "#da3633" }
                    ]
                }
            },
            {
                id: "ENG-O5",
                title: "The Vendor Lock-In",
                prompt: "We are spending $50k/month on a proprietary vector database. We use 5% of its features. The contract renews in 30 days. Do we migrate or pay? How do you decide?",
                expected_signal: "Build vs Buy Economics",
                chart_type: "bar",
                chart_data: {
                    labels: ["Licensing", "Hosting", "Support", "Features Used"],
                    datasets: [{ label: "Cost Allocation", data: [45000, 3000, 2000, 5], backgroundColor: "#da3633" }]
                }
            },
            {
                id: "ENG-O6",
                title: "The Zombie Services",
                prompt: "We have 40 microservices for 12 engineers. 15 of them haven't been deployed in 6 months but are consuming compute. The original authors have left. What is your containment strategy?",
                expected_signal: "Operational efficiency",
                chart_type: "line",
                chart_data: {
                    labels: ["2022", "2023", "2024", "2025"],
                    datasets: [
                        { label: "Engineers", data: [8, 10, 14, 12], borderColor: "#58a6ff" },
                        { label: "Microservices", data: [12, 25, 45, 40], borderColor: "#da3633" }
                    ]
                }
            }
        ],
        audit: [
            {
                id: "ENG-A1",
                title: "The N+1 Hallucination",
                prompt: "This AI-generated GraphQL resolver passes all functional tests. However, it will bankrupt us at scale. Find the loop that triggers exponential DB reads.",
                expected_signal: "Verification depth",
                chart_type: "code_snippet",
                chart_data: {
                    code: `async function getRides(users) {\n  return await Promise.all(users.map(async user => {\n    const rides = await db.query(\n      "SELECT * FROM rides WHERE user_id = ?",\n      [user.id]\n    );\n    return { ...user, rides };\n  }));\n}`
                }
            },
            {
                id: "ENG-A2",
                title: "The Memory Leak",
                prompt: "This data-processing script runs perfectly on a 10MB CSV. It will crash the container on a 5GB CSV. Identify the line where the AI failed to stream the data.",
                expected_signal: "Performance scaling intuition",
                chart_type: "code_snippet",
                chart_data: {
                    code: `def process_data(file_blob):\n    # Download entire blob to memory\n    data = file_blob.download_as_string()\n    lines = data.split('\\n')\n    \n    results = []\n    for line in lines:\n        results.append(transform(line))\n        \n    return results`
                }
            },
            {
                id: "ENG-A3",
                title: "The Security Blindspot",
                prompt: "Copilot wrote this authentication middleware. It validates the JWT correctly. But it misses a critical 'rate limit' check that leaves us open to a brute-force attack. Find it.",
                expected_signal: "Security constraint awareness",
                chart_type: "code_snippet",
                chart_data: {
                    code: `app.post('/login', async (req, res) => {\n  const { user, pass } = req.body;\n  // AI: Validate credentials\n  const valid = await checkCreds(user, pass);\n  if (!valid) return res.status(401).send();\n  \n  const token = signJwt(user);\n  res.json({ token });\n});`
                }
            },
            {
                id: "ENG-A4",
                title: "The Dependency Bomb",
                prompt: "The AI imported a library to solve a simple math problem. That library is 40MB and hasn't been updated since 2019. Why is this a capital risk, not just a technical one?",
                expected_signal: "Supply chain risk",
                chart_type: "code_snippet",
                chart_data: {
                    code: `package.json:\n{\n  "dependencies": {\n    "left-pad": "^1.3.0",\n    "math-legacy-solver": "^0.1.2", // Last updated: 4 years ago\n    "react": "^18.2.0"\n  }\n}`
                }
            },
            {
                id: "ENG-A5",
                title: "The Retry Storm",
                prompt: "This service retries failed requests. The AI implemented a 'while loop' for retries without exponential backoff. Explain what happens to our downstream dependencies during a partial outage.",
                expected_signal: "Distributed systems failure modes",
                chart_type: "code_snippet",
                chart_data: {
                    code: `while (attempts < 5) {\n  try {\n    response = await api.call();\n    break;\n  } catch (e) {\n    console.log("Retrying...");\n    // AI: Retry immediately for speed\n    attempts++;\n  }\n}`
                }
            },
            {
                id: "ENG-A6",
                title: "The Costly Query",
                prompt: "This SQL query returns the correct user data. But it scans the entire 'Events' table because the AI forgot to index the timestamp. Fix the economics of the query, not the logic.",
                expected_signal: "Database performance economics",
                chart_type: "code_snippet",
                chart_data: {
                    code: `SELECT * FROM events\nWHERE created_at > NOW() - INTERVAL '7 days'\nORDER BY created_at DESC;\n\n-- Schema:\n-- id: uuid (PK)\n-- event_data: jsonb\n-- created_at: timestamp (No Index)`
                }
            }
        ],
        defense: [
            {
                id: "ENG-D1",
                title: "Speed vs. Stability",
                prompt: "We can ship the AI feature for the conference demo (Revenue opportunity), but we have to bypass the security review (Reputation risk). You own the decision. Yes or No?",
                expected_signal: "Risk ownership",
                chart_type: "bar",
                chart_data: {
                    labels: ["Rev Potential", "Reputation Value"],
                    datasets: [{ label: "Value ($)", data: [50000, 5000000], backgroundColor: ["#238636", "#da3633"] }]
                }
            },
            {
                id: "ENG-D2",
                title: "The Rewrite",
                prompt: "The legacy billing system is slowing us down. A rewrite will take 6 months of zero feature work. Sales says we will miss the yearly target if we pause. Do you Rewrite or Refactor? Defend the P&L impact.",
                expected_signal: "Strategic technical debt management",
                chart_type: "line",
                chart_data: {
                    labels: ["Q1", "Q2", "Q3", "Q4"],
                    datasets: [
                        { label: "Velocity (Refactor)", data: [50, 60, 70, 80], borderColor: "#58a6ff" },
                        { label: "Velocity (Rewrite)", data: [0, 0, 10, 150], borderColor: "#da3633" }
                    ]
                }
            },
            {
                id: "ENG-D3",
                title: "The SaaS Buy",
                prompt: "The team wants to build a custom CMS because 'it's easy with AI.' You know maintenance will kill them in Year 2. A vendor costs $50k/year. Convince the CTO to spend the cash (CapEx) instead of the time (OpEx).",
                expected_signal: "Buy vs Build articulation",
                chart_type: "bar_stacked",
                chart_data: {
                    labels: ["Year 1", "Year 2", "Year 3"],
                    datasets: [
                        { label: "Buy Cost", data: [50, 50, 50], backgroundColor: "#238636" },
                        { label: "Build Cost (Maint)", data: [20, 150, 200], backgroundColor: "#da3633" }
                    ]
                }
            },
            {
                id: "ENG-D4",
                title: "The Layoff Shield",
                prompt: "You have to cut cloud spend by 20% to save a headcount. What do you turn off: The staging environment (slower dev speed) or the data warehouse retention (less analytics history)?",
                expected_signal: "Crisis resource management",
                chart_type: "bar",
                chart_data: {
                    labels: ["Staging", "Warehouse", "Eng Salary"],
                    datasets: [{ label: "Cost Savings ($)", data: [3000, 2500, 12000], backgroundColor: "#da3633" }]
                }
            },
            {
                id: "ENG-D5",
                title: "The Technical Bankruptcy",
                prompt: "We are technically insolvent. We spend 100% of time on bugs. To fix it, we must fire our lowest-performing customer to reduce support load. Which customer segment do you fire?",
                expected_signal: "Ruthless prioritization",
                chart_type: "bar",
                chart_data: {
                    labels: ["Enterprise", "Mid-Market", "SMB"],
                    datasets: [
                        { label: "Revenue", data: [80, 15, 5], backgroundColor: "#238636" },
                        { label: "Support Vol", data: [20, 30, 50], backgroundColor: "#da3633" }
                    ]
                }
            }
        ]
    },
    pm: {
        diagnosis: [
            {
                id: "PM-D1",
                title: "The Vanity Growth",
                prompt: "Signups are at an all-time high. Revenue is flat. Support costs are doubling. Diagnose the disease in our business model.",
                expected_signal: "Unit economics literacy",
                chart_type: "line",
                chart_data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                    datasets: [
                        { label: "Signups", data: [1000, 2000, 5000, 10000, 20000], borderColor: "#58a6ff" },
                        { label: "Revenue", data: [5000, 5100, 5050, 5200, 5150], borderColor: "#da3633" }
                    ]
                }
            },
            {
                id: "PM-D2",
                title: "The Churn Spike",
                prompt: "We shipped 10 new features this quarter. NPS dropped 15 points. Enterprise churn is rising. What did we break?",
                expected_signal: "Feature bloat recognition",
                chart_type: "line",
                chart_data: {
                    labels: ["Q1", "Q2", "Q3", "Q4"],
                    datasets: [
                        { label: "Features", data: [5, 8, 15, 25], borderColor: "#58a6ff" },
                        { label: "NPS", data: [60, 58, 45, 30], borderColor: "#da3633" }
                    ]
                }
            },
            {
                id: "PM-D3",
                title: "The CAC Trap",
                prompt: "Our LTV is $5,000. Our CAC just hit $6,000 because we are bidding on competitive keywords. Marketing wants to keep spending to hit the 'Growth Goal.' Stop them using math.",
                expected_signal: "LTV:CAC discipline",
                chart_type: "bar",
                chart_data: {
                    labels: ["Jan", "Feb", "Mar", "Apr"],
                    datasets: [
                        { label: "LTV", data: [5000, 5000, 5000, 5000], backgroundColor: "#238636" },
                        { label: "CAC", data: [2000, 3500, 4800, 6000], backgroundColor: "#da3633" }
                    ]
                }
            },
            {
                id: "PM-D4",
                title: "The Zombie Freemium",
                prompt: "We have 100,000 free users. Conversion to paid is 0.5%. Server costs for free users are consuming 20% of our runway. What is the hard decision you need to make?",
                expected_signal: "Freemium economics",
                chart_type: "bar",
                chart_data: {
                    labels: ["Paid Rev", "Free Costs"],
                    datasets: [{ label: "Monthly ($)", data: [10000, 25000], backgroundColor: ["#238636", "#da3633"] }]
                }
            },
            {
                id: "PM-D5",
                title: "The Upsell Fail",
                prompt: "We launched an 'Enterprise Tier.' 90% of customers downgraded to it because it was cheaper than their usage-based plan. How did we misprice this?",
                expected_signal: "Pricing strategy alignment",
                chart_type: "bar",
                chart_data: {
                    labels: ["Usage Rev", "Tier Rev"],
                    datasets: [
                        { label: "Pre-Launch", data: [100, 0], backgroundColor: "#58a6ff" },
                        { label: "Post-Launch", data: [10, 60], backgroundColor: "#da3633" }
                    ]
                }
            }
        ],
        funeral: [
            {
                id: "PM-F1",
                title: "The CEO's Pet Project",
                prompt: "The CEO wants 'Blockchain' integration. It has zero customer demand. It will consume 20% of engineering. Kill it. Write the memo explaining the 'Opportunity Cost' to the CEO.",
                expected_signal: "Executive management",
                chart_type: "table_backlog",
                chart_data: {
                    items: [
                        { name: "Blockchain Init", sponsor: "CEO", roi: "-50%", cost: "20%" },
                        { name: "SSO Fix", sponsor: "Customers", roi: "+200%", cost: "5%" },
                        { name: "Mobile App", sponsor: "Product", roi: "+150%", cost: "15%" }
                    ]
                }
            },
            {
                id: "PM-F2",
                title: "The Feature Bloat",
                prompt: "We have 5 'nice to have' features that are used by 2% of users but generate 50% of support tickets. Deprecate them. Handle the angry tweet from the one vocal user.",
                expected_signal: "Product hygiene",
                chart_type: "bar_stacked",
                chart_data: {
                    labels: ["Feature A", "Feature B", "Feature C"],
                    datasets: [
                        { label: "Usage %", data: [2, 1, 3], backgroundColor: "#238636" },
                        { label: "Tickets %", data: [15, 20, 15], backgroundColor: "#da3633" }
                    ]
                }
            },
            {
                id: "PM-F3",
                title: "The Platform Migration",
                prompt: "Engineering needs 3 months to migrate the database or the site goes down. You have to kill the 'Q4 Launch' to fund it. Sales has already sold the Q4 launch. Write the email to the Sales VP.",
                expected_signal: "Stakeholder conflict resolution",
                chart_type: "line",
                chart_data: {
                    labels: ["Q3", "Q4 (Proj)", "Q1 (Proj)"],
                    datasets: [
                        { label: "Uptime w/o Mig", data: [99.9, 85.0, 50.0], borderColor: "#da3633" },
                        { label: "Sales Goal", data: [100, 150, 200], borderColor: "#58a6ff" }
                    ]
                }
            },
            {
                id: "PM-F4",
                title: "The Market Exit",
                prompt: "We are losing money in the Europe market due to GDPR compliance costs. It's 10% of revenue but 30% of legal/compliance spend. Do we exit Europe? Justify the revenue loss.",
                expected_signal: "Geographic P&L analysis",
                chart_type: "bar",
                chart_data: {
                    labels: ["US", "EU", "APAC"],
                    datasets: [
                        { label: "Revenue", data: [70, 10, 20], backgroundColor: "#238636" },
                        { label: "Cost", data: [40, 25, 10], backgroundColor: "#da3633" }
                    ]
                }
            },
            {
                id: "PM-F5",
                title: "The Legacy Customer",
                prompt: "Our oldest customer is on a legacy version that requires a dedicated server. They pay $10k/year. It costs $15k/year to maintain that server. Fire the customer.",
                expected_signal: "Firing bad revenue",
                chart_type: "bar",
                chart_data: {
                    labels: ["Legacy Rev", "Legacy Cost"],
                    datasets: [{ label: "Annual ($)", data: [10000, 15000], backgroundColor: ["#58a6ff", "#da3633"] }]
                }
            }
        ],
        board: [
            {
                id: "PM-B1",
                title: "The R&D Audit",
                prompt: "The Board says we spend too much on R&D for too little growth. Prove that our recent 'invisible' investments (platform stability) are actually creating future Asset Value.",
                expected_signal: "Asset value articulation",
                chart_type: "line",
                chart_data: {
                    labels: ["2023", "2024", "2025 (Proj)"],
                    datasets: [
                        { label: "R&D Spend", data: [10, 15, 20], borderColor: "#58a6ff" },
                        { label: "Growth Rate", data: [50, 40, 80], borderColor: "#238636" }
                    ]
                }
            },
            {
                id: "PM-B2",
                title: "The AI Hype",
                prompt: "Investors want us to add 'GenAI' to the product to boost the valuation. You know it will destroy our gross margins (API costs). Defend your refusal to build it.",
                expected_signal: "Margin protection",
                chart_type: "bar",
                chart_data: {
                    labels: ["Current Margin", "AI Margin"],
                    datasets: [{ label: "Gross Margin %", data: [80, 45], backgroundColor: ["#238636", "#da3633"] }]
                }
            },
            {
                id: "PM-B3",
                title: "The Pricing Increase",
                prompt: "You raised prices 20%. Churn went up 5%. The Board is panicked. Explain why this is actually good for the long-term health of the business (shedding bad revenue).",
                expected_signal: "Pricing power defense",
                chart_type: "line",
                chart_data: {
                    labels: ["Pre-Price", "Post-Price"],
                    datasets: [
                        { label: "Customer Count", data: [1000, 950], borderColor: "#da3633" },
                        { label: "Total Revenue", data: [100000, 114000], borderColor: "#238636" }
                    ]
                }
            },
            {
                id: "PM-B4",
                title: "The Headcount Freeze",
                prompt: "You asked for 5 more PMs. The CFO said no. Explain how you will achieve the same revenue target with your existing team by cutting scope, not adding people.",
                expected_signal: "Efficiency under constraint",
                chart_type: "bar",
                chart_data: {
                    labels: ["Target Rev", "Current Headcount"],
                    datasets: [{ label: "Value", data: [5000000, 5], backgroundColor: "#58a6ff" }]
                }
            },
            {
                id: "PM-B5",
                title: "The Buy vs. Build",
                prompt: "We want to acquire a smaller competitor for $5M instead of building their feature set. Convince the CFO that the acquisition is cheaper than the 'Maintenance Liability' of building it ourselves.",
                expected_signal: "M&A economics",
                chart_type: "bar_stacked",
                chart_data: {
                    labels: ["Year 1", "Year 2"],
                    datasets: [
                        { label: "Acquisition Cost", data: [5000000, 0], backgroundColor: "#58a6ff" },
                        { label: "Build + Maint Cost", data: [2000000, 2000000], backgroundColor: "#da3633" }
                    ]
                }
            }
        ]
    }
};

export const SCENARIOS = {
    engineering: {
        phases: ["orientation", "audit", "defense"],
        time_limits: { orientation: 300, audit: 1200, defense: 600 },
        rubric: [
            "verification_depth",
            "architectural_reasoning",
            "economic_awareness",
            "ai_interrogation"
        ]
    },
    pm: {
        phases: ["diagnosis", "funeral", "board"],
        time_limits: { diagnosis: 600, funeral: 900, board: 600 },
        rubric: [
            "willingness_to_disappoint",
            "constraint_management",
            "second_order_thinking",
            "economic_reality"
        ]
    }
};
