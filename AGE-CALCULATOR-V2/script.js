const body = document.querySelector("body");
const modeSwitch = document.querySelector(".mode-switch");

if (localStorage.getItem("mode") === "Dark Mode") {
  body.classList.add("dark");
  modeSwitch.textContent = "Light Mode";
}

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  const isDarkMode = body.classList.contains("dark");
  modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

function age() {

  if (!d1 || !m1 || !y1) {
    alert("Please enter a valid date before clicking Submit.");
    return;
  }
  else {
    var d1 = document.getElementById("date").value;
    var m1 = document.getElementById("month").value;
    var y1 = document.getElementById("year").value;

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
    }
    if (m1 > m2) {
      m2 = m2 + 12;
      y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    document.getElementById("age").innerHTML =
      "Your Age is " + y + " Years " + m + " Months & " + d + " Days";
  }
}
