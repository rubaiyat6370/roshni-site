/* ---------- Shared Site Interactions ---------- */

document.addEventListener('DOMContentLoaded', () => {
  // Cart drawer triggers
  document.querySelectorAll('[data-open-cart]').forEach(el => {
    el.addEventListener('click', (e) => { e.preventDefault(); openDrawer(); });
  });
  document.querySelectorAll('[data-close-cart]').forEach(el => {
    el.addEventListener('click', (e) => { e.preventDefault(); closeDrawer(); });
  });

  // Mobile menu
  const menu = document.getElementById('mobile-menu');
  document.querySelectorAll('[data-open-menu]').forEach(el => {
    el.addEventListener('click', () => menu && menu.classList.add('open'));
  });
  document.querySelectorAll('[data-close-menu]').forEach(el => {
    el.addEventListener('click', () => menu && menu.classList.remove('open'));
  });

  // Accordion
  document.querySelectorAll('.accordion-head').forEach(head => {
    head.addEventListener('click', () => {
      head.closest('.accordion-item').classList.toggle('open');
    });
  });

  // Newsletter submission (mock)
  document.querySelectorAll('.newsletter-form, .contact-form').forEach(f => {
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast(f.classList.contains('contact-form') ? 'Thanks — we’ll be in touch.' : 'Welcome to the list.');
      f.reset();
    });
  });

  // Fade-in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // ESC to close drawer / menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      if (menu) menu.classList.remove('open');
    }
  });
});
