const track = document.querySelector('.bestCelebs');
const cards = document.querySelectorAll('.celebsBlock');

const leftArrow = document.querySelector('.celebsArrow.left');
const rightArrow = document.querySelector('.celebsArrow.right');

const gap = 30;
const cardWidth = cards[0].offsetWidth + gap;
const step = 5;

let position = 0;
const maxPosition = cards.length - step;

function updateArrows() {
  if (position === 0) {
    leftArrow.classList.add('hidden');
  } else {
    leftArrow.classList.remove('hidden');
  }

  if (position >= maxPosition) {
    rightArrow.classList.add('hidden');
  } else {
    rightArrow.classList.remove('hidden');
  }
}

rightArrow.addEventListener('click', () => {
  if (position < maxPosition) {
    position += step;
    track.scrollTo({
      left: position * cardWidth,
      behavior: 'smooth'
    });
    updateArrows();
  }
});

leftArrow.addEventListener('click', () => {
  if (position > 0) {
    position -= step;
    track.scrollTo({
      left: position * cardWidth,
      behavior: 'smooth'
    });
    updateArrows();
  }
});

updateArrows();

