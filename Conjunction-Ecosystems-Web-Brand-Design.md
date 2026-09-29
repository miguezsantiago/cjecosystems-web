# Conjunction Ecosystems — Brand Design for Web
Extracted from the reference deck for direct use in building **cjecosystems.com**.

This is the design system as it actually appears in the reference file — colors, type, spacing, and every UI pattern (cards, pills, icons, dividers) pulled straight from the slides so the site can match it exactly, not approximate it.

---

## 1. Color system

No pure black and no pure white anywhere. Background is always a warm ivory; the only truly dark value in the whole system is body text, and even that is a soft graphite, never `#000000`.

| Token | Hex | RGB | Use |
|---|---|---|---|
| **Ivory Linen** | `#F3F0E9` | 243, 240, 233 | Page/section background. Dominant color — should cover roughly 60% of any screen. *(Note: the reference deck itself was built with `#F7F4EC`, an earlier near-identical approximation. `#F3F0E9` is the confirmed canonical value sampled directly from your reference photo — use it for the site, it's ~1% off and invisible to the eye.)* |
| **Graphite** | `#2B2B2E` | 43, 43, 46 | Body text, headline text on light backgrounds. Never used as a fill/block. |
| **Graphite Soft** | `#6B6B70` | 107, 107, 112 | Secondary/muted text — eyebrows, captions, timestamps, footer copy. |
| **Forest Green** | `#3F6B52` | 63, 107, 82 | Primary accent — icon fills, pill borders, highlighted card borders, "positive" checkmarks. |
| **Old Rose** | `#B5566F` | 181, 86, 111 | Secondary accent — alternates with Forest Green in lists, tags, icon fills. |
| **Antique Gold** | `#A87C3F` | 168, 124, 63 | Headlines and key phrases only. Reserved, used sparingly (~10% of a page) — never a background or button fill. |
| Light tint (neutral) | `#DCD5C6` | 220, 213, 198 | Divider hairlines, disabled/inactive states, subtle borders. |

**Composition rule (apply to every page/section): 60% empty space / 30% content / 10% color accents.** This is why the reference never feels crowded — wide margins, generous line-height, one accent color per element at most.

### CSS custom properties

```css
:root {
  --ivory: #F3F0E9;
  --graphite: #2B2B2E;
  --graphite-soft: #6B6B70;
  --forest: #3F6B52;
  --rose: #B5566F;
  --gold: #A87C3F;
  --line: #DCD5C6;
}
```

---

## 2. Typography

- **Typeface: Archivo** (all weights). If Archivo isn't loaded, the system falls back cleanly to a geometric grotesque (Arial/Helvetica) — but load Archivo from Google Fonts for the real site, this is the one place fidelity matters most.
- **Headlines (H1/H2):** Archivo Bold, large scale (40–56px on desktop), color **Gold** `#A87C3F`, tight line-height. A short (~40px wide, 3px tall) horizontal bar in Graphite sits directly under multi-line headlines as a graphic accent — not a full underline, just a short mark.
- **Eyebrow / section label:** small caps, letter-spacing wide (~2–3px), 11–13px, Graphite Soft or the section's accent color (e.g. Forest for "VALUES", Rose for "VOICE"). Pattern: `01 / SECTION NAME`.
- **Body copy:** Archivo Regular, 15–18px, Graphite, generous line-height (1.5+).
- **Emphasis within body text:** switch color (Gold or Forest) rather than switching weight, e.g. "One senior strategist plus AI can do what previously required an entire consulting team. **We are redesigning the economics.**" — the second sentence in Gold, same weight.
- **Micro-labels** (page numbers, footers): 10–11px, tracked, Graphite Soft. Footer page-number convention: `CJE 02 / 09`.

---

## 3. Logo / symbol

- Mark: an open "C" ring — two-tone, **Forest Green** on top, **Old Rose** on bottom, thick stroke, gap on the right side. Never closed into a full circle.
- Lockup: symbol + "CONJUNCTION" (bold, Graphite) with "ECOSYSTEMS" in a lighter weight directly beneath, smaller.
- Small/favicon use: the ring symbol alone, in a colored circular badge (solid Forest or Rose fill) with the ring rendered in Ivory — this is the same treatment used for section icons (see below).
- Tagline, always small caps, tracked, Graphite Soft: **NETWORKS · INTELLIGENCE · TRANSFORMATION**.

---

## 4. Layout patterns (build these as reusable components)

### Header / footer bar
- Header: logo wordmark top-left (small, bold caps), tagline top-right (small caps, tracked, muted).
- Footer: thin 1px hairline (`--line`) full-width, then logo lockup bottom-left + tagline bottom-right repeated. Use this exact pattern for the site's global header/footer.

### Cards
- Background: Ivory (same as page — cards are **not** a different fill color).
- Border: 1px solid, light neutral (`--line`) by default.
- Radius: ~12px (rounded-lg).
- **Active/highlighted state:** border switches to a 2px accent color (Forest or Rose) — this is the *only* way emphasis is shown, never a filled/dark card.
- Padding: generous (24–32px), icon + label pattern inside (see icons below).

### Pills / tags
- Fully rounded (pill) border, 1.5–2px stroke.
- No fill — background stays Ivory.
- Text and border share the same accent color, alternating Forest/Rose across a set (e.g. a row of value tags).

### Icon badges
- Small circle (~32–40px), solid fill in Forest or Rose (alternating), icon rendered in Ivory on top — used for checkmarks, connector nodes, and step markers.
- Larger feature icons (structure/capability lists) are **line icons**, not filled — simple 1.5px-stroke outline style (a Lucide or Feather-style icon set matches this reference closely: person, people, star, layers/stack, briefcase, gem/diamond, clock, trending-up, network, target). Icon color = the accent color of that row (Forest or Rose), stroke only, transparent fill.

### Connectors / dividers
- Vertical step lists (e.g. career ladders, process flows): thin vertical line or small down-arrow in muted gray connecting stacked rows — no boxes around each row, just the icon + label + hairline connector.
- Section dividers: full-width 1px hairline in `--line`, generous vertical spacing above/below (this is what creates the "expensive editorial" feel, not decoration).

### Callout / "what we are not" box
- Ivory background, thin 1px border (`--line`), generous padding, no fill — label in Gold bold, body text in Graphite. Same card treatment as everything else; the "difference" is achieved with more whitespace around it, not with a darker box.

---

## 5. Do's and don'ts

- **Never** use pure black (`#000000`) or pure white (`#FFFFFF`) anywhere — backgrounds are always Ivory Linen, dark text is always Graphite.
- **Never** fill a card, button, or section block with a dark/near-black color for "contrast" — contrast comes from a colored border or accent text, not a dark fill.
- Gold is a headline/accent color only — never a button background or large block.
- Keep one accent color per component (don't mix Forest and Rose inside the same card unless it's a deliberate two-tone symbol).
- Icons are line-style (outline), not filled/solid shapes, except inside the small circular badges.
- Respect 60/30/10: when a section feels crowded, remove content or add margin before adding color.

---

## 6. Reference

Design extracted directly from the reference deck `Conjunction_Ecosystems_Concept.pptx` (premium editorial "Ivory Linen" system, aesthetic references: Monocle, Aesop, Stripe, Linear, Palantir). Same color values as the brand manual's Página 3 ("Premium editorial — decks") system — this document restates them specifically for web/CSS use.
