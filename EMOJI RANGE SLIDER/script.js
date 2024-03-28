const slider = document.querySelector("input");
const bar = document.querySelector(".progress-bar");
const thumb = document.querySelector(".thumb");
const slideIcon = document.querySelector(".slide-icon");

slider.oninput = () => {
  let value = slider.value;
  thumb.style.left = value + "%";
  bar.style.width = value + "%";

  if (value < 10) {
    slideIcon.style.marginTop = "0px";
  }
  if (value >= 10) {
    slideIcon.style.marginTop = "-150px";
  }
  if (value >= 20) {
    slideIcon.style.marginTop = "-300px";
  }
  if (value >= 30) {
    slideIcon.style.marginTop = "-450px";
  }
  if (value >= 40) {
    slideIcon.style.marginTop = "-600px";
  }
  if (value >= 50) {
    slideIcon.style.marginTop = "-750px";
  }
  if (value >= 60) {
    slideIcon.style.marginTop = "-900px";
  }
  if (value >= 70) {
    slideIcon.style.marginTop = "-1050px";
  }
  if (value >= 80) {
    slideIcon.style.marginTop = "-1200px";
  }
  if (value >= 90) {
    slideIcon.style.marginTop = "-1350px";
  }
};
