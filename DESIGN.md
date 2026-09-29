---
name: Conjunction Ecosystems
description: Brand-pinned Ivory Linen system. Warm ivory ground, graphite text, gold headlines, Forest and Old Rose alternating as accents, one family (Archivo), outline pills, hairlines and 12px-radius ivory cards.
colors:
  ivory: "#F3F0E9"
  graphite: "#2B2B2E"
  graphite-soft: "#6B6B70"
  forest: "#3F6B52"
  forest-deep: "#345A45"
  rose: "#B5566F"
  rose-ink: "#A34A62"
  gold: "#A87C3F"
  line: "#DCD5C6"
  field-stroke: "#8C8474"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 5.4vw, 4.75rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 3.8vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.1vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title-sm:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  statement:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.4
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.45
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.2em"
  figure:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    fontFeature: "tnum"
rounded:
  sm: "8px"
  md: "12px"
  pill: "999px"
  circle: "50%"
spacing:
  gutter: "clamp(20px, 4vw, 48px)"
  section-y: "clamp(88px, 11vw, 160px)"
  section-head: "clamp(48px, 6vw, 80px)"
  card: "clamp(24px, 2.6vw, 32px)"
  container: "1280px"
  header: "76px"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    padding: "12px 26px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.forest-deep}"
    textColor: "{colors.ivory}"
  button-outline:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.forest}"
    rounded: "{rounded.pill}"
    padding: "12px 26px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.ivory}"
  pill-forest:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.forest}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  pill-rose:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.rose-ink}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  card:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
  badge-forest:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.circle}"
    size: "40px"
  badge-rose:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.circle}"
    size: "40px"
  input-field:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
    height: "48px"
---

# Design System: Conjunction Ecosystems

## Overview

**Creative North Star: "The Ivory Linen Ledger"**

This is the client's pinned brand system (`Conjunction-Ecosystems-Web-Brand-Design.md`, extracted from the reference deck) applied to a large-firm consulting homepage. The whole page stays on one warm ivory ground, with no pure white, no pure black and no dark blocks. Credibility comes from restraint. Gold headlines set large and tight carry the voice. Forest and Old Rose alternate as the only chromatic accents, and a single grotesque (Archivo) does all the work. Emphasis comes from a colored border or colored text. Filled panels are never used for emphasis.

The page is editorial, not a dashboard. It follows the brand's 60 / 30 / 10 split of space, content and accent: wide gutters, a large vertical section rhythm, and sections separated by 1px hairlines. Inside a section, content sits either in hairline-ruled rows (comparison table, services, accordions, platform list) or in ivory cards with a thin border. Cards are never a different fill from the page. Every content section opens with a numbered tracked-caps label, a gold headline and a short graphite rule.

Motion is spent on one moment. On load, the hero headline lines rise in sequence and the hero photo reveals top-down through a clip-path. Everything else is short state feedback: nav underlines drawing in, arrows nudging, a hairline appearing under the header on scroll, portraits returning to color. Reduced motion removes all of it. (The direction contract described a header turning white and a scale-in photo. The build keeps the header ivory and adds only a hairline, and it reveals the photo with a clip rather than a scale. The build is the record.)

**Key Characteristics:**
- Ivory Linen ground everywhere, with Graphite text. No `#FFFFFF`, no `#000000`, and no dark fills in UI.
- Gold for headlines and large key phrases only. Forest and Rose alternate across sets, one accent per element.
- One family, Archivo 400–800. Headlines are bold with negative tracking. Labels are small tracked caps.
- Numbered section labels ("0N / SECTION"), a gold H2, and a 40×3 graphite rule under it.
- Ivory cards with a 1px `line` border and 12px radius. The active state is a 2px Forest border.
- Pills everywhere a shape is interactive or a tag: buttons, tags, the language toggle, the skip link.
- Flat. The only shadow in the system is the focus halo on form fields.

## Colors

A warm paper palette. Ivory carries the page, graphite carries the words, and three muted accents each have one job.

### Primary
- **Forest Green** (#3F6B52): the action color. Primary button fill, outline-button stroke and text, arrow links, the contact email, active card border, nav underline, focus outline, selection highlight, and Forest pills, badges and line icons. At 5.4:1 on ivory it is safe for small text.
- **Forest Deep** (#345A45): hover state of Forest fills and the contact email. It is not in the brand file. It was derived because the brand defines no hover color.

### Secondary
- **Old Rose** (#B5566F): the alternating accent. Rose badge fills, rose line icons and the invalid-field stroke. Used only as a fill or graphic (4.1:1 on ivory), never as small text.
- **Rose Ink** (#A34A62): rose deepened for text (5.0:1 on ivory, AA). Rose eyebrows, rose pills and tag lists, the Vision label, field error text and the error banner. This is a deliberate deviation from the brand file, which only defines #B5566F.

### Tertiary
- **Antique Gold** (#A87C3F): the voice of the page. Hero H1, section H2s, gold H3s, card and callout labels, and the gold emphasis phrase in the hero lede. It measures 3.3:1 on ivory, so it is legal only as large text.

### Neutral
- **Ivory Linen** (#F3F0E9): the page, the header, cards, the mobile menu, inputs, and text on Forest and Rose fills. It is also the `theme-color`.
- **Graphite** (#2B2B2E): body text, black-weight headings (H3–H5), the 40×3 headline rule, and the 1px rule that opens a table or list.
- **Graphite Soft** (#6B6B70): secondary text (4.6:1). Leads, descriptions, captions, spec terms, footer copy, neutral eyebrows and the tagline.
- **Line** (#DCD5C6): hairlines. Section dividers, row separators, card borders, the language-toggle stroke, and the placeholder ground behind images.
- **Field Stroke** (#8C8474): resting border of form inputs, one step darker than `line` so fields read as fields. It measures about 3.2:1 on ivory, meeting the 3:1 non-text target.

### Named Rules
**The No Black, No White Rule.** The ground is always Ivory Linen and dark text is always Graphite. Neither `#FFFFFF` nor `#000000` appears in UI. Third-party artwork is content, not UI: the Tropical Trash logo keeps its own black ground inside an 8px-radius frame.

**The Gold Is Large Rule.** Gold text appears only at 24px or larger, or 18.66px or larger in bold (large text, 3.3:1). That covers the H1, H2, gold H3, 20px bold card and callout labels, and the 24px hero lede phrase. Gold is never a button, a fill, a border or small text.

**The Ink Variant Rule.** Rose text at small sizes always uses Rose Ink (#A34A62). Old Rose (#B5566F) stays for fills, icon strokes and markers.

**The One Accent Per Element Rule.** Each pill, badge, icon, card and eyebrow takes one accent, Forest or Rose. Across a set (hero tabs, values, service rows, platform items, section eyebrows) they alternate Forest, Rose, Forest.

## Typography

**Display Font:** Archivo (with Helvetica Neue, Arial, sans-serif)
**Body Font:** Archivo
**Label Font:** Archivo, tracked uppercase

**Character:** A single sturdy grotesque doing everything. Bold and tight for the gold headlines, plain and roomy (1.6) for reading, small and widely tracked for labels. Loaded at 400/500/600/700/800 from Google Fonts.

### Hierarchy
- **Display** (700, clamp(2.5rem, 5.4vw, 4.75rem), 1.04, −0.03em, gold): hero H1 only. Stacked lines, max 14ch, balanced wrap.
- **Headline** (700, clamp(2.25rem, 3.8vw, 3.5rem), 1.08, −0.02em, gold): section H2s, balanced wrap.
- **Title** (700, clamp(1.5rem, 2.1vw, 1.875rem), 1.2, −0.01em): service names and the feature project title in graphite. Sub-section titles ("Los especialistas", "Lo que nos guía") in gold.
- **Title Small** (700, 1.25rem, 1.3, graphite): project and partner names. Card and callout labels use the same size in gold.
- **Statement** (500, 1.5rem, 1.4): the hero lede. It is fixed at 24px so its gold phrase qualifies as large text. Mission and vision use the same voice at clamp(1.25rem, 1.8vw, 1.5rem) and 1.45.
- **Lead** (400, clamp(1.0625rem, 1.3vw, 1.25rem), 1.6, graphite-soft): paragraph beside a section headline, max 56ch.
- **Body** (400, 1.0625rem, 1.6, graphite): running text. Descriptions run 44–64ch.
- **Body Small** (500, 0.9375rem): nav, arrow links, hero-tab and accordion meta, project location lines.
- **Label** (600, 0.75rem, 0.2em, uppercase): eyebrows, compare column heads, Mission/Vision labels, footer tagline.
- **Figure** (700, 1.25rem, tabular numerals): spec values, above a 0.8125rem graphite-soft term.

### Named Rules
**The One Family Rule.** Archivo is the only typeface. Hierarchy comes from size, weight and color, never from a second face.

**The Color Not Weight Rule.** Emphasis inside running text switches color (gold at large sizes, Forest otherwise) at the same weight, as the hero lede does.

**The Numbered Label Rule.** Every content section opens with a label in the pattern "0N / SECTION" (tracked caps, 12px, 600). It is set in Forest or Rose Ink, alternating by section, and sits above the gold H2. This is the brand file's own eyebrow pattern and it is intentional. The hero uses the unnumbered tagline format (middle-dot separated, graphite-soft), and group labels inside a section (Personas, Empresas aliadas) sit on a 1px graphite rule.

**The Short Rule Rule.** A 40×3px graphite bar sits 24px under the headline in the hero and in every section head. It is a mark, never a full underline.

## Layout

A 1280px container with a fluid gutter (clamp(20px, 4vw, 48px)). Sections breathe on clamp(88px, 11vw, 160px) vertical padding and are separated by a full-width 1px `line` hairline. The header is sticky at 76px. It stays ivory and gains a bottom hairline once the page scrolls.

Section heads use a split grid: headline and rule on the left (7fr), lead on the right (5fr), bottom-aligned, with clamp(48px, 6vw, 80px) below. Content grids reuse asymmetric fractions: 5/7 for fee, platform and contact, 4/5/4 for service rows, 3/4/4 for the compare table, 6/6 for the feature project, 4/8 for the network. Card sets run 3 columns with a 24px gap.

The hero stacks a two-column head (7fr/5fr), a full-container rounded photo at 21:8 (4:3 on mobile) and a three-column tab strip divided by vertical hairlines.

Breakpoints collapse in steps: 1080px hides the header CTA, 960px drops most grids to one column, 880px switches to the menu toggle and stacks the hero tabs, 720px reflows the compare table and footer, 640px goes single column for services and fee cards, and 560px compacts the lockup and specs.

**The Wide Margin Rule.** When a section feels crowded, remove content or add space before adding color or a container (60 / 30 / 10).

## Elevation & Depth

The system is flat. Depth comes from hairlines, thin borders and whitespace, never from shadows or tonal fills. Cards share the page's ivory. The only shadow is the field focus halo.

### Shadow Vocabulary
- **Field focus halo** (`box-shadow: 0 0 0 3px rgba(63, 107, 82, .22)`): a focused input, together with a Forest border.

### Named Rules
**The Border Not Fill Rule.** Emphasis raises a border, never a surface. An active card goes from 1px `line` to 2px Forest, and no card, section or button is ever filled dark for contrast.

## Shapes

Three silhouettes. **Rounded rectangles**: 12px on cards, the callout and every photo frame (hero, feature, contact), and 8px on inputs, form banners and framed logo art. **Pills** (999px): buttons, tags, status pills, the language toggle and the skip link. The brand file does not specify buttons, so they borrow the pill shape. **Circles**: icon badges (40px), compare ticks (22px), accordion toggles (32px), portraits, and the open two-tone C ring mark.

Strokes are thin and consistent: 1px hairlines and card borders, 1.5px on pills, outline buttons, arrow-link underlines and accordion toggles, 1.5px line icons, 1.8px UI arrows, 2px active card border.

**The Open Ring Rule.** The C mark is Forest on top and Rose on the bottom, with the gap on the right. It is never closed and never recolored.

## Components

### Buttons
- **Shape:** full pill (999px), min-height 48px (40px small, 54px large), 1.5px border slot.
- **Primary:** Forest fill, ivory text, 600 weight, 12px 26px padding. One per view region: header CTA, hero, form submit, mobile menu.
- **Hover / Focus:** fill deepens to Forest Deep over 200ms. Focus is a 2px Forest outline offset 3px.
- **Outline:** 1.5px Forest stroke and Forest text on ivory. On hover it fills Forest with ivory text. Used for secondary doors such as the investor callout.
- **Arrow link:** Forest text, 600 weight, 1.5px underline in currentColor, and a trailing arrow that nudges 3px on hover. External links use a diagonal arrow.

### Pills (tags and status)
- **Style:** no fill, 1.5px stroke and text in the same accent. Forest, or Rose Ink for text legibility. 0.8125rem (status) or 0.875rem (tag lists), 600 weight.
- **State:** static labels, not filters. Tag lists alternate Forest and Rose by service row.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** ivory, the same as the page.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 1px `line`. Active or highlighted: 2px Forest.
- **Internal Padding:** clamp(24px, 2.6vw, 32px). The form card uses clamp(28px, 4vw, 44px) and the callout clamp(32px, 4vw, 48px).
- Card labels are 1.25rem bold gold.

### Icon Badges and Line Icons
- **Badges:** 40px solid circles in Forest or Rose, alternating, with a 20px ivory line icon (1.6 stroke). Used for hero tabs and values.
- **Ticks:** 22px Forest circles with an ivory check, marking the Conjunction column of the compare table.
- **Line icons:** 32px (28px in the platform list), 1.5px stroke, no fill, colored by the row's accent. Lucide-style paths drawn inline as SVG symbols.

### Inputs / Fields
- **Style:** ivory ground, 1px Field Stroke border, 8px radius, min-height 48px, 12px 14px padding, 600-weight 0.875rem label above. Selects use a custom graphite chevron.
- **Hover:** border goes to Graphite Soft.
- **Focus:** Forest border plus the 3px Forest halo, and a Forest caret.
- **Error:** Old Rose border, with a Rose Ink 0.8125rem message below. The banner is an 8px-radius, 1.5px currentColor box in Forest (success) or Rose Ink (error), with no fill.

### Navigation
- **Header:** C-ring lockup left ("CONJUNCTION" 800 caps over "ECOSYSTEMS" 500 tracked, graphite-soft). Graphite nav links at 0.9375rem/500 in the center, with a 1.5px Forest underline that scales in from the left on hover and on the current section. The ES/EN pill toggle and the small Forest CTA sit on the right. The brand file's header tagline is replaced here by the CTA.
- **Mobile (≤880px):** a two-bar toggle becomes an X. An ivory panel drops under the header with 1.125rem links separated by hairlines and a full Forest CTA with ivory text.
- **Footer:** a hairline, the lockup left and the tracked-caps tagline "Redes · Inteligencia · Transformación" right, graphite-soft nav with Forest hover, Forest email, then a hairline and 0.75rem tracked micro-copy.

### Ruled Rows (signature)
Tables and lists open with a 1px graphite rule and separate rows with 1px `line` hairlines. No box surrounds a row. This is the pattern for the compare table, the service rows, the specs strip (hairlines top and bottom), the platform list and the network accordions.

### Accordion
A native `details` row. It holds an optional 48px circular portrait, a bold 1.125rem name with a graphite-soft meta line, and a 32px Forest-outline circle with a plus. When open, the plus rotates 45° and the circle fills Forest with an ivory glyph. On hover the name turns Forest.

### Portraits
Circular portraits, max 168px (112px in the mobile row layout, 48px in accordions). They are grayscale with a slight sepia at rest and return to full color over 500ms on hover.

### Photography
Bright daytime Mexico City photography in 12px-radius frames on a `line` placeholder. The hero image is warmed toward the ivory with `sepia(.14) saturate(.92) brightness(1.03)`. The contact photo is golden-hour, so it needs no filter. The footer credits Pexels.

## Do's and Don'ts

### Do:
- **Do** keep every surface on Ivory Linen (#F3F0E9) and every dark text in Graphite (#2B2B2E).
- **Do** set gold only at 24px or larger, or 18.66px or larger in bold. Use it for headlines, sub-titles, card labels and large key phrases.
- **Do** use Rose Ink (#A34A62) for any rose text, and Old Rose (#B5566F) only for fills, strokes and markers.
- **Do** alternate Forest and Rose across a set, with one accent per element.
- **Do** open content sections with "0N / SECTION", a gold H2 and the 40×3 graphite rule.
- **Do** show emphasis with a 2px Forest border on an ivory card, or with colored text.
- **Do** use pill buttons: Forest fill with Forest Deep hover, or a 1.5px Forest outline.
- **Do** separate sections and rows with 1px `line` hairlines, and open tables and lists with a 1px graphite rule.
- **Do** keep motion to the hero entrance plus short state feedback, and honor reduced motion.
- **Do** frame photography at 12px radius, and warm cool skies toward the ivory.

### Don't:
- **Don't** use `#FFFFFF` or `#000000` in UI. Third-party logo art keeps its own ground as content only.
- **Don't** fill a card, button, band or section with a dark color for contrast.
- **Don't** use gold as a button, fill, border or small text.
- **Don't** set Old Rose (#B5566F) as small text.
- **Don't** mix Forest and Rose inside one element, except the two-tone C ring.
- **Don't** add shadows beyond the field focus halo.
- **Don't** add a second typeface.
- **Don't** use filled or solid icons outside the circular badges.
- **Don't** use AI or sci-fi imagery (robots, neural nets, particles, glow).


## Display and motion (v3, 2026-09-29)

The shipped home (`site/index.html`, `site/assets/css/site.css`, `site/assets/js/site.js`) extends the system above:

- **Expanded display:** Archivo is loaded with its width axis (`wdth 62..125`). Display type uses `font-stretch` 106–118% at 700: the hero `.mega` at clamp(3.25rem, 8.1vw, 9rem) with -0.045em tracking, the contact `.mega-contact`, the panel tags (Strategy / Capital / Studio) and the project name (ROCCA). H2s sit at 108%. Body text stays at 100%.
- **Scroll scenes** (desktop above 880px, no reduced motion; otherwise the `.static` layout):
  1. *Intro:* a pill "window" inside the headline plays the video, and a clip-path grows it to full bleed as you scroll. A graphite gradient under the ivory overlay text is the only darkening in the system, and it counts as an image treatment, not a fill.
  2. *Mechanism:* a sticky SVG with five states, from the traditional pyramid, to the C ring (senior partner), to the gold AI orbit, to six network nodes (Forest/Rose), to the gold equity ring, synced to steps A–E.
  3. *Lines:* horizontal panels (image plus body) translated by vertical scroll.
- **Reveals:** `[data-reveal]` blocks rise 28px and fade in once (0.9s, ease-out), staggered by 80ms in groups of three.
- **Video:** `assets/video/cdmx-drone-15809011.mp4` (Pexels, 1280×720, 8 MB), muted autoplay loop with a JPG poster.
