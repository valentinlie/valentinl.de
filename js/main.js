function loadImage(id, targetId) {
  let el = document.getElementById(id);
  let targetEl = targetId ? document.getElementById(targetId) : el;
  let imageToLoad;
  if (el.dataset.image) {
    imageToLoad = el.dataset.image;
  } else if (typeof el.currentSrc === "undefined") {
    imageToLoad = el.src;
  } else {
    imageToLoad = el.currentSrc;
  }
  if (imageToLoad) {
    let img = new Image();
    img.src = imageToLoad;
    img.onload = function () {
      targetEl.classList.add("is-loaded");
    };
  }
}
document.addEventListener("DOMContentLoaded", function () {
  putAge();
  loadImage("wallpaper");
  loadImage("pictureImage", "picture");
});

function putAge() {
  let age = getAge("2000/12/12");
  let today = new Date();
  document.getElementById("text").innerHTML =
    "Hello, I am a " +
    age +
    " years old Student from Münster, Germany. Currently I am studying Business Informatics.";
}

function getAge(dateString) {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
