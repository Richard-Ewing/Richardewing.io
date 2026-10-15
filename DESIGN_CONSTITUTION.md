# UNIVERSAL DESIGN CONSTITUTION
## Permanent Design Governance for All UI, UX, Content, and Visual Implementation

**Document type:** Mandatory design and implementation standard  
**Applies to:** Every new project, page, screen, component, feature, modification, redesign, and visual asset  
**Primary objective:** Ensure every addition or change follows the established design system, product identity, content standards, interaction patterns, and visual quality of the project.

---

# 1. THE PRIME DIRECTIVE

Before creating, modifying, redesigning, or extending any user-facing experience, inspect the existing project and identify its approved design system.

**The established design system is the source of truth. Every change must conform to it.**

This requirement applies to all work, including:

- New pages and routes.
- Existing page modifications.
- New features.
- Dashboards and workspaces.
- Forms and onboarding flows.
- Navigation and dropdowns.
- Cards, panels, tables, and modals.
- Charts, diagrams, and infographics.
- Illustrations, icons, and photography.
- Animations, transitions, and interactive demonstrations.
- Empty, loading, success, error, and disabled states.
- Mobile and tablet layouts.
- Typography, text, labels, and calls to action.
- Emails, reports, exports, and other user-facing artifacts when they belong to the product experience.

No page or component is exempt merely because it is new, small, temporary, or technically straightforward.

Do not treat the design system as inspiration. Treat it as an implementation requirement.

# 2. INSPECT BEFORE IMPLEMENTING

Before writing or modifying UI code, inspect the existing project.

Determine:

1. The established brand identity.
2. The approved visual references and mockups.
3. The color palette and semantic color tokens.
4. The typography and font hierarchy.
5. The spacing and layout system.
6. The component library.
7. The existing navigation and information architecture.
8. The visual treatment of cards, panels, tables, forms, and controls.
9. The animation and motion language.
10. The use of photography, illustration, abstract art, diagrams, charts, and infographics.
11. The existing copywriting voice and content conventions.
12. The responsive design rules.
13. The accessibility requirements.
14. The existing technical architecture and dependencies.

Inspect the actual implementation, not just the names of the files.

Review relevant pages in a browser when available. Compare the rendered interface against approved references.

If the project has a design-system document, component library, tokens, or approved mockups, use them as the authoritative references.

If the project has no established design system, create one deliberately and document it before building a large number of screens.

Do not invent a new visual identity for an existing project without explicit authorization.

# 3. PRESERVE THE DESIGN SYSTEM

Every change must reuse the established design tokens and shared components wherever appropriate.

## 3.1 Colors and backgrounds

Use the project's existing color palette and semantic tokens.

Preserve:

- Primary and secondary backgrounds.
- Surface and panel colors.
- Primary and secondary text colors.
- Accent colors.
- Borders and dividers.
- Interactive states.
- Status colors.
- Chart and diagram palettes.
- Overlay and gradient conventions.

Do not introduce arbitrary colors, backgrounds, gradients, or accent combinations.

Do not hardcode colors when an existing design token is available.

Do not create a different color palette for a single new page simply because it looks attractive in isolation.

Use a new color only when it serves a documented purpose, remains compatible with the existing palette, and is appropriate for the project.

Maintain readable contrast across all surfaces.

## 3.2 Typography and fonts

Use the established fonts and type scale.

Preserve the intended hierarchy for:

- Display headlines.
- Page titles.
- Section headings.
- Body text.
- Supporting text.
- Captions.
- Metadata.
- Navigation.
- Buttons.
- Form labels.
- Data labels.
- Quotes.
- Code and technical content.

Do not introduce a new font family, inconsistent heading scale, or arbitrary font weight without justification.

Use responsive type sizes and intentional line lengths.

Text must remain readable at all supported screen sizes.

## 3.3 Spacing and layout

Use the established spacing, grid, container, and breakpoint system.

Maintain consistency in:

- Page margins.
- Content widths.
- Section spacing.
- Heading spacing.
- Component padding.
- Grid gaps.
- Alignment.
- Sidebar widths.
- Card spacing.
- Footer spacing.

Do not introduce arbitrary margins or padding to compensate for a layout that needs to be redesigned properly.

Use whitespace intentionally. Avoid both cramped interfaces and unnecessary empty space.

## 3.4 Component styling

Reuse existing components and variants for:

- Buttons.
- Links.
- Cards.
- Panels.
- Forms.
- Inputs.
- Navigation.
- Dropdowns.
- Tables.
- Modals.
- Tabs.
- Badges.
- Alerts.
- Tooltips.
- Charts.
- Figures.
- Callouts.
- Loading indicators.
- Empty states.

Do not create a visually different version of an existing component when the existing component can satisfy the requirement.

If a new component variant is necessary, implement it within the established component architecture and document its purpose.

Do not duplicate entire components simply to change a color or spacing value.

# 4. EVERY PAGE MUST BE INTENTIONALLY DESIGNED

Design consistency does not mean identical layouts.

Every page must use the established design system while adopting a composition appropriate to its purpose.

Before implementation, identify:

- The user's primary goal.
- The page's role in the product.
- The most important information.
- The desired user action.
- The appropriate information hierarchy.
- The appropriate layout.
- The appropriate visual aids.
- The relevant existing components.
- The responsive behavior.

Choose the layout that best serves the content.

An article, dashboard, diagnostic tool, settings screen, marketing page, onboarding flow, and data table should not all look like copies of the same card grid.

The page should be recognizable as part of the same product while remaining optimized for its specific task.

# 5. TEXT AND CONTENT ARE PART OF THE DESIGN

Design governs not only how information looks, but also how it is written and presented.

Every new or modified user-facing text element must follow the project's established voice, terminology, audience, and content hierarchy.

This includes:

- Headlines.
- Subheadings.
- Introductory copy.
- Paragraphs.
- Button labels.
- Navigation labels.
- Form instructions.
- Validation messages.
- Tooltips.
- Notifications.
- Empty states.
- Error messages.
- Success messages.
- Captions.
- Chart annotations.
- Infographic labels.
- Onboarding instructions.
- Calls to action.

## Content rules

1. Lead with the user's need or the most important information.
2. Use clear, specific, natural language.
3. Make headings communicate meaning rather than merely decorate a page.
4. Keep labels concise and understandable.
5. Use consistent terminology throughout the product.
6. Explain technical concepts at the level appropriate for the audience.
7. Avoid generic filler, repetitive copy, and empty marketing language.
8. Avoid unnecessary jargon and unexplained acronyms.
9. Preserve factual accuracy and the meaning of existing content.
10. Do not invent statistics, claims, testimonials, citations, or results.
11. Do not replace useful content with shorter placeholder copy to make a layout easier.
12. Use progressive disclosure when information is complex.

Text length should inform the layout, and the layout should support the text. Neither should be treated as an afterthought.

# 6. GRAPHICS, ILLUSTRATIONS, AND IMAGERY

All visual assets must follow the established art direction.

Before creating or selecting a graphic, determine what it is intended to communicate.

Use the appropriate asset type:

- Photography for human context and editorial storytelling.
- Illustration for conceptual explanation.
- Abstract art for atmosphere and brand expression.
- Icons for compact, recognizable actions or concepts.
- Diagrams for architecture, relationships, and processes.
- Charts for quantitative information.
- Infographics for structured visual explanations.
- Animation for motion, transformation, or interactive feedback.

Maintain consistency in:

- Art direction.
- Color treatment.
- Line weight.
- Icon style.
- Illustration style.
- Image cropping.
- Aspect ratios.
- Caption treatment.
- Border treatment.
- Visual density.
- Asset quality.

Do not mix unrelated illustration styles, stock imagery, icon families, or visual treatments without a clear reason.

Do not add imagery solely to fill space.

Do not reference nonexistent assets or use placeholder graphics in a supposedly completed feature.

Optimize assets for their intended context and provide appropriate alternatives when an asset cannot load.

# 7. INFOGRAPHICS, CHARTS, AND DATA VISUALIZATION

Use visualizations to improve understanding, not to decorate the interface.

Before creating one, determine whether the information is best communicated through:

- A chart.
- A diagram.
- A process flow.
- A timeline.
- A comparison.
- A matrix.
- A decision tree.
- A structured infographic.
- A table.
- Plain text.

Every visualization must have a clear informational purpose.

Rules:

1. Use actual data when actual data exists.
2. Label illustrative or sample data explicitly.
3. Never invent values to make a chart look complete.
4. Use the established typography and color tokens.
5. Keep labels and annotations readable.
6. Use consistent axes, units, legends, and formatting.
7. Provide text alternatives or summaries where appropriate.
8. Make the visualization responsive.
9. Preserve the meaning of the underlying information.
10. Use the same visual grammar across related visualizations.

Do not force a chart into a page that does not benefit from one.

Do not flatten a functional visualization into a static image if users need to interact with it.

# 8. ANIMATION AND INTERACTION DESIGN

All animation and interaction must follow the established motion language.

Use consistent patterns for:

- Page and section entrances.
- Hover and focus states.
- Navigation.
- Expandable content.
- Modal transitions.
- Chart transitions.
- Loading states.
- Interactive demonstrations.
- Feedback and notifications.
- Dragging and rearrangement.
- State changes.

Animation must serve a purpose: communicating state, revealing hierarchy, explaining a transformation, or improving feedback.

Rules:

1. Preserve the established motion style and timing conventions.
2. Avoid unnecessary animation.
3. Do not animate every element.
4. Do not delay access to important content.
5. Do not use animation to conceal slow loading.
6. Do not create distracting perpetual motion.
7. Respect reduced-motion preferences.
8. Maintain keyboard and touch usability.
9. Ensure interaction states are visually clear.
10. Ensure controls perform their advertised actions.

A control that only looks interactive is not complete.

A loading indicator that never resolves is not complete.

An animation that breaks the page or prevents access to content is a defect.

# 9. INTERACTION STATES ARE PART OF THE DESIGN

Do not design only the ideal initial state.

For every interactive feature, consider all relevant states:

- Default.
- Hover.
- Focus.
- Active.
- Selected.
- Disabled.
- Loading.
- Empty.
- Success.
- Warning.
- Error.
- Validation failure.
- Completed.
- Interrupted or cancelled.

The visual treatment of these states must follow the design system.

State changes must communicate what happened and what the user can do next.

Do not implement fake functionality or leave dead buttons, broken forms, nonfunctional filters, or controls with no meaningful result.

Preserve existing behavior unless a change is explicitly intended and approved.

# 10. RESPONSIVE DESIGN IS MANDATORY

Every change must work within the project's supported viewport sizes.

Do not treat mobile as a smaller desktop screenshot.

Review:

- Layout changes.
- Navigation behavior.
- Text wrapping.
- Content order.
- Image cropping.
- Chart readability.
- Card stacking.
- Form usability.
- Touch target sizes.
- Overflow.
- Sticky elements.
- Modal behavior.
- Motion and performance.

Use the established responsive breakpoints.

If the project does not define them, establish and document them.

No new or modified page is complete until its responsive behavior has been checked.

# 11. ACCESSIBILITY AND USABILITY

Accessibility is part of the design standard, not a separate optional enhancement.

Use semantic HTML and accessible interaction patterns.

Review:

- Keyboard navigation.
- Visible focus indicators.
- Text contrast.
- Form labels and instructions.
- Accessible names for controls.
- Heading hierarchy.
- Alternative text.
- Chart and diagram descriptions.
- Error identification.
- Reduced-motion support.
- Screen-reader behavior.
- Zoom and text scaling.

Do not rely on color alone to communicate meaning.

Do not use decorative animation or visual effects that interfere with task completion.

# 12. TECHNICAL IMPLEMENTATION STANDARDS

Inspect the current architecture before introducing changes.

Use the project's established frameworks, libraries, patterns, and dependencies unless there is a justified reason to change them.

Rules:

- Reuse shared tokens and components.
- Avoid duplicated styles.
- Avoid unnecessary dependencies.
- Keep components maintainable.
- Preserve existing routes and integrations.
- Preserve business logic.
- Avoid breaking unrelated functionality.
- Keep assets optimized.
- Prevent layout shifts where practical.
- Avoid unnecessary client-side JavaScript.
- Keep loading and error handling explicit.
- Do not introduce console errors or broken asset references.
- Update tests where behavior changes.

A visually correct screenshot does not prove that an implementation is complete.

# 13. REQUIRED WORKFLOW FOR EVERY CHANGE

Follow this workflow for every new page, component, feature, or modification.

## Step 1: Inspect

Review the relevant code, page, components, design tokens, approved references, and current behavior.

## Step 2: Define the change

Identify the user's goal, content requirements, page type, required interactions, and affected components.

## Step 3: Plan the design

Determine the layout, typography, visual hierarchy, backgrounds, components, graphics, motion, and responsive behavior.

Reuse established patterns wherever appropriate.

## Step 4: Implement

Make the change using the existing design system.

Update shared components or tokens when the change reveals a genuine system-level improvement.

Avoid one-off styling that causes future inconsistencies.

## Step 5: Verify visually

Open the affected page or component in a browser when available.

Compare the result against the approved design references and surrounding interface.

Inspect the relevant desktop and mobile layouts.

## Step 6: Verify functionality

Test the changed interactions, forms, links, data behavior, loading states, and error states.

Check for regressions in affected areas.

## Step 7: Correct inconsistencies

Fix discrepancies in color, typography, spacing, alignment, imagery, animation, interaction, or content hierarchy before considering the work complete.

## Step 8: Report

Summarize:

- What changed.
- Which shared components were reused or modified.
- Whether the design system was followed.
- Which visual and functional checks were performed.
- Any outstanding defects or limitations.

Do not claim a test passed if it was not performed.

# 14. WHEN A DESIGN CHANGE IS NECESSARY

The existing design system should be consistent, but it must not become an excuse to preserve a demonstrably poor pattern.

If a new requirement cannot be handled well by the existing system:

1. Explain the limitation.
2. Propose the smallest appropriate extension.
3. Check whether an existing component or token can be improved instead.
4. Preserve compatibility with existing pages.
5. Add the new pattern to the design system.
6. Apply the improved pattern consistently wherever it is relevant.
7. Verify affected pages for regressions.

Do not create a competing design system to solve a local problem.

Do not silently change the global brand direction.

Do not expand the design system for purely decorative reasons.

If an important decision cannot be resolved from the existing references, document the assumption or ask for clarification when the choice materially affects the outcome.

# 15. DESIGN SYSTEM MAINTENANCE

Keep the design system synchronized with the implementation.

When a shared component, token, or pattern changes:

- Update its source definition.
- Update its documentation.
- Identify affected pages and components.
- Check for visual regressions.
- Remove obsolete variants when safe.
- Avoid duplicate or conflicting tokens.
- Preserve backward compatibility where necessary.

New pages must inherit the current design system rather than recreate its styles independently.

The goal is cumulative consistency: every implementation should make the product easier to extend without visual drift.

# 16. DEFINITION OF DONE

A change is complete only when all applicable requirements are satisfied.

- The established design system was inspected and followed.
- The correct fonts, colors, backgrounds, spacing, and components are used.
- Text follows the project's voice and content standards.
- Graphics and visualizations have a clear purpose.
- Animations follow the established motion language.
- Interactive controls work correctly.
- Relevant states have been considered.
- Responsive behavior has been checked.
- Accessibility has been considered and tested where practical.
- Existing functionality has been preserved or intentionally changed.
- Visual and functional QA has been performed to the extent available.
- Documentation has been updated when the design system changes.
- Outstanding limitations are clearly reported.

**Never equate "the code compiles" with "the design is finished."**

**Never equate "the colors match" with "the design system has been followed."**

The standard is a cohesive, intentional, usable, accessible, and fully implemented experience.

# 17. FINAL OPERATING RULE

For every future task, ask:

**Does this change look, read, behave, and feel like it belongs in the existing product?**

If the answer is no, correct it before completion.

The established design system governs the implementation of every new page and every modification. Consistency is mandatory. Thoughtful adaptation is expected. Unapproved visual drift is not acceptable.
