export type Role = 'engineering' | 'pm';

export interface Question {
    id: string;
    title: string;
    prompt: string;
    chart_type?: 'line' | 'bar' | 'bar_stacked' | 'line_dual' | 'code_snippet' | 'table_backlog' | 'text_only' | 'none';
    chart_data?: any;
    code?: string;
    context?: string;
    constraint?: string;
    type?: string;
}

export const QUESTION_BANK: Record<Role, Question[]> = {
    engineering: [
        {
            id: "eng_p1_signal",
            title: "Phase 1: The Signal",
            prompt: "Our AWS bill for the database layer doubled in 30 days. Traffic is flat. Latency is normal. The team says 'it's just auto-scaling.'\n\nWhat is your specific hypothesis, and what one metric proves it?",
            chart_type: "bar_stacked",
            chart_data: {
                labels: ["Jan", "Feb"],
                datasets: [
                    { label: "Compute (EC2)", data: [2000, 2100], backgroundColor: "#238636" },
                    { label: "Storage I/O", data: [500, 2500], backgroundColor: "#da3633" }
                ]
            }
        },
        {
            id: "eng_p2_audit",
            title: "Phase 2: The Audit",
            prompt: "Here is an AI-generated script that processes user uploads. It uses `file.read()` to load the file and `for line in data` to parse it. It works in staging.\n\nWhy is this code 'financially toxic' at scale?",
            chart_type: "code_snippet",
            code: "def process_upload(file_obj):\n    # CRITICAL: Reads full file into RAM\n    data = file_obj.read()\n    results = []\n    for line in data.splitlines():\n        results.append(parse(line))\n    return results"
        },
        {
            id: "eng_p3_triage",
            title: "Phase 3: The Triage",
            prompt: "A P1 security vulnerability is found in a core library. Fixing it requires a breaking change that stops all feature work for 2 weeks. The Sales VP says we will miss the quarter if we pause.\n\nWhat do you do?",
            chart_type: "none"
        },
        {
            id: "eng_p4_architecture",
            title: "Phase 4: The Architecture",
            prompt: "The team wants to move from a Monolith to Microservices to 'increase velocity.' They estimate it will take 6 months.\n\nDo you approve? Defend your decision with CapEx/OpEx logic.",
            chart_type: "none"
        },
        {
            id: "eng_p5_defense",
            title: "Phase 5: The Defense",
            prompt: "We need a Vector Database for AI. The engineers want to build a simple one using Postgres (pgvector). A dedicated vendor costs $50k/year.\n\nDefend the decision to BUY the vendor solution.",
            chart_type: "none"
        }
    ],
    pm: [
        {
            id: "pm_p1_diagnosis",
            title: "Phase 1: The Diagnosis",
            prompt: "Signups increased 40% this quarter. Revenue is flat. Support costs are up 20%. The CEO is celebrating the 'Growth.'\n\nBe the buzzkill: What is actually happening?",
            chart_type: "line_dual",
            chart_data: {
                labels: ["Q1", "Q2", "Q3"],
                datasets: [
                    { label: "Signups", data: [1000, 1200, 1680], borderColor: "#238636" },
                    { label: "Support Tickets", data: [50, 60, 150], borderColor: "#da3633" }
                ]
            }
        },
        {
            id: "pm_p2_spec",
            title: "Phase 2: The Spec",
            prompt: "Sales wants a 'Custom Reporting' feature for a big client ($100k deal). Engineering says it takes 2 sprints. It creates a 'fork' of the codebase.\n\nDo you build it?",
            chart_type: "none"
        },
        {
            id: "pm_p3_kill",
            title: "Phase 3: The Kill",
            prompt: "We have 3 initiatives:\n1. AI Assistant (Hype)\n2. SSO (Enterprise Request)\n3. Mobile App Refresh (Maintenance)\n\nYou have capacity for ONE. Which one do you pick to maximize Enterprise Value?",
            chart_type: "table_backlog",
            chart_data: {
                items: [
                    { name: "AI Assistant", type: "Innovation", risk: "High", value: "Unknown" },
                    { name: "SSO", type: "Enterprise", risk: "Low", value: "High NRR" },
                    { name: "Mobile Refresh", type: "Maintenance", risk: "Low", value: "Retention" }
                ]
            }
        },
        {
            id: "pm_p4_strategy",
            title: "Phase 4: The Strategy",
            prompt: "You raised prices 20%. User count dropped 10%. Revenue stayed flat. The Board is worried about the 'Shrinking User Base.'\n\nWrite the 2-sentence defense.",
            chart_type: "none"
        },
        {
            id: "pm_p5_leverage",
            title: "Phase 5: The Leverage",
            prompt: "A competitor just launched a copycat feature for free. Sales wants us to match the price (Free).\n\nDefend why we should keep charging for it.",
            chart_type: "none"
        }
    ]
};

export const SCENARIOS = {
    engineering: {
        phases: ["The Signal", "The Audit", "The Triage", "The Architecture", "The Defense"],
        time_limits: { "The Signal": 600, "The Audit": 900, "The Triage": 600, "The Architecture": 600, "The Defense": 600 },
        rubric: ["execution", "verification", "tradeoff", "system", "capital"]
    },
    pm: {
        phases: ["The Diagnosis", "The Spec", "The Kill", "The Strategy", "The Leverage"],
        time_limits: { "The Diagnosis": 600, "The Spec": 600, "The Kill": 600, "The Strategy": 600, "The Leverage": 600 },
        rubric: ["execution", "verification", "prioritization", "strategy", "leverage"]
    }
};
