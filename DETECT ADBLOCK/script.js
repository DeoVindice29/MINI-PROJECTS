const detect = document.querySelector("#detect"),
  wrapper = document.querySelector(".wrapper"),
  button = wrapper.querySelector("button");

let adClasses = [
  "ad",
  "ads",
  "adsbox",
  "ad-placement",
  "doubleclick",
  "ad-placeholder",
  "ad-badge",
  "AdBlock",
];
for (let item of adClasses) {
  detect.classList.add(item);
}

let getProperty = window.getComputedStyle(detect).getPropertyValue("display");

button.addEventListener("click", () => {
  wrapper.classList.remove("show");
});

if (!wrapper.classList.contains("show")) {
  getProperty == "none"
    ? wrapper.classList.add("show")
    : wrapper.classList.remove("show");
}
console.log(getProperty);
