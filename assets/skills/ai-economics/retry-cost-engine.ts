/**
 * RETRY COST ENGINE
 * 
 * Middleware that tracks the accumulating API cost of an agentic session.
 * Triggers a governance halt if the synthetic COGS exceed the value of the task.
 */

export class RetryCostEngine {
  private readonly COST_PER_1M_INPUT = 3.00;
  private readonly COST_PER_1M_OUTPUT = 15.00;
  
  private currentSessionTokens = { input: 0, output: 0 };
  private sessionBudgetUSD: number;

  constructor(maxBudgetUSD: number = 2.00) {
    this.sessionBudgetUSD = maxBudgetUSD;
  }

  /**
   * Called after every LLM generation to update the running cost total.
   */
  public logTokens(inputTokens: number, outputTokens: number) {
    this.currentSessionTokens.input += inputTokens;
    this.currentSessionTokens.output += outputTokens;
    
    this.enforceBudgetBoundary();
  }

  private calculateCurrentCost(): number {
    const inputCost = (this.currentSessionTokens.input / 1_000_000) * this.COST_PER_1M_INPUT;
    const outputCost = (this.currentSessionTokens.output / 1_000_000) * this.COST_PER_1M_OUTPUT;
    return inputCost + outputCost;
  }

  private enforceBudgetBoundary() {
    const currentCost = this.calculateCurrentCost();
    
    if (currentCost >= this.sessionBudgetUSD) {
      console.error(`[ECONOMIC HALT] Session budget of $${this.sessionBudgetUSD} exceeded. (Current: $${currentCost.toFixed(2)})`);
      console.error("[ECONOMIC HALT] Agent is likely caught in a retry loop. Forcing semantic reset.");
      
      // Physically sever the orchestrator to prevent further API burn
      throw new Error("ECONOMIC_CIRCUIT_BREAKER_TRIPPED");
    }
  }
}
