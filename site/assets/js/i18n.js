/* Conjunction Ecosystems — ES / EN
   El español vive en el HTML. Acá están las traducciones al inglés
   y los textos que solo usa JavaScript (errores del formulario, etc.).
   Para editar un texto en inglés: buscá su clave (data-i18n="...") y cambiá el valor. */
(function () {
  'use strict';

  var dict = {
    es: {
      'meta.title': 'Conjunction Ecosystems — Consultoría estratégica, capital e incubación',
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
      'meta.title': 'Conjunction Ecosystems — Strategy consulting, capital and incubation',
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
      'hero.lede': 'A senior partner powered by AI and a network of specialists activated project by project, who win when you win.',
      'hero.cta2': 'How we work',
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

      'model.title': "We don't staff a consulting team. We build the one your project needs.",
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
      'svc.s1.i1': 'Strategic diagnostics',
      'svc.s1.i2': 'Financial models',
      'svc.s1.i3': 'Project finance',
      'svc.s1.i4': 'PMO and project management',
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

      'proj.title': 'Projects in the ecosystem.',
      'proj.lead': 'Companies and projects where Conjunction is actively involved, not only as an advisor but as a partner.',
      'proj.rocca.status': 'In development',
      'proj.rocca.tag': 'Between jungle and sky',
      'proj.rocca.desc': "Residential development in La Punta, Puerto Escondido, 600 m from the beach. It is the anchor project of Estudio Carroll, an architecture studio featured in ArchDaily, Architectural Record, Designboom and Arquine, and the first validation case of the Conjunction model.",
      'proj.rocca.k1': 'Units',
      'proj.rocca.k2': 'Available',
      'proj.rocca.k3': 'Size',
      'proj.rocca.k4': 'Delivery',
      'proj.rocca.v4': 'Jun 2028',
      'proj.bamboo.status': 'Expanding',
      'proj.bamboo.loc': 'Tulum → Mexico City',
      'proj.bamboo.desc': 'Private in-home chef service for vacation rentals and luxury villas, validated in Tulum. The Mexico City expansion targets Roma, Condesa, Polanco and Santa Fe.',
      'proj.tt.status': 'Active',
      'proj.tt.desc': 'A recycling project disguised as a surf brand: 10% of every sale funds bins, collection and sorting, in partnership with Comunidad NIT.',
      'proj.la.status': 'Redesign in progress',
      'proj.la.loc': 'Mexico City',
      'proj.la.desc': 'Redesign of a cashless payments app for live events: wallet, top-ups via CLABE transfer and NFC or QR payments, with no wristbands or special hardware.',
      'inv.title': 'Interested in participating in these projects?',
      'inv.p': "Direct investment in the equity of ecosystem projects will open in a later stage. In the meantime, write to us and we'll tell you how to take part.",
      'inv.cta': 'Talk about investing',

      'team.title': 'Partners who lead. Specialists who execute.',
      'team.lead': 'Each partner is both an expert and a project director. You always work with someone experienced, never an intermediary.',
      'team.role': 'Partner',
      'team.gr.bio': 'MSc in Digital Project Management and Consulting from ESCP Business School. Former consultant at IDOM, with experience in business strategy, client management and process optimization in investment projects.',
      'team.st.bio': 'CEO of ePlata Mexico, leading its regional expansion in money transfers and multi-currency digital wallets. Over a decade in financial services and corporate law, focused on financial inclusion.',
      'team.mg.bio': 'Founder of Kitsune Law, with nearly a decade in corporate law, venture law and venture capital. Guides growing companies through complex legal and regulatory structures.',

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

      'about.title': 'Mission, vision and values',
      'about.m.h': 'Mission',
      'about.m.p': 'To democratize access to corporate-level consulting, with the standard of major firms at the speed and cost of a founder, so startups and small businesses can build instead of solving alone what they don’t know how to do.',
      'about.v.h': 'Vision',
      'about.v.p': 'To be the network that connects talent, capital and artificial intelligence, so any creator with a solid project gets the same strategic and operational support that only large corporations can afford today.',
      'about.values': 'What guides us',
      'val.1.h': 'Democratize access',
      'val.1.p': "Building something shouldn't depend on affording a team of eight consultants.",
      'val.2.h': 'Everyone does their part',
      'val.2.p': 'Creators focus on creating. We take care of the rest, from project finance to marketing and HR.',
      'val.3.h': 'The team you actually need',
      'val.3.p': 'Structures built for each project, instead of rigid processes inherited from traditional consulting.',
      'val.4.h': 'A compounding network',
      'val.4.p': 'We connect our clients with each other when it makes sense. The network is worth more with every project that joins.',
      'val.5.h': 'Shared success',
      'val.5.p': 'Upside and equity rather than relying only on fixed fees.',
      'val.6.h': 'A new generation',
      'val.6.p': 'Built for millennial and Gen Z founders, with AI as the engine of everything we do, not just a tool.',

      'plat.title': 'Coming soon: a platform to build alongside us.',
      'plat.lead': 'Every company in the ecosystem will have its own space to work with the Conjunction team.',
      'plat.1.h': 'Live collaboration',
      'plat.1.p': 'The project is designed in one place, without files going back and forth.',
      'plat.2.h': 'Team selection',
      'plat.2.p': 'Choose from the network who joins, depending on the stage of the project.',
      'plat.3.h': 'AI tools',
      'plat.3.p': 'Models, research and first drafts with the same engine our team uses.',
      'plat.4.h': 'Tracking',
      'plat.4.p': 'Project status and the equity relationship, always visible.',

      'contact.title': "Let's talk about your project.",
      'contact.lead': "Strategy, capital or incubation: tell us what stage you're at and we'll look at it together. We reply personally.",
      'form.name': 'Name',
      'form.email': 'Email',
      'form.company': 'Company or project',
      'form.optional': '(optional)',
      'form.interest': 'What are you looking for?',
      'form.opt.strategy': 'Strategy and management',
      'form.opt.capital': 'Capital / fundraising',
      'form.opt.studio': 'Incubation',
      'form.opt.invest': 'Investing in an ecosystem project',
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

      'footer.tag': 'Networks · Intelligence · Transformation',
      'footer.city': 'Mexico',
      'footer.photo': 'Photography: Pexels'
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
