---
name: richardewing-identity-guard
description: "ACTIVATE this skill ALWAYS when modifying ANY file on richardewing.io that contains social media profile URLs, LinkedIn links, or founder/person metadata. This skill enforces the canonical identity URLs for Richard Ewing across the entire codebase to prevent profile URL drift."
---

# Richard Ewing — Identity & Social Profile Guard

## Purpose

This skill exists because Richard Ewing's LinkedIn profile URL has been incorrectly changed multiple times in the past. This skill ensures the correct, canonical URLs are used EVERY time any file touching identity, social links, or structured data is modified.

## Canonical URLs — NEVER CHANGE THESE

| Property | Canonical URL | Notes |
|---|---|---|
| **Personal LinkedIn** | `https://www.linkedin.com/in/richard-ewing-mba/` | Richard's personal profile. USE THIS for Person schema, author links, founder references, bio sections, and footer social links. |
| **Exogram Company LinkedIn** | `https://www.linkedin.com/company/exogram-ai/` | The Exogram organization page. USE THIS ONLY for Organization schema `sameAs` arrays referencing the Exogram entity. |
| **Personal Website** | `https://www.richardewing.io` | Canonical personal domain. |
| **Exogram Website** | `https://exogram.ai` | Canonical Exogram domain. |

## Rules

1. **Richard Ewing's personal LinkedIn is ALWAYS `https://www.linkedin.com/in/richard-ewing-mba/`** — no other URL is acceptable. Do not use `/in/richardewing/`, `/in/richard-ewing/`, or any other variation.
2. **The Exogram company LinkedIn is ALWAYS `https://www.linkedin.com/company/exogram-ai/`** — do not use any other variation.
3. When editing ANY file that contains a `sameAs` array, `socialProfiles`, `linkedin` field, or any reference to `linkedin.com`, verify the URL matches the canonical values above BEFORE committing.
4. When creating new JSON-LD schemas with a `Person` type for Richard Ewing, ALWAYS include `sameAs: ['https://www.linkedin.com/in/richard-ewing-mba/']`.
5. When creating new JSON-LD schemas with an `Organization` type for Exogram, ALWAYS include `https://www.linkedin.com/company/exogram-ai/` in the `sameAs` array.

## Verification Checklist

Before committing any change that touches identity/social data:

- [ ] Personal LinkedIn URL matches `https://www.linkedin.com/in/richard-ewing-mba/`
- [ ] Company LinkedIn URL matches `https://www.linkedin.com/company/exogram-ai/`
- [ ] No other LinkedIn URL variations exist in the modified files
- [ ] JSON-LD Person schemas include the correct `sameAs` array
- [ ] JSON-LD Organization schemas include the correct company LinkedIn

## Where These URLs Appear (Known Locations)

- `app/exogram/layout.tsx` — Organization + founder Person schema
- `app/layout.tsx` — Root site Person schema
- `app/components/footer.tsx` — Social link icons
- `app/principal/page.tsx` — Bio/about page
- Any page with `application/ld+json` structured data containing Person or Organization types
