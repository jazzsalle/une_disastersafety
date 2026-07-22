# une Design System

Design system extracted from the Figma file **"Design System_New v1.0.0.fig"** (attached to this project as the sole source). It is a Korean-language enterprise UI system — the icon inventory (CCTV, IoT, 화재/누출/가스 detection, 관제, 도면 drawing tools, 3D viewer) and product marks (Logo/메인·관제·관리·빌더·sop) indicate a **facility-safety / smart-building monitoring platform** with map, 3D-viewer, dashboard and event-alert surfaces.

**No company logo exists in the source.** The `Logo` page contains product-module glyphs and file-format marks only — wherever a brand mark would go, render "une" in plain type. Do not invent a mark.

## Source

- Figma: `Design System_New v1.0.0.fig` (mounted virtual filesystem; 65 pages, 82 component sets, 509 variables, ~250 system icons)
- No codebase or website was provided.

## Content fundamentals

- **Language:** Korean, formal declarative documentation style (하다체): "…스타일, 형태, 크기를 정의한다", "…경고의 의미를 전달한다". UI copy is short noun phrases: 확인, 취소, 더보기, 알림.
- **Casing:** Korean labels; English used for token/technical names (Title/Medium (24), Elevation-01). Sentence case for English.
- **No emoji.** Meaning is carried by the icon system and semantic color, never emoji.
- **Numbers/units:** explicit px in specs ("Font size: 24px | Line height: 150% | Letter spacing: -3%").
- **Voice:** neutral, instructional, system-oriented. No marketing tone, no exclamation marks.

## Visual foundations

- **Color:** white surfaces (#FFFFFF) with ink text `#1C202A`/`#1D1F2B`; primary **light-blue-500 #3C69FC** (pressed 600 #345CE0/#2C4EC4); dark-mode neutrals from the **dark-blue** scale (#15255C family); semantic red #D92D20 (error), yellow #E89A00 (warning), green #1D792B (success); extended teal/purple/orange scales. Full Light / Dark / High-contrast / Mobile modes ship as token scopes (`:root[data-theme="dark"]`, `[data-mode="high-contrast"]`, `[data-mode="mobile"]`).
- **Type:** Spoqa Han Sans Neo (Regular/Medium/Bold) everywhere; -3% letter-spacing on the whole scale. Title 32/24/20, Body 16/14/12. Pretendard GOV appears on documentation surfaces; Noto Sans KR is legacy.
- **Spacing:** 2–96px primitive scale; semantic gap/padding steps 2xs(4)→2xl(32). Control heights 4xs(20)→3xl(56); icon frame sizes 12→40px.
- **Radius:** xs 2 / sm 4 / md 8 / lg 12 / xl 16 / max 1000 (pill). Cards & modals md–lg; inputs sm; badges cylinder = max.
- **Elevation:** two-layer shadows — ambient (0 0 5 rgba(0,0,0,.06)) + key (0 8 15 rgba(0,0,0,.15)); dark mode strengthens to .08/.32. Guide shows an 8-step Elevation-01…08 ramp (only step 1 values were fully recoverable: 0 0 3 .04 + 0 4 11 .11).
- **States:** every component defines default/hover/active/focus-visible/disabled variants; hover = one scale step darker fill, focus-visible = visible focus ring (`--color-focus-ring`), disabled = surface/disabled + text/disabled.
- **Backgrounds:** flat solid surfaces; no gradients, textures, or illustration backdrops. Dark mode is a first-class equal theme (관제/monitoring screens are dark).
- **Borders/dividers:** 1px `--color-border-default` (#CECFD2) and subtle (#EBECF0).
- **Animation:** none defined in the source; keep motion minimal (simple fades) if needed.

## Iconography

- **System icons:** ~250 single-color 24×24 glyphs, stroke/fill pairs (`_Line` / `_Fill`), organized by domain (알림, 입력, 뷰, 방향, 파일, 메뉴, 관제, 알람 유형, 도면). All are in `assets/icons/icon-data.js` keyed by their Korean Figma names (e.g. `화재_Fill`, `검색`, `화살표_오른쪽`); render with `<Icon name="검색" size={20} />` — they paint with `currentColor`.
- Icon frames come in 12/16/20/24/28/32/36/40px sizes (`--sizing-icon-*`).
- **Product/file marks:** 12 multicolor glyphs in `assets/logos/icon-data.js` via `<FileFormatLogo name="파일포맷_pdf" />`.
- No icon font, no emoji, no unicode-char icons.

## Index

- `styles.css` — global entry (imports everything below)
- `tokens/fig-tokens.css` — all 509 Figma variables (Primitives, Semantic-color, Semantic-size, Component, Ungrouped) incl. dark / high-contrast / mobile scopes
- `tokens/typography.css` — type classes (`typo-title-lg` … `typo-body-sm`), font stacks
- `tokens/fonts.css` — webfonts via CDN (see Caveats)
- `guidelines/` — foundation specimen cards (colors, type, spacing, radius, elevation)
- `assets/icons/` — Icon component + icon-data.js (250 glyphs); `assets/logos/` — FileFormatLogo (12 marks); `assets/illustrations/` — Light/Dark empty-page illustrations
- `components/` — React components (below)
- `ui_kits/lnb/` — LNB left-nav surface recreation
- `SKILL.md` — agent skill entry point

## Components

Grouped by directory. Names come from the Figma layer names; awkward auto-names are annotated.

**actions/** — Button, IconButton, V03TextButton (텍스트 버튼), DotBadge, Component3/8/9/10 (Text-button internals: home/edit slot glyphs)

**inputs/** — Input, Textarea, Select, Checkbox, Radio, Switch, Segment (segmented control), Datepicker (day cell), Droplist (셀렉트 드롭리스트 항목), Component6 (아이콘 메인프레임 — resizable icon frame), Component12 (scrollbar 유형/상태), Icon140, IconFill20/29/42/43, IconLine/39/40 (embedded glyphs)

**display/** — Badge, Badge2 (mode-aware Badge), Card, Accordion, ListItem, ActionChip, ChoiceChip, FilterChip, InputChip, HeaderCell, BodyCell, Slot/Slot2/Slot4/Slot5/Slot6 (table cell slots: text/checkbox/button/badge/input × align), Header3, Body, Footer (card sections), Checkbox2 (table checkbox), Component (icon frame), IconLine33, Input3 (table inline input)

**navigation/** — Tab, TabLine, TabFill, Breadcrumb, PaginationButtons, Tree, Header (헤더, login variants), Header4/Body2 (menu rows with divider), Droplist2 (드롭리스트 모드/상태), Component7\_ (드롭 리스트 20-variant panel), Frame14492 (event-type icon set), SlotEdit, Icon54/80/137/139, IconLine12

**feedback/** — Toast, Tooltip, TooltipBasic (툴팁 베이직), Spinner, Empty (빈 화면), Nonmodal, Upload, UploadList, Slot3/Slot7, Component5, Logo/LogoJpeg (file-format glyph deps)

**overlay/** — Modal, Header5 (modal header: divider/description-position/size), Footer3 (modal footer), Component4 (**알럿 / EventAlert** — event alert card), Filter (filter panel screen), DroplistLightDefaultFalse (droplist row), ComponentTitle (foundation guide title)

**assets/** — Icon (250-glyph system icon renderer), FileFormatLogo, Light/Dark (empty-page illustrations)

**ui_kits/lnb/** — Lnb (LNB screen)

### Full export list (bundle names)
Button, IconButton, V03TextButton, DotBadge, Component3, Component8, Component9, Component10, Input, Textarea, Select, Checkbox, Radio, Switch, Segment, Datepicker, Droplist, Component6, Component12, Icon140, IconFill20, IconFill29, IconFill42, IconFill43, IconLine, IconLine39, IconLine40, Badge, Badge2, Card, Accordion, ListItem, ActionChip, ChoiceChip, FilterChip, InputChip, HeaderCell, BodyCell, Slot, Slot2, Slot4, Slot5, Slot6, Header3, Body, Footer, Checkbox2, Component, IconLine33, Input3, Tab, TabLine, TabFill, Breadcrumb, PaginationButtons, Tree, Header, Header4, Body2, Droplist2, Component7\_, Frame14492, SlotEdit, Icon54, Icon80, Icon137, Icon139, IconLine12, Toast, Tooltip, TooltipBasic, Spinner, Empty, Nonmodal, Upload, UploadList, Slot3, Slot7, Component5, Logo, LogoJpeg, Modal, Header5, Footer3, Component4, Filter, DroplistLightDefaultFalse, ComponentTitle, Component1, Icon, FileFormatLogo, Light, Dark, Lnb

### Intentional additions
- `assets/icons/Icon.jsx` + `assets/logos/FileFormatLogo.jsx` — thin renderers over extracted SVG data so the icon set lands as one data file instead of 250 component files.
- `tokens/typography.css` — the file defines no Figma text styles; classes were transcribed from the Typography guide page.

**misc/** — Component1 (Component 1 — icon-slot frame set)

### Intentionally skipped source "families" (and why)
The kit's raw inventory counts 744 "families": 82 real component sets plus ~660 standalone symbols. The standalones are covered as follows, not as per-symbol .jsx components:
- **~580 icon glyphs** (`Icon/...`) → one data file, `assets/icons/icon-data.js`, rendered by the `Icon` component.
- **12 `Logo/...` marks** → `assets/logos/icon-data.js`, rendered by `FileFormatLogo`.
- **Per-mode/state standalone symbols** (e.g. `드롭리스트 (Droplist)/Dark/Hover/true`, `셀렉트 (Select)/Light/Inline/MD(40)/Focus`, `토스트 - 웹/Dark/Error`, `Accordion/line/md(56)/...`, `배지 (Badge)/...`, `모달/dark`) → these are exploded variant symbols of sets already built as prop-driven components (Droplist2, Select, Toast, Accordion, Badge/Badge2, Modal); the mode/state axes are props, not separate components.
- **가변 아이콘 ×3 and 아이콘 메인프레임(가변 아이콘)** → icon size-wrapper frames; covered by `--sizing-icon-*` tokens and the `Component` icon-frame component.
- **버튼 스위치** (6 variants) → no extractable geometry in the .fig; NOT built (flagged to the user).
- **Foundation guide scaffolding** (`Component Title`, `Guide Title`, swatch bases, 기타/빈 페이지) → documentation furniture, represented by the guidelines cards and `assets/illustrations`.

### Known gaps / caveats
- **버튼 스위치** (button switch, 6 variants) is listed in the file's component inventory but has no extractable geometry in the .fig — not built.
- The three duplicate **가변 아이콘** 8-variant sets are size-wrapper frames; covered by `--sizing-icon-*` tokens rather than components.
- Very large variant sets (Badge 600, V03TextButton 500) are capped at 64 fully-diffed variants; uncommon combinations may render as the nearest base variant.
- **Fonts load from CDN** (Spoqa GitHub Pages, jsdelivr, Google Fonts) — no binaries were in the .fig. Supply .woff2 files to self-host.
- Elevation steps 02–08 were not individually recoverable from the source.
