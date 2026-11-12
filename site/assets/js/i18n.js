/* Conjunction Ecosystems — ES / EN
   El español vive en el HTML. Acá están las traducciones al inglés
   y los textos que solo usa JavaScript (errores del formulario, etc.).
   Para editar un texto en inglés: buscá su clave (data-i18n="...") y cambiá el valor. */
(function () {
  'use strict';

  var dict = {
    es: {
      'meta.title': 'Conjunction Ecosystems — El rigor de una firma grande, a la velocidad de un founder',
      'a11y.menu': 'Abrir menú',
      'a11y.menuClose': 'Cerrar menú',
      'form.sending': 'Enviando…',
      'form.submit': 'Enviar mensaje',
      'form.ok': 'Gracias. Recibimos tu mensaje y te respondemos a la brevedad.',
      'form.fail': 'No pudimos enviar el mensaje. Intenta de nuevo o escríbenos a hi@cjecosystems.com.',
      'form.err.name': 'Escribe tu nombre.',
      'form.err.email': 'Escribe tu email.',
      'form.err.emailFormat': 'Revisa el email: parece incompleto.',
      'form.err.message': 'Cuéntanos brevemente en qué podemos ayudarte.'
    },
    en: {
      'meta.title': 'Conjunction Ecosystems — The rigor of a major firm, at the speed of a founder',
      'a11y.skip': 'Skip to content',
      'a11y.menu': 'Open menu',
      'a11y.menuClose': 'Close menu',

      'nav.services': 'What we do',
      'nav.model': 'How we work',
      'nav.projects': 'Projects',
      'nav.team': 'Team',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'cta.book': 'Book a conversation',

      'hero.title1': 'Strategy consulting',
      'hero.title2': 'for the AI era.',
      'hero.sub': 'The rigor of a major firm, at the speed of a founder.',
      'hero.lede': 'Senior partners powered by AI. A network of specialists activated project by project.',
      'hero.cta2': 'How we work',
      'v3.t1': 'Strategy',
      'v3.t2a': 'for the',
      'v3.t2b': 'world',
      'v3.t3': 'to come.',
      'ov.l1': 'The rigor of a major firm,',
      'ov.l2': 'at the speed of a founder.',
      'st.a.h': 'The traditional pyramid',
      'st.a.p': 'Partner, manager, senior consultant and 3–4 analysts. Months of work and fixed fees.',
      'st.b.h': 'Senior partners in charge',
      'st.b.p': 'The pyramid collapses into experienced partners who lead the project end to end.',
      'st.c.h': 'Powered by AI',
      'st.c.p': 'Research, models and first deliverables in days, not weeks.',
      'st.d.h': 'The network activates when needed',
      'st.d.p': 'Specialists who have solved that problem before join only for the stretch where they add value.',
      'st.e.h': 'We win when you win',
      'st.e.p': 'We assess case by case the model that best fits each project. We don\'t bill by the hour.',
      'dg.partner': 'Partner',
      'dg.senior': 'Senior consultant',
      'dg.analysts': '3–4 analysts',
      'dg.ai': 'AI',
      'dg.core': 'Senior partners',
      'dg.n1': 'Finance & M&A',
      'dg.n2': 'Legal',
      'dg.n3': 'Technology & AI',
      'dg.n4': 'Brand & marketing',
      'dg.n5': 'Architecture',
      'dg.n6': 'Product',
      'ln.h1': 'Consulting at the core.',
      'ln.h2': 'Capital and incubation when they add value.',
      'ln.s1': 'Senior partners in charge, not a junior team learning on your budget.',
      'ln.s2h': 'Capital structuring',
      'ln.s2': 'We help you structure and raise capital for projects that have already validated something real, with support from start to finish.',
      'ln.s3h': 'Incubator: from idea to a business that stands on its own',
      'ln.s3': 'You focus on creating; with the network we build finance, brand, operations and everything the business needs.',
      'ln.end1': 'We start with strategy;',
      'ln.end2': 'capital and incubation join when the project calls for it.',
      'hero.eyebrow': 'Consulting · Capital · Incubation',
      'hero.em': 'We are redesigning the economics of consulting.',
      'eb.model': 'How we work',
      'eb.services': 'What we do',
      'eb.fee': 'Business model',
      'eb.projects': 'Projects',
      'eb.team': 'Team',
      'eb.about': 'About',
      'eb.platform': 'Platform',
      'eb.contact': 'Contact',
      'tab.strategy': 'Diagnostics, financial models, project finance and PMO.',
      'tab.capital': 'Capital and fundraising structure, with active involvement.',
      'tab.studio': 'From idea to a business that stands on its own.',

      'model.title': 'We don\'t staff a consulting team. We build the project you need.',
      'model.lead': 'Traditional consulting scales by hiring more people. We scale with AI and a network of specialists who join only when the project calls for it.',
      'cmp.dim': 'Aspect',
      'cmp.trad': 'Traditional consulting',
      'cmp.r1': 'Who does the work',
      'cmp.r1a': 'Partner, manager, senior consultant and 3–4 analysts',
      'cmp.r1b': 'A senior partner in charge, powered by AI',
      'cmp.r2': 'Research and models',
      'cmp.r2a': 'Built by the analyst team',
      'cmp.r2b': 'Research, models and first deliverables in days',
      'cmp.r3': 'Specialists',
      'cmp.r3a': 'Whoever the firm has on staff',
      'cmp.r3b': 'A network that joins only if the project needs it',
      'cmp.r4': 'Timelines',
      'cmp.r4a': 'Months',
      'cmp.r4b': 'Weeks',
      'cmp.r5': 'How we charge',
      'cmp.r5a': 'Fixed fees',
      'cmp.r5b': 'Maintenance fee + shared equity',

      'svc.title': 'Three lines, one ecosystem.',
      'svc.lead': "Strategy, capital and incubation don't compete with each other: they feed each other within the same network of clients and projects.",
      'svc.s1.kind': 'Strategy and management consulting',
      'svc.s1.desc': "A senior partner in charge, not a junior team learning on your budget. We help you decide what to do and back it with numbers.",
      'svc.s1.i1': 'Business and growth strategy',
      'svc.s1.i2': 'Financial models and project finance',
      'svc.s1.i3': 'Fundraising strategy and pitch decks',
      'svc.s1.i4': 'Go-to-market and market sizing',
      'svc.s1.i5': 'Organisation design and scaling',
      'svc.s1.i6': 'PMO for key projects',
      'ln.s2.i1': 'Deal structuring and valuation',
      'ln.s2.i2': 'Round execution',
      'ln.s2.i3': 'Investor relations',
      'svc.s2.kind': 'Venture capital',
      'svc.s2.desc': 'Capital and fundraising structure for projects that have already validated something real, with active involvement, not just a check.',
      'svc.s2.i1': 'Fundraising structure',
      'svc.s2.i2': 'Investment in validated projects',
      'svc.s2.i3': 'Legal and corporate structuring',
      'svc.s2.i4': 'Post-investment support',
      'svc.s3.kind': 'Incubator',
      'svc.s3.desc': 'From idea to execution. You focus on creating; together with the network, we build everything the business needs to stand on its own.',
      'svc.s3.i1': 'On-demand specialists',
      'svc.s3.i2': 'Finance and project finance',
      'svc.s3.i3': 'Brand and marketing',
      'svc.s3.i4': 'Operations and HR',

      'fee.title': "We don't bill by the hour. We win when you win.",
      'fee.c1.h': 'Maintenance fee',
      'fee.c1.p': "A fee that covers what it costs to operate. It isn't the business: it's the minimum we need to work with you.",
      'fee.c2.h': 'Shared equity',
      'fee.c2.p': 'What we really care about is being part of the project: equity or upside in the companies we get involved with. If the client wins, everyone wins.',

      'md.label': 'We assess case by case',
      'md.note': 'Depending on how each project fits within the ecosystem.',
      'pj.k.sector': 'Sector',
      'pj.k.loc': 'Location',
      'pj.k.line': 'Line',
      'pj.view': 'View project',
      'pj.close': 'Close',
      'pj.scope': 'Scope',
      'pj.rocca.sector': 'Real estate',
      'pj.bamboo.sector': 'Hospitality & F&B',
      'pj.tt.sector': 'Sustainability & consumer',
      'pj.la.sector': 'Fintech & live events',
      'pj.bj.status': 'In progress',
      'pj.bj.desc': 'B•Joung is a high-end hair and nail studio in the south of Mexico City. We are working with its team on an executive roadmap to take the business to its next stage: from market and positioning to portfolio, talent, customer experience and the brand relaunch.',
      'pj.bj.book': 'Bookings',
      'pj.bj.s1': 'Strategic diagnostic',
      'pj.bj.s2': 'Market and target customer',
      'pj.bj.s3': 'Competition and positioning',
      'pj.bj.s4': 'Services, pricing and portfolio',
      'pj.bj.s5': 'Organization and talent',
      'pj.bj.s6': 'Operations and customer experience',
      'pj.bj.s7': 'Brand, reputation and relaunch',
      'pj.hype.sector': 'Experiences, hospitality & culture',
      'pj.hype.tag': 'Experiences · Mexico City',
      'pj.hype.desc': 'A creative experiences studio in Mexico City working across hospitality, culture, food and music: its own events such as Sin Señal and Café Cerrero, custom experiences for groups and venues, and full programming for restaurants, galleries and venues.',
      'ln.s1.label': 'What we deliver',
      'md.m1': 'Shared profits + fee',
      'md.m2': 'Fee only',
      'md.m3': 'Fee + equity',
      'md.m4': 'Equity only',
      'about.purpose': 'We bring the standard of major firms to companies in the making, at the speed and cost of a founder.',
      'proj.title': 'Projects in the ecosystem.',
      'proj.lead': 'Companies and projects where Conjunction is actively involved, not only as an advisor but as a partner.',
      'proj.rocca.status': 'In development',
      'proj.rocca.tag': 'Between jungle and sky',
      'proj.rocca.desc': "Residential development in La Punta, Puerto Escondido, 600 m from the beach. It is the anchor project of Estudio Carroll, an architecture studio featured in ArchDaily, Architectural Record, Designboom and Arquine, and the first validation case of the Conjunction model.",
      'proj.bamboo.status': 'Expanding',
      'proj.bamboo.loc': 'Tulum → Mexico City',
      'proj.bamboo.desc': 'Private in-home chef service for vacation rentals and luxury villas, validated in Tulum. The Mexico City expansion targets Roma, Condesa, Polanco and Santa Fe.',
      'proj.tt.status': 'Active',
      'proj.tt.desc': 'A recycling project disguised as a surf brand: 10% of every sale funds bins, collection and sorting, in partnership with Comunidad NIT.',
      'proj.la.status': 'Redesign in progress',
      'proj.la.loc': 'Mexico City',
      'proj.la.desc': 'Redesign of a cashless payments app for live events: wallet, top-ups via CLABE transfer and NFC or QR payments, with no wristbands or special hardware.',
      'inv.p': "Direct investment in the equity of ecosystem projects will open in a later stage. In the meantime, write to us and we'll tell you how to take part.",

      'team.title': 'Partners who lead. Specialists who execute.',
      'team.lead': 'Gustavo and Patricio lead every project full-time. Sebastián, Michael and Hamish join on finance, law and growth, and the specialist network comes in as each project requires.',
      'team.role': 'Partner',
      'team.role.gr': 'Founding & Managing Partner',
      'team.role.ph': 'Partner & Chief of Staff',
      'team.ph.bio': "M&A advisory and strategy consulting, with experience in corporate finance, strategy and operations. Formerly at IDOM. Runs delivery and operations across Conjunction's three lines.",
      'team.gr.bio': '10 years of experience across corporate finance and management consulting, with 20+ infrastructure, manufacturing and pharma projects for international clients. Formerly at IDOM, Sanofi and EY. MSc in Digital Project Management and Consulting from ESCP Business School.',
      'team.st.bio': 'Spent ten years building ePlata, a money-transfer and multi-currency digital wallet company, through its sale in 2025. Now CEO of Mexas Wallet. A lawyer by training, with a career in payments, financial services and corporate law.',
      'team.hf.bio': 'Leads growth, commercial strategy and cross-functional teams across international markets. Works at the intersection of cybersecurity, digital identity and enterprise transformation in Latin America and the U.S. A former Australian diplomat, with a background spanning fintech, infrastructure and government.',
      'team.mg.bio': 'Founder of Kitsune Law in New York, with nearly a decade in corporate law, venture law and venture capital. Guides growing companies through complex legal and regulatory structures.',

      'net.title': 'The specialists',
      'net.p1': "We don't keep a fixed structure waiting for work. Each project builds its own team with professionals who have solved that problem before, and who come in only for the stretch where they're needed.",
      'net.p2': 'Their arrangement is set per project and can include equity, just like ours.',
      'net.people': 'Individuals',
      'net.companies': 'Partner companies',
      'net.portfolio': 'Portfolio',
      'net.ab.tag': 'Strategy and insights',
      'net.ab.p': 'Strategy and research at Ipsos Strategy3: market sizing, brand strategy, trends & foresight and generative AI applied to audience segmentation. Leads teams on strategy and growth projects for Fortune 100 clients in finance, technology, entertainment and energy.',
      'net.aj.tag': 'Network architecture · Cloud and AI/ML',
      'net.aj.l1': 'Co-founder of Turnstyle Solutions, acquired by Yelp in 2018 for USD 20M.',
      'net.aj.l2': 'Wireless networks across 500+ locations (Yum Brands, Subway, Cara Foods, Pernod Ricard).',
      'net.aj.l3': 'IoT network of 400+ irrigation sensors across 50+ vineyards in Napa, Sonoma and California.',
      'net.aj.l4': 'City-wide public WiFi in London, Ontario, still active today.',
      'net.pm.tag': 'Product design and strategy',
      'net.pm.p': 'Product design and strategy for AI-powered, data-driven digital products focused on conversion and growth.',
      'net.mk.tag': 'Creative direction and branding',
      'net.mk.l1': 'Nearly 15 years in creative direction and brand development: campaigns and multi-platform content.',
      'net.mk.l2': 'Creative Director at Tropical Trash and co-founder of The Creative Hotline.',
      'net.mk.l3': 'Creative direction for Nike, Ulta Beauty, Team USA and the WNBA.',
      'net.cc.tag': 'AI for corporate finance',
      'net.cc.p': 'AI platform for corporate finance teams: automates complex financial processes at enterprise scale.',
      'net.zd.tag': 'Growth, paid media and data & AI',
      'net.zd.p': 'Growth agency specialized in paid media, martech and data & AI: high-impact strategies across paid channels and the marketing stack.',
      'net.ch.tag': 'On-demand creative direction',
      'net.ch.p': 'On-demand senior creative direction, no retainers or commitments: creative strategy sessions for founders, brands and creators. Based in Venice, CA, serving clients worldwide.',

      'about.title': 'Purpose',
      'val.1.p': "Building something shouldn't depend on affording a team of eight consultants.",


      'contact.title': "Let's talk about your project.",
      'contact.lead': "Strategy, capital or incubation: tell us what stage you're at and we'll look at it together. We reply personally.",
      'form.name': 'Name',
      'form.email': 'Email',
      'form.company': 'Company or project',
      'form.optional': '(optional)',
      'form.interest': 'What are you looking for?',
      'form.opt.strategy': 'Strategy and management',
      'form.opt.capital': 'Capital structuring / fundraising',
      'form.opt.studio': 'Incubation',
      'form.opt.other': 'Other',
      'form.message': 'Message',
      'form.submit': 'Send message',
      'form.sending': 'Sending…',
      'form.ok': "Thank you. We received your message and will get back to you shortly.",
      'form.fail': "We couldn't send your message. Please try again or email hi@cjecosystems.com.",
      'form.err.name': 'Please enter your name.',
      'form.err.email': 'Please enter your email.',
      'form.err.emailFormat': 'Check the email address: it looks incomplete.',
      'form.err.message': 'Tell us briefly how we can help.',

      'footer.tag': 'The rigor of a major firm, at the speed of a founder.',
      'footer.city': 'Mexico City',
      'footer.photo': 'Photography and video: Pexels'
    }
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  // El español original se lee del HTML una sola vez.
  nodes.forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (!(key in dict.es)) dict.es[key] = el.textContent;
  });

  var current = 'es';

  function t(key) {
    return (dict[current] && dict[current][key]) || dict.es[key] || key;
  }

  function apply(lang) {
    current = dict[lang] ? lang : 'es';
    document.documentElement.lang = current;
    nodes.forEach(function (el) {
      var val = t(el.getAttribute('data-i18n'));
      if (el.textContent !== val) el.textContent = val;
    });
    document.title = t('meta.title');
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === current));
    });
    try { localStorage.setItem('cje-lang', current); } catch (e) { /* storage no disponible */ }
  }

  var initial = 'es';
  var param = new URLSearchParams(location.search).get('lang');
  if (param) initial = param;
  else {
    try { initial = localStorage.getItem('cje-lang') || 'es'; } catch (e) { initial = 'es'; }
  }
  if (initial !== 'es') apply(initial);

  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); });
  });

  window.CJE_I18N = { t: t, apply: apply, get lang() { return current; } };
})();
