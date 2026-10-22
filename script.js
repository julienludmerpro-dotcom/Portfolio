// Menu mobile : ouvre / ferme la liste de liens
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  links.classList.toggle('is-open', open);
}

toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
links.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// Surligne dans le menu la section visible à l'écran
const navLinks = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(a => {
      if (a.getAttribute('href') === '#' + entry.target.id) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-40% 0px -55% 0px' });

document.querySelectorAll('main section').forEach(s => observer.observe(s));
