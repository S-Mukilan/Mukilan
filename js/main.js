function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.scrollToTop = scrollToTop;

function togglePricing(toggle) {
  toggle.classList.toggle('active');
  const labels = document.querySelectorAll('.toggle-label');
  labels.forEach((label) => label.classList.toggle('active'));
}
window.togglePricing = togglePricing;

function initBlogCarousel() {
  if (typeof $ === 'undefined' || !$.fn || !$.fn.owlCarousel) return;
  $('.blog-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: ['&#8249;', '&#8250;'],
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    smartSpeed: 650,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1000: { items: 3 },
    },
  });
}

function initIntegrationLogos() {
  const integrationLogos = document.querySelectorAll('.tech-logo');
  integrationLogos.forEach((logo, index) => {
    logo.tabIndex = 0;
    if (index === 0) logo.classList.add('is-selected');

    const activateLogo = () => {
      integrationLogos.forEach((item) => item.classList.remove('is-selected'));
      logo.classList.add('is-selected');
    };

    logo.addEventListener('click', activateLogo);
    logo.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activateLogo();
      }
    });
  });
}

function initSmoothNav() {
  document.querySelectorAll('nav a').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      if (!target || !target.startsWith('#')) return;
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof initFeatureCarousel === 'function') initFeatureCarousel();
  if (typeof initAppScreenshotSwiper === 'function') initAppScreenshotSwiper();
  initBlogCarousel();
  initIntegrationLogos();
  initSmoothNav();
});
