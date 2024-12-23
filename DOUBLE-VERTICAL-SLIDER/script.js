const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;

  activeSlideIndex = direction === "up" ?
    (activeSlideIndex + 1) % slidesLength :
    (activeSlideIndex - 1 + slidesLength) % slidesLength;

  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};

window.addEventListener("keyup", (event) => {
  if (["ArrowUp", "ArrowDown"].includes(event.key)) {
    changeSlide(event.key === "ArrowUp" ? "up" : "down");
  }
});
