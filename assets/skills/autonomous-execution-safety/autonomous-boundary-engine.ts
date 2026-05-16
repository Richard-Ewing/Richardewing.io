/**
 * AUTONOMOUS BOUNDARY ENGINE
 * 
 * Sandboxing logic that ensures even explicitly allowed commands (e.g. `ls`, `cat`)
 * are only executed within a restricted filesystem path to prevent directory traversal
 * and access to host secrets outside the workspace.
 */

import * as path from 'path';

export interface BoundaryConfiguration {
    absoluteWorkspaceRoot: string;
}

export class AutonomousBoundaryEngine {
    private config: BoundaryConfiguration;

    constructor(workspaceRoot: string) {
        this.config = {
            // Ensure the root path is absolutely resolved
            absoluteWorkspaceRoot: path.resolve(workspaceRoot)
        };
        console.log(`[BOUNDARY ENGINE] Sandboxed to: ${this.config.absoluteWorkspaceRoot}`);
    }

    /**
     * Validates that the target Current Working Directory (CWD) for an execution
     * attempt is strictly within the allowed workspace boundary.
     */
    public validateDirectoryScope(requestedCwd: string): boolean {
        // Resolve the requested path to an absolute path, resolving any `../`
        const absoluteRequestedPath = path.resolve(requestedCwd);

        // Check if the resolved path starts with the allowed workspace root
        if (!absoluteRequestedPath.startsWith(this.config.absoluteWorkspaceRoot)) {
            console.error(`[CRITICAL SECURITY EVENT] Directory Traversal Attempt Detected.`);
            console.error(`Workspace Root: ${this.config.absoluteWorkspaceRoot}`);
            console.error(`Requested CWD: ${absoluteRequestedPath}`);
            
            throw new Error(`[GOVERNANCE HALT] Execution Sandbox Violation: Attempted to execute outside of authorized workspace boundary.`);
        }

        // Additional safeguard against accessing the .git directory directly
        if (absoluteRequestedPath.includes('.git')) {
             console.warn(`[WARNING] Agent is attempting to manually edit .git internals. This is highly discouraged.`);
             // Depending on strictness, this could also throw an error.
        }

        return true;
    }
}
