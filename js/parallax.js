/* Efek parallax ringan tanpa library.
   - [data-speed]   : elemen bergeser vertikal relatif terhadap scroll
   - .parallax-bg   : latar foto pada pita pemisah (dibatasi agar tidak keluar bingkai)
   - .reveal        : muncul halus saat masuk layar
   - .nav-bar       : berubah gaya setelah di-scroll
*/
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var movers = Array.prototype.slice.call(document.querySelectorAll('[data-speed]'));
  var bgs = Array.prototype.slice.call(document.querySelectorAll('.parallax-bg'));
  var nav = document.querySelector('.nav-bar');
  var ticking = false;

  function update() {
    var vh = window.innerHeight;

    movers.forEach(function (el) {
      var parent = el.parentElement.getBoundingClientRect();
      if (parent.bottom < -300 || parent.top > vh + 300) return;
      var center = parent.top + parent.height / 2 - vh / 2;
      el.style.transform = 'translate3d(0,' + (center * parseFloat(el.dataset.speed)).toFixed(1) + 'px,0)';
    });

    bgs.forEach(function (bg) {
      var band = bg.parentElement;
      var r = band.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      var maxShift = (bg.offsetHeight - band.offsetHeight) / 2;
      var center = r.top + r.height / 2 - vh / 2;
      var shift = Math.max(-maxShift, Math.min(maxShift, -center * 0.3));
      bg.style.transform = 'translate3d(0,' + shift.toFixed(1) + 'px,0)';
    });

    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
    ticking = false;
  }

  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }

  if (!reduce) {
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  } else if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  /* Reveal saat masuk layar */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('tampil'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('tampil'); });
  }
})();
