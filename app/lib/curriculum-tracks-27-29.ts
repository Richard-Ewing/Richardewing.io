import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks27to29Modules: Record<string, CurriculumModule> = {};

const t27 = 'Track 27 — SLMs & Edge Intelligence';
const t28 = 'Track 28 — Agentic Process Automation (APA)';
const t29 = 'Track 29 — AI Supply Chain & GPU FinOps';

// ═══════════════════ TRACK 27: SLMs & EDGE INTELLIGENCE (10 Modules) ═══════════════════

tracks27to29Modules['27-1'] = m('27-1', 'The SLM Structural Shift', 'Parameters vs. Performance and Edge Scaling.', t27, 
    ['Map out parameter utility', 'Calculate API cost avoidance'], [
        l('The Decline of the Hyperscalers', 
            ['Using GPT-4.5 to parse an email is like using a supercomputer to calculate a tip. Narrower, heavily optimized 8B parameter Local Models (SLMs) perform specific tasks with 99% accuracy at 1% of the API cost.'],
            [d('Inference Margin Replacement', 'Annual savings using local models instead of APIs.', 'Drop OpEx by 80%')], 'Audit your LLM API consumption and identify low-reasoning tasks suitable for SLM offload.', undefined, undefined)
    ], '/vault/curriculum/tracks/27/27-2', undefined, 'live'
);

tracks27to29Modules['27-2'] = m('27-2', 'Quantization Physics', 'FP16, INT8, AWQ, and Lossless Compression.', t27, 
    ['Master quantization formats (GGUF)', 'Calculate VRAM ceilings'], [
        l('Squeezing Intelligence into Silicon', 
            ['A standard 8B parameter model in FP16 precision takes 16GB of VRAM. By mathematically rounding the weights down to 4-bit integers (AWQ/GGUF formatting), it fits snugly into 5GB with less than a 2% perplexity drop.'],
            [d('Quantization Perplexity Hit', 'Degradation of intelligence via compression.', '< 2% at 4-bit')], 'Download Ollama and run a q4_K_M GGUF model locally.', undefined, undefined)
    ], '/vault/curriculum/tracks/27/27-3', undefined, 'live'
);

tracks27to29Modules['27-3'] = m('27-3', 'On-Device Inferencing', 'WebGPU and CoreML pipelines.', t27, 
    ['Deploy AI inside the browser', 'Eradicate server-side compute'], [
        l('Zero Marginal Server Costs', 
            ['If the model runs directly inside the user’s Chrome browser via WebGPU, your server compute cost is absolute zero. You offload the entire financial inference burden onto the client’s hardware.'],
            [d('Server Execution Cost', 'Compute cost per user query.', '$0.00')], 'Integrate WebLLM.js to run a small Llama model inside your local index.html.', undefined, undefined)
    ], '/vault/curriculum/tracks/27/27-4', undefined, 'live'
);

tracks27to29Modules['27-4'] = m('27-4', 'Hybrid Cloud-Edge Routing', 'Intent Classification and Privacy Fallbacks.', t27, 
    ['Route prompts dynamically', 'Maintain PII locally'], [
        l('The Router Architecture', 
            ['A lightweight, local Intent Classifier parses incoming user text. If the text contains PII or is a simplistic formatting task, it routes to the local SLM. If it requires massive logical extraction, it strips PII and punts to GPT-4 in the cloud.'],
            [d('Local Routing Threshold', 'Percentage of traffic resolved on-device.', '> 60% Target')], 'Build a regex or small SLM script that specifically detects PII before API transmission.', undefined, undefined)
    ], '/vault/curriculum/tracks/27/27-5', undefined, 'live'
);

tracks27to29Modules['27-5'] = m('27-5', 'Edge ROI & Serverless Economics', 'Battery Drain vs API latency.', t27, 
    ['Measure mobile thermal loads', 'Price the hybrid model'], [
        l('The Battery Tax', 
            ['Running an LLM on an iPhone 15 Pro uses the Neural Engine efficiently, but still dumps massive thermal loads and battery drain. You must calculate if draining 5% of the user’s battery is worth saving $0.001 in API calls.'],
            [d('Mobile Thermal Limit', 'Maximum sustained inference loops on mobile.', '< 3 Minutes')], 'Test CoreML execution loops and monitor the battery degradation chart via Xcode.', undefined, undefined)
    ], '/vault/curriculum/tracks/27/27-6', undefined, 'live'
);

tracks27to29Modules['27-6'] = m('27-6', 'VRAM Allocation Tactics', 'Memory Ballooning, Swapping Models to Disk.', t27, 
    ['Understand the KV Cache', 'Prevent out-of-memory (OOM) crashes'], [
        l('The KV Cache Explosion', 
            ['An LLM uses VRAM not just for its weights, but to store the sliding context window (KV Cache). Reading a 100K token document locally will instantly spike the VRAM requirements by 6GB standalone.'],
            [d('KV Cache Footprint', 'Growth of memory per 10k tokens processed.', 'Linear & Heavy')], 'Measure the RAM ballooning when pasting a massive transcript into a local model.', undefined, undefined)
    ], '/vault/curriculum/tracks/27/27-7', undefined, 'live'
);

tracks27to29Modules['27-7'] = m('27-7', 'Local Vector Embeddings', 'Executing RAG entirely on mobile.', t27, 
    ['Execute SQLite Vector extensions', 'Run local semantic search'], [
        l('The Disconnected RAG Stack', 
            ['You do not need Pinecone or massive SaaS databases for personal RAG. Compiling `sqlite-vss` locally allows a mobile app to construct and query its own vector embeddings while entirely offline in airplane mode.'],
            [d('Offline Embedding Latency', 'Time to embed and query on an M-series chip.', '< 50ms')], 'Deploy an offline vector search using purely `sqlite-vss`.', undefined, undefined)
    ], '/vault/curriculum/tracks/27/27-8', undefined, 'live'
);

tracks27to29Modules['27-8'] = m('27-8', 'Peer-to-Peer LLM Networking', 'Gossip Protocols for Decentralization.', t27, 
    ['Shard inference across local networks', 'Cluster local laptops into supercomputers'], [
        l('Swarm Inferencing', 
            ['If you have 10 engineers with MacBooks in an office, their combined VRAM is over 320GB. Using distributed frameworks (e.g. Petals), you can load a 70B parameter model across the office LAN with zero configuration overhead.'],
            [d('Distributed Latency Penalty', 'Time lost hopping between Macs via WiFi.', 'Low enough for Chat')], 'Test connecting two local machines via llama.cpp RPC server.', undefined, undefined)
    ], '/vault/curriculum/tracks/27/27-9', undefined, 'live'
);

tracks27to29Modules['27-9'] = m('27-9', 'The IoT Inference Factor', 'Raspberry Pi and Edge TPUs.', t27, 
    ['Deploy micro-models on extreme edge hardware', 'Understand thermal throttling'], [
        l('Intelligence at the Camera', 
            ['Instead of streaming gigabytes of raw video feed to an AWS server for analysis (massive EGRESS costs), you install a $100 Google Coral Edge TPU adjacent to the camera. The TPU runs a vision SLM and only transmits a JSON payload of: `{"event": "trespasser detected"}`.'],
            [d('Video Egress Elimination', 'Data transit vs JSON payload size.', '-99.9% Transit Cost')], 'Price out the hardware CapEx of adding TPUs vs the OpEx of video streaming.', undefined, undefined)
    ], '/vault/curriculum/tracks/27/27-10', undefined, 'live'
);

tracks27to29Modules['27-10'] = m('27-10', 'Zero-Trust Hardware Architectures', 'Secure Enclaves (TEE).', t27, 
    ['Lock down sensitive local weights', 'Prevent model theft on-device'], [
        l('Securing IP on the Edge', 
            ['If you deploy a proprietary SLM to a medical tablet, the first thing a competitor will do is extract the SD card and steal the weights. You must run the inference within a hardware Trusted Execution Environment (TEE).'],
            [d('Weight Theft Risk', 'Ability for an adversary to read the local .gguf file.', 'Mitigated via TEE')], 'Research Apple Secure Enclave capabilities for storing quantized weights.', undefined, undefined)
    ], undefined, undefined, 'live'
);

// ═══════════════════ TRACK 28: AGENTIC PROCESS AUTOMATION (10 Modules) ═══════════════════

tracks27to29Modules['28-1'] = m('28-1', 'Beyond Rules-Based RPA', 'Action Space and Semantic Selectors.', t28, 
    ['Escape brittleness of RPA', 'Implement DOM understanding'], [
        l('The Death of XPath RPA', 
            ['Legacy RPA breaks the moment a website changes a CSS class name. Agentic Automation reads the DOM semantically: it knows the "Submit" button is the submit button, regardless of what div it lives inside.'],
            [d('RPA Breakage Rate', 'Percentage of automated scripts requiring manual maintenance.', 'Plummets to near-zero')], 'Replace a brittle Python Selenium script with an LLM-based intelligent scraper.', undefined, undefined)
    ], '/vault/curriculum/tracks/28/28-2', undefined, 'live'
);

tracks27to29Modules['28-2'] = m('28-2', 'Multi-Agent Orchestration', 'Supervisor Patterns and Handoff Protocols.', t28, 
    ['Architect agent hierarchies', 'Implement the Manager-Worker topology'], [
        l('The Corporate Agent Topology', 
            ['Handing massive tasks to a single agent induces hallucinations. You must structure them like a corporation: A Supervisor Agent breaks the task down, dispatches it to highly-specialized Worker Agents (e.g. Scraper, Summarizer), and synthesizes the results.'],
            [d('Hallucination Containment', 'Reduced scope error rate via specialization.', 'High Efficacy')], 'Draw a flowchart mapping a 3-agent orchestration flow.', undefined, undefined)
    ], '/vault/curriculum/tracks/28/28-3', undefined, 'live'
);

tracks27to29Modules['28-3'] = m('28-3', 'Self-Healing Workflows', 'Error Recovery and Reflection Loops.', t28, 
    ['Implement deterministic retries', 'Use AI reflection algorithms'], [
        l('The Reflection Loop Engine', 
            ['When an agent encounters a 404 error, a brittle script throws a stack trace. An Agent reads the error, executes a "Reflection" prompt on its own failure, determines a different URL path, and tries again autonomously.'],
            [d('Autonomous Recovery Check', 'Ability for an agent to fix its own exception.', 'Required Element')], 'Engineer a loop where an LLM recursively evaluates its own output against a test case until passing.', undefined, undefined)
    ], '/vault/curriculum/tracks/28/28-4', undefined, 'live'
);

tracks27to29Modules['28-4'] = m('28-4', 'Human-in-the-Loop Safeguards', 'Confidence Thresholds and Approval Chains.', t28, 
    ['Calculate autonomous danger thresholds', 'Engineer asynchronous approvals'], [
        l('The Asynchronous Pause', 
            ['Agents must run freely for 99% of workflows, but pause instantly when a Confidence Metric drops below an 85% threshold, pinging a Human on Slack with: "I am about to wire $5,000. Proceed?"'],
            [d('Confidence Decay Point', 'The exact mathematical limit requiring a human yes.', '< 85% Certainty')], 'Implement a Slack/Webhook integration that physically pauses an execution script until a button is clicked.', undefined, undefined)
    ], '/vault/curriculum/tracks/28/28-5', undefined, 'live'
);

tracks27to29Modules['28-5'] = m('28-5', 'The Future of BPO', 'Business Process Outsourcing Disruption.', t28, 
    ['Model FTE displacement ROI', 'Transition from headcount to compute'], [
        l('From 5,000 FTEs to 50 Servers', 
            ['Invoice processing, data entry, and level-1 support are completely dead as offshore models. You must rewrite the enterprise P&L mapping the transition from human capital expenditure to specialized agent compute.'],
            [d('Compute vs FTE Margin', 'Cost ratio of processing 10k invoices via AI vs Humans.', 'Usually 1:20')], 'Map your company’s highest-volume manual data entry task directly into an agent cost model.', undefined, undefined)
    ], '/vault/curriculum/tracks/28/28-6', undefined, 'live'
);

tracks27to29Modules['28-6'] = m('28-6', 'The DOM Crawling Tax', 'Headless Browser Compute Costs.', t28, 
    ['Calculate Playwright instance overhead', 'Evade rate limit bans at scale'], [
        l('Browsing is Computationally Heavy', 
            ['Running 100 concurrent agents navigating Amazon via Headless Chrome will melt your server CPU and instantly attract Cloudflare IP bans. Advanced APA proxies the HTTP stream and uses raw AST/JSON parsing to avoid rendering the heavy UI.'],
            [d('Headless CPU Penalty', 'The extra compute required to render a headless DOM.', 'Massive vs HTTP')], 'Compare the CPU util of a Playwright script vs a raw python `requests` fetch.', undefined, undefined)
    ], '/vault/curriculum/tracks/28/28-7', undefined, 'live'
);

tracks27to29Modules['28-7'] = m('28-7', 'Stateful Memory in Agents', 'Long-term context persistence.', t28, 
    ['Implement core memory vs working memory', 'Prevent Thread collapse'], [
        l('The Episodic Memory Bank', 
            ['Just feeding thousands of vectors into an agent prompt eventually causes it to crash. You need Core Memory (Hardcoded identity), Working Memory (Current Task Buffer), and Episodic Memory (A separate DB indexing past actions for retrieval).'],
            [d('Token Buffer Overrun', 'When the conversation thread crashes the API limit.', 'Prevented via DB architecture')], 'Study the MemGPT architecture for long-term agent persistence.', undefined, undefined)
    ], '/vault/curriculum/tracks/28/28-8', undefined, 'live'
);

tracks27to29Modules['28-8'] = m('28-8', 'API Economy Destruction', 'Bypassing API Paywalls via UI execution.', t28, 
    ['Bypass corporate integrations', 'Treat the website as the API'], [
        l('The UI as the Final Interface', 
            ['SaaS companies want you to pay $5,000/mo for API access. An autonomous agent equipped with Playwright logs into the UI as a normal human and extracts reality. 100% of the web is now programmatic, whether an API exists or not.'],
            [d('API Licensing Cost Avoidance', 'ROI of ignoring official enterprise tier pricing.', 'Maximum leverage')], 'Program an agent to click through a UI portal that actively refused you API access.', undefined, undefined)
    ], '/vault/curriculum/tracks/28/28-9', undefined, 'live'
);

tracks27to29Modules['28-9'] = m('28-9', 'Deterministic UI Toolchains', 'Playwright integrations and Selenium ROI.', t28, 
    ['Retire Selenium', 'Instrument Playwright locator networks'], [
        l('Providing "Eyes" to Agents', 
            ['Passing raw HTML to an LLM exceeds the context window instantly. You must strip CSS/JS, and pass an Accessibility Tree (A11y) mapping. The LLM tells Playwright "Click element ID #4".'],
            [d('Accessibility Tree Reduction', 'Token savings vs raw HTML.', '-90% Context Size')], 'Strip a webpage down to purely its accessible links and buttons.', undefined, undefined)
    ], '/vault/curriculum/tracks/28/28-10', undefined, 'live'
);

tracks27to29Modules['28-10'] = m('28-10', 'Zero-Shot Agent Workloads', 'Handling Unseen Interfaces.', t28, 
    ['Navigate completely novel environments', 'Deploy Universal UI execution'], [
        l('The Ultimate APA Frontier', 
            ['A truly advanced agent is dropped into an internal legacy portal it has never seen, provided a goal ("Download the March invoices"), and it maps the UI, registers the errors, and achieves the goal completely autonomously.'],
            [d('Zero-Shot Success Rate', 'Ability to navigate a novel GUI without hardcoding.', 'The Golden Standard')], 'Architect the error-catching loops necessary for an agent to survive a completely novel UI environment.', undefined, undefined)
    ], undefined, undefined, 'live'
);

// ═══════════════════ TRACK 29: AI SUPPLY CHAIN & GPU FINOPS (10 Modules) ═══════════════════

tracks27to29Modules['29-1'] = m('29-1', 'Hardware Monopolies & Moats', 'NVIDIA Dominance and Custom Silicon.', t29, 
    ['Analyze the CUDA Moat', 'Understand TPU/Inferentia capabilities'], [
        l('The Platform Monopoly', 
            ['NVIDIA’s dominance is not strictly in silicon; it is in the CUDA software layer that 95% of AI researchers use. Competing hardware (AMD MI300X, AWS Inferentia) works, but suffers from massive software compatibility friction.'],
            [d('Silicon Lock-In Margin', 'The extra cost paid specifically for NVIDIA brand.', 'Massive Premium')], 'Evaluate AWS Trainium instances—are your PyTorch models compatible with minor tweaks?', undefined, undefined)
    ], '/vault/curriculum/tracks/29/29-2', undefined, 'live'
);

tracks27to29Modules['29-2'] = m('29-2', 'Cloud GPU Procurement', 'Reserved Instances vs. Spot Markets.', t29, 
    ['Architect for preemptible instances', 'Slash compute bills via Spot'], [
        l('Living on the Spot Edge', 
            ['Renting H100s on-demand will bankrupt a project in days. Using Spot Instances (which can be terminated at any moment) slashes the bill by 70%. But your training architecture must be continuously snapshotting its weights to avoid losing days of work.'],
            [d('Spot Cost Delta', 'Savings versus On-Demand pricing.', '-60% to -80%')], 'Architect a Checkpoint saving system in Python that saves state every 10 minutes.', undefined, undefined)
    ], '/vault/curriculum/tracks/29/29-3', undefined, 'live'
);

tracks27to29Modules['29-3'] = m('29-3', 'Token-Level Cost Accounting', 'Batching Economics and Throughput.', t29, 
    ['Implement continuous batching', 'Maximize GPU utilization rate'], [
        l('Empty VRAM is Burned Cash', 
            ['If a GPU only processes a single user\'s sequence at a time, 80% of its silicon sits idle waiting for memory. "Continuous Batching" weaves dozens of users\' sequences together simultaneously, quintupling the throughput of the same hardware.'],
            [d('Throughput Multiplier', 'Efficacy of continuous batching architectures.', '5x Output')], 'Investigate vLLM as an engine to enforce strict continuous batching algorithms.', undefined, undefined)
    ], '/vault/curriculum/tracks/29/29-4', undefined, 'live'
);

tracks27to29Modules['29-4'] = m('29-4', 'Cache Hierarchies & Vector DBs', 'Semantic Caching pricing.', t29, 
    ['Implement strict LLM Caches', 'Bypass the model entirely'], [
        l('The Prompt Never Touches the LLM', 
            ['If 100 users ask "How do I reset my password?", routing that to an LLM 100 times is burning compute. Implement Semantic Caching: if a prompt is 95% similar to a solved prompt, return the cached answer out of Redis instantly.'],
            [d('Semantic Cache Hit Margin', 'API bypass rate.', 'Complete Elimination of API fee')], 'Deploy Redis with Vector similarity to intercept prompts before the LLM router.', undefined, undefined)
    ], '/vault/curriculum/tracks/29/29-5', undefined, 'live'
);

tracks27to29Modules['29-5'] = m('29-5', 'Predictable Margins in AI SaaS', 'COGS Forecasting and Tier Dynamics.', t29, 
    ['Align subscription tiers with compute burnout', 'Enforce hard token limits'], [
        l('The Unlimited Plan Bankruptcy', 
            ['If you offer a $20/mo "unlimited AI" B2C plan, power users will generate $400/mo in inference costs in automated backgrounds. You must implement aggressive token abstraction credits and hard throttling limits.'],
            [d('Unit Economics Danger Zone', 'Cost of Goods Sold (COGS) exceeds Subscription Revenue.', 'Death Spiral')], 'Calculate the strict token allowance that equates exactly to $5 of OpEx per subscriber.', undefined, undefined)
    ], '/vault/curriculum/tracks/29/29-6', undefined, 'live'
);

tracks27to29Modules['29-6'] = m('29-6', 'Energy Grid Capitalization', 'Data Center Power Ceilings.', t29, 
    ['Understand megawatts limits', 'Model nuclear Small Modular Reactors (SMRs)'], [
        l('The Grid Bottleneck', 
            ['We are no longer constrained by silicon supply; we are constrained by the physical electrical grid. Creating a 1-Gigawatt data center to train GPT-6 requires bypassing standard energy routes, integrating directly with nuclear power sites.'],
            [d('Power Constraint Limit', 'Megawatts required per 10k GPU cluster.', 'Huge Power Drain')], 'Review the energy mapping required for 100,000 H100 clusters.', undefined, undefined)
    ], '/vault/curriculum/tracks/29/29-7', undefined, 'live'
);

tracks27to29Modules['29-7'] = m('29-7', 'Cross-Cloud Weight Transfers', 'Egress Taxation on 400B Parameter Models.', t29, 
    ['Eliminate Egress lock-in', 'Strategize multi-cloud failovers'], [
        l('The Egress Hostage Crisis', 
            ['Your model weights are 800 Gigabytes. Moving them from AWS to GCP daily creates an insane egress invoice. Keep inference computing precisely adjacent to where the mass data lakes are stored.'],
            [d('Weight Egress Tax', 'Cost of migrating core 400B logic across networks.', 'Prohibitive')], 'Price out transferring 1 Terabyte out of AWS us-east-1.', undefined, undefined)
    ], '/vault/curriculum/tracks/29/29-8', undefined, 'live'
);

tracks27to29Modules['29-8'] = m('29-8', 'Liquid Cooling Architecture ROI', 'Thermal Limits and Rack Density.', t29, 
    ['Understand direct-to-chip cooling', 'Calculate PUE constraints'], [
        l('Air Cooling is Dead', 
            ['Grace Blackwell (GB200) superchips burn too hot to be cooled by traditional HVAC air flows. Rack density has intensified to the point where Direct Liquid Cooling (DLC) infrastructure is a strict prerequisite for next-gen hardware.'],
            [d('PUE Upgrade Costs', 'Capital required to refit massive data centers for DLC.', 'Massive CapEx')], 'Understand the infrastructure shift from standard air-racks to liquid interconnects.', undefined, undefined)
    ], '/vault/curriculum/tracks/29/29-9', undefined, 'live'
);

tracks27to29Modules['29-9'] = m('29-9', 'Sovereign AI Hardware Policy', 'Export Controls and TSMC Geographic Dependency.', t29, 
    ['Hedge geopolitical risks', 'Track export restriction margins'], [
        l('The Taiwan Chokepoint', 
            ['100% of high-end AI silicon flows through a single physical island. Geopolitical instability is not a hypothetical risk; it is a direct line item in enterprise AI continuity forecasting.'],
            [d('Geopolitical Latency Risk', 'Delay in hardware procurement due to embargos.', 'Years')], 'Establish a contingency plan for relying on older domestic fabrication nodes.', undefined, undefined)
    ], '/vault/curriculum/tracks/29/29-10', undefined, 'live'
);

tracks27to29Modules['29-10'] = m('29-10', 'Capstone: AI FinOps Integration', 'Mapping GPU Spend to Enterprise ARR.', t29, 
    ['Implement exact token to dollar tracking', 'Calculate Net Compute Margins'], [
        l('The Ultimate Dashboard', 
            ['Every single prompt, every API call, and every local inferencing task must be uniquely tethered to the user ID and summed against their subscription tier. In AI, if you cannot measure the per-unit cost, you will burn capital instantly.'],
            [d('Profit per User/Compute Match', 'EBITDA generated vs GPU burned.', 'Calculated Daily')], 'Link your Datadog monitoring directly to your Stripe billing endpoints.', undefined, undefined)
    ], undefined, undefined, 'live'
);
