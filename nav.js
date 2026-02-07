const pages = [
  { slug: 'index.html',          label: 'about' },
  { slug: 'tech-research.html',  label: 'ethics of technology' },
  { slug: 'other-research.html', label: 'mind & language' },
  { slug: 'pedagogy.html',       label: 'pedagogy' },
  { slug: 'cv',                  label: 'cv', href: 'https://www.dropbox.com/scl/fi/w5szza7jjnp6fuynu4edj/Phillips-Brown-CV.pdf?rlkey=mozv1xt1r52nxzilc5ks2z9rh&dl=0' },
];

const nav = document.getElementById('nav');
const current = window.location.pathname.split('/').pop() || 'index.html';
const ul = document.createElement('ul');

pages.forEach(p => {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.href = p.href || p.slug;
  a.textContent = p.label;

  if (p.slug === current) {
    li.classList.add('active');
  }

  if (p.label === 'cv') {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  }

  li.appendChild(a);
  ul.appendChild(li);
});

nav.appendChild(ul);
