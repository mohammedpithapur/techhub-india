document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('mobile-menu-btn');
  var menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', function () { menu.classList.toggle('hidden'); });
  document.querySelectorAll('.mobile-link').forEach(function (l) { l.addEventListener('click', function () { menu.classList.add('hidden'); }); });
});
