# Reva Design System

A working design system for **Reva** — distilled from the production codebases at `reva-platform/reva-apps`, `fabriziocuscini/reva-website`, and `fabriziocuscini/reva-custom`.

## What Reva is

Reva is **the intelligent financial account for modern wealth** — a client-owned, adviser-governed account that runs a household's financial life as one. Cash, credit, FX, and investments operate through the same account, coordinated by a deterministic orchestration engine against the household's goals and constraints.

Public-facing voice, taken from `reva-website` copy:

> **Intelligent orchestration for modern advice.**
> Giving ambitious advisors the infrastructure to turn great advice into great outcomes.

> *We believe* the best advisors shouldn't have to choose between growing their firm and delivering exceptional client outcomes.

## Source repositories

All material in this design system was extracted from these repos. They are not bundled — re-import only what you need.

- `reva-platform/reva-apps` (private) — primary monorepo, `@reva/ui` lives in `packages/ui`. Tokens at `packages/ui/src/styles/tokens.css` and `color-palettes.css`.
- `fabriziocuscini/reva-website` — marketing site. CSS-variable tokens in `src/styles/tokens/` and section components in `src/components/section/`.
- `fabriziocuscini/reva-custom` — earlier draft of the design system (Ark UI + Panda CSS); useful for cross-checking semantic intent.

## Index — what is in this folder

| Path | Purpose |
| --- | --- |
| `README.md` | This file. Brand context, tone, visual foundations, iconography, manifest. |
| `SKILL.md` | Agent-Skills-compatible front matter so Claude Code or this agent can load the system on demand. |
| `colors_and_type.css` | Single source of truth for tokens — brand hues, foundation ramps, semantic vars, type families/scale, spacing, radii, shadows, motion. |
| `fonts/` | All brand fonts self-hosted: Inter (variable), Inter Tight (variable), Playfair Display (roman + italic variable), and Geist Mono (variable). All `@font-face` blocks live in `fonts/fonts.css`. No external CDN. |
| `assets/` | Logos (`reva-logo.svg`, `reva-logo-oncolor.svg`, `reva-favicon.svg`), brand symbol (`reva-glass-symbol.png`), benefit imagery, mesh-gradient backgrounds, Phosphor icon SVGs. |
| `assets/icons/` | Phosphor SVG icons used by the marketing site. |
| `preview/` | Cards rendered in the Design System tab — type, color, spacing, shadow, components, brand. |
| `ui_kits/website/` | Recreated marketing-site UI kit (hero, vision card, benefits, infrastructure, founding community, footer). |
| `ui_kits/advisor-portal/` | Recreated advisor-portal UI kit (sidebar, dashboard cards, household table, treasury). |
| `_src/` | Reference source files copied from the codebase for fidelity-checking (not used directly). |

---

## Getting started

```bash
git clone https://github.com/reva-platform/claude-design-system.git
cd claude-design-system
```

Open `ui_kits/website/UI Kit - Marketing.html` or `ui_kits/advisor-portal/UI Kit - Advisor Portal.html` directly in a browser — no build step needed. All CSS tokens and self-hosted fonts are referenced by relative paths, so prototypes work immediately once the folder is cloned. Read `README.md` for brand context, then `SKILL.md` if you're loading this into a Claude Code agent.

---

## Content Fundamentals

Reva's voice is **calm, declarative, and writerly**. It addresses the *adviser* directly (`you` / `your clients`), and uses an editorial italic in headline moments to convey conviction (`*We believe* …`). It does not use marketing exclamation marks, exhortations, or growth-jargon.

### Tone

- **Declarative, not aspirational.** Sentences end. Statements stand. "Money moves where it needs to be, when it needs to be there."
- **Confident, not promotional.** The product is the proof. No "world's best", no superlatives.
- **Writerly cadence.** Sentences vary in length. Short for emphasis, long for nuance. Em-dashes and colons are welcome.
- **Plain financial English.** "Allowances, pension carry-forward, cash buffers, tax positions" — concrete nouns, not abstractions.
- **Selective italics.** Editorial italic (Playfair Display) is reserved for one or two voice beats per page (e.g. *We believe*, *intelligent orchestration*). Never for emphasis on UI labels.

### Casing

- **Sentence case** for headings, labels, and buttons. Not Title Case.
  - ✅ `Join the founding community`, `Modern infrastructure for the future of advice.`
  - ❌ `Join The Founding Community`
- **UPPERCASE** only for overlines (`HUMAN SUPPORT, ALWAYS.`) with `letter-spacing: 0.1em`.
- **Headings end with a period.** Most marketing headlines are full sentences; let them be.

### Pronouns

- `you` / `your` — addresses the *adviser* (the buyer).
- `your clients` / `every client` — never "users", never "customers".
- `we` — the Reva team, used sparingly and in voice moments only (`*We believe* …`, `We're onboarding founding firms now.`).
- Never `I`. Never `our team' as a name; "our team" is acceptable.

### Vocabulary

- Reva-specific: **orchestration**, **household**, **adviser** (UK spelling — *adviser*, not advisor, on the website; the product code uses `advisor-portal`), **firm**, **founding community**, **suitability**, **Consumer Duty**, **carry-forward**, **cash buffer**, **audit trail**.
- Avoid: "AI-powered" (use "intelligent" or name the capability), "users", "customers", "platform" as a generic noun (Reva *is* the platform).
- Numbers and currency: "£" for sterling; never spell out the currency.

### Examples lifted from the live site

- Hero: *"Intelligent orchestration for modern advice. Giving ambitious advisors the infrastructure to turn great advice into great outcomes."*
- Vision: *"We believe the best advisors shouldn't have to choose between growing their firm and delivering exceptional client outcomes."*
- Benefit: *"Every client's financial picture. Live."* — short, punchy, grounded.
- Infrastructure overline: *"HUMAN SUPPORT, ALWAYS."*
- Disclaimer: *"Reva is not yet authorised by the Financial Conduct Authority. Prior to Reva becoming authorised, none of the information provided is intended as an invitation or inducement…"*

### Emoji

**Never.** No emoji anywhere — marketing, product, or docs. Iconography is Phosphor SVG.

---

## Visual Foundations

### The five brand hues

| Token | Hex | Role |
| --- | --- | --- |
| `--reva-amber` | `#AB6400` | **Primary action** — buttons, links, key accents. The "Reva colour". |
| `--reva-gold` | `#E2A336` | Logo marks, **focus ring**, highlights, gilded touches. |
| `--reva-olive` | `#8A7D42` | Warm tinted neutral accent (typography on warm grounds). |
| `--reva-burgundy` | `#460815` | Deep brand accent — headings on light, deep section grounds. |
| `--reva-deep-teal` | `#195257` | Secondary accent for data/financial moments. |
| `--reva-coffee-bean` | `#180207` | Near-black headline override. |

Surfaces are warm, not white. Reva uses the **Hay ramp directly** for product surfaces — solid brand-named hues like *Porcelain* and *Soft Linen* are reserved for the marketing site (where they map to the same hex values).

| Layer | Token | Value | Used for |
| --- | --- | --- | --- |
| 1 — Canvas | `--bg` | `--hay-50` | The page itself |
| 2 — Card | `--bg-card` | `--hay-100` | Cards laid out on the canvas — **flat, no shadow** (subtle lift above hay-50) |
| 3 — Nested item | `--surface-nested` | `hay-500 @ 6% alpha` | List rows / chips / mini-cards *inside* a Hay-100 card |
| Form control | `--input-bg` | `#ffffff` | Text input, textarea, default select — **white, no border** (focus ring on tab) |

The nested-item fill is a **transparent hay-500 tint**, not a solid hue — so it inherits the warmth of whatever card it sits on. Three alpha steps:

- `--surface-nested-subtle` — hay-500 @ 4%
- `--surface-nested` — hay-500 @ 6% (default)
- `--surface-nested-emphasized` — hay-500 @ 8% (hover / emphasis)

**Reva product UI is flat.** Box shadows are rare. Use ramp steps and alpha tints to layer surfaces, not elevation. Marketing surfaces (`section-card` pattern) are the exception — those keep `--shadow-card`.

The `@reva/ui` app theme adds a **Hay** ramp (warm tinted neutral) and a **Mulberry** + **Fern** pair (destructive / success). Default Tailwind `red-*` and `green-*` are remapped to mulberry / fern; `neutral`, `lime`, `cyan`, `teal`, `pink`, `rose`, `fuchsia`, `violet`, `sky` and `emerald` are *disabled* — do not invent new hues.

### Type

| Family | Use | Notes |
| --- | --- | --- |
| **Inter Tight** | Product headings (`--font-heading`) | Tighter, slightly condensed sans for headlines and display. |
| **Inter** | Body, UI (`--font-sans`) | **14px** is the product-UI default (`.body` / `p.reva`); 13px for dense rows, captions, secondary copy (`.body-sm`). 16px is reserved for marketing long-form. |
| **Playfair Display** | **Brand italic only** (`--font-brand`) | Reserved for editorial voice moments (`*We believe*`, hero italic phrases). Do not use roman. |
| **Geist Mono** | Code blocks only (`--font-mono`) | Don't apply to numerals or labels — keep digits in Inter, never tabular-nums in cards. |

Display sizes are large and breathe: hero is `clamp(2.5rem, 4vw + 1rem, 4rem)` on desktop with tight leading (`1.05`) and dense tracking (`-0.02em`). See the `Type` cards in `preview/`.

### Spacing & Layout

- **4-px grid.** All spacing tokens (`--space-1` … `--space-32`) are multiples of 4px.
- **Section card pattern.** Many marketing sections render as a single large rounded card on a porcelain ground (`--radius-3xl` / `--radius-4xl`, `--shadow-card`). Feels like fine stationery, not a SaaS dashboard.
- **Generous outer margins.** The container caps around 1200–1280px and pads `--space-24` top/bottom on desktop sections.
- **Vstack / hstack** primitives with named gap steps (`vstack--loose`, `vstack--relaxed`, `vstack--spacious`).

### Backgrounds

- **Default page background:** flat `--reva-porcelain` (`#FAF9F2`) — never pure white.
- **Mesh gradients:** all 15 hand-picked JPGs ship in `assets/mesh/` at 1400×1000, organized into three series:
  - **`a-01` … `a-06`** — high-contrast, hard angles. Editorial / hero moments.
  - **`b-01` … `b-06`** — saturated, painterly. Workhorse atmosphere for cards and section interiors.
  - **`c-01` … `c-03`** — muted, dusty. Soft grounds for auth screens, founding-community moments, or anywhere text sits directly over the gradient.
  All built from the six brand hues — warm, soft, low-contrast, never neon. Use as **section backgrounds for emotive moments** (vision, hero, founding community, auth), not as decoration on every section. Pair with a darkening overlay when text sits on top. See `preview/brand-meshes.html` for the full gallery.
- **Imagery:** photographic, **warm-toned**, slightly desaturated. Benefits use real-feeling product crops. No stock-photo people-pointing-at-laptops.
- **No repeating patterns, no textures, no grain.** No hand-drawn illustrations. The single illustrative motif is the **glass Reva symbol** (`assets/reva-glass-symbol.png`) — a translucent variant of the logo mark.
- **No gradients on text.** No neon-purple, no rainbow.

### Borders & Shadows

- **Borders are subtle.** `--border` is `--hay-200` (warm pale beige). Inputs read as plain surfaces with a hover/focus border swap, not heavy always-on outlines.
- **Two distinct shadow tracks:**
  - `--shadow-sm` / `--shadow-md` for everyday cards, popovers, dropdowns. Tight and quiet.
  - `--shadow-card` (`0 12px 60px 0 rgb(0 0 0 / 0.20), 0 12px 32px -16px rgb(0 0 0 / 0.30)`) for the **section-card** pattern. Soft, deep, characterful.
- **Inner shadows** are not part of the system.
- **Protection gradients** are not part of the system; instead, full-bleed images live inside section cards with their own padding.

### Corner radii

- **Buttons & inputs:** `--radius-md` (6px) for `sm`, `--radius-lg` (8px) default.
- **Cards:** `--radius-xl` (12px) for product cards, `--radius-2xl` (16px) for emphasized.
- **Section cards:** `--radius-3xl` (24px) at md, `--radius-4xl` (32px) at lg. Big and confident.
- **Pills / capsules:** `--radius-full` for badges, the inline-form wrapper, and the avatar drop.

### States

- **Hover (primary action):** background steps from `--amber-600` to `--amber-700` (slightly darker), or alpha-mix with 10–15% transparency on subtle variants. Transition `background-color 150ms ease`.
- **Active:** one more step darker, no transform.
- **Focus-visible:** **2px gold outline** at `--ring` (`#E2A336`) with **2px offset**. Always visible on keyboard nav. The focus ring is the gold moment.
- **Disabled:** `opacity: var(--opacity-disabled)` (0.5), `cursor: not-allowed`. Hover/active visuals are scoped with `enabled:` so disabled controls do not animate.
- **Press states:** colour-only, no shrink. The system avoids transform-based feedback.

### Motion

- **Restrained.** 120–320ms, `cubic-bezier(0.22, 1, 0.36, 1)` (gentle ease-out).
- **No bouncy springs**, no entrance bounce on page load.
- **The one exception:** the `Sidebar` rail uses `motion/react` springs for collapse/expand width — felt as a single, pleasant compression.
- Page-level transitions: fade + 4–8px translate Y, no flips, no scale-from-zero.

### Transparency & blur

- Used **sparingly**. The auth screen uses the mesh-gradient PNG behind the logo and a subtle white-alpha overlay; product chrome does not glassmorph.
- The website's logo mark uses `opacity: 0.7` on its two stacked rounded squares — the only transparency baked into a brand asset.

### Layout rules (fixed elements)

- **Header is static, not sticky** (`site-header` on the website). The advisor portal uses a **collapsible left rail** with the logo and trigger inside its `SidebarHeader`.
- No floating CTAs, no sticky banners, no notification toasts pinned in the corner. `Toaster` (Sonner) defaults to **`top-center`**.

### Imagery vibe

Warm, **golden-hour**, soft. Photographic crops where they exist (benefit tiles), brand-tinted mesh gradients elsewhere. Black-and-white is not part of the system. Grain is not used.

---

## Iconography

### What's used in production

- **Phosphor Icons** (regular weight) — the single icon family across marketing and product. The full library (1,500+ icons) is **not** committed to this kit — grab what you need on demand. Eleven convenience copies are shipped in `assets/icons/` for the kit's own previews: `arrow-right-bold.svg`, `brackets-curly.svg`, `certificate.svg`, `cpu.svg` (marketing) and `squares-four.svg`, `users-three.svg`, `git-branch.svg`, `bank.svg`, `shield-check.svg`, `sliders-horizontal.svg`, `gauge.svg` (advisor portal).

### How to use any other Phosphor icon

1. Browse [phosphoricons.com](https://phosphoricons.com), set the weight selector to **regular**, find your icon, and copy the SVG.
2. Either drop it into `assets/icons/<name>.svg` and reference locally, or hot-link the canonical source: `<img src="https://unpkg.com/@phosphor-icons/core@2/assets/regular/<name>.svg" alt="">`.
3. In a React/Vue codebase, `npm i @phosphor-icons/react` and import the component directly — the production app does this.

### Rules

- **Phosphor only.** No Lucide, Heroicons, Material, or other sets — even in the product UI. The advisor portal codebase historically referenced `lucide-react`; treat that as legacy and migrate to `@phosphor-icons/react` on touch.
- **Regular weight by default.** Bold/light/thin/duotone/fill exist in Phosphor but aren't part of this brand. The one allowed alternate is **fill** — reach for it sparingly to mark active state in nav, badges, or filled status indicators. Never mix weights on the same surface.
- **No emoji. Anywhere.**
- **No Unicode pictographs** (`✓`, `★`, `→`). The arrow on the inline form is a Phosphor SVG, not `→`.
- **Sizes follow controls.** Icon glyph in a button: `sm` → 16px, `default` → 20px, `lg` → 24px. `IconButton` owns its icon size — don't override with className.
- **Fill, not stroke.** Phosphor regular renders filled with `fill="currentColor"` and inherits color from the surrounding `text-*` class.
- **Logo marks are gold.** The two rounded-square marks in the wordmark are fixed `#E2A336` at `opacity: 0.7`; the wordmark itself uses `currentColor` so it adapts to light/dark.

### CDN substitute

For HTML prototypes that don't have access to npm packages, link from CDN:

```html
<!-- Phosphor regular — the only icon family -->
<script src="https://unpkg.com/@phosphor-icons/web@2"></script>
```

---

## Caveats

- **All brand fonts are now self-hosted** in `fonts/` — Inter, Inter Tight, Playfair Display (roman + italic), and Geist Mono as variable TTFs. Studio Pro has been retired; Inter Tight is the heading face. No external CDN.
- The advisor portal and client portal are mostly scaffolds in the codebase — the kit recreates the *shell* (sidebar, layout, dashboard) faithfully but the screens beyond dashboard and households are illustrative.
- Olive ramp values are reasonable approximations of Tailwind v4 default `olive-*` (the codebase relies on Tailwind defaults rather than overriding); replace with exact oklch if you have them.
