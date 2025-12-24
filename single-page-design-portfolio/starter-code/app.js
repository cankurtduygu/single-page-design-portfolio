
const buttonLeft = document.querySelector('.btn-left');
const buttonRight = document.querySelector('.btn-right');
const sliderSection = document.querySelector('.slider-section');
const slides = document.querySelectorAll('.slider-section img');
const slider = document.querySelector('.slider');
const x = slides[0].clientWidth;
console.log(x);

const leftGap = (sliderSection.clientWidth - slider.scrollWidth) / 2;

const slideWidth = x + 32 ; // slide genişliği + gap
let currentStartIndex = 0;
const visibleCount = 3;

function updateSliderPosition() {
  slider.style.transform = `translateX(${leftGap - currentStartIndex * slideWidth}px)`;
}

buttonLeft.addEventListener('click', () => {
    if (currentStartIndex > 0) {
    currentStartIndex--;
    updateSliderPosition();
  }     
});
buttonRight.addEventListener('click', () => {
    if (currentStartIndex < slides.length - visibleCount) {
    currentStartIndex++;
    updateSliderPosition();
  } 
});
updateSliderPosition();



















// let currentStartIndex = 0;
// const visibleCount = 3;
// const slideWidth = 540 + 32; // slide genişliği + gap

// function updateSliderPosition() {
//   sliderSection.style.transform = `translateX(-${currentStartIndex * slideWidth}px)`;
// }

// // Sağ ok için:
// buttonRight.addEventListener('click', () => {
//   if (currentStartIndex < slides.length - visibleCount) {
//     currentStartIndex++;
//     updateSliderPosition();
//   }
// });

// buttonLeft.addEventListener('click', () => {
//   if (currentStartIndex > 0) {
//     currentStartIndex--;
//     updateSliderPosition();
//   }
// });

// // Başlangıçta pozisyonu ayarla
// updateSliderPosition();