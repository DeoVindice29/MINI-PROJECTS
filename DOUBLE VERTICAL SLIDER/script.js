const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

// Pindahkan perhitungan style.top ke luar fungsi untuk efisiensi
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;

  // Perbarui activeSlideIndex berdasarkan arah dan batasi nilai
  activeSlideIndex = direction === "up" ?
    (activeSlideIndex + 1) % slidesLength :
    (activeSlideIndex - 1 + slidesLength) % slidesLength;

  // Terapkan transformasi slide dengan nilai activeSlideIndex yang diperbarui
  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};

// Tambahkan event listener keyup di luar fungsi changeSlide untuk efisiensi
window.addEventListener("keyup", (event) => {
  if (["ArrowUp", "ArrowDown"].includes(event.key)) {
    changeSlide(event.key === "ArrowUp" ? "up" : "down");
  }
});