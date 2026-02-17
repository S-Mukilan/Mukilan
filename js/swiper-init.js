function initAppScreenshotSwiper() {
  if (typeof Swiper === 'undefined') return;
  return new Swiper('.appScreenshotCarousel-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 380,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 600,
  });
}

window.initAppScreenshotSwiper = initAppScreenshotSwiper;
