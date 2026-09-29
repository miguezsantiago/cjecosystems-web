/* Prototipo v3 — animaciones ligadas al scroll.
   En móvil (<= 880px) o con reduced motion, la página queda estática (clase .static). */
(function () {
  'use strict';

  var root = document.documentElement;
  var mqSmall = window.matchMedia('(max-width: 880px)');
  var mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  var intro = document.querySelector('[data-scrub="intro"]');
  var introStage = intro && intro.querySelector('.intro-stage');
  var win = intro && intro.querySelector('[data-window]');
  var video = intro && intro.querySelector('[data-intro-video]');
  var mech = document.querySelector('[data-scrub="mech"]');
  var lines = document.querySelector('[data-scrub="lines"]');
  var track = lines && lines.querySelector('[data-track]');

  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };
  var easeInOut = function (t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };

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

  function frame() {
    ticking = false;
    if (root.classList.contains('static')) return;

    // 1. Intro: la ventana del titular se expande a pantalla completa
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

    // 2. Mecanismo: cinco estados discretos
    if (mech) {
      var step = Math.min(4, Math.floor(progress(mech) * 5));
      if (mech.getAttribute('data-step') !== String(step)) mech.setAttribute('data-step', String(step));
    }

    // 3. Líneas: el track se desplaza en horizontal
    if (lines && track) {
      var pl = progress(lines);
      var max = Math.max(0, track.scrollWidth - window.innerWidth);
      track.style.setProperty('--tx', (-pl * max) + 'px');
    }
  }

  var ticking = false;
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(frame); }
  }

  function setMode() {
    var isStatic = mqSmall.matches || mqReduce.matches;
    root.classList.toggle('static', isStatic);
    if (isStatic) {
      if (video) video.style.removeProperty('--clip');
      if (mech) mech.setAttribute('data-step', '4');
      if (track) track.style.removeProperty('--tx');
    }
    sizeLines();
    frame();
  }

  setMode();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { setMode(); });
  mqSmall.addEventListener('change', setMode);
  mqReduce.addEventListener('change', setMode);
  window.addEventListener('load', function () { sizeLines(); frame(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { sizeLines(); frame(); });
})();
