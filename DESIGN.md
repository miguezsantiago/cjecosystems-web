---
name: Conjunction Ecosystems
description: Category-standard consulting world. Navy ink, white and mist, one marigold accent, one grotesque, square corners and hairline rules.
colors:
  navy: "#0B1B33"
  navy-2: "#13294A"
  navy-3: "#1F3A63"
  ink: "#0B1B33"
  slate: "#4A5568"
  slate-2: "#6B7585"
  mist: "#F2F4F7"
  mist-2: "#E6EAF0"
  line: "#D5DBE3"
  field-stroke: "#A9B3C1"
  white: "#FFFFFF"
  on-navy: "#FFFFFF"
  on-navy-soft: "#B9C4D4"
  marigold: "#F6A800"
  marigold-2: "#E09700"
  success: "#1E7A4F"
  success-tint: "#E7F4EC"
  danger: "#B42318"
  danger-tint: "#FDECEA"
typography:
  display:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 4.8vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.03
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.2vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  statement:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.9vw, 1.625rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.45
  label:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.08em"
  figure:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    letterSpacing: "-0.01em"
    fontFeature: "tnum"
rounded:
  none: "0"
  circle: "50%"
spacing:
  gutter: "clamp(20px, 4vw, 48px)"
  section-y: "clamp(80px, 10vw, 144px)"
  section-head: "clamp(48px, 6vw, 80px)"
  header-h: "76px"
  container: "1280px"
  row-y: "22px"
  stack-sm: "8px"
  stack-md: "20px"
  stack-lg: "40px"
components:
  button-primary:
    backgroundColor: "{colors.marigold}"
    textColor: "{colors.navy}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.marigold-2}"
    textColor: "{colors.navy}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
  button-sm:
    padding: "8px 18px"
    height: "40px"
  button-lg:
    padding: "14px 30px"
    height: "56px"
  link-arrow:
    textColor: "{colors.navy}"
    typography: "{typography.body-sm}"
  header-transparent:
    backgroundColor: "transparent"
    textColor: "{colors.on-navy}"
    height: "{spacing.header-h}"
  header-solid:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    height: "{spacing.header-h}"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
    height: "48px"
  band-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy}"
    padding: "{spacing.section-y} 0"
  band-mist:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
    padding: "{spacing.section-y} 0"
  portrait:
    backgroundColor: "{colors.mist-2}"
    rounded: "{rounded.circle}"
    width: "200px"
  portrait-sm:
    rounded: "{rounded.circle}"
    width: "48px"
  footer:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy-soft}"
    padding: "72px 0 32px"
---

# Design System: Conjunction Ecosystems

## Overview

**Creative North Star: "The Institutional Ledger"**

This is the large-firm consulting homepage played straight: navy ink on white, quiet mist bands, one marigold accent, and a single grotesque set tight at large sizes. The point is to make a young firm read as institutional. Credibility comes from order: wide margins, hairline-ruled rows of content, tabular figures, square corners and full-bleed city photography under a navy scrim. The system follows category convention and executes it at full quality. It does not try to subvert it.

Density is editorial, not dashboard. Sections breathe on a large vertical rhythm, and content inside a section is organised as ruled rows and columns rather than floating cards. Depth is almost absent: the page is flat paper, and shadows appear only where one layer truly sits over another (the fixed header, the mobile menu, the contact form over photography).

Motion is spent on one moment. The hero photo settles with a slow scale-in while the headline lines rise in sequence. Everything else is short state feedback: rules that draw in, arrows that nudge, the header turning solid. Reduced motion removes all of it.

**Key Characteristics:**
- Navy (#0B1B33) and white carry the page. Mist bands give quiet contrast, and marigold is the only accent.
- One family, Schibsted Grotesk, from 400 to 800. Headings are tight and tracked negative.
- Square corners everywhere. Circles are reserved for people (portraits) and status dots.
- Hairline-ruled rows replace cards. Lists open on a 2px navy rule and separate on 1px hairlines.
- Full-bleed photography always sits under a navy scrim.
- One authored motion moment (hero entrance). Everything else is state feedback.

## Colors

A cool, institutional palette: deep navy ink, white and blue-grey neutrals, lit by a single warm marigold.

### Primary
- **Institutional Navy** (navy): the ink of the whole system. Body text (as `ink`), the 2px rule that opens every list, full navy bands (fee band, contact, footer), the outline button, and the scrim over photography. `navy-2` and `navy-3` are deeper steps: `navy-3` is the input hover stroke and the scrollbar thumb.

### Secondary
- **Cempasúchil Marigold** (marigold): the single accent. It appears as the primary button fill, the underline of arrow links and the contact email, the focus outline, the nav hover rule, hero-tab top rules, compare-table markers, the 1px rule above fee-band columns, and text selection. **Deep Marigold** (marigold-2) is the button hover fill and the small dash markers in service and accordion lists.

### Neutral
- **White** (white): the default page surface, the solid header, the form panel.
- **Cool Mist** (mist): the quiet band background (model/platform sections, investor note, feature-image matte). **Mist-2** is the portrait placeholder fill and the soft divider inside service lists.
- **Slate** (slate): secondary text, including leads, descriptions, row metadata and labels. **Slate-2** is tertiary: the "traditional" column of the compare table and "optional" field hints.
- **Hairline** (line): the 1px row divider used across the whole system.
- **Field Stroke** (field-stroke): the resting 1px border of form inputs, darker than the hairline so fields remain legible as controls.
- **On-Navy Soft** (on-navy-soft): secondary text on navy (hero lede, hero-tab descriptions, fee copy, footer links).

### Feedback
- **Success Green** (success) with **success-tint**: status dots on projects and the form success banner.
- **Alert Red** (danger) with **danger-tint**: invalid field stroke, field error text, and the form error banner.

### Named Rules
**The Marigold Is Material Rule.** Marigold works as a fill, a rule, a marker or a focus ring on any surface. As text it appears only on navy (the hero sub-line, contact email hover). Never set marigold text on white or mist.

**The One Accent Rule.** Marigold is the only chromatic accent. Green and red appear only for status and form feedback, never as decoration.

**The Navy Scrim Rule.** Photography never shows raw under text. It always sits under a navy-tinted gradient built from rgba(11, 27, 51, …), darkest behind the copy column, and becomes a full vertical scrim on mobile.

## Typography

**Display Font:** Schibsted Grotesk (with Helvetica Neue, Arial, sans-serif)
**Body Font:** Schibsted Grotesk (same family)

**Character:** One grotesque, used institutionally. Weight and tracking create the hierarchy, not a second family. Headings are heavy and tightly tracked. Body copy is open and untracked.

### Hierarchy
- **Display** (800, clamp 2.5–4.5rem, 1.03): the hero H1 only, set in stacked lines at max 14ch with balanced wrapping.
- **Headline** (700, clamp 2–3.25rem, 1.08): section H2s, balanced wrapping. Navy bands scale it up (fee title to about 4rem, contact to about 4.25rem) and narrow the measure.
- **Title** (700, clamp 1.5–2rem, 1.15): service names, feature project title.
- **Title-sm** (700, 1.3125rem, 1.25): project names, partner names, investor-note heading. At 1.0625rem (h5) it heads platform items.
- **Statement** (600, clamp 1.25–1.625rem, 1.3): the hero sub-line in marigold on navy. At weight 500 with 1.4 leading it sets mission/vision statements.
- **Lead** (400, clamp 1.0625–1.25rem, 1.55, slate): the paragraph beside a section headline, max 58ch.
- **Body** (400, 1.0625rem, 1.6): running text, about 46–64ch per component.
- **Body-sm** (600, 0.9375rem): nav links, list items, row metadata, arrow links (700).
- **Label** (700, 0.8125rem, 0.08em tracking, uppercase, slate): compare-table column heads and group headings such as "Personas" or "Misión". Status text uses the same size at 0.04em without uppercase.
- **Figure** (700, 1.25rem, tabular numerals): spec values (units, surface, delivery date), with a 0.8125rem slate term above.

### Named Rules
**The One Family Rule.** Every surface uses only Schibsted Grotesk, loaded at 400/500/600/700/800. Do not add a serif, a mono, or a second display face.

**The Tight Top Rule.** Headings run 700–800 with negative tracking (−0.01 to −0.035em) that grows with size. Body and lead text are never tracked.

**The Label Heads Data Rule.** Uppercase labels head a table column or a group of items and sit on or above a rule. They never float above a headline as a kicker.

## Layout

The container is 1280px of content plus a fluid gutter (20–48px). Sections sit on a vertical rhythm of 80–144px (`section-y`). A section heading block sits 48–80px above its content.

The standard section head is a split: headline at 7fr, lead at 5fr, bottom-aligned. It stacks below 880px. Major compositions use asymmetric 12-column fractions: 5/7 (fee band, platform), 4/8 (network), 5/6 (contact), 6/6 (feature project), and 4/5/3 (service rows). Three-up grids (projects, partners, values) collapse to one column at 960px. Values go to two columns first.

The hero is full viewport height (100svh) with content pinned to the bottom. On desktop the copy column starts at 46% + 28px, aligned with the second tab's text. The tab strip is a 46% / 1fr / 1fr grid.

Breakpoints observed: 1080 (header CTA hidden), 960 (most grids collapse), 880 (nav collapses to a menu, hero goes single-column), 720 (compare table reflows), 640/600/560 (final single-column and compact header).

Band sequence alternates white, mist and navy to separate chapters. Two mist or two navy bands never sit next to each other.

### Named Rules
**The Hairline Row Rule.** Content is organised as rows ruled by 1px hairlines (`line`), not as cards. A list opens with a 2px navy rule and closes each row with a 1px hairline.

**The Wide Margin Rule.** Generous whitespace signals the institution. Do not tighten `section-y` or the gutter to fit more content. Split to another page instead.

## Elevation & Depth

The system is flat. Depth comes from band color (white, mist, navy) and rules, not from shadow. Shadows exist only where a layer physically overlaps content.

### Shadow Vocabulary
- **Header seam** (`box-shadow: 0 1px 0 #D5DBE3, 0 8px 24px -16px rgba(0,0,0,.18)`): the solid header after scrolling.
- **Menu drop** (`box-shadow: 0 16px 32px -16px rgba(0,0,0,.25)`): the mobile nav panel.
- **Form lift** (`box-shadow: 0 24px 60px -24px rgba(0,0,0,.5)`): the white form panel over contact photography.
- **Portrait hairline** (`box-shadow: inset 0 0 0 1px rgba(11,27,51,.08)`): the edge of a circular portrait.
- **Frosted strip** (`backdrop-filter: blur(10px)` over rgba(11,27,51,.55)): the hero tab strip only.

### Named Rules
**The Only-When-Overlapping Rule.** A shadow is allowed only on a layer that sits over other content (fixed header, menu, form over photo). Rows, tiles and bands stay flat.

## Shapes

Corners are square (0) on every button, field, band, image and tile. The only circles are portraits, status dots and circular project logos. Borders are hairlines: 1px `line` between rows, 2px navy to open a list or table, 1–3px marigold for accent rules and underlines. Small geometric markers (8px marigold squares in the compare table, 8×2px or 6×2px marigold dashes in lists) replace bullets. Icons are 20px stroked SVG (arrows, plus-to-cross) drawn in currentColor.

### Named Rules
**The Square Corner Rule.** No border-radius on rectangles, ever. Circles belong to people and status only.

## Components

### Buttons
Solid, square and confident.
- **Shape:** square (0), 2px border slot, min height 48px (40 small, 56 large).
- **Primary:** marigold fill, navy text, weight 700, 12px 24px. Hover deepens to marigold-2.
- **Outline:** 2px navy border, navy text. Hover fills navy with white text.
- **Focus:** global 2px marigold outline, 3px offset.
- **Busy/disabled:** 60% opacity, progress cursor.
- Use one primary per view region. The header CTA uses the small size.

### Arrow Link
The secondary action. Navy (or white on navy) text at 700 / 0.9375rem, 2px marigold underline, 20px arrow icon that nudges 3px right on hover.

### Header (transparent to solid)
A fixed 76px bar. Over the hero it is transparent with white text. After scroll it becomes solid white with navy text and the header seam shadow (0.35s ease-out). It holds the wordmark (two-line brand with uppercase 0.2em sub-line), centered nav (600 / 0.9375rem, marigold 2px underline that scales in from the left on hover and for the current section), the ES/EN switch (1px currentColor box, pressed state inverts), and the small primary CTA. Below 880px the nav becomes a white drop panel with full-width rows ruled by hairlines, and the CTA moves inside it.

### Hero with Bottom Tab Strip
A full-bleed photo under the navy scrim. Copy is bottom-aligned: display H1, marigold statement line, on-navy-soft lede, primary button plus arrow link. It is pinned to a frosted navy strip of three tabs (name 700, one-line description, arrow). Tabs are divided by white hairlines at 18% opacity. On hover a 3px marigold rule draws across the top edge and the arrow nudges. On mobile the tabs stack and descriptions hide. Entrance: photo settles from scale 1.08 with blur over 2.4s, and lines rise 24px in sequence over 1s.

### Compare Table
An ARIA table built from grid rows (3fr / 4fr / 4fr). It opens on a 2px navy rule with uppercase label headers. Row heads are bold, the "traditional" column is slate-2, and the CJE column is navy 600 with an 8px marigold square marker. Rows are 22px tall-padded and hairline-divided. Below 720px the row head spans full width above the two columns.

### Service Row
A three-column row (4fr name + kind / 5fr description / 3fr deliverables list), 32–48px vertical padding, hairline-divided, under a 2px navy opening rule. Deliverables are 600 / 0.9375rem items with marigold-2 dashes and mist-2 dividers.

### Navy Band
A full navy section for the commercial argument (fee band) and contact. It pairs an oversized headline with columns topped by a 1px marigold rule. Copy is on-navy-soft.

### Project Entry
- **Feature:** 6/6 image and body. The title carries an inline slate tagline. A meta line follows. A spec strip (definition list, ruled top and bottom) sets figures in tabular numerals. Then arrow links.
- **Grid entry:** a logo tile (132px, matte background, logo centered at max 84px) above the name, meta line and description.
- **Meta line:** location in slate 500 / 0.9375rem, followed inline by a status: 8px green dot plus 700 / 0.8125rem slate text, which never wraps.

### Portraits
Circular, grayscale (contrast 1.05), slightly overscaled (1.04) crop on a mist-2 fill with an inset navy hairline. Color returns on hover over 0.5s. Full size is 200px, and 120px in the stacked mobile layout. Small is 48px, used in accordion rows.

### Details Accordion
Native `<details>` rows, hairline-divided under a 2px navy group label. The summary holds an optional small portrait, the name (700 / 1.125rem) with slate meta, and a 20px plus icon that rotates 45° to a cross when open. Hover underlines the name in 2px marigold at a 5px offset. The body is indented 64px (flush below 560px), max 72ch, with marigold-2 dash lists.

### Inputs / Fields
- **Style:** white fill, 1px field-stroke border, square, min height 48px, 12px 14px padding. Label is 700 / 0.875rem above, and "optional" is 400 slate-2.
- **Hover:** border to navy-3.
- **Focus:** navy border plus inset 1px navy plus a 3px marigold halo at 45% (`box-shadow: inset 0 0 0 1px #0B1B33, 0 0 0 3px rgba(246,168,0,.45)`).
- **Error:** danger border with a 600 / 0.8125rem danger message below.
- **Select:** native appearance removed, with a 9px navy chevron drawn from borders.
- **Banners:** success-tint/success or danger-tint/danger, 600 / 0.9375rem, square.

### Investor Note
A mist strip opened by a 1px navy top rule, holding a title-sm heading, slate copy and an outline button. It is used for secondary audience doors.

### Footer
A navy band (72px top), in a 5/4/3 grid: brand and tagline, a two-column nav in on-navy-soft (hover white), and a contact block with the email in white 700. A bottom bar at 0.875rem is separated by a white hairline at 14% opacity.

## Do's and Don'ts

### Do:
- **Do** open every list, table or group with a 2px navy rule and separate rows with 1px `line` hairlines.
- **Do** use marigold as fill, rule, marker or focus. Use it as text only on navy.
- **Do** keep every rectangle square (0 radius). Reserve circles for portraits, status dots and circular logos.
- **Do** put every photograph under the navy scrim, darkest behind the text.
- **Do** set figures and data in tabular numerals with a small slate term above.
- **Do** use the split section head (7fr headline, 5fr lead) to open content sections.
- **Do** keep motion to the hero entrance plus short state feedback, and honor reduced motion.

### Don't:
- **Don't** set marigold text on white or mist.
- **Don't** wrap content in rounded or shadowed cards. Use ruled rows.
- **Don't** add a second typeface or a system display face.
- **Don't** place uppercase kickers or eyebrows above headlines. Labels only head data or groups.
- **Don't** add shadows to anything that doesn't overlap another layer.
- **Don't** use AI/sci-fi imagery (robots, neural networks, particles, glow), per PRODUCT.md.
- **Don't** introduce another chromatic accent. Green and red are feedback only.

<!-- Known gaps (asset debt, not design rules): partner/specialist portraits and the Live-Act logo are low-res legacy extracts pending originals; no photography between the fee band and contact pending real assets; the black logo-tile matte (#000) exists only to host legacy logos with black grounds and is provisional; CPC section and internal pages not yet built. -->
