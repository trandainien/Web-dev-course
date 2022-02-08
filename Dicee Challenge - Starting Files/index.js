function randomDice() {
  document.querySelector(".winner1-popup").style.display = "none";
  document.querySelector(".winner2-popup").style.display = "none";
  document.querySelector(".draw-popup").style.display = "none";
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var goToImg1 = document.querySelector(".img1");
  var goToImg2 = document.querySelector(".img2");
  goToImg1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
  goToImg2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".winner1-popup").style.display = "block";
    document.querySelector("h1").textContent = "Player 1 is the winner";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".winner2-popup").style.display = "block";
    document.querySelector("h1").textContent = "Player 2 is the winner";
  } else {
    document.querySelector(".draw-popup").style.display = "block";
    document.querySelector("h1").textContent = "You both are the winner";
  }
}
