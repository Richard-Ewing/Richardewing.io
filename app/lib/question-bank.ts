export type Role = 'engineering' | 'pm';

export interface Question {
    id: string;
    title: string;
    prompt: string;
    chart_type?: 'line' | 'bar' | 'bar_stacked' | 'line_dual' | 'code_snippet' | 'table_backlog' | 'text_only' | 'dashboard' | 'none';
    chart_data?: any;
    code?: string;
    context?: string;
    constraint?: string;
    type?: string;
    grading?: {
        l3_example: string;
        l6_example: string;
        rubric: string;
    }
}

export const QUESTION_BANK: Record<Role, Question[]> = {
    engineering: [
        // PHASE 1: ORIENTATION (Dashboard)
        {
            id: "eng_p1_orientation",
            title: "Phase 1: Orientation",
            prompt: "The engineering team is celebrating record productivity (Velocity is up 50%).\n\nWhat is the primary constraint here?",
            chart_type: "dashboard",
            chart_data: {
                title: "SYSTEM HEALTH — LAST 30 DAYS",
                metrics: [
                    { label: "Cloud Costs", value: "$252K", trend: "up", change: "40%", context: "$180K → $252K" },
                    { label: "Gross Margin", value: "64%", trend: "down", change: "11%", context: "72% → 64%" },
                    { label: "Bugs/Release", value: "4.7", trend: "up", change: "104%", context: "2.3 → 4.7" },
                    { label: "Story Points", value: "512", trend: "up", change: "50%", context: "Record High!" },
                    { label: "Deploys/Week", value: "14", trend: "up", change: "75%", context: "8 → 14" }
                ],
                status: "Engineering hit record velocity this quarter."
            },
            grading: {
                l3_example: "Costs are up. We should optimize queries.",
                l6_example: "Velocity is a distraction. We are shipping broken code (Bugs doubled) that is structurally inefficient (Costs +40%). We are generating technical debt faster than value.",
                rubric: "Does the candidate identify Quality/Cost vs Velocity? Do they spot the inverse correlation between Speed and Margin?"
            }
        },
        // PHASE 2: THE AUDIT (The Memory Bomb)
        {
            id: "eng_p2_audit",
            title: "Phase 2: The Audit",
            prompt: "This code passes tests and has been running in staging for 2 weeks.\n\nWhy will it fail in production at scale?",
            chart_type: "code_snippet",
            code: `async def process_upload(file_path: str, db) -> dict:
    """Process uploaded file and extract metadata."""
    
    # Read the entire file into memory
    with open(file_path, 'rb') as f:
        content = f.read()
    
    # Calculate hash for deduplication
    file_hash = hashlib.sha256(content).hexdigest()
    
    # Store in database
    await db.files.insert_one({
        "hash": file_hash,
        "content": content,  # Store for full-text search
        "uploaded_at": datetime.utcnow()
    })
    
    return {"status": "success", "hash": file_hash}`,
            grading: {
                l3_example: "It's synchronous. Should be async.",
                l6_example: "Memory Bomb: f.read() loads full file to RAM. Storage Bomb: BSON doc limit is 16MB. Hash calculation doubles memory footprint. This is an OOM crash waiting to happen.",
                rubric: "Does the candidate identify the Memory Load (f.read) and Storage Limit (BSON/DB)? Do they mention 'OOM' or 'Crash'?"
            }
        },
        // PHASE 3: THE DEFENSE
        {
            id: "eng_p3_defense",
            title: "Phase 3: The Defense",
            prompt: "You identified multiple issues (Memory Bomb, BSON limit, etc.).\n\nYou can only deploy ONE fix today. The rest becomes tech debt.\n\nWhat do you fix first, and what do you explicitly defer?",
            chart_type: "text_only",
            grading: {
                l3_example: "I would rewrite everything to use streaming.",
                l6_example: "Fix: Add file size validation (<10MB) to prevent crashes immediately. Defer: The streaming refactor (takes too long). Acceptance Criteria: 413 Error for large files.",
                rubric: "Does the candidate prioritize STABILITY (stopping the crash) over PERFECTION (rewrite)? Do they explicitly Defer the complex fix?"
            }
        }
    ],
    pm: [
        // PHASE 1: ORIENTATION (Dashboard)
        {
            id: "pm_p1_orientation",
            title: "Phase 1: Orientation",
            prompt: "The growth team says we're on track. The CFO is concerned.\n\nWhat is the primary constraint here?",
            chart_type: "dashboard",
            chart_data: {
                title: "PRODUCT METRICS — Q4",
                metrics: [
                    { label: "MRR", value: "$2.4M", trend: "up", change: "14%", context: "$2.1M → $2.4M" },
                    { label: "CAC", value: "$450", trend: "up", change: "34%", context: "Spike!" },
                    { label: "Gross Margin", value: "61%", trend: "down", change: "11%", context: "72% → 61%" },
                    { label: "Support Cost/User", value: "$12", trend: "up", change: "28%", context: "Rising" },
                    { label: "Feature Adoption", value: "67%", trend: "up", change: "5%", context: "Healthy" }
                ],
                status: "Growth metrics on track for board presentation."
            },
            grading: {
                l3_example: "CAC is high, we should optimize ads.",
                l6_example: "We are buying revenue at a loss. Margin collapsed (11%) while CAC spiked (34%). Support costs are up, meaning we're acquiring low-quality or confused users. This is 'Bad Revenue'.",
                rubric: "Does the candidate identify 'Bad Revenue' or 'Unit Economics' collapse? Do they look past the MRR growth?"
            }
        },
        // PHASE 2: THE AUDIT (The Spec - Feature Bloat)
        {
            id: "pm_p2_audit",
            title: "Phase 2: The Audit",
            prompt: "Sales wants a 'Custom Reporting' feature for a big client ($100k deal). Engineering estimates 2 sprints. It requires 'forking' the core reporting engine.\n\nDo you build it?",
            chart_type: "text_only",
            grading: {
                l3_example: "Yes, $100k is a lot of revenue.",
                l6_example: "No. Forking creates infinite 'Maintenance Liability'. The cost of maintaining a fork > $100k over time. I would offer a raw Data Export API instead, or walk away.",
                rubric: "Does the candidate reject the Fork? Do they calculate long-term Maintenance Cost vs one-time Revenue?"
            }
        },
        // PHASE 3: THE DEFENSE
        {
            id: "pm_p3_defense",
            title: "Phase 3: The Defense",
            prompt: "The Sales VP is furious you rejected the Custom Reporting deal. They say you are 'blocking revenue'.\n\nWrite the 2-sentence defense to the CEO.",
            chart_type: "text_only",
            grading: {
                l3_example: "Technically we can't do it right now.",
                l6_example: "That $100k comes with a $500k maintenance tail. I am protecting our margins from 'Consultingware' that will slow down every future feature release.",
                rubric: "Does the candidate frame it as 'Protecting Margins' or 'Maintenance Tail'? Do they stand firm on the economic logic?"
            }
        }
    ]
};

export const SCENARIOS = {
    engineering: {
        phases: ["Phase 1: Orientation", "Phase 2: The Audit", "Phase 3: The Defense"],
        time_limits: {
            "Phase 1: Orientation": 300,  // 5 min
            "Phase 2: The Audit": 1200,   // 20 min
            "Phase 3: The Defense": 600   // 10 min
        },
        // Updated Dimensions from Protocol V2
        rubric: [
            "Verification Depth",
            "Architectural Reasoning",
            "Economic Awareness",
            "AI Interrogation"
        ]
    },
    pm: {
        phases: ["Phase 1: Orientation", "Phase 2: The Audit", "Phase 3: The Defense"],
        time_limits: {
            "Phase 1: Orientation": 300,
            "Phase 2: The Audit": 1200,
            "Phase 3: The Defense": 600
        },
        rubric: [
            "Verification Depth",
            "Prioritization",
            "Economic Awareness",
            "Strategy" // PM specific variation
        ]
    }
};
