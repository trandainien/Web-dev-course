var btns = document.querySelectorAll("button");

for (var i = 0; i < 7; i++) {
  btns[i].addEventListener("click", function (event) {
    console.log(event);
    var key = this.innerHTML;
    makeSound(key);
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function () {
      document.querySelector("." + key).classList.remove("pressed");
    }, 100);
  });
}

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  makeSound(event.key);
  document.querySelector("." + event.key).classList.add("pressed");
});

document.addEventListener("keyup", function (event) {
  document.querySelector("." + event.key).classList.remove("pressed");
});

document.addEventListener("keyup", function (event) {});

function makeSound(key) {
  var btn = key;
  switch (btn) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom_1 = new Audio("sounds/tom-1.mp3");
      tom_1.play();
      break;
    case "j":
      var crash = new Audio("sounds/tom-2.mp3");
      crash.play();
      break;
    case "k":
      var kick_bass = new Audio("sounds/tom-3.mp3");
      kick_bass.play();
      break;
    case "l":
      var crash = new Audio("sounds/tom-4.mp3");
      crash.play();
      break;
    default:
  }
}
