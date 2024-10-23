const dogElement = document.getElementById("dogDiv");
const catElement = document.getElementById("catDiv");
const resetElement = document.getElementById("resetDiv");

const dogButton = document.getElementById("dogButton");
const catButton = document.getElementById("catButton");
const resetButton = document.getElementById("resetButton");

dogButton.addEventListener("click", function () {
  if (dogElement.style.display === "") {
    dogElement.style.display = "none";
  } else {
    dogElement.style.display = "";
  }
});

catButton.addEventListener("click", function () {
  if (catElement.style.display === "") {
    catElement.style.visibility = "hidden";
  } else {
    catElement.style.visibility = "";
  }
});

resetButton.addEventListener("click", function () {
  dogElement.style.display = "";
  catElement.style.visibility = "";
});
