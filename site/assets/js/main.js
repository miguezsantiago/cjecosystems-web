(function () {
  'use strict';

  var root = document.documentElement;
  var header = document.querySelector('[data-header]');
  var hero = document.querySelector('.hero');

  /* ---------- Header: transparent over hero, solid after ---------- */
  function updateHeader() {
    if (!header) return;
    var threshold = hero ? hero.offsetHeight - header.offsetHeight - 40 : 10;
    header.classList.toggle('is-solid', window.scrollY > Math.min(threshold, 120));
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener('resize', updateHeader);

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.getElementById('primary-nav');
  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    header.classList.toggle('menu-open', open);
    var label = toggle.querySelector('[data-i18n]');
    if (label && window.CJE_I18N) label.textContent = window.CJE_I18N.t(open ? 'a11y.menuClose' : 'a11y.menu');
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
    window.matchMedia('(min-width: 881px)').addEventListener('change', function (mq) {
      if (mq.matches) setMenu(false);
    });
  }

  /* ---------- Active nav link on scroll ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.primary-nav a[href^="#"]'));
  if ('IntersectionObserver' in window && navLinks.length) {
    var byId = {};
    navLinks.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = byId[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(function (a) { a.removeAttribute('aria-current'); });
          link.setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(byId).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
    // Mientras el hero está a la vista, ningún link queda marcado.
    if (hero) {
      new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) navLinks.forEach(function (a) { a.removeAttribute('aria-current'); });
      }, { rootMargin: '0px 0px -50% 0px' }).observe(hero);
    }
  }

  /* ---------- "Hablar sobre inversión" preselects the form ---------- */
  document.querySelectorAll('[data-interest]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var select = document.getElementById('f-interest');
      if (select) select.value = btn.getAttribute('data-interest');
    });
  });

  /* ---------- Contact form (Formspree) ---------- */
  var form = document.querySelector('[data-form]');
  if (form) {
    var banner = form.querySelector('[data-form-banner]');
    var submit = form.querySelector('[data-submit]');
    var t = function (key) { return window.CJE_I18N ? window.CJE_I18N.t(key) : key; };

    function setError(name, msgKey) {
      var input = form.elements[name];
      var slot = form.querySelector('[data-error-for="' + name + '"]');
      if (!input || !slot) return;
      if (msgKey) {
        input.setAttribute('aria-invalid', 'true');
        input.setAttribute('aria-describedby', slot.id || (slot.id = 'err-' + name));
        slot.textContent = t(msgKey);
      } else {
        input.removeAttribute('aria-invalid');
        slot.textContent = '';
      }
    }

    function validate() {
      var ok = true;
      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var message = form.elements.message.value.trim();
      setError('name', name ? null : 'form.err.name');
      if (!name) ok = false;
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
      setError('email', email ? (emailOk ? null : 'form.err.emailFormat') : 'form.err.email');
      if (!emailOk) ok = false;
      setError('message', message ? null : 'form.err.message');
      if (!message) ok = false;
      return ok;
    }

    function showBanner(type, key) {
      banner.hidden = false;
      banner.className = 'form-banner is-' + type;
      banner.textContent = t(key);
    }

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
      submit.disabled = true;
      submit.setAttribute('aria-busy', 'true');
      var label = submit.querySelector('span');
      label.textContent = t('form.sending');

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        form.reset();
        showBanner('success', 'form.ok');
      }).catch(function () {
        showBanner('error', 'form.fail');
      }).finally(function () {
        submit.disabled = false;
        submit.removeAttribute('aria-busy');
        label.textContent = t('form.submit');
      });
    });
  }

  /* ---------- Footer year ---------- */
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  root.classList.add('is-ready');
})();
