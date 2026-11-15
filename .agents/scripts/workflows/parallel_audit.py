"""Reusable parallel audit & verification workflow for Antigravity run_workflow.

Args (passed via run_workflow Args dict):
  targets (list[str]): File paths, routes, or module slices to audit concurrently.
  focus (str, optional): Specific audit objective (security, SEO, SDD contracts, UI).
  model (str, optional): Sub-agent model tier ('flash' default, 'pro', 'inherit').
"""

targets = list(args.get("targets") or []) if "args" in dir() and args else []
focus = (args.get("focus") if "args" in dir() and args else None) or (
    "Audit for regressions, security boundary leaks, broken contracts, and HWS v2.0 compliance."
)
worker_model = (args.get("model") if "args" in dir() and args else None) or "flash"

if not targets:
    raise ValueError("Pass non-empty Args={'targets': [...], 'focus': '...'}")

ITEM_SCHEMA = {
    "type": "object",
    "properties": {
        "target": {"type": "string"},
        "passed": {"type": "boolean"},
        "findings": {"type": "array", "items": {"type": "string"}},
    },
    "required": ["target", "passed", "findings"],
}

phase("Parallel Target Audit")
log(f"Auditing {len(targets)} target(s) concurrently on model={worker_model}")

results = await parallel(
    targets,
    lambda t: agent(
        f"Inspect '{t}' read-only. Objective: {focus}\n"
        f"Return exact concrete findings with file/line evidence, or empty findings if clean.",
        schema=ITEM_SCHEMA,
        role=f"Audit {t[-36:]}",
        workspace="inherit",
        model=worker_model,
    ),
)

failed = [r for r in results if not r.get("passed", False) or r.get("findings")]
log(f"Completed {len(results)} audits: {len(results) - len(failed)} clean, {len(failed)} with findings")

{
    "total": len(results),
    "clean": len(results) - len(failed),
    "with_findings": len(failed),
    "results": results,
}
