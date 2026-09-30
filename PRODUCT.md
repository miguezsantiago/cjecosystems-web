# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS (multiple plain `.html` pages, no build step), deployed on Netlify. Chosen by the user over Astro/Next.js so the partner can edit files directly. Implications to plan for: shared nav/footer and ES/EN strings are duplicated per page unless handled with a small vanilla-JS include/i18n script; images must ship as real files (the current site embeds them as base64 inside a ~625 KB `index.html`). Contact form currently posts through Formspree (`@formspree/ajax`); Netlify Forms is an available alternative.

## Users

Two primary audiences, served by the same site:

1. **Clients** — founders and small/mid-size companies (mainly Mexico/LatAm) that need strategy, financial models, project finance, PMO, fundraising structure or incubation, and cannot afford or do not want a traditional multi-layer consulting team.
2. **Investors** — people evaluating participation in the equity of ecosystem projects (e.g. ROCCA). They need to understand the model, the partners' credibility and the project data before making contact.

## Product Purpose

Conjunction Ecosystems (CJE) is a consulting, venture capital and incubation firm founded by Gustavo Reboredo. The site's job is to make a new firm read as institutional and trustworthy — at the level of large consulting firms — while explaining a model that is different from theirs. Success: qualified clients and investors reach out (`hi@cjecosystems.com` / contact form), and the partner can point people to the site without it looking amateur (his own words: the current one-page "transmite imagen amateur").

## Positioning

A senior partner powered by AI plus a network of specialists activated project by project, instead of the partner → manager → senior → analysts pyramid. Measured in weeks, not months. Compensation is a maintenance fee that covers costs plus equity/upside in the client's project — "No cobramos por las horas. Ganamos cuando tú ganas." Three lines feed one ecosystem: **Conjunction Strategy** (strategy & management consulting), **Conjunction Capital** (venture capital), **Conjunction Studio** (incubator). Clients are connected to each other when useful (compounding network).

Core concept requested by the partner for the new home: **fusing the AI era with consulting**.

## Operating Context

- Bilingual site, ES (primary, Mexican Spanish, "tú") and EN.
- Visitors arrive mostly from direct referral (partner sharing the link, LinkedIn).
- Project detail views carry investor-facing data and an "Invertir — próximamente" call to action.
- A client/partner platform (live project collaboration, specialist selection, AI tools, project and equity tracking) is announced as *coming soon*; it does not exist yet.

## Capabilities and Constraints

- Structure moves from a one-page site to a **home + internal pages** (Mission & Vision, Services, Projects, Team, Contact, and others below). Internal pages are to be developed after the home is resolved.
- **Los Especialistas**: the current accordion opens repeatedly/unexpectedly (bug to fix), and its description copy must be rewritten.
- Home needs a consulting-style image or video hero.
- **Open decisions — ask Gustavo, do not design until defined:**
  - "**Laboraz**" — named in the partner's notes as a destination page from the home; meaning unknown (possibly a transcription error).
  - "**CPC**" section — concept not defined yet; it is confirmed it will include video.
- Investment/equity participation via the site is **not** live; must remain labeled as coming soon.
- Terminology: Conjunction Ecosystems / CJE; Strategy, Capital, Studio; "red de especialistas"; "socio"; "fee de mantenimiento"; "equity compartido".

## Brand Commitments

- Name: Conjunction Ecosystems, short form CJE; existing logo mark at `https://cjecosystems.com/logo.png`, OG image at `/og-image.png`.
- Footer line in use: "Redes. Inteligencia. Transformación total."
- Voice: direct, confident, anti-bureaucratic consulting; addresses the reader as "tú".
- **Do not name other firms in claims.** The current headline "El rigor de McKinsey. La velocidad de un founder." is to be rewritten without referencing McKinsey or any other brand, keeping the idea (big-firm rigor + founder speed).
- Reference sites named by the user (EY, Globant, Consultatio, McKinsey) signal the level of professionalism wanted; they are not to be imitated or cited.
- **Binding brand system (2026-09-29):** `Conjunction-Ecosystems-Web-Brand-Design.md` (extracted from `Conjunction_Ecosystems_Concept.pptx`) is the brand authority: Ivory Linen / Graphite / Forest / Old Rose / Antique Gold, Archivo, open two-tone "C" ring mark, 60/30/10 composition, no pure black/white, no dark fills. It supersedes the navy/marigold palette of the first home build (2026-09-24). The user notes the spec may be slightly off in places; treat it as close guidance and flag conflicts.
- Imagery: corporate city photography is liked, recalibrated brighter (2026-09-29).
- **Standing preference (2026-09-24):** the user chose the consulting category standard over unconventional visual worlds. EY, Globant, Consultatio and McKinsey set the craft bar; conventions are to be executed at full quality, not subverted.
- Avoid AI/sci-fi imagery (robots, neural networks, particles, glow).

## Evidence on Hand

All from the current live site (`cjecosystems.com`); reuse, do not embellish.

- **Partners:** Gustavo Reboredo (MSc Digital Project Management & Consulting, ESCP; ex IDOM Consulting), Sebastián Tena (CEO ePlata México; 10+ yrs financial services & corporate law), Michael Greenblatt (founder Kitsune Law; ~10 yrs corporate/venture law & VC). LinkedIn URLs exist for all three.
- **Specialist network — people:** Aaron Berneking (Strategy & Insights, Ipsos Strategy3), Alex Johnson (network/cloud & AI/ML; co-founded Turnstyle Solutions, acquired by Yelp 2018 for $20M USD), Patricia Montes Canul (Product Design & Strategy), Megha Kraft (Creative Direction; Nike, Ulta Beauty, Team USA, WNBA). Nationality fields are "A confirmar".
- **Specialist network — companies:** Concourse (AI for corporate finance), zenda. (growth/paid media agency), The Creative Hotline (Venice, CA).
- **Projects:** Estudio Carroll + anchor project ROCCA (Puerto Escondido; 14 units, 11 available, 65–192 m², delivery Jun 2028; press: ArchDaily, Architectural Record, Designboom, Arquine), Bamboo Global (private chef, Tulum → CDMX, ~$1,000 USD avg ticket), Tropical Trash (surf/recycling brand, 10% of sales funds recycling, with Comunidad NIT), Live-Act (cashless events app redesign, CDMX).
- **Extracted assets** (from the live site, 2026-09-24) in `legacy/assets/`: `brand/cje-mark.svg` (two-arc mark, legacy colors), `team/*.jpg` (7 portraits, 320×320), `projects/` (4 project logos; ROCCA renders 480px wide; Live-Act app screens 340px wide; 2 Tropical Trash photos 760px from tropicaltrash.co). All are low resolution: usable for avatars/thumbnails, **not** for full-bleed heroes. `logo.png`, `og-image.png` and favicons referenced by the live site return 404; higher-resolution originals must come from Gustavo or the project owners.
- ROCCA investor figures on the current site (+8% annual appreciation, 25–40% occupancy, 4–5 yr ROI) are projections; any reuse must be labeled as estimates.
- **Absent — must not be fabricated:** client testimonials, client logos beyond the named network/projects, firm-level metrics (projects delivered, capital deployed, years), office addresses, phone, social media accounts ("Redes sociales — próximamente"), consulting imagery or video of the team, the platform itself.

## Product Principles

1. **Institutional trust for a young firm.** Every page must read as a serious firm; credibility comes from the partners, the network and real projects, never from invented scale.
2. **Show the model, not just the services.** The AI + senior partner + on-demand network + equity alignment is the differentiator; it should be understood in seconds.
3. **Two doors, one site.** Clients and investors each find their path (work with us / participate in projects) without the other feeling like an afterthought.
4. **Honest about what's next.** Platform and investment features are announced as upcoming, clearly; undefined sections (CPC, Laboraz) wait for the partner's definition.
5. **Editable by the owner.** Plain files, no build tooling, content structured so non-developers can update bios, projects and translations.

## Accessibility & Inclusion

Bilingual ES/EN parity is required for all content. The current site already honors `prefers-reduced-motion` and visible focus states; keep both, including for any hero video.

## Partner update (2026-09-30, brief from Gustavo)

- **Headline:** "Estrategia para el mundo que viene." replaces "Consultoría estratégica para la era de la IA."
- **Copy rule:** do not mention AI literally in any new copy. Existing mentions (mechanism step C, the diagram's "IA" orbit, "potenciados por IA" in the hero overlay and meta description) were left in place and flagged to the partner.
- **Plural:** "socios sénior", never "un socio senior".
- **Exact line:** "No armamos un equipo de consultoría. Armamos el proyecto que tú necesitas."
- **Commercial model:** no longer stated as always fee + shared equity. It is assessed case by case: shared profits + fee, only fee, fee + equity, or only equity, depending on how each project fits the ecosystem. Do not write "shared equity" / "equity compartido".
- **Projects:** shown as a card grid (name, sector, location, CJE line, status) with one expandable detail open at a time. Five projects: ROCCA (Conjunction Strategy), B•Joung Hair Studio (Conjunction Strategy, in progress; Instagram and AgendaPro booking links), Bamboo Global, Tropical Trash and Live-Act. The sectors for the last three were inferred and their CJE line is undefined.
- **Pending material (published in a neutral form):** partner photos (initials shown), the team lead paragraph (hidden), the B•Joung vector logo (name set in type on ivory, never its violet-cyan gradient) and 2–3 B•Joung salon photos (gallery hidden).

