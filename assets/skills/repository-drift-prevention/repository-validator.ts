/**
 * REPOSITORY VALIDATOR
 * 
 * Middleware that intercepts all agent file-system operations (`write_file`, `delete_file`)
 * and validates them against the Branch Integrity Policy to prevent architectural drift.
 */

import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import * as path from 'path';

export interface FileSystemOperation {
    agentId: string;
    operationType: 'CREATE' | 'MODIFY' | 'DELETE';
    targetFilePath: string;
    proposedContent?: string;
}

export interface BranchIntegrityPolicy {
    spec: {
        enforcement_mode: 'STRICT' | 'AUDIT';
        authorized_scopes: Record<string, {
            allowed_directories: string[];
            banned_extensions: string[];
            protected_files: string[];
        }>;
    };
}

export class RepositoryValidator {
    private policy: BranchIntegrityPolicy;

    constructor(policyPath: string = './branch-integrity-policy.yaml') {
        const fileContents = readFileSync(policyPath, 'utf8');
        this.policy = yaml.load(fileContents) as BranchIntegrityPolicy;
    }

    /**
     * Intercepts a file system operation before it executes.
     * @throws Error if the operation violates the architectural boundaries.
     */
    public validateOperation(operation: FileSystemOperation, taskScopeId: string): boolean {
        const { agentId, targetFilePath, operationType } = operation;
        const scope = this.policy.spec.authorized_scopes[taskScopeId];

        if (!scope) {
            this.triggerGovernanceHalt(agentId, `No authorized scope defined for Task: ${taskScopeId}. Defaulting to Zero-Trust (Block All).`);
        }

        const normalizedPath = path.normalize(targetFilePath);

        // 1. Check Protected Files (e.g. package.json, next.config.ts)
        const isProtected = scope.protected_files.some(protectedFile => normalizedPath.endsWith(protectedFile));
        if (isProtected && operationType !== 'CREATE') { // allow creation if it doesn't exist, but usually we protect existing
            this.triggerGovernanceHalt(agentId, `Attempted to mutate a protected architectural file: ${targetFilePath}`);
        }

        // 2. Check Banned Extensions (e.g. preventing agent from rewriting .yml workflows)
        const ext = path.extname(normalizedPath);
        if (scope.banned_extensions.includes(ext)) {
            this.triggerGovernanceHalt(agentId, `Attempted to mutate a banned file extension: ${ext}`);
        }

        // 3. Check Directory Scope Drift
        const inAllowedDir = scope.allowed_directories.some(dir => normalizedPath.startsWith(path.normalize(dir)));
        if (!inAllowedDir) {
            this.triggerGovernanceHalt(agentId, `Scope Drift Detected. Path ${targetFilePath} is outside the allowed directories: ${scope.allowed_directories.join(', ')}`);
        }

        console.log(`[REPOSITORY INTEGRITY] Operation ${operationType} on ${targetFilePath} approved.`);
        return true;
    }

    private triggerGovernanceHalt(agentId: string, reason: string): never {
        console.error(`[ARCHITECTURAL DRIFT DETECTED] Agent ${agentId} execution halted.`);
        
        if (this.policy.spec.enforcement_mode === 'STRICT') {
            throw new Error(`Repository Drift Prevention Halt: ${reason}`);
        } else {
            console.warn(`[AUDIT MODE] Would have halted: ${reason}`);
            // In Audit mode, we throw a soft warning but allow it (dangerous, used for testing only)
            throw new Error(`Repository Drift Audit Warning: ${reason}`);
        }
    }
}
