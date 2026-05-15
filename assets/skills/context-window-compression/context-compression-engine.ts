/**
 * CONTEXT COMPRESSION ENGINE
 * 
 * Middleware that intercepts the LLM message array and forcibly truncates
 * it to a defined maximum token bound based on priority tiers.
 */

export class ContextCompressionEngine {
  private readonly MAX_TOKENS = 8000;

  /**
   * Compresses the message history.
   * Assumes messages are pre-tagged with a priority: P0 (Critical) to P4 (Low)
   */
  public compressContext(messages: any[]): any[] {
    let currentTokens = this.estimateTokens(messages);

    if (currentTokens <= this.MAX_TOKENS) {
      return messages; // No compression needed
    }

    console.warn(`[GOVERNANCE] Context window saturated (${currentTokens} > ${this.MAX_TOKENS}). Initiating compression.`);

    // 1. Drop P4 (Old execution logs)
    let compressed = messages.filter(m => m.priority !== 'P4');
    
    // 2. If still over, drop P3 (Old conversation history)
    if (this.estimateTokens(compressed) > this.MAX_TOKENS) {
      compressed = compressed.filter(m => m.priority !== 'P3');
    }

    // 3. If still over, truncate P2 (Current file context)
    if (this.estimateTokens(compressed) > this.MAX_TOKENS) {
      compressed = this.truncateP2Payloads(compressed);
    }

    // Ensure P0 (System Prompt/Governance) is NEVER touched.
    const finalTokens = this.estimateTokens(compressed);
    console.log(`[GOVERNANCE] Compression complete. New token payload: ${finalTokens}`);

    return compressed;
  }

  private estimateTokens(messages: any[]): number {
    // Highly simplified estimation (1 token ~= 4 chars)
    return Math.floor(JSON.stringify(messages).length / 4);
  }

  private truncateP2Payloads(messages: any[]): any[] {
    return messages.map(m => {
      if (m.priority === 'P2' && m.content.length > 2000) {
        return { ...m, content: m.content.substring(0, 2000) + "\n...[TRUNCATED BY GOVERNANCE]..." };
      }
      return m;
    });
  }
}
