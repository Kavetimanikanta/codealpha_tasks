document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  toggle?.addEventListener('click', () => {
    nav?.classList.toggle('open');
    toggle.textContent = nav?.classList.contains('open') ? '✕' : '☰';
  });

  const links = document.querySelectorAll('.site-nav a, .hero-actions a, .footer-links a');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = (event.currentTarget).getAttribute('href');
      if (href?.startsWith('#')) {
        event.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        nav?.classList.remove('open');
        toggle.textContent = '☰';
      }
    });
  });

  const form = document.querySelector('.contact-form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you! Your message has been sent.');
    form.reset();
  });
});
