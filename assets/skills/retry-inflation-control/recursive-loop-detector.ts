/**
 * RECURSIVE LOOP DETECTOR
 * 
 * Uses semantic and structural diff analysis to determine if an agent is 
 * "patching its own patches" (reverting to a previous state or cycling through
 * known failed states).
 */

export interface DiffSnapshot {
    timestamp: number;
    filesChanged: string[];
    addedLines: string[];
    removedLines: string[];
}

export class RecursiveLoopDetector {
    private history: Record<string, DiffSnapshot[]> = {};
    private maxHistory: number = 5;

    /**
     * Records a diff and checks if it semantically matches a previous failed state.
     * @returns true if a loop is detected.
     */
    public detectLoop(taskId: string, currentDiff: DiffSnapshot): boolean {
        if (!this.history[taskId]) {
            this.history[taskId] = [];
        }

        const taskHistory = this.history[taskId];

        if (taskHistory.length >= 2) {
            // Check for State Reversion (A -> B -> A)
            const previousState = taskHistory[taskHistory.length - 2];
            
            // If the current added lines exactly match the lines removed two steps ago, 
            // and the current removed lines exactly match the lines added two steps ago,
            // the agent has reverted its own patch.
            const isReverting = this.arraysMatch(currentDiff.addedLines, previousState.removedLines) && 
                                this.arraysMatch(currentDiff.removedLines, previousState.addedLines);

            if (isReverting) {
                console.error(`[LOOP DETECTED] Agent has reverted to a state from ${currentDiff.timestamp - previousState.timestamp}ms ago.`);
                return true;
            }

            // Check for Thrashing (Repeatedly editing the exact same lines without progress)
            const linesBeingEdited = [...currentDiff.addedLines, ...currentDiff.removedLines];
            let thrashCount = 0;

            for (const past of taskHistory) {
                const pastLines = [...past.addedLines, ...past.removedLines];
                // If 80% of the lines being edited are the exact same lines edited previously
                if (this.calculateOverlap(linesBeingEdited, pastLines) > 0.8) {
                    thrashCount++;
                }
            }

            if (thrashCount >= 3) {
                console.error(`[LOOP DETECTED] Agent is thrashing on the exact same logic block. Progress stalled.`);
                return true;
            }
        }

        // Store history
        taskHistory.push(currentDiff);
        if (taskHistory.length > this.maxHistory) {
            taskHistory.shift();
        }

        return false;
    }

    private arraysMatch(arr1: string[], arr2: string[]): boolean {
        if (arr1.length !== arr2.length) return false;
        const sorted1 = [...arr1].sort();
        const sorted2 = [...arr2].sort();
        return sorted1.every((val, index) => val === sorted2[index]);
    }

    private calculateOverlap(current: string[], past: string[]): number {
        if (current.length === 0) return 0;
        const intersection = current.filter(x => past.includes(x));
        return intersection.length / current.length;
    }
}
