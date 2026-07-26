# PRODUCT.md

## What this is
ChekkiAI marketing/landing page — a B2B lead-gen site for South Korean English hakwon (private academy) directors. Automates translation of foreign teacher notes into polished, bilingual (Korean honorific) parent-consultation scripts.

## Register
`brand` — this is a marketing landing page where design IS the product (not app UI / dashboard). Read `reference/brand.md` conventions when working on this repo.

## Audience
Korean hakwon directors and academy operations staff. Non-technical, trust-sensitive, procurement-style decision making (ROI-driven, wants proof before booking a call). Primary language is Korean; page ships bilingual (ko default, en toggle).

## Brand facts (do not invent alternatives)
- Product name: **ChekkiAI**
- Company: ChekkiAI Inc. — CEO Benjamin Park, Business Registration No. 214-88-94102
- Address: 7F, Teheran-ro 427, Gangnam-gu, Seoul
- Single accent color: `blue-700` (hover `blue-800`) — do not introduce a second accent hue
- Neutrals: `slate-*` for content sections, `zinc-*` for nav/footer/modal — this split is intentional and existing, preserve it
- No purple/indigo, no gradients except the single dark hero-video overlay (`from-slate-950 via-slate-900/95 to-slate-900/80`)
- Radius: `rounded-lg`/`rounded-xl` for buttons and cards, `rounded-2xl` for large containers, `rounded-full` for pills/badges
- Shadows: `shadow-xs`/`shadow-2xs` only — no glow, no heavy drop shadows
- Font: system sans (`font-sans`), no custom webfont currently loaded

## Core CTA
One action, one label: **"Book a Demo" / "데모 신청"** — opens `BookDemoModal`. Every CTA on the page should route to this single action with this single label unless it does something genuinely different (e.g. scroll to the interactive demo section).

## Known constraints
- i18n: `src/data/translations.ts` holds all copy in `en`/`ko` blocks, consumed via `TRANSLATIONS[lang].<section>`. Any new UI copy must go through this system — no hardcoded strings in components, except content that is itself the generated Korean product output (e.g. sample parent scripts), which is correctly Korean-only regardless of UI language.
- Deploys via Google AI Studio → GitHub push workflow, not a live dev server in this environment.

## Next steps backlog (as of last audit)
- [ ] Confirm CTA unification (Prompt 7) has landed: single "Book a Demo" label everywhere, hero trust badge relocated out of the hero stack
- [ ] Consider adding real product screenshots/photography (currently text + mock UI only — see `impeccable` Section 4.8 image guidance if picked up later)
- [ ] No `DESIGN.md` yet — see companion file for the extracted token system
