/**
 * RETRY BURN ENGINE
 * 
 * Middleware that tracks real-time token burn and physically severs
 * the orchestration loop if the session exceeds its USD budget.
 */

export class RetryBurnEngine {
  private readonly COST_PER_1M_INPUT = 3.00;
  private readonly COST_PER_1M_OUTPUT = 15.00;
  
  private sessionBurn = { inputTokens: 0, outputTokens: 0, usdCost: 0 };
  private maxBudgetUSD: number;

  constructor(budgetUSD: number = 2.50) {
    this.maxBudgetUSD = budgetUSD;
  }

  /**
   * Called by the orchestrator after every LLM API response.
   */
  public logBurn(input: number, output: number) {
    this.sessionBurn.inputTokens += input;
    this.sessionBurn.outputTokens += output;
    
    const inputCost = (this.sessionBurn.inputTokens / 1_000_000) * this.COST_PER_1M_INPUT;
    const outputCost = (this.sessionBurn.outputTokens / 1_000_000) * this.COST_PER_1M_OUTPUT;
    
    this.sessionBurn.usdCost = inputCost + outputCost;

    if (this.sessionBurn.usdCost >= this.maxBudgetUSD) {
      this.triggerEconomicHalt();
    }
  }

  private triggerEconomicHalt() {
    console.error("\n========================================================");
    console.error("🚨 [FATAL] ECONOMIC CONTAINMENT BREACH DETECTED 🚨");
    console.error("========================================================");
    console.error(`Session Budget Exceeded: $${this.sessionBurn.usdCost.toFixed(2)} / $${this.maxBudgetUSD.toFixed(2)}`);
    console.error("Action: Severing orchestrator connection to LLM provider to prevent infinite billing spiral.");
    
    throw new Error("RETRY_INFLATION_CIRCUIT_BREAKER_TRIPPED");
  }
}
