const fs = require('fs');
const path = require('path');
const base = path.join(process.cwd(), 'assets/skills');

const policies = {
  'context-rot-prevention': `# Context Rot Prevention Policy
version: "1.2.0"
runtime_layer: "Skill Governance"
domain: "Bounded Cognition"

context_limits:
  max_window_utilization: 0.75
  warning_threshold: 0.65
  critical_threshold: 0.85
  
session_governance:
  max_duration_minutes: 90
  checkpoint_interval_minutes: 30
  mandatory_reset_at_utilization: 0.85

patch_chain_limits:
  max_consecutive_patches_same_file: 3
  max_total_patches_per_session: 15
  halt_on_recursive_patch: true

token_budget:
  max_usd_per_task: 25
  max_usd_per_session: 50
  alert_at_percent: 80

human_escalation:
  on_patch_chain_exceeded: true
  on_context_critical: true
  on_token_budget_exceeded: true
  channels: ["slack", "email"]`,

  'runtime-governance': `# Runtime Governance Policy
version: "2.0.1"
runtime_layer: "Tool Governance"
domain: "Execution Containment"

command_classification:
  whitelisted:
    - "cat"
    - "ls"
    - "pwd"
    - "echo"
    - "grep"
    - "find"
    - "head"
    - "tail"
    - "wc"
  restricted:
    - "npm"
    - "npx"
    - "git"
    - "node"
    - "python"
  blacklisted:
    - "rm -rf"
    - "DROP TABLE"
    - "FORMAT"
    - "curl"  
    - "wget"
    - "ssh"
    - "scp"
    
file_protection:
  protected_patterns:
    - ".env*"
    - "*.key"
    - "*.pem"
    - "config/production*"
    - "docker-compose.prod*"
  max_files_per_operation: 5

human_escalation:
  on_blacklisted_command: "immediate"
  on_protected_file_access: "immediate"
  on_restricted_command: "queued"`,

  'retry-inflation-control': `# Retry Inflation Control Policy
version: "1.2.0"
runtime_layer: "Skill Governance"
domain: "Economic Containment"

retry_limits:
  max_retries_per_error: 5
  max_identical_error_recurrence: 3
  max_total_retries_per_task: 10

financial_circuit_breakers:
  max_usd_per_task: 25
  max_usd_per_hour: 12
  halt_on_budget_exceeded: true
  
error_fingerprinting:
  enabled: true
  match_threshold: 0.95
  context_wipe_on_recurrence: true

escalation:
  on_recursive_loop: "immediate"
  on_budget_exceeded: "immediate"
  on_5th_retry: "queued"`,

  'orchestration-entropy': `# Orchestration Entropy Policy
version: "1.0.0"
runtime_layer: "Skill Governance"
domain: "Multi-Agent Containment"

turn_limits:
  max_turns_per_workflow: 50
  warning_at_turns: 20

agreement_loop_detection:
  max_consecutive_agreements_without_tools: 10
  require_tool_invocation_every_n_turns: 5

delegation_limits:
  max_delegation_depth: 5
  block_recursive_delegation: true
  
sub_agent_limits:
  max_concurrent_sub_agents: 3
  max_total_sub_agents: 5
  
checkpointing:
  save_state_every_n_turns: 5
  rollback_on_entropy_halt: true`,

  'mcp-governance': `# MCP Governance Policy
version: "1.3.2"
runtime_layer: "Tool Governance"
domain: "Protocol Security"

tool_manifest:
  require_manifest: true
  block_unmanifested_tools: true
  audit_all_tool_calls: true

context_isolation:
  enabled: true
  prevent_cross_tool_data_leak: true
  sandbox_execution: true

sensitive_data_protection:
  block_env_file_access: true
  block_credential_file_access: true
  redact_secrets_from_output: true
  protected_patterns:
    - ".env*"
    - "*.key"
    - "*.pem"
    - "*secret*"
    - "*credential*"

supply_chain:
  require_server_verification: true
  block_unverified_servers: true
  audit_server_descriptions: true

escalation:
  on_unauthorized_access: "immediate"
  on_data_exfiltration: "immediate"
  on_new_server_install: "queued"`,

  'verification-burden-collapse': `# Verification Burden Collapse Policy
version: "1.0.0"
runtime_layer: "Skill Governance"
domain: "Review Containment"

confidence_routing:
  auto_approve_threshold: 0.95
  standard_review_threshold: 0.85
  deep_review_threshold: 0.75
  auto_reject_threshold: 0.75

review_capacity:
  max_prs_per_reviewer_per_day: 8
  throttle_ai_generation_at: 8
  alert_on_rubber_stamp_risk: true
  min_review_duration_minutes: 5

quality_gates:
  require_test_coverage: true
  require_ast_validation: true
  require_import_resolution: true

burnout_prevention:
  max_review_hours_per_day: 4
  alert_at_hours: 3
  mandatory_break_at_hours: 5`,

  'repository-drift-prevention': `# Repository Drift Prevention Policy
version: "1.0.5"
runtime_layer: "Environment Governance"
domain: "Codebase Integrity"

scope_enforcement:
  lock_to_requested_files: true
  max_files_modifiable: "scoped_only"
  block_unscoped_mutations: true

import_validation:
  check_package_json: true
  check_node_modules: true
  block_phantom_imports: true
  block_phantom_packages: true

diff_limits:
  max_lines_without_review: 200
  max_files_per_operation: 5
  alert_on_unexpected_diff_size: true

deletion_protection:
  require_approval_for_deletion: true
  block_config_deletion: true
  block_env_deletion: true`,

  'autonomous-execution-safety': `# Autonomous Execution Safety Policy
version: "2.1.0"
runtime_layer: "Identity Governance"
domain: "Authority Containment"

command_whitelist:
  safe_commands:
    - "cat"
    - "ls"
    - "pwd"
    - "echo"
    - "grep"
    - "find"
  restricted_commands:
    - "npm install"
    - "npm run"
    - "git push"
    - "git merge"
  blocked_commands:
    - "rm -rf"
    - "DROP"
    - "DELETE FROM"
    - "FORMAT"
    - "curl"
    - "wget"

package_installation:
  require_human_approval: true
  block_unvetted_packages: true
  audit_postinstall_scripts: true

authority_boundaries:
  max_file_mutations_per_task: 10
  block_infrastructure_modifications: true
  block_production_access: true`,

  'agentic-change-management': `# Agentic Change Management Policy
version: "1.0.0"
runtime_layer: "Identity Governance"
domain: "CAB Approval Architecture"

risk_classification:
  low_risk:
    - "documentation updates"
    - "comment changes"
    - "test additions"
  medium_risk:
    - "feature code changes"
    - "dependency updates"
    - "configuration changes"
  high_risk:
    - "database migrations"
    - "API contract changes"
    - "authentication changes"
  critical_risk:
    - "production deployments"
    - "infrastructure changes"
    - "security configuration"

approval_requirements:
  low_risk: "auto_approve_with_log"
  medium_risk: "peer_review"
  high_risk: "cab_approval"
  critical_risk: "cto_plus_security"

audit_trail:
  log_all_changes: true
  require_change_justification: true
  retention_days: 365`,

  'tool-permission-governance': `# Tool Permission Governance Policy
version: "1.1.0"
runtime_layer: "Tool Governance"
domain: "Capability Boundary"

least_privilege:
  scope_tools_to_task: true
  block_escalation: true
  revoke_unused_permissions: true

capability_matrix:
  file_read:
    allowed_paths: ["src/**", "lib/**", "test/**"]
    blocked_paths: [".env*", "*.key", "config/prod*"]
  file_write:
    allowed_paths: ["src/**", "test/**"]
    blocked_paths: ["config/**", ".env*", "package.json"]
  shell_execute:
    allowed: ["npm test", "npm run lint", "npm run build"]
    blocked: ["rm", "curl", "wget", "ssh"]

data_protection:
  redact_secrets: true
  block_credential_access: true
  audit_sensitive_reads: true`,

  'context-window-compression': `# Context Window Compression Policy
version: "1.2.0"
runtime_layer: "Environment Governance"
domain: "Token Economy"

compression_levels:
  passive_pruning:
    trigger_at_utilization: 0.50
    remove: "old_interaction_history"
  active_rotation:
    trigger_at_utilization: 0.65
    preserve: "architecture_state"
    compress: "historical_interactions"
  emergency_compression:
    trigger_at_utilization: 0.85
    extract: "critical_state_only"
    purge: "full_history"

session_limits:
  max_useful_interactions: 50
  checkpoint_every_n_interactions: 10
  mandatory_reset_at_utilization: 0.90

instruction_recall:
  minimum_recall_accuracy: 0.90
  test_recall_every_n_interactions: 5
  force_rotation_on_amnesia: true`,

  'ai-cost-containment': `# AI Cost Containment Policy
version: "1.5.0"
runtime_layer: "Environment Governance"
domain: "Financial Circuit Breaking"

budgets:
  max_usd_per_task: 25
  max_usd_per_session: 50
  max_usd_per_developer_per_day: 100
  max_usd_per_team_per_month: 1500

circuit_breakers:
  halt_at_budget_percent: 100
  warn_at_budget_percent: 80
  alert_at_budget_percent: 50

unattended_limits:
  max_unattended_minutes: 30
  max_unattended_spend: 15
  require_human_checkin: true

tracking:
  granularity: "per_task"
  include_retry_waste: true
  include_context_rot_waste: true
  dashboard_refresh_seconds: 60`,

  'deterministic-agentic-engineering': `# Deterministic Agentic Engineering Policy — Master System
version: "3.0.0"
runtime_layer: "Identity Governance"
domain: "Master Runtime Architecture"

exogram_runtime:
  identity_layer: "loaded"
  skill_layer: "resolved"
  tool_layer: "authorized"
  environment_layer: "snapshot"
  compilation: "immutable"

governance_mode: "zero_trust"
enforcement: "deterministic_middleware"
prompt_reliance: "none"

runtime_compilation:
  assemble_identity: true
  resolve_skill: true
  authorize_tools: true
  load_environment_slice: true
  compile_immutable_payload: true
  constrained_execution: true
  validate_output: true
  mutate_state_on_success: true

global_circuit_breakers:
  max_usd_per_task: 50
  max_retries: 5
  max_session_duration_minutes: 120
  halt_on_governance_bypass: true
  halt_on_recursive_loop: true
  halt_on_authority_breach: true`
};

for (const [slug, content] of Object.entries(policies)) {
  const filePath = path.join(base, slug, 'policy.yaml');
  fs.writeFileSync(filePath, content);
  console.log(`Upgraded policy.yaml for ${slug}`);
}

console.log('Done — all 15 policy.yaml files differentiated.');
