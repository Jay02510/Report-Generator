# DESIGN.md

Extracted from existing code (`src/components/*.tsx`) — treat as the source of truth for this project. Hand-authored from audit findings since `impeccable document` couldn't be run in this environment (see PRODUCT.md).

## Color
| Role | Token | Notes |
|---|---|---|
| Accent (single) | `blue-700` / hover `blue-800` | Every primary action, active state, key metric |
| Accent tint | `blue-50`/`blue-100` | Backgrounds for highlighted panels, badges |
| Content neutrals | `slate-*` | Body sections (Hero, PainVsDream, HowItWorks, Features, InteractiveDemo, RoiCalculator) |
| Chrome neutrals | `zinc-*` | Navbar, Footer, BookDemoModal |
| Success | `emerald-500` | Live-state indicator dot only |
| Warning | `amber-*` | Flagged-issue alerts |
| Error/negative | `red-*` | "Traditional Workflow" pain column only |
| Dark surface | `slate-950`/`slate-900` | Hero video mock only |

Do not mix `slate` and `zinc` neutrals within the same component — each component picks one family per its existing pattern above.

## Typography
- `font-sans` (system stack), no custom webfont loaded
- Headline scale: `text-2xl sm:text-4xl` (section headers) / `text-3xl sm:text-5xl lg:text-6xl` (hero only)
- Weight: `font-extrabold` for headlines, `font-bold` for sub-headers, `font-medium`/`font-normal` for body
- Tracking: `tracking-tight` on all headlines
- Eyebrow style (use sparingly — max 2 per page, see audit): `text-xs font-bold uppercase tracking-wider`

## Radius
- `rounded-lg` — buttons, small inputs
- `rounded-xl` — cards, icon containers
- `rounded-2xl` — large containers (calculator panel, demo workspace, video frame)
- `rounded-full` — pills, badges, avatar/icon circles

## Shadow
- `shadow-2xs` — nested small cards
- `shadow-xs` — standard card/button elevation
- `shadow-sm`/`shadow` — hover states only
- Never use `shadow-lg`/`shadow-xl`/`shadow-2xl` except the Hero video frame (`shadow-2xl`) and its play button (`shadow-lg`) — those are intentionally the single most-elevated elements on the page

## Motion
- Hover/focus: `transition-all` / `transition-colors` / `transition-transform`, no custom durations set (Tailwind default)
- No scroll-reveal, no entrance animation library in use (the `motion` package was removed as an unused dependency — do not re-add without a concrete use case)
- One `animate-spin` loader (generate-script simulated loading state)

## CTA convention
Single label, single action: **"Book a Demo" / "데모 신청"**, wired to `onOpenDemoModal`. See PRODUCT.md.

## i18n convention
All copy lives in `src/data/translations.ts`, `TRANSLATIONS.en` / `TRANSLATIONS.ko`, consumed as `const t = TRANSLATIONS[lang].<section>`. No hardcoded UI strings in components. Exception: generated-output content (sample parent scripts, clipboard export template) stays Korean-only by design.
