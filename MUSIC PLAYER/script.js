let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("controlIcon");
let musicPlay = document.querySelector(".musicPlay");
let musicPause = document.querySelector(".musicPause");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

progress.onchange = function () {
  musicPause.style.display = "none";
  musicPlay.style.display = "block";
  song.play();
  song.currentTime = progress.value;
  controlIcon.classList.add("play");
  controlIcon.classList.remove("pause");
};

function playPause() {
  if (controlIcon.classList.contains("play")) {
    musicPause.style.display = "block";
    musicPlay.style.display = "none";
    song.pause();
    controlIcon.classList.remove("play");
    controlIcon.classList.add("pause");
  } else {
    musicPause.style.display = "none";
    musicPlay.style.display = "block";
    song.play();
    controlIcon.classList.add("play");
    controlIcon.classList.remove("pause");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}
