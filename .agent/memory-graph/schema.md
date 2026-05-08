# Memory Graph Schema

The Memory Graph is the foundational context layer for the Synthetic Enterprise. It ensures that organizational intelligence persists across isolated sessions, preventing the "Context Amnesia" anti-pattern.

## Schema Definition

```json
{
  "node_id": "uuid",
  "type": "architectural_decision | incident_postmortem | component_context",
  "metadata": {
    "author": "agent_persona_id",
    "timestamp": "iso8601",
    "confidence_score": 0.0 - 1.0,
    "related_files": ["filepaths"]
  },
  "context": "The specific contextual learning, summarized.",
  "edges": [
    {
      "target_id": "uuid",
      "relationship": "resolves | depends_on | supercedes"
    }
  ]
}
```

## Pruning & Weighting

Because context windows are finite, the Memory Graph continuously runs a decaying weight algorithm. Highly referenced nodes retain their weight, while obscure nodes decay over time, ensuring agents only ingest the most critical context at runtime.
