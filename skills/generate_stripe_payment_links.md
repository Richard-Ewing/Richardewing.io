---
name: generate_stripe_payment_links
priority: high
repository_binding: RichardEwing.io
triggers:
  - new_advisory_offering
  - skill_monetization_request

required_goal_context:
  - /goal/mission.md

required_identity_context:
  - /system/identity.md

required_tools:
  - run_command
  - write_to_file

output_contract:
  type: json
  schema: stripe_payment_link_v1

mutation_scope:
  - /environment/app/api/webhooks
  - /environment/app/system/pricing

escalation_policy:
  halt_on_conflict: true
---

# Procedure

0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.
1. Receive the pricing parameters, product name, and fulfillment details for the new offering.
2. Execute Stripe CLI commands (or generate Node scripts) to create a new Product and Price object in Stripe.
3. Generate the Payment Link and extract the URL.
4. Verify the fulfillment flow: Ensure the Clerk user metadata update logic in the Stripe Webhook (`app/api/webhooks/stripe/route.ts`) maps to the correct `unlocked_items` or subscription tier.
5. Update the UI components (e.g., pricing tables or checkout buttons) with the newly generated `payment_link_url`.
6. Ensure success/cancel redirect URLs are properly configured to bring the user back into the authenticated app environment.
7. **Validation Check:** Double and triple-check the entire operation for absolute accuracy, comprehensiveness, and completeness before marking the execution as resolved. Ensure no edge cases or unhandled states remain.
