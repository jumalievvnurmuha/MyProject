const slider = document.querySelector('.topPicks');
const cards = slider.querySelectorAll('.cardBest');
const cardWidth = cards[0].offsetWidth + 30;
let currentIndex = 0;
const totalCards = cards.length;

function autoSlide() {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    slider.scrollTo({ left: currentIndex * cardWidth, behavior: 'smooth' });
  } else {
    currentIndex = 0;
    slider.scrollTo({ left: 0, behavior: 'smooth' });
  }
}

setInterval(autoSlide, 3000);
