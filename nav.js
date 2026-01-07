// nav.js
// Dynamically injects navigation and controls link behavior
const pages = [
  { slug: 'index.html',         label: 'about' },
  { slug: 'tech-research.html', label: 'tech research' },
  { slug: 'other-research.html',label: 'other research' },
  { slug: 'pedagogy.html',      label: 'pedagogy' },
  { slug: 'cv',                 label: 'cv', href: 'https://www.dropbox.com/scl/fi/w5szza7jjnp6fuynu4edj/Phillips-Brown-CV.pdf?rlkey=mozv1xt1r52nxzilc5ks2z9rh&dl=0' },
];

const navEl = document.getElementById('nav');
const current = window.location.pathname.split('/').pop();

const ul = document.createElement('ul');
pages.forEach(p => {
  const li = document.createElement('li');
  // Determine href: use explicit href or slug
  const href = p.href || p.slug;
  if (p.slug === current) li.classList.add('active');

  const a = document.createElement('a');
  a.href = href;
  a.textContent = p.label;

  // Only CV link should open in new window
  if (p.label === 'cv') {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  }

  // Non-active items except CV get hover underline effect
  if (p.slug !== current) a.classList.add('inline-link');

  li.appendChild(a);
  ul.appendChild(li);
});
navEl.appendChild(ul);
