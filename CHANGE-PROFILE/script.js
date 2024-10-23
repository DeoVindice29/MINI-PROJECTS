let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function () {
  profilePic.src = URL.createObjectURL(inputFile.files[0]);
  profilePic.style.aspectRatio = "1/1";
  profilePic.style.objectFit = "cover";
};
