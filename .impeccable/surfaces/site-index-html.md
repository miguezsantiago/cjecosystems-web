---
version: 1
slug: "site-index-html"
primary_target: "site/index.html"
related_targets: []
---

# Home (site/index.html)

Scope: home page of cjecosystems.com, ES primary + EN. Visitor mode: Persuade.
Audience: founders/SMEs (clients) and investors. Primary action: write / book a conversation (contact form + hi@cjecosystems.com). Secondary: understand the model, then Services, Projects, Team.
Constraints: static HTML/CSS/vanilla JS on Netlify; code-led build by necessity (2026-09-24: Higgsfield refused generation on the free plan with 0 credits, so no comp round was possible; the project's standing buildPath "comp" preference is kept for future surfaces); no image generation available, so imagery is licensed stock (Pexels) plus extracted legacy assets; Formspree form `meaqplno`. Internal pages come later, so nav anchors to home sections for now.
Must avoid: AI/sci-fi clichés (robots, neural nets, particles, glow). No other firm named in claims.
Unresolved: CPC section (video, concept undefined), "Laboraz", hero video (vertical-only stock found; photo for now), high-res project renders.

## Direction contract

THESIS: The category standard, played straight: a large-firm consulting homepage (EY/McKinsey/Globant/Consultatio craft bar) that makes one young firm read as institutional. It refuses the one-page startup scroll with pastel cards and gradients.

OWN-WORLD: Deep navy ink (#0B1B33) and white, cool mist (#F2F4F7) for quiet bands, slate for secondary text, and one marigold/cempasúchil accent (#F6A800) used only as fills and rules for the primary action and focus, never as text on white. One grotesque family (Schibsted Grotesk), with tight large headings, tabular figures and square corners. Full-bleed photography of Mexico City, hairline rules and wide margins.

STORY: A visitor understands that CJE is strategy + capital + incubation for companies being built, delivered by a senior partner with AI and an on-demand specialist network, paid through a fee plus shared equity. They believe it through real partners, a real network and real projects, then book a conversation.

FIRST VIEWPORT: Full-bleed blue-hour photo of CDMX with the Torre Latinoamericana standing clear in the left ~45%; navy scrim darkest at right. Transparent header: wordmark left, nav center, ES/EN + marigold "Agendar una charla" right. Copy column starts at 46% + 28px (aligned with the Capital tab text): H1 at ~4.5rem "Consultoría estratégica para la era de la IA.", marigold sub-line "El rigor de una firma grande, a la velocidad de un founder.", lede, marigold primary CTA + secondary text link. Bottom-pinned tab strip (46% / 1fr / 1fr): Strategy / Capital / Studio with one-line descriptions and arrows. Mobile: copy full width over a full scrim.

FORM: Category standard (canon) chosen by the user over the roll; references EY, Globant, Consultatio and McKinsey. Seed key 2e75837c. Signature interaction: the header turns from transparent to white on scroll, and the hero photo settles with a slow scale-in while the headline lines rise in sequence (reduced motion: static).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
