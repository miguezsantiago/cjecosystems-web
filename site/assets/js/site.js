/* Conjunction Ecosystems — site.js
   1. Animaciones ligadas al scroll (intro, mecanismo, líneas), en escritorio y en móvil.
      Con reduced motion la página queda estática (clase .static).
   2. Header, menú móvil, nav activo, apariciones, formulario. */
(function () {
  'use strict';

  var root = document.documentElement;
  var t = function (key) { return window.CJE_I18N ? window.CJE_I18N.t(key) : key; };
  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };
  var easeInOut = function (x) { return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };

  /* =================== 1. Scroll scenes =================== */
  var mqSmall = window.matchMedia('(max-width: 880px)');
  var mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  var intro = document.querySelector('[data-scrub="intro"]');
  var introStage = intro && intro.querySelector('.intro-stage');
  var win = intro && intro.querySelector('[data-window]');
  var video = intro && intro.querySelector('[data-intro-video]');
  var mech = document.querySelector('[data-scrub="mech"]');
  var lines = document.querySelector('[data-scrub="lines"]');
  var track = lines && lines.querySelector('[data-track]');

  function progress(section) {
    var r = section.getBoundingClientRect();
    var stage = section.firstElementChild.getBoundingClientRect();
    var total = r.height - stage.height;
    return total > 0 ? clamp((stage.top - r.top) / total, 0, 1) : 0;
  }

  function sizeLines() {
    if (!lines || !track) return;
    if (root.classList.contains('static')) { lines.style.height = ''; return; }
    var extra = track.scrollWidth - window.innerWidth;
    lines.style.height = (window.innerHeight + Math.max(0, extra) * 1.1) + 'px';
  }

  var ticking = false;
  function frame() {
    ticking = false;
    updateHeader();
    if (root.classList.contains('static')) return;

    if (intro && win && video) {
      var p = progress(intro);
      var e = easeInOut(clamp(p / .62, 0, 1));
      var s = introStage.getBoundingClientRect();
      var w = win.getBoundingClientRect();
      var top = (w.top - s.top) * (1 - e);
      var left = (w.left - s.left) * (1 - e);
      var right = (s.right - w.right) * (1 - e);
      var bottom = (s.bottom - w.bottom) * (1 - e);
      var rad = (w.height / 2) * (1 - e);
      video.style.setProperty('--clip', 'inset(' + top + 'px ' + right + 'px ' + bottom + 'px ' + left + 'px round ' + rad + 'px)');
      intro.style.setProperty('--type-o', String(1 - clamp((p - .12) / .38, 0, 1)));
      intro.style.setProperty('--type-s', String(clamp(p / .5, 0, 1)));
      intro.style.setProperty('--over-o', String(clamp((p - .62) / .22, 0, 1)));
    }

    if (mech) {
      var step = Math.min(4, Math.floor(progress(mech) * 5));
      if (mech.getAttribute('data-step') !== String(step)) mech.setAttribute('data-step', String(step));
    }

    if (lines && track) {
      var max = Math.max(0, track.scrollWidth - window.innerWidth);
      track.style.setProperty('--tx', (-progress(lines) * max) + 'px');
    }
  }

  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(frame); }
  }

  function setMode() {
    var isStatic = mqReduce.matches;
    root.classList.toggle('static', isStatic);
    if (isStatic) {
      if (video) video.style.removeProperty('--clip');
      if (mech) mech.setAttribute('data-step', '4');
      if (track) track.style.removeProperty('--tx');
    }
    sizeLines();
    frame();
  }

  /* =================== 2. Header =================== */
  var hdr = document.querySelector('[data-hdr]');
  function updateHeader() {
    if (hdr) hdr.classList.toggle('is-scrolled', window.scrollY > 8);
  }

  var menuBtn = document.querySelector('[data-menu]');
  var nav = document.getElementById('primary-nav');
  function setMenu(open) {
    if (!menuBtn || !nav) return;
    menuBtn.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    var label = menuBtn.querySelector('[data-i18n]');
    if (label) label.textContent = t(open ? 'a11y.menuClose' : 'a11y.menu');
  }
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () { setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') { setMenu(false); menuBtn.focus(); }
    });
    window.matchMedia('(min-width: 961px)').addEventListener('change', function (mq) { if (mq.matches) setMenu(false); });
  }

  /* Nav activo según la sección visible */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.hdr-nav a[href^="#"]:not(.btn)'));
  if ('IntersectionObserver' in window && navLinks.length) {
    var byId = {};
    navLinks.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var clearAll = function () { navLinks.forEach(function (a) { a.removeAttribute('aria-current'); }); };
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && byId[entry.target.id]) { clearAll(); byId[entry.target.id].setAttribute('aria-current', 'true'); }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(byId).forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });
    if (intro) new IntersectionObserver(function (en) { if (en[0].isIntersecting) clearAll(); }, { rootMargin: '0px 0px -50% 0px' }).observe(intro);
    var contact = document.getElementById('contacto');
    if (contact) new IntersectionObserver(function (en) { if (en[0].isIntersecting) clearAll(); }, { rootMargin: '-45% 0px -50% 0px' }).observe(contact);
  }

  /* =================== Apariciones =================== */
  var reveals = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !mqReduce.matches) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-in'); ro.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = ((i % 3) * 80) + 'ms';
      ro.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* "Hablar sobre inversión" preselecciona el formulario */
  document.querySelectorAll('[data-interest]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var select = document.getElementById('f-interest');
      if (select) select.value = btn.getAttribute('data-interest');
    });
  });

  /* =================== Formulario (Formspree) =================== */
  var form = document.querySelector('[data-form]');
  if (form) {
    var banner = form.querySelector('[data-form-banner]');
    var submit = form.querySelector('[data-submit]');

    var setError = function (name, msgKey) {
      var input = form.elements[name];
      var slot = form.querySelector('[data-error-for="' + name + '"]');
      if (!input || !slot) return;
      if (msgKey) {
        if (!slot.id) slot.id = 'err-' + name;
        input.setAttribute('aria-invalid', 'true');
        input.setAttribute('aria-describedby', slot.id);
        slot.textContent = t(msgKey);
      } else {
        input.removeAttribute('aria-invalid');
        slot.textContent = '';
      }
    };

    var validate = function () {
      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var message = form.elements.message.value.trim();
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
      setError('name', name ? null : 'form.err.name');
      setError('email', email ? (emailOk ? null : 'form.err.emailFormat') : 'form.err.email');
      setError('message', message ? null : 'form.err.message');
      return !!name && emailOk && !!message;
    };

    var showBanner = function (type, key) {
      banner.hidden = false;
      banner.className = 'form-banner is-' + type;
      banner.textContent = t(key);
    };

    form.addEventListener('input', function (e) {
      if (e.target.getAttribute('aria-invalid') === 'true') validate();
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      banner.hidden = true;
      if (!validate()) {
        var first = form.querySelector('[aria-invalid="true"]');
        if (first) first.focus();
        return;
      }
      var label = submit.querySelector('span');
      submit.disabled = true;
      submit.setAttribute('aria-busy', 'true');
      label.textContent = t('form.sending');

      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          form.reset();
          showBanner('success', 'form.ok');
        })
        .catch(function () { showBanner('error', 'form.fail'); })
        .finally(function () {
          submit.disabled = false;
          submit.removeAttribute('aria-busy');
          label.textContent = t('form.submit');
        });
    });
  }

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  /* =================== Arranque =================== */
  setMode();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', setMode);
  mqSmall.addEventListener('change', setMode);
  mqReduce.addEventListener('change', setMode);
  window.addEventListener('load', function () { sizeLines(); frame(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { sizeLines(); frame(); });
  // Al cambiar de idioma cambian los anchos de texto: recalcular.
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { requestAnimationFrame(function () { sizeLines(); frame(); }); });
  });
})();
