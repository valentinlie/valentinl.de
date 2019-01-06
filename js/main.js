function loadImage(id, targetId) {
  var el = document.getElementById(id);
  var targetEl = targetId ? document.getElementById(targetId) : el;
  var imageToLoad;
  if (el.dataset.image) {
    imageToLoad = el.dataset.image;
  } else if (typeof el.currentSrc === 'undefined') {
    imageToLoad = el.src;
  } else {
    imageToLoad = el.currentSrc;
  }
  if (imageToLoad) {
    var img = new Image();;
    img.src = imageToLoad;
    img.onload = function() {
      targetEl.classList.add('is-loaded');
    };
  }
}
document.addEventListener('DOMContentLoaded', function() {
  text();
  loadImage('wallpaper');
  loadImage('pictureImage', 'picture');
});

function text() {
	var bday = 2000
  var today = new Date()
  var age = today.getFullYear() - bday

$.getJSON("https://ferien-api.de/api/v1/holidays/BB"), function(data) {
  console.log(data);
}

  document.getElementById('text').innerHTML = "Hello, I am a " + age + " years old Student from Potsdam, Germany. Currently I am in the 12th grade and doing my A-level.";
}
