---
name: visual-media-craftsmanship
description: Master craftsmanship standard for generative images, high-density infographics, cinematic video, and tactile animations. Codifies Higgsfield layered cinematography, Edward Tufte data density, Linear-grade spring physics, and Remotion video-as-code principles.
---

# Visual Media Craftsmanship & Bleeding-Edge Aesthetics Protocol

This skill governs the production of all visual assets (generative photography, technical infographics, motion graphics, video pipelines, and UI interactions) on **`richardewing.io`**. It replaces generic AI stock illustrations with institutional-grade editorial aesthetics.

---

## 1. The Root Cause: Why AI Visuals Are Usually "Meh"

Most generative AI images, infographics, and animations look like cheap corporate marketing templates because:
1. **The Descriptive Prompting Trap**: Writing narrative paragraphs ("an executive looking at AI data on a screen in a modern office") causes diffusion models (Imagen 3, Flux, Midjourney) to average their training weights toward clichéd corporate stock photos: purple/blue neon glows, plastic skin, floating holographic HUDs, and cartoonish 3D figurines.
2. **The Bento Box Fallacy**: Stacking 4 rounded cards with generic icons and 2 sentences of marketing fluff communicates zero real information to CFOs, CTOs, and PE sponsors.
3. **Sluggish Linear Animation**: Relying on default CSS `ease-in-out` or `duration: 0.5s` opacity fades creates floaty, sluggish UI rather than tactile, mechanical speed.
4. **Unanchored Text-to-Video**: Direct text-to-video prompts cause rubbery morphing and visual hallucinations because no physical keyframe was locked first.

---

## 2. Higgsfield-Class Layered Cinematography (Prompt Architecture)

To generate bleeding-edge photographic and conceptual assets using `generate_image`, Gemini Omni Flash, or external diffusion engines, NEVER write narrative descriptions. Use the **5-Layer Parameterized Prompt Engine**:

### Layer 1: Physical Materials & Subject Realism
* Ban plastic surfaces and generic "technology". Specify tangible physical textures:
  * *Materials*: Brushed aeronautical titanium, raw volcanic basalt, sandblasted obsidian, frosted borosilicate glass, heavyweight unbleached 320gsm cotton rag paper, cold-rolled carbon steel.
  * *Human Subjects*: Real skin pores, natural dermal micro-textures, authentic fatigue/focus lines, natural flyaway hair strands. Zero airbrushed plastic skin.

### Layer 2: Optics, Sensor & Lens Physics
* Always declare the exact camera sensor and optical glass to force realistic focal compression, perspective, and depth of field:
  * *Macro / Detail*: `Hasselblad H6D-100c, HC 100mm f/2.2 lens, shallow depth-of-field, natural chromatic aberration at outer edges, razor-sharp focus plane`.
  * *Cinematic Editorial*: `ARRI Alexa Mini LF, Cooke Anamorphic /i 40mm T2.3 lens, subtle oval bokeh, horizontal anamorphic streak flare, organic grain`.
  * *Architectural / Systemic*: `Leica M11 Monochrom, Summilux-M 35mm f/1.4 ASPH, orthographic perspective, minimal barrel distortion`.

### Layer 3: Lighting Architecture (Causal Physics)
* Ban generic "studio lighting" or "dramatic lighting". Specify the physical light source, angle, color temperature, and shadow ratio:
  * *Contre-Jour (Rim Silhouette)*: `Strong 5600K backlight creating sharp rim separation on subject edges, deep textured negative fill in foreground`.
  * *Chiaroscuro Key*: `Single directional hard tungsten light through narrow aperture, 4:1 shadow ratio, deep velvety graphite shadows, zero ambient fill`.
  * *Soft Cross / Editorial*: `Large 8x8 diffusion silk overhead, soft wrap-around fill, subtle atmospheric particulate density, zero blown highlights`.

### Layer 4: Color Timing & Film Emulation (LUTs)
* Dictate calibrated film stock or bespoke monochrome tonal curves:
  * *Editorial Film*: `Kodak Portra 400 tonal profile, muted desaturated highlights, rich warm midtones, fine organic silver halide grain`.
  * *Cinematic Cold*: `Fujifilm Eterna 250D emulation, cool slate and zinc undertones, single calibrated 515nm emerald or 470nm cyan laser accent`.
  * *Technical Monolith*: `High-contrast monochromatic graphite palette (#09090b to #f4f4f5), zero neon saturation, surgical precision`.

### Layer 5: Strict Negative Constraints
* Explicitly suppress diffusion slop:
  * `no purple neon glows, no glowing grid lines, no floating holographic interfaces, no 3D cartoon avatars, no plastic airbrushed skin, no stock photo corporate handshakes, no clip-art vector icons, no distorted hands/fingers`.

---

## 3. Edward Tufte & Bloomberg-Grade High-Density Infographics

Infographics must treat the reader as a sophisticated decision-maker. Replace shallow bento boxes with high data density:

1. **The "Data-to-Ink" Ratio**:
   * Every line, label, and pixel must convey quantitative or structural meaning. Eliminate decorative borders, ornamental drop shadows, and redundant containers.
2. **Micro-Typography & Tabular Numerals**:
   * Use monospace labeling: `font-mono text-[11px] uppercase tracking-wider text-zinc-400`.
   * Enforce `tabular-nums` for all numeric metrics so columns align vertically without jitter.
   * Always include real units (`$/Mtok`, `ms latency`, `bps`, `vCPU`, `P99`) and dataset timestamps (`Telemetry: Sept 2026`).
3. **SVG Vector Precision Over Raster Images**:
   * Code custom SVG micro-visualizations (sparklines, Sankey diagrams, waterfall cost breakdowns, radar matrices) directly into React components.
   * Use SVG `strokeDasharray` and `strokeDashoffset` for smooth, performant draw-in animations on viewport enter.
4. **Interactive Generative UI**:
   * Utilize Antigravity 2.12 Generative UI (`builtin/skills/generative_ui`) to render interactive calculation controls, scenario toggle sliders, and live DOM charts rather than static mockups.

---

## 4. Tactile Spring Physics & Linear-Grade Motion Design

Eliminate sluggish linear transitions. Interfaces must feel crisp, mechanical, and tactile:

1. **Physics-Based Springs (Zero Float)**:
   * Standardize on high-stiffness, critical-damping springs for state changes:
     ```tsx
     transition={{ type: "spring", stiffness: 420, damping: 32 }}
     ```
2. **Micro-Choreographed Staggering**:
   * When lists, cards, or metric grids mount, stagger elements rapidly:
     ```tsx
     const container = {
       show: { transition: { staggerChildren: 0.035, delayChildren: 0.05 } }
     };
     ```
3. **Cursor-Bound Specular Tracking**:
   * For flagship cards and interactive diagnostic calculators, track mouse coordinates to render a subtle, localized radial sheen (`rgba(255,255,255,0.06)`) that moves dynamically across the card border and surface.
4. **Fluid Layout Mathematics**:
   * Use Framer Motion's `layoutId` to morph elements seamlessly across layout states (e.g. tabs, filtered indices, accordion expansions) without jarring DOM reflows.

---

## 5. Video-as-Code & Cinematography Pipelines (Higgsfield & Remotion)

For video, presentation trailers, and executive demos:

1. **The "First-Frame Anchor" Rule (I2V)**:
   * NEVER prompt a text-to-video engine from scratch. Generate and approve Keyframe 0 (using the 5-Layer Parameterized Prompt Engine). Ensure perfect texture, typography, and composition. Then feed Keyframe 0 into the video engine with explicit physical camera vectors.
2. **Physical Camera Vectors (No Digital Zooms)**:
   * Use cinema movement verbs:
     * `Slow 1.5m/s steadycam push-in on 35mm lens, camera height 1.2m, tracking forward along central axis`.
     * `Counter-clockwise 15-degree orbital arc, subject locked at dead center, dramatic parallax shift across background layers`.
     * `Low-angle tracking shot, slow truck right, subtle rack focus from foreground telemetry HUD to background server rack`.
3. **Remotion Composition Engine (Video-as-Code)**:
   * Assemble videos programmatically using React and Remotion:
     * Code the layout, typography, kinetic text, and SVG telemetry in React.
     * Insert AI-generated B-roll clips (from Higgsfield, Kling, or Gemini Omni Flash) as background texture layers.
     * Result: 100% deterministic text and timing with cinematic visual depth.
