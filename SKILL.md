---
name: Reva Design System
description: Use when designing for Reva — the intelligent financial account for modern wealth. Tokens, type, brand voice, and recreated UI kits for the marketing site and advisor portal. Distilled from reva-platform/reva-apps and the public reva-website.
---

# Reva Design System

Reva is **the intelligent financial account for modern wealth** — a client-owned, adviser-governed account that runs a household's financial life as one. Cash, credit, FX, and investments operate through the same account, coordinated by a deterministic orchestration engine.

## When to use this skill

Activate this skill whenever the user asks for:
- Anything Reva-branded (marketing pages, decks, advisor portal screens, client portal, auth)
- Design that should feel like Reva even if not branded as such (warm, editorial, financial)
- Comparisons to Reva or extensions of existing Reva surfaces

## Read these first

1. `README.md` — full brand context, visual foundations, content fundamentals, iconography, and an index of every file. **Read it before designing.**
2. `colors_and_type.css` — the single source of truth for tokens. Link it from every prototype.
3. The two UI kits, depending on what you're making:
   - `ui_kits/website/UI Kit — Marketing.html` — public marketing surface (hero, vision card, benefits grid, dark infrastructure section, founding-community, footer).
   - `ui_kits/advisor-portal/UI Kit — Advisor Portal.html` — product surface (collapsible sidebar, dashboard with stats, households table, activity feed, treasury panel).
4. `preview/` cards in the Design System tab show every token rendered.

## Quick start

```html
<link rel="stylesheet" href="path/to/colors_and_type.css">
```

That gives you Inter, Inter Tight, Playfair Display and Geist Mono plus every CSS custom property — `--reva-amber`, `--reva-gold`, the Hay/Amber/Gold ramps, the Olive **neutral** ramp (foreground / typography), the Mulberry/Fern/Cobalt/Copper semantic ramps, semantic vars (`--bg`, `--fg`, `--primary`, `--ring`), the type scale, spacing, radii, shadows.

## Non-negotiables

- **No emoji.** Anywhere. Use Phosphor (regular weight) — the single icon family for marketing and product. Grab any icon from [phosphoricons.com](https://phosphoricons.com) (set weight to *regular*) or via CDN: `https://unpkg.com/@phosphor-icons/core@2/assets/regular/<name>.svg`. Eleven SVGs are pre-shipped in `assets/icons/` for the kit's own previews — don't treat that folder as the full library.
- **Sentence case** for headings, labels, buttons. UPPERCASE only for overlines (`letter-spacing: 0.1em`).
- **Voice:** declarative, calm, writerly. Address the *adviser* as "you". Use `*We believe*` editorial italic (Playfair Display) sparingly — once or twice per page.
- **Surfaces are warm.** Default page is `--reva-porcelain` (`#FAF9F2`), never pure white.
- **Mesh gradients live in `assets/mesh/`** — 15 hand-picked JPGs across three series (`a-01…a-06` editorial, `b-01…b-06` atmospheric, `c-01…c-03` muted). Use sparingly for emotive moments (hero, vision, founding community, auth), not as background on every section. Always darken with an overlay when text sits on top.
- **Phosphor only.** Don't mix in Lucide, Heroicons, Material, or any other set.
- **Focus ring is gold** (`--ring: --gold-500`, 2px outline, 2px offset). Never blue.
- **No bouncy springs**, no transform-based press states. 120–320ms gentle ease-out.
- **Section card pattern:** big rounded card (`--radius-3xl` / `4xl`) on porcelain ground, with `--shadow-card`. Feels like fine stationery, not a SaaS dashboard.
- **Avoid `red-*` / `green-*` / `blue-*` / `orange-*` / `yellow-*` / `gray-*` / `slate-*` / `zinc-*` / `stone-*`.** Destructive/success/info/warning remap to `--mulberry-*` / `--fern-*` / `--cobalt-*` / `--copper-*`; reach for `--olive-*` (the neutral ramp) for any grayscale need — text, placeholders, dividers, muted surfaces. Tailwind `neutral`, `lime`, `cyan`, `pink`, `rose`, `fuchsia`, `violet`, `sky`, `emerald`, `teal` are disabled by the platform — don't invent new hues.

## Vocabulary

- ✅ adviser / advisers (UK spelling on the website), household, firm, founding community, suitability, Consumer Duty, carry-forward, cash buffer, audit trail, orchestration
- ❌ users, customers, "platform" as a generic noun, AI-powered, world's-best, exclamation marks

## Caveats

- Inter, Inter Tight, Playfair Display (roman + italic) and Geist Mono are self-hosted in `fonts/` — `@font-face` blocks in `fonts/fonts.css`. (Studio Pro has been retired; Inter Tight is the heading face.)
- The advisor & client portals beyond the dashboard/households shells are illustrative — the codebase scaffolds them but doesn't yet implement the full screens.
