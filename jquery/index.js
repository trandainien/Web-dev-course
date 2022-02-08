var gamePattern = [];
var level = 1;
var current_pressed = 1;
var ok = false;
var ok1 = false;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  colour = ["red", "blue", "green", "yellow"];
  randomChosenColour = colour[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  console.log(randomChosenColour);
  var audio = new Audio(randomChosenColour + ".mp3");
  audio.play();
}

// $("button").on("click", function (event) {
//   //console.log(event.target.id);
//   var colorChosen = event.target.id;
//   gamePattern.push(colorChosen);
//   $("#" + colorChosen).addClass("blink_me");
//   setTimeout(function () {
//     $("#" + colorChosen).removeClass("blink_me");
//   }, 100);
//   var audio = new Audio(colorChosen + ".mp3");
//   audio.play();
//   console.log(gamePattern);
// });

// $("button").on("click", function (event) {
//   var key = event.target.id;
//   console.log(key);
// });

$(document).on("keydown", function (event) {
  // console.log($("h2").text());
  if (!ok) {
    ok = true;
    nextSequence();
    $("h2").text("level " + level);
    if (ok1 == false) {
      $("button").on("click", function (event) {
        ok1 = true;

        var key = event.target.id;

        console.log(key, gamePattern[current_pressed - 1]);
        if (key === gamePattern[current_pressed - 1]) {
          var audio = new Audio(key + ".mp3");
          audio.play();
          if (current_pressed === level) {
            nextSequence();
            level++;
            $("h2").text("level " + level);
            current_pressed = 1;
          } else {
            current_pressed++;
          }
        } else {
          var audio = new Audio("Wrong Clakson Sound Effect.mp3");
          audio.play();
          $("h2").text("Game Over");
          setTimeout(function () {
            $("h2").text("Press any key to start the game");
            level = 1;
            current_pressed = 1;
            ok = false;
            gamePattern = [];
          }, 2000);
        }
      });
    }
  }
});
