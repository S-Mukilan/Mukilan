let currentIndex = 0;
let cardsPerView = 3;

function updateCardsPerView() {
  if (window.innerWidth <= 768) {
    cardsPerView = 1;
  } else if (window.innerWidth <= 1200) {
    cardsPerView = 2;
  } else {
    cardsPerView = 3;
  }
}

function updateCarousel() {
  const track = document.getElementById('carouselTrack');
  const cards = document.querySelectorAll('.feature-card');
  const progressFill = document.getElementById('progressFill');
  if (!track || !cards.length || !progressFill) return;

  const cardWidth = cards[0].offsetWidth;
  const gap = 48;
  const offset = -(currentIndex * (cardWidth + gap));
  track.style.transform = `translateX(${offset}px)`;

  const totalCards = cards.length;
  const maxIndex = totalCards - cardsPerView;
  const progress = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 100;
  progressFill.style.width = `${progress}%`;
}

function moveCarousel(direction) {
  const cards = document.querySelectorAll('.feature-card');
  if (!cards.length) return;
  updateCardsPerView();
  const totalCards = cards.length;
  const maxIndex = totalCards - cardsPerView;

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;
  updateCarousel();
}

function initFeatureCarousel() {
  updateCardsPerView();
  updateCarousel();
  window.addEventListener('resize', () => {
    updateCardsPerView();
    updateCarousel();
  });
}

window.moveCarousel = moveCarousel;
window.initFeatureCarousel = initFeatureCarousel;
