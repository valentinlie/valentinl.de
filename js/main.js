function loadImage(id, targetId) {
  var el = document.getElementById(id);
  var targetEl = targetId ? document.getElementById(targetId) : el;
  var imageToLoad;
  if (el.dataset.image) {
    imageToLoad = el.dataset.image;
  } else if (typeof el.currentSrc === "undefined") {
    imageToLoad = el.src;
  } else {
    imageToLoad = el.currentSrc;
  }
  if (imageToLoad) {
    var img = new Image();
    img.src = imageToLoad;
    img.onload = function() {
      targetEl.classList.add("is-loaded");
    };
  }
}
document.addEventListener("DOMContentLoaded", function() {
  text();
  loadImage("wallpaper");
  loadImage("pictureImage", "picture");
});

function text() {
  var age = getAge("2000/12/12");
  var today = new Date();

  $.getJSON("https://ferien-api.de/api/v1/holidays/BB"),
    function(data) {
      console.log(data);
    };

  document.getElementById("text").innerHTML =
    "Hello, I am a " +
    age +
    " years old Student from Potsdam, Germany. Currently I am in the 13th grade and doing my A-level.";
}

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
