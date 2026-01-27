export type Role = 'engineering' | 'pm';

export interface Question {
    id: string;
    title: string;
    prompt: string;
    expected_signal?: string; // Optional as not in user's latest paste, but good to keep if compatible
    constraint?: string;
    context?: string;
    chart_type?: 'line' | 'bar' | 'bar_stacked' | 'line_dual' | 'code_snippet' | 'table_backlog';
    chart_data?: any; // Flexible for ChartJS or Code/Table
    code?: string; // Specific for code snippets
}

export const QUESTION_BANK: Record<Role, Record<string, Question[]>> = {
    engineering: {
        orientation: [
            {
                id: "eng_orient_1",
                title: "The IOPS Trap",
                prompt: "Scenario: AWS RDS costs tripled in 30 days. CPU is 10%. Memory is 40%. Throughput is flat. The Junior Engineer (AI-assisted) says 'we need larger instances.'\n\nWhat is the specific metric you check to prove them wrong, and what is your hypothesis?",
                chart_type: "bar_stacked",
                chart_data: {
                    labels: ["Wk 1", "Wk 2", "Wk 3", "Wk 4"],
                    datasets: [
                        { label: "Compute Cost ($)", data: [100, 110, 105, 115], backgroundColor: "#238636" },
                        { label: "Storage I/O Cost ($)", data: [50, 200, 800, 2400], backgroundColor: "#da3633" }
                    ]
                }
            },
            {
                id: "eng_orient_2",
                "title": "The Latency Paradox",
                "prompt": "Scenario: We autoscaled from 10 to 100 pods during a traffic spike. P99 Latency did NOT drop; it actually increased by 500ms. The Database CPU is at 40%.\n\nWhy did horizontal scaling fail? Identify the bottleneck.",
                "chart_type": "line_dual",
                chart_data: {
                    labels: ["10 Pods", "50 Pods", "100 Pods"],
                    datasets: [
                        { label: "Total Throughput", data: [1000, 4500, 4600], borderColor: "#58a6ff" },
                        { label: "P99 Latency (ms)", data: [200, 400, 1200], borderColor: "#da3633" }
                    ]
                }
            }
        ],
        audit: [
            {
                id: "eng_audit_1",
                title: "The Memory Grenade",
                prompt: "Context: AI wrote this data processor. It passes unit tests (100 rows). It fails in prod (1M rows).\n\nReview the code below. Identify the specific line that ensures 'Technical Insolvency' via an OOM Kill.",
                chart_type: "code_snippet",
                code: "def process_export(file_key):\n    # AI GENERATED\n    s3_obj = s3.get_object(Bucket='exports', Key=file_key)\n    file_content = s3_obj['Body'].read().decode('utf-8') # <--- THE LIABILITY\n    rows = csv.DictReader(file_content.splitlines())\n    results = [transform(row) for row in rows]\n    return results"
            },
            {
                id: "eng_audit_2",
                title: "The Silent N+1",
                prompt: "Context: This API endpoint works in dev. In prod, it times out. The AI used an ORM. Find the line that turns 1 database call into 10,000.",
                chart_type: "code_snippet",
                code: "def list_orders(user_id):\n    # AI GENERATED\n    orders = Order.objects.filter(user_id=user_id)\n    response = []\n    for order in orders:\n        # THE LIABILITY: Accessing foreign key inside loop without select_related\n        sku_name = order.product.sku_code \n        response.append({'id': order.id, 'sku': sku_name})\n    return response"
            },
            {
                id: "eng_audit_3",
                title: "The Race Condition",
                prompt: "Context: We are processing refunds. Two requests hit this endpoint at the exact same millisecond. We just lost $50k. Why?",
                chart_type: "code_snippet",
                code: "def refund_user(user_id, amount):\n    # AI GENERATED\n    user = User.get(user_id)\n    if user.balance >= amount:\n        # THE LIABILITY: Read-Modify-Write without Atomic Lock\n        new_balance = user.balance - amount\n        user.balance = new_balance\n        user.save()\n        return True\n    return False"
            }
        ],
        defense: [
            {
                id: "eng_def_1",
                title: "The Rewrite Trap",
                prompt: "The team wants to stop features for 3 months to rewrite the monolith in Go. They claim it will speed up deploys. The Sales VP says this kills the quarter.\n\nDefend your decision to VETO the rewrite using 'CapEx vs OpEx' logic."
            },
            {
                id: "eng_def_2",
                title: "The Security Block",
                prompt: "You blocked a release because the AI-generated code included a library with a 3-year-old vulnerability. The CEO says 'It's internal only, just ship it.'\n\nDefend the block by quantifying the 'Supply Chain Liability'."
            }
        ]
    },
    pm: {
        diagnosis: [
            {
                id: "pm_diag_1",
                title: "The Vanity Metric",
                prompt: "Signups are up 40%. Revenue is flat. Support costs doubled. Engineering is celebrating 'Velocity.'\n\nDiagnose the specific disconnect between Engineering Output and Business Outcome.",
                chart_type: "line_dual",
                chart_data: {
                    labels: ["Jan", "Feb", "Mar", "Apr"],
                    datasets: [
                        { label: "Features Shipped", data: [10, 15, 25, 40], borderColor: "#58a6ff" },
                        { label: "Net Revenue Retention", data: [105, 102, 98, 85], borderColor: "#da3633" }
                    ]
                }
            }
        ],
        funeral: [
            {
                id: "pm_kill_1",
                title: "The AI Wrapper",
                prompt: "Engineering built a 'Chat with PDF' feature using OpenAI API. It took 1 day. It has 5% margins because token costs are high. Users love it. We are losing money on every query.\n\nKill the feature or change the pricing. Defend the decision.",
                chart_type: "table_backlog",
                chart_data: {
                    items: [
                        { name: "Chat with PDF", sponsor: "Users", roi: "-40% (Margin)", cost: "$0 Dev / High OpEx" },
                        { name: "SSO Login", sponsor: "Enterprise", roi: "+200%", cost: "$10k Dev / Low OpEx" }
                    ]
                }
            }
        ],
        board: [
            {
                id: "pm_board_1",
                title: "The 'No AI' Defense",
                prompt: "The Board asks why we don't have an AI Assistant like our competitor. You know their assistant is a loss-leader burning cash.\n\nDefend your strategy of being a 'Fast Follower' to protect Gross Margins."
            }
        ]
    }
};

export const SCENARIOS = {
    engineering: {
        phases: ["orientation", "audit", "defense"],
        time_limits: { orientation: 600, audit: 1200, defense: 600 },
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
