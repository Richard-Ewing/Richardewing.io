/**
 * COST CONTAINMENT ENGINE
 * 
 * Middleware that calculates exact USD burn in real-time and enforces
 * the financial circuit breaker if limits are exceeded.
 */

export class CostContainmentEngine {
  private readonly pricingModels: Record<string, { in: number, out: number }> = {
    "claude-3-5-sonnet": { in: 3.00, out: 15.00 },
    "gpt-4o": { in: 5.00, out: 15.00 },
    "gpt-4o-mini": { in: 0.15, out: 0.60 }
  };

  private sessionSpendUSD = 0;
  private budgetCeilingUSD: number;

  constructor(budgetCeilingUSD: number = 2.00) {
    this.budgetCeilingUSD = budgetCeilingUSD;
  }

  /**
   * Called by the orchestrator after every LLM execution turn.
   */
  public logTurnAndEvaluate(model: string, inputTokens: number, outputTokens: number): string {
    const pricing = this.pricingModels[model];
    if (!pricing) {
      throw new Error(`[FATAL] Unknown model ${model}. Halting to prevent unpriced inference.`);
    }

    const inputCost = (inputTokens / 1_000_000) * pricing.in;
    const outputCost = (outputTokens / 1_000_000) * pricing.out;
    const turnCost = inputCost + outputCost;

    this.sessionSpendUSD += turnCost;

    console.log(`[FINANCE] Turn Cost: $${turnCost.toFixed(4)}. Total Session Spend: $${this.sessionSpendUSD.toFixed(4)}`);

    if (this.sessionSpendUSD >= this.budgetCeilingUSD) {
      return this.triggerCircuitBreaker();
    }

    return "BUDGET_OK";
  }

  private triggerCircuitBreaker(): string {
    console.error("\n========================================================");
    console.error("🚨 [FATAL] AI COST CONTAINMENT BREACH DETECTED 🚨");
    console.error("========================================================");
    console.error(`Session Budget Exceeded: $${this.sessionSpendUSD.toFixed(2)} / $${this.budgetCeilingUSD.toFixed(2)}`);
    console.error("Action: Severing API connection.");
    
    throw new Error("ECONOMIC_CIRCUIT_BREAKER_TRIPPED");
  }
}
