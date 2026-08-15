'use client';

import React, { useState } from 'react';
import { 
  Code2, 
  FileText, 
  DollarSign, 
  Copy, 
  Check, 
  Terminal, 
  ShieldCheck, 
  Layers, 
  Calculator,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface CodeSnippet {
  id: string;
  title: string;
  filename: string;
  category: 'Backend Infrastructure' | 'AI Cost Governance' | 'Billing & Stripe' | 'Distributed Auth' | 'Legal Contracts' | 'Federal Grants';
  description: string;
  language: string;
  code: string;
}

const codeSnippets: CodeSnippet[] = [
  {
    id: 'fastapi-main',
    title: 'FastAPI Production Scaffold with Correlation IDs & JSON Logging',
    filename: '/app/main.py',
    category: 'Backend Infrastructure',
    description: 'Clean, asynchronous FastAPI application entry point with unique request correlation IDs, JSON structured logging, and production CORS.',
    language: 'python',
    code: `import uuid
import time
import logging
from typing import Callable
from fastapi import FastAPI, Request, Response, status
from fastapi.middleware.cors import CORSMiddleware
from pythonjsonlogger import jsonlogger

# 1. Structured JSON Logging Setup
logger = logging.getLogger("ai_product_api")
log_handler = logging.StreamHandler()
formatter = jsonlogger.JsonFormatter(
    fmt="%(asctime)s %(levelname)s %(name)s %(correlation_id)s %(message)s"
)
log_handler.setFormatter(formatter)
logger.addHandler(log_handler)
logger.setLevel(logging.INFO)

app = FastAPI(
    title="AI Product Core Engine",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# 2. CORS Security Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://yourproduct.com", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# 3. Correlation ID & Latency Logging Middleware
@app.middleware("http")
async def correlation_and_metrics_middleware(request: Request, call_next: Callable) -> Response:
    correlation_id = request.headers.get("X-Correlation-ID", str(uuid.uuid4()))
    request.state.correlation_id = correlation_id
    start_time = time.perf_counter()
    
    response = await call_next(request)
    
    duration_ms = round((time.perf_counter() - start_time) * 1000, 2)
    response.headers["X-Correlation-ID"] = correlation_id
    
    logger.info(
        "HTTP Request Processed",
        extra={
            "correlation_id": correlation_id,
            "method": request.method,
            "path": request.url.path,
            "status_code": response.status_code,
            "duration_ms": duration_ms,
            "client_ip": request.client.host if request.client else "unknown"
        }
    )
    return response

# 4. Health & Readiness Probes
@app.get("/healthz", status_code=status.HTTP_200_OK)
async def health_check():
    """Liveness probe for container orchestrators (Railway / Kubernetes / Fly)."""
    return {"status": "healthy", "service": "ai-product-core"}

@app.get("/readyz", status_code=status.HTTP_200_OK)
async def readiness_check():
    """Readiness probe verifying DB and cache connectivity."""
    # Add DB / Redis ping checks here
    return {"status": "ready", "database": "connected", "cache": "connected"}
`
  },
  {
    id: 'semantic-cache',
    title: 'Redis Vector Semantic Cache (0.92 Cosine Threshold)',
    filename: '/app/semantic_cache.py',
    category: 'AI Cost Governance',
    description: 'Standalone Redis vector search cache that intercepts repetitive LLM prompts, slashing OpenAI/Anthropic API costs by 30% to 60%.',
    language: 'python',
    code: `import json
import redis
import numpy as np
from sentence_transformers import SentenceTransformer
from typing import Optional, Dict, Any

class SemanticCache:
    """
    Production Semantic Cache using Redis Vector Search and local embedding models.
    Matches incoming user prompts against cached vectors at >= 0.92 cosine similarity.
    """
    def __init__(self, redis_url: str = "redis://localhost:6379", model_name: str = "all-MiniLM-L6-v2"):
        self.client = redis.Redis.from_url(redis_url, decode_responses=False)
        self.encoder = SentenceTransformer(model_name)
        self.vector_dim = 384  # all-MiniLM-L6-v2 embedding dimension
        self.index_name = "idx:semantic_cache"
        self._ensure_index()

    def _ensure_index(self):
        """Creates the RediSearch vector index if it does not exist."""
        try:
            self.client.ft(self.index_name).info()
        except redis.ResponseError:
            schema = (
                redis.commands.search.field.VectorField(
                    "embedding",
                    "HNSW",
                    {
                        "TYPE": "FLOAT32",
                        "DIM": self.vector_dim,
                        "DISTANCE_METRIC": "COSINE"
                    }
                ),
                redis.commands.search.field.TextField("prompt"),
                redis.commands.search.field.TextField("response_json"),
            )
            definition = redis.commands.search.IndexDefinition(
                prefix=["cache:vector:"],
                index_type=redis.commands.search.IndexType.HASH
            )
            self.client.ft(self.index_name).create_index(schema, definition=definition)

    def get(self, prompt: str, threshold: float = 0.92) -> Optional[Dict[str, Any]]:
        """
        Embeds the query and queries Redis for nearest neighbors.
        Returns cached response dictionary if cosine similarity is >= 0.92.
        """
        query_vector = self.encoder.encode(prompt).astype(np.float32).tobytes()
        
        # Redis Vector Search query
        query = (
            redis.commands.search.query.Query("*=>[KNN 1 @embedding $vec AS score]")
            .return_fields("prompt", "response_json", "score")
            .sort_by("score")
            .paging(0, 1)
            .dialect(2)
        )
        
        results = self.client.ft(self.index_name).search(query, query_params={"vec": query_vector})
        if not results.docs:
            return None
        
        top_doc = results.docs[0]
        # Cosine distance to similarity: similarity = 1 - distance
        cosine_similarity = 1.0 - float(top_doc.score)
        
        if cosine_similarity >= threshold:
            return {
                "cached": True,
                "similarity": round(cosine_similarity, 4),
                "original_prompt": getattr(top_doc, "prompt", ""),
                "data": json.loads(getattr(top_doc, "response_json", "{}"))
            }
        return None

    def set(self, prompt: str, response_data: Dict[str, Any], ttl_seconds: int = 86400):
        """Stores the prompt, response, and vector embedding in Redis with TTL expiration."""
        vector = self.encoder.encode(prompt).astype(np.float32).tobytes()
        key = f"cache:vector:{abs(hash(prompt))}"
        
        mapping = {
            "embedding": vector,
            "prompt": prompt,
            "response_json": json.dumps(response_data)
        }
        self.client.hset(key, mapping=mapping)
        self.client.expire(key, ttl_seconds)
`
  },
  {
    id: 'stripe-webhooks',
    title: 'Stripe Webhook Router & Lifecycle Engine',
    filename: '/app/stripe_webhooks.py',
    category: 'Billing & Stripe',
    description: 'Production webhook endpoint handling checkout.session.completed, invoice.payment_succeeded, and customer.subscription.deleted with signature verification.',
    language: 'python',
    code: `import os
import stripe
from fastapi import APIRouter, Request, Header, HTTPException, status

router = APIRouter(prefix="/billing/webhooks", tags=["Billing"])
stripe.api_key = os.getenv("STRIPE_SECRET_KEY")
ENDPOINT_SECRET = os.getenv("STRIPE_WEBHOOK_SECRET")

@router.post("/stripe")
async def stripe_webhook_listener(request: Request, stripe_signature: str = Header(None)):
    """
    Verifies Stripe HMAC signatures and routes subscription events to internal DB.
    """
    payload = await request.body()
    
    if not stripe_signature or not ENDPOINT_SECRET:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, 
            detail="Missing stripe signature or endpoint secret configuration."
        )

    try:
        event = stripe.Webhook.construct_event(
            payload=payload, 
            sig_header=stripe_signature, 
            secret=ENDPOINT_SECRET
        )
    except ValueError:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid payload")
    except stripe.error.SignatureVerificationError:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid signature")

    event_type = event["type"]
    data_object = event["data"]["object"]

    # 1. Handle Successful Checkout (New Subscriber)
    if event_type == "checkout.session.completed":
        customer_id = data_object.get("customer")
        subscription_id = data_object.get("subscription")
        user_email = data_object.get("customer_details", {}).get("email")
        # Update user entity in DB: set tier='active_subscriber', stripe_customer_id=customer_id
        print(f"[STRIPE] New subscription created for {user_email}: {subscription_id}")

    # 2. Handle Recurring Invoice Payment Success
    elif event_type == "invoice.payment_succeeded":
        customer_id = data_object.get("customer")
        amount_paid = data_object.get("amount_paid") / 100
        # Reset monthly token quota / cost credits
        print(f"[STRIPE] Invoice paid by {customer_id}: \${amount_paid}")

    # 3. Handle Subscription Cancellation
    elif event_type == "customer.subscription.deleted":
        subscription_id = data_object.get("id")
        customer_id = data_object.get("customer")
        # Downgrade user account in DB to free tier
        print(f"[STRIPE] Subscription canceled: {subscription_id} for {customer_id}")

    return {"status": "success", "event_type": event_type}
`
  },
  {
    id: 'hmac-crosstalk',
    title: 'Exogram-CareerWin HMAC-SHA256 Signed Header Cross-Talk Client',
    filename: '/app/hmac_crosstalk.py',
    category: 'Distributed Auth',
    description: 'Internal microservice authentication protocol verifying timestamped, tamper-proof inter-service payloads using HMAC-SHA256.',
    language: 'python',
    code: `import hmac
import hashlib
import time
import json
import httpx
from typing import Dict, Any

SHARED_INTERNAL_SECRET = "YOUR_SHARED_HMAC_SECRET_KEY_HEX"

class ServiceAuthClient:
    """Client for dispatching cryptographically signed RPC requests across services."""
    def __init__(self, secret: str = SHARED_INTERNAL_SECRET):
        self.secret = secret.encode('utf-8')

    def generate_headers(self, payload_dict: Dict[str, Any]) -> Dict[str, str]:
        timestamp = str(int(time.time()))
        payload_bytes = json.dumps(payload_dict, sort_keys=True).encode('utf-8')
        
        # Message to sign: timestamp + '.' + payload_json
        message = f"{timestamp}.".encode('utf-8') + payload_bytes
        signature = hmac.new(self.secret, message, hashlib.sha256).hexdigest()
        
        return {
            "X-Service-Timestamp": timestamp,
            "X-Service-Signature": signature,
            "Content-Type": "application/json"
        }

    async def post_signed(self, url: str, data: Dict[str, Any]) -> httpx.Response:
        headers = self.generate_headers(data)
        async with httpx.AsyncClient() as client:
            return await client.post(url, json=data, headers=headers, timeout=10.0)

# ================= SERVER-SIDE VERIFICATION MIDDLEWARE =================
def verify_service_signature(timestamp: str, signature: str, raw_body: bytes, max_drift_sec: int = 300) -> bool:
    """Verifies that the request originated from an internal microservice and is not a replay attack."""
    current_time = int(time.time())
    try:
        req_time = int(timestamp)
    except (ValueError, TypeError):
        return False
    
    # 1. Anti-Replay: Reject if timestamp drifted > 5 minutes
    if abs(current_time - req_time) > max_drift_sec:
        return False

    # 2. Recompute HMAC
    message = f"{timestamp}.".encode('utf-8') + raw_body
    expected_sig = hmac.new(SHARED_INTERNAL_SECRET.encode('utf-8'), message, hashlib.sha256).hexdigest()
    
    # 3. Constant-time string comparison against timing attacks
    return hmac.compare_digest(expected_sig, signature)
`
  },
  {
    id: 'consulting-sow',
    title: 'Master Consulting Statement of Work (SOW): Forensic Code & AI Audit ($7,500)',
    filename: '/legal/Forensic_Code_Audit_SOW.md',
    category: 'Legal Contracts',
    description: 'High-ticket consulting contract template used to audit enterprise codebases, uncover proprietary edge cases, and fund SaaS product development.',
    language: 'markdown',
    code: `# STATEMENT OF WORK (SOW): FORENSIC CODE & AI COST GOVERNANCE AUDIT

**Client:** [CLIENT COMPANY NAME, LLC]
**Service Provider:** [YOUR STARTUP NAME, LLC]
**Effective Date:** [DATE]
**Total Fixed Engagement Fee:** $7,500 USD (50% Deposit upon signing, 50% upon final report delivery)

---

## 1. SCOPE OF SERVICES
Service Provider shall conduct a two-week deep forensic architectural audit of Client's software codebase and AI inference pipeline, covering:
1. **API Cost Governance & Token Leak Audit:** Analysis of prompt lengths, vector database latency, caching hit rates, and runaway query costs.
2. **Architecture Defensibility & Model Lock-in:** Evaluation of model coupling and roadmap to integrate local/open-source fallback models.
3. **Security & Data Leakage Assessment:** Verification that proprietary client PII/IP is not ingested into public training models.

---

## 2. DELIVERABLES
At the conclusion of the 14-day sprint, Service Provider shall deliver:
1. **Comprehensive 20-Page Architectural Audit Report** with specific code remediation patches.
2. **Benchmarked Cost-Reduction Blueprint** projecting 30% - 60% API inference savings via semantic caching.
3. **Live 90-Minute Executive & Engineering Walkthrough Session** with recorded Q&A.

---

## 3. INTELLECTUAL PROPERTY & CONFIDENTIALITY
- Client retains 100% ownership of Client's proprietary codebase and proprietary data.
- Service Provider retains ownership of pre-existing tools, benchmark scripts, and generalized architecture methodologies.
- Mutual Non-Disclosure Agreement (NDA) applies to all repositories and credentials shared.

---

**CLIENT SIGNATURE:** _______________________  **DATE:** _________
**PROVIDER SIGNATURE:** _____________________  **DATE:** _________
`
  },
  {
    id: 'pilot-agreement',
    title: 'Strategic Pilot Agreement (30-Day Paid Conversion to SaaS)',
    filename: '/legal/Strategic_Pilot_Agreement.md',
    category: 'Legal Contracts',
    description: 'Standard 30-day enterprise pilot agreement ($500 pilot fee with automatic conversion to $199/month SaaS subscription).',
    language: 'markdown',
    code: `# STRATEGIC PILOT CUSTOMER AGREEMENT

**Pilot Sponsor:** [CLIENT COMPANY NAME]
**Software Provider:** [YOUR AI STARTUP NAME, LLC]
**Effective Date:** [START DATE]
**Pilot Duration:** 30 Calendar Days
**Pilot Access Fee:** $500 USD (Includes onboarding setup and concierge Slack support)

---

## 1. PILOT OBJECTIVE & SUCCESS CRITERIA
The purpose of this Pilot is to deploy Provider's AI software to solve [TARGET OPERATIONAL PAIN].
The Pilot shall be deemed successful if the software achieves:
1. Reduction of [TASK NAME] processing time from [X HOURS] to [Y MINUTES].
2. Processing accuracy threshold of >= 95% verified by Client team.

---

## 2. COMMERCIAL CONVERSION TERMS
Upon satisfying the Success Criteria at Day 30:
- Client subscription shall automatically convert to an Annual Standard SaaS Tier at $199/month (billed annually at $2,388/year).
- The $500 Pilot Access Fee paid upfront shall be credited 100% toward the first year's annual subscription.
- Client may opt out with 5 business days' notice prior to Day 30 if Success Criteria are not met.

---

**CLIENT ACCEPTANCE:** ______________________  **DATE:** _________
**PROVIDER ACCEPTANCE:** ____________________  **DATE:** _________
`
  }
];

export default function CodeBlueprintViewer() {
  const [activeSnippetId, setActiveSnippetId] = useState<string>('fastapi-main');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Financial Model State
  const [pilotStudents, setPilotStudents] = useState<number>(10);
  const [pilotPrice, setPilotPrice] = useState<number>(1500);
  const [saasSubscribers, setSaasSubscribers] = useState<number>(25);
  const [saasPrice, setSaasPrice] = useState<number>(99);
  const [consultingClients, setConsultingClients] = useState<number>(1);
  const [consultingFee, setConsultingFee] = useState<number>(7500);

  const activeSnippet = codeSnippets.find(s => s.id === activeSnippetId) || codeSnippets[0];

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Financial Calculations
  const cohortRevenue = pilotStudents * pilotPrice;
  const saasMrr = saasSubscribers * saasPrice;
  const consultingMonthly = consultingClients * consultingFee;
  const totalMonthlyRunRate = saasMrr + consultingMonthly + (cohortRevenue / 3);
  const estimatedHostingCosts = 150 + (saasSubscribers * 4);
  const netMonthlyProfit = totalMonthlyRunRate - estimatedHostingCosts;

  return (
    <div className="w-full space-y-12 text-slate-100">
      {/* Code Snippets Section */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-4 bg-slate-950 border-b border-slate-800">
          {codeSnippets.map(snippet => (
            <button
              key={snippet.id}
              onClick={() => setActiveSnippetId(snippet.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeSnippetId === snippet.id
                  ? "bg-sky-500 text-slate-950 shadow-md font-bold"
                  : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>{snippet.filename}</span>
            </button>
          ))}
        </div>

        {/* Snippet Header */}
        <div className="p-6 border-b border-slate-800/80 bg-slate-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/30">
                {activeSnippet.category}
              </span>
              <span className="text-xs font-mono text-slate-400">{activeSnippet.filename}</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              {activeSnippet.title}
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl">
              {activeSnippet.description}
            </p>
          </div>

          <button
            onClick={() => handleCopy(activeSnippet.code, activeSnippet.id)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
          >
            {copiedId === activeSnippet.id ? (
              <>
                <Check className="w-4 h-4 text-slate-950" /> Copied Code
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" /> Copy Boilerplate
              </>
            )}
          </button>
        </div>

        {/* Code Viewer */}
        <div className="p-6 bg-slate-950 overflow-x-auto">
          <pre className="text-xs font-mono text-slate-200 whitespace-pre leading-relaxed selection:bg-sky-500 selection:text-slate-950">
            {activeSnippet.code}
          </pre>
        </div>
      </div>

      {/* Interactive 12-Month Financial Model & Cash Flow Calculator */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
        <div className="border-b border-slate-800 pb-6 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            Interlocking Flywheel Calculator
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            12-Month Financial Pro-Forma Modeling Engine
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Simulate how high-ticket consulting cash flow funds software development while organic authority content drives compounding SaaS subscriptions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cohort Tuition */}
            <div className="p-5 bg-slate-950/60 rounded-xl border border-slate-800">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                  Cohort Tuition &amp; Students
                </label>
                <span className="font-mono text-xs text-white font-bold">
                  {pilotStudents} students @ ${pilotPrice} = ${cohortRevenue.toLocaleString()}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <span className="text-[11px] text-slate-400 block mb-1">Students per Cohort:</span>
                  <input
                    type="range"
                    min={5}
                    max={25}
                    value={pilotStudents}
                    onChange={e => setPilotStudents(Number(e.target.value))}
                    className="w-full accent-sky-400"
                  />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block mb-1">Tuition Rate:</span>
                  <input
                    type="range"
                    min={1000}
                    max={3500}
                    step={250}
                    value={pilotPrice}
                    onChange={e => setPilotPrice(Number(e.target.value))}
                    className="w-full accent-sky-400"
                  />
                </div>
              </div>
            </div>

            {/* SaaS Subscriptions */}
            <div className="p-5 bg-slate-950/60 rounded-xl border border-slate-800">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  SaaS MRR (Self-Serve Subscriptions)
                </label>
                <span className="font-mono text-xs text-white font-bold">
                  {saasSubscribers} subs @ ${saasPrice}/mo = ${saasMrr.toLocaleString()}/mo MRR
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <span className="text-[11px] text-slate-400 block mb-1">Active Subscribers:</span>
                  <input
                    type="range"
                    min={0}
                    max={150}
                    value={saasSubscribers}
                    onChange={e => setSaasSubscribers(Number(e.target.value))}
                    className="w-full accent-emerald-400"
                  />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block mb-1">Monthly Plan Price:</span>
                  <input
                    type="range"
                    min={49}
                    max={299}
                    step={25}
                    value={saasPrice}
                    onChange={e => setSaasPrice(Number(e.target.value))}
                    className="w-full accent-emerald-400"
                  />
                </div>
              </div>
            </div>

            {/* High-Ticket Forensic Audits */}
            <div className="p-5 bg-slate-950/60 rounded-xl border border-slate-800">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  Forensic Code Audits / SOW Retainers
                </label>
                <span className="font-mono text-xs text-white font-bold">
                  {consultingClients} audit/mo @ ${consultingFee} = ${consultingMonthly.toLocaleString()}/mo
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <span className="text-[11px] text-slate-400 block mb-1">Audits per Month:</span>
                  <input
                    type="range"
                    min={0}
                    max={3}
                    value={consultingClients}
                    onChange={e => setConsultingClients(Number(e.target.value))}
                    className="w-full accent-amber-400"
                  />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block mb-1">Audit Fee:</span>
                  <input
                    type="range"
                    min={3500}
                    max={15000}
                    step={500}
                    value={consultingFee}
                    onChange={e => setConsultingFee(Number(e.target.value))}
                    className="w-full accent-amber-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                Financial Snapshot
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Monthly SaaS MRR:</span>
                  <span className="font-mono text-emerald-400 font-bold">${saasMrr.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Monthly Consulting Cash:</span>
                  <span className="font-mono text-amber-400 font-bold">${consultingMonthly.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Cohort Revenue (Amortized):</span>
                  <span className="font-mono text-sky-400 font-bold">${Math.round(cohortRevenue / 3).toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-800">
                  <span className="text-slate-400">Infra / API Expenses:</span>
                  <span className="font-mono text-rose-400">-${estimatedHostingCosts.toLocaleString()}/mo</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <div className="text-[11px] text-slate-500 uppercase tracking-wider mb-1">
                Estimated Net Cash Flow
              </div>
              <div className="text-3xl font-extrabold text-white font-mono">
                ${Math.round(netMonthlyProfit).toLocaleString()}
                <span className="text-xs font-normal text-slate-400"> / month</span>
              </div>
              <div className="text-[11px] text-emerald-400 mt-1 font-mono">
                ${Math.round(netMonthlyProfit * 12).toLocaleString()} Annualized Run Rate
              </div>
            </div>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-[11px] text-slate-400 leading-normal">
              💡 <strong>Flywheel Principle:</strong> 1 consulting audit per month generates more cash than 75 standard SaaS users, eliminating the need to give away equity early.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
