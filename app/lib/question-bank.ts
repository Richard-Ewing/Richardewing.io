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

// --- QUESTION BANK ---
// Each phase has multiple questions. One is randomly selected per session.

export const PHASE_BANK: Record<Role, { phase: string; questions: Question[] }[]> = {
    engineering: [
        // ===================== PHASE 1: ORIENTATION =====================
        {
            phase: "Phase 1: Orientation",
            questions: [
                {
                    id: "eng_p1_v1",
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
                {
                    id: "eng_p1_v2",
                    title: "Phase 1: Orientation",
                    prompt: "The CTO presents these metrics at the all-hands and says 'We are executing well.' The CFO disagrees.\n\nWho is right, and why?",
                    chart_type: "dashboard",
                    chart_data: {
                        title: "ENGINEERING OPS — Q3 REVIEW",
                        metrics: [
                            { label: "Headcount", value: "48", trend: "up", change: "33%", context: "36 → 48" },
                            { label: "Revenue/Eng", value: "$62K", trend: "down", change: "18%", context: "$76K → $62K" },
                            { label: "Releases/Q", value: "24", trend: "up", change: "60%", context: "15 → 24" },
                            { label: "P0 Incidents", value: "7", trend: "up", change: "133%", context: "3 → 7" },
                            { label: "MTTR", value: "4.2h", trend: "up", change: "75%", context: "2.4h → 4.2h" }
                        ],
                        status: "We shipped more features than any previous quarter."
                    },
                    grading: {
                        l3_example: "The CTO is right because they shipped more releases.",
                        l6_example: "The CFO is right. Revenue per engineer dropped 18%—we hired 33% more people but output didn't scale linearly. P0 incidents tripled, meaning quality is collapsing. We're in a 'hiring as a strategy' trap.",
                        rubric: "Does the candidate see that hiring != productivity? Do they connect Revenue/Eng declining with headcount growth? Do they flag the quality collapse (P0s + MTTR)?"
                    }
                },
                {
                    id: "eng_p1_v3",
                    title: "Phase 1: Orientation",
                    prompt: "Your team just completed a migration from a monolith to microservices. Leadership is celebrating.\n\nWhat should you be worried about?",
                    chart_type: "dashboard",
                    chart_data: {
                        title: "POST-MIGRATION HEALTH — WEEK 4",
                        metrics: [
                            { label: "Services", value: "23", trend: "up", change: "2200%", context: "1 → 23" },
                            { label: "Avg Latency", value: "340ms", trend: "up", change: "89%", context: "180ms → 340ms" },
                            { label: "Infra Spend", value: "$185K/mo", trend: "up", change: "156%", context: "$72K → $185K" },
                            { label: "Deploy Time", value: "8min", trend: "down", change: "73%", context: "30min → 8min" },
                            { label: "On-Call Pages", value: "47/wk", trend: "up", change: "340%", context: "11 → 47" }
                        ],
                        status: "Migration to microservices completed on schedule."
                    },
                    grading: {
                        l3_example: "Latency is higher, we should optimize the services.",
                        l6_example: "We traded one problem for five. Infra costs 2.5x'd, latency nearly doubled (network hops), and on-call pages 4x'd. We decomposed without understanding the coordination cost. Deploy time improved but total system reliability degraded. This is a net-negative migration.",
                        rubric: "Does the candidate identify the coordination cost of microservices? Do they see that deploy speed improved but system health degraded? Do they question whether the migration was worth it?"
                    }
                },
                {
                    id: "eng_p1_v4",
                    title: "Phase 1: Orientation",
                    prompt: "The VP of Engineering is proud: 'Our test coverage is at 92%.' The on-call engineer is exhausted.\n\nWhat is actually happening?",
                    chart_type: "dashboard",
                    chart_data: {
                        title: "QUALITY METRICS — LAST 60 DAYS",
                        metrics: [
                            { label: "Test Coverage", value: "92%", trend: "up", change: "15%", context: "80% → 92%" },
                            { label: "Flaky Tests", value: "34%", trend: "up", change: "240%", context: "10% → 34%" },
                            { label: "CI Time", value: "42min", trend: "up", change: "110%", context: "20min → 42min" },
                            { label: "Prod Bugs", value: "18/wk", trend: "up", change: "80%", context: "10 → 18" },
                            { label: "Test LOC", value: "2.8x", trend: "up", change: "40%", context: "vs prod code" }
                        ],
                        status: "Highest test coverage in company history."
                    },
                    grading: {
                        l3_example: "The flaky tests need to be fixed to improve the CI pipeline.",
                        l6_example: "Coverage is a vanity metric. 34% of tests are flaky—they're testing nothing. Prod bugs increased 80% despite 'higher coverage,' proving the tests aren't catching real issues. The team is writing tests-for-coverage, not tests-for-correctness. The test code is 2.8x production code, which is itself a maintenance liability.",
                        rubric: "Does the candidate see through the coverage vanity metric? Do they connect flaky tests to false confidence? Do they identify test code as its own maintenance burden?"
                    }
                },
            ]
        },

        // ===================== PHASE 2: THE AUDIT =====================
        {
            phase: "Phase 2: The Audit",
            questions: [
                {
                    id: "eng_p2_v1",
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
                {
                    id: "eng_p2_v2",
                    title: "Phase 2: The Audit",
                    prompt: "This caching layer was added to speed up the API. It passes all tests.\n\nWhat is the hidden liability?",
                    chart_type: "code_snippet",
                    code: `class UserCache:
    _cache = {}  # Class-level shared dict
    
    @classmethod
    def get_user(cls, user_id: str, db) -> dict:
        if user_id in cls._cache:
            return cls._cache[user_id]
        
        user = db.users.find_one({"_id": user_id})
        cls._cache[user_id] = user
        return user
    
    @classmethod
    def update_user(cls, user_id: str, data: dict, db):
        db.users.update_one(
            {"_id": user_id}, {"$set": data}
        )
        # Cache is NOT invalidated here
        
    @classmethod
    def get_cache_size(cls):
        return len(cls._cache)`,
                    grading: {
                        l3_example: "The cache should have a TTL or expiration.",
                        l6_example: "Three bombs: (1) Unbounded memory—_cache grows forever with no eviction, guaranteed OOM on any real traffic. (2) Stale data—update_user writes to DB but doesn't invalidate cache, so reads return stale data indefinitely. (3) Class-level state means in multi-worker deployments each worker has its own inconsistent cache. This is a data corruption + memory bomb.",
                        rubric: "Does the candidate identify unbounded memory growth? Do they spot the cache invalidation bug? Do they consider multi-process/multi-worker implications?"
                    }
                },
                {
                    id: "eng_p2_v3",
                    title: "Phase 2: The Audit",
                    prompt: "This rate limiter was implemented to protect the API. QA says it works.\n\nWhy will it fail under adversarial conditions?",
                    chart_type: "code_snippet",
                    code: `import time

rate_limits = {}  # Global mutable state

def rate_limit(user_id: str, max_requests=100, window=60):
    """Allow max_requests per window seconds per user."""
    now = time.time()
    
    if user_id not in rate_limits:
        rate_limits[user_id] = []
    
    # Remove old entries
    rate_limits[user_id] = [
        t for t in rate_limits[user_id] if now - t < window
    ]
    
    if len(rate_limits[user_id]) >= max_requests:
        return False  # Rate limited
    
    rate_limits[user_id].append(now)
    return True  # Allowed`,
                    grading: {
                        l3_example: "It should use Redis instead of in-memory storage.",
                        l6_example: "Four critical failures: (1) In-memory dict means each server instance has independent counters—attacker round-robins across instances. (2) No cleanup of rate_limits dict—users who stop sending requests leak memory forever. (3) List filtering on every request is O(n)—an attacker can make it O(n²) by sending max_requests rapidly. (4) No IP-based limiting—attacker rotates user_id values to bypass completely.",
                        rubric: "Does the candidate identify the per-instance bypass? Do they see the memory leak? Do they consider adversarial input (ID rotation)?"
                    }
                },
                {
                    id: "eng_p2_v4",
                    title: "Phase 2: The Audit",
                    prompt: "This background job processor was built to handle async tasks. It runs fine for small volumes.\n\nWhat breaks at 10x scale?",
                    chart_type: "code_snippet",
                    code: `import threading
import queue

task_queue = queue.Queue()  # Unbounded queue

def worker():
    while True:
        task = task_queue.get()
        try:
            result = process_task(task)  # CPU-heavy, ~2sec each
            save_result(result)
            task_queue.task_done()
        except Exception as e:
            print(f"Task failed: {e}")
            # Task is lost on failure
            task_queue.task_done()

# Start 50 workers
for i in range(50):
    t = threading.Thread(target=worker, daemon=True)
    t.start()

def enqueue(task):
    task_queue.put(task)  # Never blocks, never rejects
    return {"status": "queued"}`,
                    grading: {
                        l3_example: "It should use Celery or a proper queue system.",
                        l6_example: "Five failures at scale: (1) Unbounded queue with no backpressure—at 10x input, memory grows until OOM. (2) Failed tasks are silently dropped—no retry, no dead-letter queue. (3) 50 threads doing CPU-heavy work on GIL-bound Python means zero actual parallelism. (4) Daemon threads mean in-flight tasks are killed on app shutdown—data loss. (5) No observability—no metrics on queue depth, failure rate, or processing time.",
                        rubric: "Does the candidate identify the unbounded queue / OOM risk? Do they spot silent task loss? Do they understand the GIL limitation? Do they consider graceful shutdown?"
                    }
                },
            ]
        },

        // ===================== PHASE 3: THE DEFENSE =====================
        {
            phase: "Phase 3: The Defense",
            questions: [
                {
                    id: "eng_p3_v1",
                    title: "Phase 3: The Defense",
                    prompt: "You identified multiple issues (Memory Bomb, BSON limit, etc.).\n\nYou can only deploy ONE fix today. The rest becomes tech debt.\n\nWhat do you fix first, and what do you explicitly defer?",
                    chart_type: "text_only",
                    grading: {
                        l3_example: "I would rewrite everything to use streaming.",
                        l6_example: "Fix: Add file size validation (<10MB) to prevent crashes immediately. Defer: The streaming refactor (takes too long). Acceptance Criteria: 413 Error for large files.",
                        rubric: "Does the candidate prioritize STABILITY (stopping the crash) over PERFECTION (rewrite)? Do they explicitly Defer the complex fix?"
                    }
                },
                {
                    id: "eng_p3_v2",
                    title: "Phase 3: The Defense",
                    prompt: "The CEO says: 'Just throw more servers at it. We can scale horizontally.'\n\nWrite a 3-sentence response explaining why this will make things worse, not better.",
                    chart_type: "text_only",
                    grading: {
                        l3_example: "We need to fix the code first before scaling.",
                        l6_example: "More servers multiply the bug, not dilute it. Each instance runs the same memory-leaking code, so 10 servers means 10x the OOM crashes. We'd be spending $X/month to crash faster. The fix is a 2-line size validation that costs $0.",
                        rubric: "Does the candidate quantify why horizontal scaling fails for this bug? Do they contrast the cost of scaling vs the cost of the fix? Do they make the CEO understand the economic argument?"
                    }
                },
                {
                    id: "eng_p3_v3",
                    title: "Phase 3: The Defense",
                    prompt: "Your team has 3 critical issues found during the audit. Engineering wants to fix all three in a 'hardening sprint.'\n\nThe PM says the roadmap can't afford a full sprint of tech debt work. How do you negotiate?\n\nPropose a plan that addresses risk without blocking the roadmap.",
                    chart_type: "text_only",
                    grading: {
                        l3_example: "We should dedicate one sprint to fix all tech debt.",
                        l6_example: "Don't ask for a full sprint—embed fixes into existing work. Fix 1 (size validation) is a 2-hour PR, ship it today. Fix 2 (cache eviction) goes into the next user story that touches the cache. Fix 3 (rate limiter rewrite) gets scoped as a separate ticket with a deadline. Total roadmap impact: ~1 day. Frame it as 'risk reduction' not 'tech debt.'",
                        rubric: "Does the candidate avoid the all-or-nothing trap? Do they propose incremental fixes embedded in existing work? Do they frame it in terms the PM cares about (risk, not debt)?"
                    }
                },
                {
                    id: "eng_p3_v4",
                    title: "Phase 3: The Defense",
                    prompt: "A junior engineer fixed one of the bugs you identified by adding a try-catch that swallows the exception and returns a default value.\n\nThe tests pass. The PM wants to ship it. What do you do?",
                    chart_type: "text_only",
                    grading: {
                        l3_example: "It's fine if the tests pass.",
                        l6_example: "Block the PR. A swallowed exception turns a visible crash into an invisible data corruption. The tests pass because they don't test for correctness of the returned data—they test for 'no crash.' I'd (1) add a test that validates the actual output, (2) replace the catch with proper error handling that logs + returns a meaningful error code, and (3) use this as a coaching moment about the difference between 'working' and 'correct.'",
                        rubric: "Does the candidate identify that swallowing exceptions hides bugs? Do they distinguish between 'tests pass' and 'code is correct'? Do they propose a constructive teaching approach?"
                    }
                },
            ]
        }
    ],

    pm: [
        // ===================== PHASE 1: ORIENTATION =====================
        {
            phase: "Phase 1: Orientation",
            questions: [
                {
                    id: "pm_p1_v1",
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
                {
                    id: "pm_p1_v2",
                    title: "Phase 1: Orientation",
                    prompt: "The Head of Product is presenting the Q4 review. They say 'We shipped everything on the roadmap.'\n\nShould the board be impressed?",
                    chart_type: "dashboard",
                    chart_data: {
                        title: "PRODUCT HEALTH — Q4",
                        metrics: [
                            { label: "Features Shipped", value: "18", trend: "up", change: "50%", context: "12 → 18" },
                            { label: "DAU Growth", value: "3%", trend: "down", change: "-40%", context: "5% → 3%" },
                            { label: "NPS", value: "32", trend: "down", change: "-20%", context: "40 → 32" },
                            { label: "Feature Usage", value: "23%", trend: "down", change: "-35%", context: "35% → 23%" },
                            { label: "Eng Spend", value: "$4.2M", trend: "up", change: "25%", context: "$3.4M → $4.2M" }
                        ],
                        status: "100% of Q4 roadmap items delivered."
                    },
                    grading: {
                        l3_example: "They shipped everything, so yes, they executed well.",
                        l6_example: "No. They shipped 50% more features but feature usage dropped 35%. They're building things nobody wants. DAU growth halved while spend increased 25%. This is a 'Feature Factory' trap—output is up, outcomes are down. The roadmap was wrong, not the execution.",
                        rubric: "Does the candidate distinguish between Output (features shipped) and Outcomes (usage, growth)? Do they identify the Feature Factory anti-pattern?"
                    }
                },
                {
                    id: "pm_p1_v3",
                    title: "Phase 1: Orientation",
                    prompt: "The Sales VP is celebrating: 'We closed 40% more deals this quarter!'\n\nBut the Customer Success team is panicking. What's happening?",
                    chart_type: "dashboard",
                    chart_data: {
                        title: "SALES vs. RETENTION — Q3",
                        metrics: [
                            { label: "New Deals", value: "142", trend: "up", change: "40%", context: "101 → 142" },
                            { label: "Avg Deal Size", value: "$8.2K", trend: "down", change: "-28%", context: "$11.4K → $8.2K" },
                            { label: "90-Day Churn", value: "34%", trend: "up", change: "89%", context: "18% → 34%" },
                            { label: "Support Tickets/Acct", value: "12", trend: "up", change: "71%", context: "7 → 12" },
                            { label: "Expansion Revenue", value: "-8%", trend: "down", change: "N/A", context: "Contracting" }
                        ],
                        status: "Record quarter for new customer acquisition."
                    },
                    grading: {
                        l3_example: "Churn is too high, we need to improve support.",
                        l6_example: "Sales is acquiring the wrong customers. Deal sizes dropped 28% (downmarket shift), 90-day churn nearly doubled (bad fit), support load spiked (confused users), and expansion revenue is negative. We're filling a leaky bucket with lower-quality water. The CAC payback period is probably > 18 months. This is value-destructive growth.",
                        rubric: "Does the candidate connect deal size reduction with quality degradation? Do they calculate the net impact (acquisition vs churn)? Do they identify this as 'value-destructive growth'?"
                    }
                },
                {
                    id: "pm_p1_v4",
                    title: "Phase 1: Orientation",
                    prompt: "Engineering says they need to 'pause features for a quarter to pay down tech debt.'\n\nThe CEO asks you: 'Is this real or are they sandbagging?'\n\nHow do you assess?",
                    chart_type: "dashboard",
                    chart_data: {
                        title: "ENGINEERING VELOCITY — TRAILING 4Q",
                        metrics: [
                            { label: "Cycle Time", value: "18 days", trend: "up", change: "80%", context: "10 → 18 days" },
                            { label: "Rollback Rate", value: "22%", trend: "up", change: "175%", context: "8% → 22%" },
                            { label: "Rework %", value: "35%", trend: "up", change: "94%", context: "18% → 35%" },
                            { label: "Sprint Completion", value: "61%", trend: "down", change: "-24%", context: "80% → 61%" },
                            { label: "Story Points", value: "480", trend: "up", change: "12%", context: "Inflating?" }
                        ],
                        status: "Engineering requests 1 quarter feature freeze."
                    },
                    grading: {
                        l3_example: "A quarter is too long. They should fix things gradually.",
                        l6_example: "The data validates the request. Cycle time nearly doubled, 22% of deploys are rolled back, 35% of work is rework. Story points went up 12% while sprint completion dropped to 61%—classic point inflation hiding declining real output. But a full-quarter freeze is the wrong prescription. I'd propose a 70/30 split: 70% features, 30% debt burn-down, targeted at the highest-rollback-rate areas first. Measure cycle time weekly to validate progress.",
                        rubric: "Does the candidate use data to validate or refute? Do they propose a nuanced alternative to all-or-nothing? Do they identify point inflation as a red flag?"
                    }
                },
            ]
        },

        // ===================== PHASE 2: THE AUDIT =====================
        {
            phase: "Phase 2: The Audit",
            questions: [
                {
                    id: "pm_p2_v1",
                    title: "Phase 2: The Audit",
                    prompt: "Sales wants a 'Custom Reporting' feature for a big client ($100k deal). Engineering estimates 2 sprints. It requires 'forking' the core reporting engine.\n\nDo you build it?",
                    chart_type: "text_only",
                    grading: {
                        l3_example: "Yes, $100k is a lot of revenue.",
                        l6_example: "No. Forking creates infinite 'Maintenance Liability'. The cost of maintaining a fork > $100k over time. I would offer a raw Data Export API instead, or walk away.",
                        rubric: "Does the candidate reject the Fork? Do they calculate long-term Maintenance Cost vs one-time Revenue?"
                    }
                },
                {
                    id: "pm_p2_v2",
                    title: "Phase 2: The Audit",
                    prompt: "Your team is debating two features. Feature A has 200 customer requests. Feature B has 12 customer requests but from your top 3 enterprise accounts.\n\nWhich do you build?",
                    chart_type: "text_only",
                    grading: {
                        l3_example: "Feature A, because it has more demand.",
                        l6_example: "Neither—not without more data. Volume of requests ≠ value. Feature A's 200 requests might be from free-tier users worth $0 in expansion. Feature B's 12 requests from enterprise accounts might represent $1.2M in ARR risk. I'd weight by revenue-at-risk, churn probability, and build cost before deciding. If Feature B prevents churn of a $400K account, the ROI dwarfs Feature A.",
                        rubric: "Does the candidate refuse to answer based on request count alone? Do they weight by revenue impact? Do they consider opportunity cost?"
                    }
                },
                {
                    id: "pm_p2_v3",
                    title: "Phase 2: The Audit",
                    prompt: "The CEO just came back from a conference and wants to 'add AI to the product.' They want a chatbot on every page within 6 weeks.\n\nHow do you handle this?",
                    chart_type: "text_only",
                    grading: {
                        l3_example: "We should evaluate AI vendors and build a prototype.",
                        l6_example: "This is a solution in search of a problem. Before building anything, I need to answer: (1) What user problem does a chatbot solve that our current UX doesn't? (2) What's the cost of LLM inference at our scale? (3) What happens when it hallucinates to a paying customer? I'd propose a 2-week spike to test on ONE high-support-volume page, measure deflection rate, and calculate per-query cost before committing 6 weeks of the team.",
                        rubric: "Does the candidate push back on solution-first thinking? Do they ask about the problem being solved? Do they consider cost and risk (hallucination)? Do they propose a bounded experiment?"
                    }
                },
                {
                    id: "pm_p2_v4",
                    title: "Phase 2: The Audit",
                    prompt: "Your competitor just launched a feature that your sales team says is 'killing deals.' They want you to build a clone ASAP.\n\nWhat's your framework?",
                    chart_type: "text_only",
                    grading: {
                        l3_example: "We should build it quickly to stay competitive.",
                        l6_example: "Sales saying 'it's killing deals' is anecdotal. I'd (1) Pull actual win/loss data for the last 90 days to quantify real impact. (2) Talk to 5 lost prospects to see if the feature was actually the deciding factor. (3) Assess if cloning the feature plays to our strengths or gets us into a feature-parity arms race we can't win. (4) Consider if there's an asymmetric response—solving the same problem in a way that leverages our unique architecture. Copying is the most expensive strategy because you never catch up.",
                        rubric: "Does the candidate validate the sales claim with data? Do they avoid reactive copying? Do they consider asymmetric competitive responses?"
                    }
                },
            ]
        },

        // ===================== PHASE 3: THE DEFENSE =====================
        {
            phase: "Phase 3: The Defense",
            questions: [
                {
                    id: "pm_p3_v1",
                    title: "Phase 3: The Defense",
                    prompt: "The Sales VP is furious you rejected the Custom Reporting deal. They say you are 'blocking revenue.'\n\nWrite the 2-sentence defense to the CEO.",
                    chart_type: "text_only",
                    grading: {
                        l3_example: "Technically we can't do it right now.",
                        l6_example: "That $100k comes with a $500k maintenance tail. I am protecting our margins from 'Consultingware' that will slow down every future feature release.",
                        rubric: "Does the candidate frame it as 'Protecting Margins' or 'Maintenance Tail'? Do they stand firm on the economic logic?"
                    }
                },
                {
                    id: "pm_p3_v2",
                    title: "Phase 3: The Defense",
                    prompt: "The board asks: 'Why is your product team building for 5,000 users when we have 50,000?'\n\nContext: Usage data shows only 10% of users engage with your new features.\n\nDefend your strategy OR pivot.",
                    chart_type: "text_only",
                    grading: {
                        l3_example: "We're building for our power users because they drive the most value.",
                        l6_example: "I wouldn't defend it—I'd reframe. If 10% adoption is intentional (we're building for a high-value segment that drives 60% of revenue), it's strategic focus. If it's unintentional (we didn't know adoption was 10%), that's a failure of instrumentation. I'd show the revenue concentration: if those 5,000 users represent disproportionate ARR, we're right. If not, we need to pivot to high-reach, low-effort improvements for the other 45,000.",
                        rubric: "Does the candidate use revenue data to defend or pivot? Do they avoid emotional defense? Do they consider both possibilities honestly?"
                    }
                },
                {
                    id: "pm_p3_v3",
                    title: "Phase 3: The Defense",
                    prompt: "You've been PM for 6 months. The product has not moved its North Star Metric (Net Revenue Retention).\n\nThe CEO wants to know what went wrong. What do you say?",
                    chart_type: "text_only",
                    grading: {
                        l3_example: "We shipped the features but they take time to impact metrics.",
                        l6_example: "I'd own it directly: 'We shipped features that addressed symptoms, not root causes. Our NRR is flat because our churn drivers are onboarding friction and time-to-value, not missing features. I've now identified the 3 highest-churn moments in the user journey and am re-prioritizing the next quarter around reducing each by 50%. I should have run this analysis in month 1, not month 6.'",
                        rubric: "Does the candidate take ownership? Do they identify the real churn drivers vs feature shipping? Do they show they learned and adjusted their approach?"
                    }
                },
                {
                    id: "pm_p3_v4",
                    title: "Phase 3: The Defense",
                    prompt: "Engineering says your spec is 'too vague' and they can't start building.\n\nProduct Design says your spec is 'too prescriptive' and kills creativity.\n\nHow do you resolve this without rewriting the spec?",
                    chart_type: "text_only",
                    grading: {
                        l3_example: "I'd schedule a meeting with both teams to align.",
                        l6_example: "These aren't contradictory—they want different things from the same document. Engineers want constraints (API contracts, acceptance criteria, edge cases). Designers want intent (user problem, success metrics, flexibility on how). I'd split the spec: Section 1 = Problem + User Outcome + Success Metrics (for Design). Section 2 = Technical Constraints + Acceptance Criteria + Edge Cases (for Eng). Same spec, two audiences. Takes 30 minutes to reorganize, not days to rewrite.",
                        rubric: "Does the candidate identify that both teams have legitimate needs? Do they find a structural solution (not a process/meeting solution)? Do they avoid rewriting from scratch?"
                    }
                },
            ]
        }
    ]
};

// --- LEGACY COMPAT: Flat QUESTION_BANK for lookups ---
// Build flat lookup from phase bank
function buildFlatBank(): Record<Role, Question[]> {
    const result: Record<Role, Question[]> = { engineering: [], pm: [] };
    for (const role of ['engineering', 'pm'] as Role[]) {
        for (const phase of PHASE_BANK[role]) {
            // Include ALL questions for flat lookup by ID
            result[role].push(...phase.questions);
        }
    }
    return result;
}

export const QUESTION_BANK: Record<Role, Question[]> = buildFlatBank();

// --- Random question selection for a new session ---
export function selectRandomQuestions(role: Role): Question[] {
    const phases = PHASE_BANK[role];
    return phases.map(phase => {
        const idx = Math.floor(Math.random() * phase.questions.length);
        return phase.questions[idx];
    });
}

export const SCENARIOS = {
    engineering: {
        phases: ["Phase 1: Orientation", "Phase 2: The Audit", "Phase 3: The Defense"],
        time_limits: {
            "Phase 1: Orientation": 300,  // 5 min
            "Phase 2: The Audit": 1200,   // 20 min
            "Phase 3: The Defense": 600   // 10 min
        },
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
            "Strategy"
        ]
    }
};
