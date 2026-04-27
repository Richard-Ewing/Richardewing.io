# Executive Diagnostic Toolkit
## Module 2: AI Unit Economics Breakdown (AUEB) Matrix

Confidential template for auditing the profitability and gross margins of AI/LLM product features.

### 1. The Gross Margin Equation
Unlike traditional software, AI features introduce significant Variable COGS (Cost of Goods Sold). If your pricing model does not account for token consumption, scaling your user base will accelerate your cash burn.

**The Formula:**
`Monthly Feature Margin = (Subscription Price / Users) - (Total Inference Cost + API Overhead + RAG Infrastructure Cost)`

### 2. Core Economic Inputs
When conducting diligence on an AI product, audit these four variables:

- **Cost Per 1K Tokens:** The raw foundational model cost (e.g., GPT-4o, Claude 3.5 Sonnet).
- **Queries Per User / Month:** The average usage frequency. High usage without rate limits destroys margins.
- **RAG Pipeline Overhead:** Vector database queries, embedding generation, and data retrieval costs.
- **Context Window Utilization:** Sending 100K tokens of context on every query will bankrupt an application, even if the model is cheap.

### 3. Red Flags (The Insolvency Indicators)
During technical due diligence, flag any organization exhibiting:

- 🔴 **Flat-Rate Pricing:** Charging a flat $20/month for unlimited AI usage guarantees negative margins for power users.
- 🔴 **No Model Routing:** Sending basic classification tasks to premium models (e.g., GPT-4) instead of cheaper models (e.g., GPT-4o-mini).
- 🔴 **Zero Guardrails:** Lacking token limits or programmatic cutoffs for runaway inference loops.

### 4. Action Items & Remediation
- **Implement Tiered Rate Limits:** Limit context windows and query frequencies based on subscription tiers.
- **Right-Size Models:** Implement a router. Use cheap, fast models for 80% of queries, and reserve heavy models for complex reasoning.
- **Cache Inference:** Cache frequent semantic requests to avoid hitting the LLM API for redundant questions.

---
*Use this framework in conjunction with the live AUEB Calculator at richardewing.io/tools/aueb to visualize your insolvency thresholds.*
