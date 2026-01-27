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
                title: "The Success Disaster",
                prompt: "Since we gave every engineer GitHub Copilot, our deployment frequency doubled. However, our AWS bill tripled and P99 latency is up 400%. The CEO calls this a 'success' because velocity is up. What is your diagnosis?",
                expected_signal: "Efficiency Collapse detection",
                chart_type: "line",
                chart_data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [
                        { label: "Deploy Frequency", data: [10, 12, 15, 25, 40, 45], borderColor: "#238636" }, // Green (Good?)
                        { label: "AWS Bill ($)", data: [5000, 5200, 6000, 8500, 12000, 15000], borderColor: "#da3633" }, // Red (Bad)
                        { label: "P99 Latency (ms)", data: [200, 210, 250, 400, 650, 800], borderColor: "#58a6ff" } // Blue
                    ]
                }
            },
            {
                id: "ENG-O2",
                title: "The Zombie Logs",
                prompt: "Our observability bill (Datadog/Splunk) is now higher than our payroll. The team says they need 'debug' logs to verify AI-generated code in production. You cannot increase the budget. What do you do?",
                expected_signal: "Sampling Strategy / Capital Allocation",
                chart_type: "bar_stacked",
                chart_data: {
                    labels: ["Payroll", "Cloud Infra", "Observability"],
                    datasets: [
                        { label: "Q1 Cost", data: [150000, 20000, 10000], backgroundColor: "#58a6ff" },
                        { label: "Q2 Cost", data: [150000, 25000, 160000], backgroundColor: "#da3633" }
                    ]
                }
            },
            {
                id: "ENG-O3",
                title: "The Dependency Trap",
                prompt: "The security dashboard shows 400 new vulnerabilities this month. The team says, 'The AI auto-imported these libraries to solve the tasks.' We don't have enough staff to patch them all. What is the constraint?",
                expected_signal: "Supply Chain Insolvency",
                chart_type: "bar",
                chart_data: {
                    labels: ["Jan", "Feb", "Mar", "Apr"],
                    datasets: [
                        { label: "Patched Vulnerabilities", data: [20, 25, 20, 22], backgroundColor: "#238636" },
                        { label: "New Ingested Vulns", data: [5, 10, 150, 400], backgroundColor: "#da3633" }
                    ]
                }
            }
        ],
        audit: [
            {
                id: "ENG-A1",
                title: "The Memory Grenade",
                prompt: "This script processes a large CSV export using file.read() and json.loads(). It runs perfectly on test data (100 rows). In production (1M rows), it triggers an OOM Kill. The AI failed to use a Generator. Fix the stability liability.",
                expected_signal: "OOM / Stability Audit",
                chart_type: "code_snippet",
                chart_data: {
                    code: `def process_large_export(file_path):\n    # Copilot: Read file and parse\n    with open(file_path, 'r') as f:\n        data = f.read()  # <--- THE TRAP\n        records = json.loads(data)\n        \n    for record in records:\n        enrich_data(record)\n        \n    return records`
                }
            },
            {
                id: "ENG-A2",
                title: "The 'Silent' N+1",
                prompt: "The AI created an N+1 Query loop. For 1,000 orders, it makes 1,001 database calls. This will DDoS our own database when traffic spikes. It’s financially negligent coding. Find it.",
                expected_signal: "Database Efficiency Audit",
                chart_type: "code_snippet",
                chart_data: {
                    code: `# Copilot: Get user names for orders\norders = Order.objects.filter(status='pending')\n\nfor order in orders:\n    # THE TRAP: Lazy load in loop\n    print(f"Processing {order.user.name}") \n    process_order(order)`
                }
            },
            {
                id: "ENG-A3",
                title: "The Hallucinated API",
                prompt: "This code will crash immediately. The AI hallucinated a library method based on naming conventions. Verify the dependency rather than assuming the AI 'knows' the documentation.",
                expected_signal: "Dependency Verification",
                chart_type: "code_snippet",
                chart_data: {
                    code: `import stripe\n\ndef get_all_charges():\n    # Copilot: Fetch all charges\n    # Does this method exist?\n    return stripe.charges.list_all(limit=100)`
                }
            }
        ],
        defense: [
            {
                id: "ENG-D1",
                title: "Rewrite vs. Refactor",
                prompt: "The monolith is slow. The team wants to stop features for 6 months to rewrite it in Go (CapEx). Sales says we miss the year if we do. Defend your choice to Refactor instead of Rewrite.",
                expected_signal: "Insolvency Defense",
                chart_type: "line",
                chart_data: {
                    labels: ["Month 1", "Month 3", "Month 6", "Month 12"],
                    datasets: [
                        { label: "Feature Velocity (Rewrite)", data: [0, 0, 0, 80], borderColor: "#da3633" },
                        { label: "Feature Velocity (Refactor)", data: [40, 50, 60, 70], borderColor: "#238636" }
                    ]
                }
            },
            {
                id: "ENG-D2",
                title: "The Security Block",
                prompt: "You blocked a launch because the AI-generated code wasn't auditable. The CEO is furious. Defend the delay: 'The cost of a 2-day delay is less than the cost of an unfixable outage.'",
                expected_signal: "Liability Defense",
                chart_type: "bar",
                chart_data: {
                    labels: ["Cost of Delay", "Cost of Breach"],
                    datasets: [{ label: "Financial Impact ($)", data: [50000, 2500000], backgroundColor: ["#58a6ff", "#da3633"] }]
                }
            }
        ]
    },
    pm: {
        diagnosis: [
            {
                id: "PM-D1",
                title: "The Velocity Trap",
                prompt: "Engineering shipped 15 new features last quarter (a record). Yet, Net Revenue Retention (NRR) dropped to 85% and Support Ticket volume doubled. Diagnose the Complexity Debt.",
                expected_signal: "Feature Bloat Diagnosis",
                chart_type: "line",
                chart_data: {
                    labels: ["Q1", "Q2", "Q3", "Q4"],
                    datasets: [
                        { label: "Features Shipped", data: [4, 6, 10, 15], borderColor: "#58a6ff" },
                        { label: "Support Tickets", data: [100, 120, 200, 450], borderColor: "#da3633" },
                        { label: "NRR %", data: [110, 105, 95, 85], borderColor: "#c9d1d9", borderDash: [5, 5] }
                    ]
                }
            },
            {
                id: "PM-D2",
                title: "The 'Free' Feature",
                prompt: "Sales wants a custom integration. 'The AI can write it in 1 hour, so it costs nothing.' Explain Total Cost of Ownership (TCO) and why building it creates a negative asset.",
                expected_signal: "TCO/Maintenance Awareness",
                chart_type: "bar_stacked",
                chart_data: {
                    labels: ["Build (Yr 1)", "Support (Yr 1)", "Maint (Yr 2)", "Maint (Yr 3)"],
                    datasets: [
                        { label: "Dev Cost", data: [100, 0, 0, 0], backgroundColor: "#238636" }, // Tiny build cost
                        { label: "Hidden OpEx", data: [0, 2000, 3000, 4000], backgroundColor: "#da3633" } // Massive accumulating cost
                    ]
                }
            },
            {
                id: "PM-D3",
                title: "The Zombie Freemium",
                prompt: "We have 100k free users. They generate 0 revenue but consume 30% of our AI token budget. Conversion to paid is 0.1%. Marketing wants to 'optimize the funnel.' Stop the BLEED.",
                expected_signal: "Capital Allocation",
                chart_type: "bar",
                chart_data: {
                    labels: ["Paid Users", "Free Users"],
                    datasets: [
                        { label: "Revenue ($)", data: [50000, 0], backgroundColor: "#238636" },
                        { label: "Compute Cost ($)", data: [5000, 25000], backgroundColor: "#da3633" }
                    ]
                }
            }
        ],
        funeral: [
            {
                id: "PM-F1",
                title: "The 'AI Wrapper' Feature",
                prompt: "Add 'Chat with PDF' feature. Estimated Dev Time: 2 Days. It destroys Gross Margins. If we don't pass API costs to the user, this is Margin Insolvency. KILL IT.",
                expected_signal: "Margin Insolvency Detection",
                chart_type: "bar",
                chart_data: {
                    labels: ["Sub Price", "Est. API Cost (Power User)"],
                    datasets: [{ label: "Monthly Unit Economics ($)", data: [20, 45], backgroundColor: ["#58a6ff", "#da3633"] }]
                }
            },
            {
                id: "PM-F2",
                title: "The 'CEO's Pet' Blockchain",
                prompt: "CEO wants Crypto Wallet Connect. 10 customers asked for it. It requires specialized security audits. The ROI is negative. Kill the Distraction Asset.",
                expected_signal: "Opportunity Cost Analysis",
                chart_type: "table_backlog",
                chart_data: {
                    items: [
                        { name: "Crypto Wallet", sponsor: "CEO", roi: "-90%", cost: "$150k (Audit)" },
                        { name: "Core Perf Fix", sponsor: "Eng", roi: "+300%", cost: "$20k" },
                        { name: "New Onboarding", sponsor: "Product", roi: "+150%", cost: "$50k" }
                    ]
                }
            },
            {
                id: "PM-F3",
                title: "The One-Off Hack",
                prompt: "Sales wants to hardcode a report format for a big client. 'Dev time: 30 mins.' This creates Architectural Debt and a 'Forked Reality.' Kill it or Refactor.",
                expected_signal: "Anti-Consultancy / Standardization",
                chart_type: "line",
                chart_data: {
                    labels: ["Today", "1 Year"],
                    datasets: [
                        { label: "Codebase Complexity (Standard)", data: [100, 120], borderColor: "#58a6ff" },
                        { label: "Codebase Complexity (w/ Hacks)", data: [100, 500], borderColor: "#da3633" }
                    ]
                }
            }
        ],
        board: [
            {
                id: "PM-B1",
                title: "The 'No AI' Defense",
                prompt: "The Board asks why we don't have an 'AI Assistant' like our competitor. Defend your decision: We are 'Fast Followers,' not 'First Victims' of high inference costs.",
                expected_signal: "Strategic Patience / Fast Follower",
                chart_type: "line",
                chart_data: {
                    labels: ["Q1", "Q2", "Q3", "Q4"],
                    datasets: [
                        { label: "Competitor Margin (AI Heavy)", data: [70, 40, 30, 15], borderColor: "#da3633" },
                        { label: "Our Margin (Wait & See)", data: [75, 76, 75, 78], borderColor: "#238636" }
                    ]
                }
            },
            {
                id: "PM-B2",
                title: "The Churn Defense",
                prompt: "You raised prices and churn went up 5%. The Board is panicked. Explain 'Revenue Quality': We shed Bad Revenue (High OpEx). Profitability actually went UP.",
                expected_signal: "Revenue Quality Defense",
                chart_type: "bar_stacked",
                chart_data: {
                    labels: ["Pre-hike", "Post-hike"],
                    datasets: [
                        { label: "Profitable Rev", data: [80, 110], backgroundColor: "#238636" },
                        { label: "Unprofitable Rev (Churned)", data: [20, 0], backgroundColor: "#da3633" }
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
