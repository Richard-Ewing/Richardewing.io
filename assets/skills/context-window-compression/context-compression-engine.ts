/**
 * CONTEXT COMPRESSION ENGINE
 * 
 * Middleware that intercepts the LLM prompt payload before API transmission.
 * It enforces strict token ceilings by mathematically truncating, summarizing, 
 * or discarding low-priority context to prevent reasoning decay and margin collapse.
 */

import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

export interface PromptMessage {
    role: 'system' | 'user' | 'assistant' | 'tool';
    content: string;
    // The engine calculates and injects this
    estimatedTokens?: number; 
}

export interface MemoryPriorityPolicy {
    spec: {
        token_ceilings: {
            max_total_context: number;
            reserved_system_tokens: number;
        };
        tier_behavior: {
            tier_1_system: 'NEVER_TRUNCATE';
            tier_2_recent_turn: 'PRESERVE';
            tier_3_tool_outputs: 'TRUNCATE_OR_SUMMARIZE';
            tier_4_stale_history: 'EVICT';
        };
        eviction_threshold_turns: number;
    }
}

export class ContextCompressionEngine {
    private policy: MemoryPriorityPolicy;

    constructor(policyPath: string = './memory-priority-policy.yaml') {
        const fileContents = readFileSync(policyPath, 'utf8');
        this.policy = yaml.load(fileContents) as MemoryPriorityPolicy;
    }

    /**
     * Processes an array of chat messages, compressing them to fit within
     * the defined deterministic boundaries.
     * @returns The compressed array of PromptMessages safe for inference.
     */
    public compressContext(messages: PromptMessage[], currentTurn: number): PromptMessage[] {
        let compressed: PromptMessage[] = [];
        let tokenCount = 0;
        const limits = this.policy.spec.token_ceilings;

        // Roughly estimate 1 token = 4 characters for English
        messages.forEach(m => m.estimatedTokens = Math.ceil(m.content.length / 4));

        // 1. Process Tier 1: System Prompts (Always Preserve)
        const systemMessages = messages.filter(m => m.role === 'system');
        systemMessages.forEach(m => {
            compressed.push(m);
            tokenCount += m.estimatedTokens!;
        });

        if (tokenCount > limits.reserved_system_tokens) {
            console.warn(`[WARNING] System prompt exceeds reserved token budget. This will crowd out execution logic.`);
        }

        // 2. Process Tier 4: Stale History (Eviction)
        // We only consider the last N messages based on eviction threshold
        const nonSystemMessages = messages.filter(m => m.role !== 'system');
        const activeMessages = nonSystemMessages.slice(-this.policy.spec.eviction_threshold_turns * 2); 

        // 3. Process Tier 3 & Tier 2: Tools and Conversation
        // We process backwards (newest first) to ensure recent context is prioritized
        for (let i = activeMessages.length - 1; i >= 0; i--) {
            const msg = activeMessages[i];
            
            if (tokenCount + msg.estimatedTokens! > limits.max_total_context) {
                if (msg.role === 'tool' && this.policy.spec.tier_behavior.tier_3_tool_outputs === 'TRUNCATE_OR_SUMMARIZE') {
                    // Compress the tool output to fit remaining budget
                    const remainingBudget = limits.max_total_context - tokenCount;
                    if (remainingBudget > 50) { // arbitrary minimum useful size
                        const charLimit = remainingBudget * 4;
                        msg.content = msg.content.substring(0, charLimit) + "\n...[TRUNCATED BY GOVERNANCE ENGINE]";
                        msg.estimatedTokens = remainingBudget;
                        compressed.unshift(msg);
                        tokenCount += remainingBudget;
                    }
                }
                // If it doesn't fit and we can't compress, we stop adding history
                break;
            } else {
                compressed.unshift(msg);
                tokenCount += msg.estimatedTokens!;
            }
        }

        console.log(`[CONTEXT COMPRESSED] Original Messages: ${messages.length} -> Compressed: ${compressed.length}. Estimated Tokens: ${tokenCount}/${limits.max_total_context}`);
        return compressed;
    }
}
