/* Slider 3 gambar dengan animasi.
   - Pindah otomatis tiap 5 detik (diatur oleh bar progres CSS, jeda saat kursor di atas slider)
   - Tombol prev/next, titik navigasi, swipe di ponsel, tombol panah keyboard */
(function () {
  var slider = document.querySelector('.slider');
  if (!slider) return;

  var slides = slider.querySelectorAll('.slide');
  var dotsWrap = slider.querySelector('.slider-dots');
  var bar = slider.querySelector('.slider-progress');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var index = 0;

  var dots = Array.prototype.map.call(slides, function (_, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'Ke gambar ' + (i + 1));
    b.addEventListener('click', function () { go(i); });
    dotsWrap.appendChild(b);
    return b;
  });

  function restartBar() {
    if (reduce || !bar) return;
    bar.classList.remove('jalan');
    void bar.offsetWidth;            /* paksa animasi mulai ulang */
    bar.classList.add('jalan');
  }

  function go(n) {
    var lama = index;
    index = (n + slides.length) % slides.length;
    slides.forEach(function (s, i) {
      s.classList.remove('keluar');
      if (i === lama && i !== index) s.classList.add('keluar');
      s.classList.toggle('aktif', i === index);
    });
    dots.forEach(function (d, i) { d.classList.toggle('aktif', i === index); });
    restartBar();
  }

  /* bar progres selesai -> slide berikutnya */
  if (bar) bar.addEventListener('animationend', function () { go(index + 1); });

  slider.querySelector('.next').addEventListener('click', function () { go(index + 1); });
  slider.querySelector('.prev').addEventListener('click', function () { go(index - 1); });

  /* swipe */
  var x0 = null;
  slider.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  slider.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) go(dx < 0 ? index + 1 : index - 1);
    x0 = null;
  });

  /* keyboard */
  slider.setAttribute('tabindex', '0');
  slider.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') go(index + 1);
    if (e.key === 'ArrowLeft') go(index - 1);
  });

  go(0);
})();
