export type Role = 'engineering' | 'pm';

export interface Question {
    id: string;
    title: string;
    prompt: string;
    chart_type?: 'line' | 'bar' | 'bar_stacked' | 'line_dual' | 'code_snippet' | 'table_backlog' | 'text_only';
    chart_data?: any;
    code?: string; // For explicit code content
    context?: string;
    constraint?: string;
    type?: string;
}

// Helper to create simple code snippet objects
const codeSnippet = (code: string) => ({
    chart_type: 'code_snippet' as const,
    code
});

export const QUESTION_BANK_LEVELS: Record<Role, Record<number, Question[]>> = {
    engineering: {
        3: [ // L3: Junior (Syntax/Logic)
            {
                id: "eng_l3_1",
                title: "The Infinite Loop",
                prompt: "AI generated this retry logic for an API call. It lacks a `max_retries` break condition.\n\nIdentify the specific line causing the CPU spike and write the fix.",
                ...codeSnippet("def call_api_with_retry(url):\n    while True:\n        try:\n            return requests.get(url)\n        except:\n            print('Retrying...')\n            # MISSING: counter check\n            time.sleep(1)")
            },
            {
                id: "eng_l3_2",
                title: "The Hardcoded Secret",
                prompt: "The AI hardcoded the AWS Secret Key in line 4 to 'fix' a connection error. \n\nWhy is this a critical security violation even if the repo is private? How do you remediate it?",
                ...codeSnippet("import boto3\n\ndef get_s3_client():\n    # AI FIX: Hardcoded creds to bypass IAM role issue\n    return boto3.client(\n        's3',\n        aws_access_key_id='AKIA...', \n        aws_secret_access_key='wJalrX...'\n    )")
            }
        ],
        5: [ // L5: Senior (Cost/Architecture)
            {
                id: "eng_l5_1",
                title: "The N+1 Query",
                prompt: "This ORM code is functionally correct. But at 10k users, it creates 10k DB calls.\n\nCalculate the latency impact and rewrite logic using `select_related` or `prefetch_related`.",
                ...codeSnippet("users = User.objects.all() # 1 Query\nfor user in users:\n    # PROBLEM: 1 Query per loop iteration\n    print(user.profile.bio)")
            },
            {
                id: "eng_l5_2",
                title: "The Memory Leak",
                prompt: "This script loads the full CSV into RAM. At 50GB file size, this causes an OOM Kill.\n\nRewrite this using a Python Generator/Stream to save $500/mo in compute costs.",
                ...codeSnippet("def process_large_file(filename):\n    # LIABILTY: Reads entire file into memory\n    with open(filename, 'r') as f:\n        lines = f.readlines()\n    return [process(line) for line in lines]")
            }
        ],
        7: [ // L7: Principal (Insolvency/Strategy)
            {
                id: "eng_l7_1",
                title: "The Build vs Buy",
                prompt: "Engineers want to build a custom Vector DB. Vendor cost is $50k/yr. Build cost is estimated at $200k/yr in maintenance + Opportunity Cost.\n\nWrite the veto memo. Kill the project.",
                chart_type: 'bar_stacked',
                chart_data: {
                    labels: ["Year 1", "Year 2"],
                    datasets: [
                        { label: "Vendor Cost", data: [50000, 50000], backgroundColor: "#238636" },
                        { label: "Internal Build (Maint + OpCost)", data: [250000, 200000], backgroundColor: "#da3633" }
                    ]
                }
            },
            {
                id: "eng_l7_2",
                title: "The Architecture Pivot",
                prompt: "We are moving from REST to GraphQL. This breaks all legacy caching layers. The team estimates this introduces a 200ms regression on P99 latency.\n\nQuantify the risk to conversion rate and define the mitigation strategy.",
                chart_type: 'line_dual',
                chart_data: {
                    labels: ["Current (REST)", "GraphQL (No Cache)", "GraphQL (Mitigated)"],
                    datasets: [
                        { label: "P99 Latency (ms)", data: [100, 300, 120], borderColor: "#da3633" },
                        { label: "Dev Velocity (Features/Wk)", data: [5, 12, 10], borderColor: "#58a6ff" }
                    ]
                }
            }
        ]
    },
    pm: {
        3: [ // L3: Associate (Logic/Execution)
            {
                id: "pm_l3_1",
                title: "The Hallucinated Spec",
                prompt: "AI wrote this PRD for a 'Real-Time Analytics' dashboard. It specifies that data should be refreshed via a 'Nightly Cron Job'.\n\nIdentify the logical contradiction between 'Real-Time' and 'Nightly' and rewrite the requirement.",
                chart_type: 'text_only'
            },
            {
                id: "pm_l3_2",
                title: "The Vanity Metric",
                prompt: "Signups increased by 50%, but Activation (Day 1 usage) dropped by 60%. The AI summary calls this a 'Success'.\n\nExplain why this is actually a failure and identify the correct counter-metric.",
                chart_type: 'line_dual',
                chart_data: {
                    labels: ["Wk 1", "Wk 2", "Wk 3"],
                    datasets: [
                        { label: "Signups", data: [1000, 1500, 2000], borderColor: "#238636" },
                        { label: "Activation %", data: [40, 20, 10], borderColor: "#da3633" }
                    ]
                }
            }
        ],
        5: [ // L5: Senior (Economics)
            {
                id: "pm_l5_1",
                title: "The Negative Margin Feature",
                prompt: "Sales wants 'Chat with PDF'. It costs $0.05/query. We charge $20/mo flat. Avg user runs 500 queries ($25 cost).\n\nCalculate the Unit Economics loss per user. Propose a specific pricing lever (Caps, Overage, Tiered) to fix it.",
                chart_type: 'table_backlog',
                chart_data: {
                    items: [
                        { name: "Chat with PDF", sponsor: "Sales", roi: "-25% (Gross Margin)", cost: "$0.05 / query" }
                    ]
                }
            },
            {
                id: "pm_l5_2",
                title: "The Zombie Freemium",
                prompt: "We have 100k free users consuming 30% of server costs. Conversion to paid is 0.1%. Marketing wants 'more emails'.\n\nWhy is this the wrong lever? Propose a 'Capital Lever' (e.g. usage limits) to stop the cash bleed.",
                chart_type: 'bar_stacked',
                chart_data: {
                    labels: ["Free Users", "Paid Users"],
                    datasets: [
                        { label: "Count", data: [100000, 100], backgroundColor: "#58a6ff" },
                        { label: "Server Cost ($)", data: [30000, 50000], backgroundColor: "#da3633" }
                    ]
                }
            }
        ],
        7: [ // L7: Director (Portfolio/Leverage)
            {
                id: "pm_l7_1",
                title: "The Platform Risk",
                prompt: "We rely on Twitter's API for 90% of data. They raised prices 1000%. We have 6 months runway.\n\nOption A: Pass cost (Churn Risk).\nOption B: Pivot source (Product Risk).\nOption C: Build scraper (Legal Risk).\n\nDefend your choice to the Board.",
                chart_type: 'text_only'
            },
            {
                id: "pm_l7_2",
                title: "The Cannibalization Defense",
                prompt: "You are launching 'Product B' ($10/mo) which is faster/cheaper than our core 'Product A' ($50/mo). Sales VP says this kills revenue.\n\nDefend why we must cannibalize ourselves before a competitor does (Disruption Theory).",
                chart_type: 'line_dual',
                chart_data: {
                    labels: ["Q1", "Q2", "Q3", "Q4"],
                    datasets: [
                        { label: "Product A Rev", data: [100, 90, 70, 50], borderColor: "#da3633" },
                        { label: "Combined Rev (A+B)", data: [100, 110, 130, 200], borderColor: "#238636" }
                    ]
                }
            }
        ]
    }
};

export const SCENARIOS = {
    engineering: {
        phases: ["Detection", "Correction", "Defense"],
        time_limits: { Detection: 600, Correction: 900, Defense: 600 },
        rubric: ["verification_depth", "architectural_reasoning", "economic_awareness"]
    },
    pm: {
        phases: ["Detection", "Correction", "Defense"],
        time_limits: { Detection: 600, Correction: 900, Defense: 600 },
        rubric: ["willingness_to_disappoint", "constraint_management", "economic_reality"]
    }
};
