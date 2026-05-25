---
name: generate_ai_integration_roadmap
priority: high
repository_binding: RichardEwing.io
triggers:
  - consultation_complete
  - roadmap_generation_request
  - ai_plan_refresh

required_goal_context:
  - /goal/mission.md

required_identity_context:
  - /system/identity.md

required_tools:
  - search_web
  - write_to_file
  - run_command

output_contract:
  type: json
  schema: ai_integration_roadmap_v1

mutation_scope:
  - /app/api/ai-advisor/generate-plan/
  - /components/AdvisorRoadmap.tsx

escalation_policy:
  halt_on_conflict: true
---

# Procedure

0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.

1. **Data Aggregation:**
   - Collect all structured data from the 5-phase consultation: business profile, pain points, tech stack, goals/budget
   - Query Exogram Vault for relevant industry benchmarks and patterns from past consultations
   - If web search is available, research the latest AI tools relevant to the user's industry

2. **Roadmap Architecture (JSON Schema):**
   The generated roadmap MUST follow this exact JSON structure:
   ```json
   {
     "executive_summary": "2-3 sentence overview of the opportunity",
     "estimated_weekly_hours_saved": <number>,
     "estimated_monthly_roi": <number in dollars>,
     "phases": [
       {
         "name": "Quick Wins | Foundation | Growth | Optimization",
         "timeline": "Week 1-2 | Month 1 | Month 2-3 | Month 4-6",
         "actions": [
           {
             "title": "Specific action name",
             "description": "What to do and why",
             "tool": "Real AI tool name (ChatGPT, Claude, Zapier, etc.)",
             "tool_url": "https://actual-url.com",
             "estimated_roi": "$X/month or X hours/week saved",
             "difficulty": "Easy | Medium | Hard",
             "monthly_cost": "$X/month",
             "time_to_implement": "X hours/days",
             "hours_saved_weekly": <number>
           }
         ]
       }
     ],
     "total_monthly_tool_cost": "$X/month",
     "key_risks": ["risk1", "risk2", "risk3"],
     "next_steps": ["step1", "step2", "step3"]
   }
   ```

3. **Quality Requirements:**
   - Use REAL tool names with real URLs (ChatGPT, Claude, Zapier AI, HubSpot AI, Notion AI, Calendly, Grammarly, etc.)
   - Be specific to the user's industry and business size — no generic recommendations
   - ROI estimates must be realistic and defensible
   - Each phase should have 2-4 action items (total 8-15 items across all phases)
   - Quick Wins should be implementable in under 2 hours with zero technical skill
   - Tool costs should reflect current market pricing (verify via web search if needed)

4. **Gemini Prompt Engineering:**
   - Use `gemini-2.0-flash` model for speed
   - System prompt positions the AI as Richard Ewing's expert advisor
   - Include industry context from Exogram Vault search results
   - Request JSON-only output for reliable parsing

5. **Persistence:**
   - Save the completed roadmap to `ai_advisor_sessions.generated_plan` in Supabase
   - Update session status to `completed`
   - Store roadmap summary in Exogram Vault for future cross-referencing

6. **PDF Generation:**
   - The `AdvisorRoadmap` component generates a downloadable PDF via `jsPDF`
   - PDF includes: title page, executive summary, key metrics, all phases with action details, risks, and next steps
   - Filename format: `AI-Integration-Roadmap-{BusinessName}-{Date}.pdf`

7. **Validation Check:** Double and triple-check the entire operation for absolute accuracy, comprehensiveness, and completeness before marking the execution as resolved. Ensure the roadmap JSON is valid, all URLs are real, and all estimates are reasonable.
