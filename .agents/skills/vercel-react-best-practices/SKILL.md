---
name: vercel-react-best-practices
description: Official Vercel Engineering guidelines for React 19 and Next.js 16 App Router performance, bundle optimization, dynamic imports, and accessibility. Use when building or refactoring React components, data fetching, or page routes.
---

# Vercel React & Next.js App Router Engineering Standards

These standards codify 40+ performance, architecture, and accessibility rules from Vercel Engineering, optimized for Next.js 16 (App Router) and React 19.

---

## 1. Eliminating Waterfalls (Critical Priority)

1. **Defer Awaiting**: Do not `await` a promise immediately if other independent asynchronous operations can start concurrently. Use `Promise.all()` or start the promises in parallel before awaiting them.
2. **Server Component Fetching**: Fetch data directly in Server Components as close to the consuming leaf component as possible rather than drilling data down from the root layout.
3. **Streaming with Suspense**: Wrap slow data fetching components in `<Suspense fallback={<Skeleton />}>` to stream critical above-the-fold UI instantly.
4. **Parallel Data Prefetching**: Trigger fetches early in server execution pipelines to maximize I/O concurrency.

---

## 2. Bundle Size & Code Splitting (Critical Priority)

1. **Lazy Load Heavy Third-Party Libraries**: Dynamic import (`next/dynamic`) components that use heavy dependencies (Three.js, Chart.js, Lucide icon bundles, canvas renderers, jsPDF) with `ssr: false` when they are below the fold or behind interaction gates.
2. **Icon Import Hygiene**: Never import from the root of large icon packages. Always use direct named imports or verify tree-shaking support.
3. **Client Component Boundary Minimization**: Push `'use client'` down to the smallest possible leaf component. Never mark an entire page or layout as `'use client'` if only a single button or input requires interactivity.
4. **Server Component Slots**: Pass Server Components as `children` into Client Component containers to keep static DOM out of client bundles.

---

## 3. Server-Side vs. Client-Side Invariants (High Priority)

1. **Prerender Safety**: Guard all browser-only APIs (`window`, `document`, `localStorage`, `sessionStorage`, `navigator`) with `useEffect` or an explicit `typeof window !== 'undefined'` check to prevent SSR hydration crashes.
2. **Deterministic Time and Randomness**: Avoid generating random IDs (`Math.random()`) or raw dates (`new Date()`) during SSR rendering without hydration matching (`useId()` for DOM IDs).
3. **URL Search Parameter Hydration**: When reading query strings in Client Components, use `useQueryState` with `NuqsAdapter` to maintain URL-synchronized state without causing unnecessary client re-renders.

---

## 4. Re-Render & Memory Optimization (Medium-High Priority)

1. **Stable Callbacks**: Wrap event handlers passed to deep child components in `useCallback` when children are wrapped in `React.memo`.
2. **Primitive Memoization**: Do not memoize trivial computations (e.g. string concatenation or array length checks). Reserve `useMemo` for computationally expensive transforms or object identities passed to dependency arrays.
3. **State Colocation**: Keep state as close to where it is consumed as possible. Do not hoist state to high-level parent components unless multiple disparate siblings require synchronization.
4. **Ref-Based DOM Access**: Use React refs for non-reactive imperative operations (e.g. scroll positioning, canvas drawing, measuring element dimensions) rather than triggering component state updates.

---

## 5. Web Accessibility & Typography (High Priority)

1. **Accessible Focus Rings**: Ensure every interactive element (`<button>`, `<a>`, `<input>`) has a visible focus indicator (`focus-visible:ring-2 focus-visible:ring-blue-500`).
2. **Semantic HTML**: Prefer `<button type="button">` over clickable `<div>` elements. If a non-button element handles clicks, it must include `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers for Enter and Space.
3. **Typography Standards**: Never use raw em-dashes as punctuation. Use clean colons, spaced hyphens, or proper sentence phrasing. Ensure contrast ratios meet WCAG AA (minimum 4.5:1 for normal text).
4. **Reduced Motion**: Respect user accessibility preferences by gating Framer Motion and CSS transitions behind `prefers-reduced-motion` checks.
