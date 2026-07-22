---
name: une-design
description: Use this skill to generate well-branded interfaces and assets for the une design system (Korean facility-safety / smart-building monitoring platform), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key facts:
- Link `styles.css` for all tokens (509 CSS variables incl. dark/high-contrast/mobile scopes) and webfonts (Spoqa Han Sans Neo primary).
- Primary color: light-blue-500 `#3C69FC`; ink text `#1C202A`; semantic red `#D92D20` / yellow `#E89A00` / green `#1D792B`.
- Type: Spoqa Han Sans Neo, letter-spacing -3%; classes `typo-title-lg|md|sm`, `typo-body-lg|md|sm` in tokens/typography.css.
- Icons: `assets/icons/icon-data.js` (250 glyphs keyed by Korean names, currentColor). Never draw new icons.
- Components live under `components/<group>/`; UI copy is Korean, formal, no emoji.
