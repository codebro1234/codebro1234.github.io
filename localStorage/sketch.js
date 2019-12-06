// Local Storage
// Abar
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let numberofClicks = 0;
let highScore;

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (getItem("high score") !== null) {
    highScore = getItem("high score");
  }
  else {
    highScore = 0;
  }
}

function draw() {
  background(220);

  textSize(100);
  fill(0);
  text(numberofClicks, 50, 100);

  fill(0, 255, 150);
  text(highScore, 50, 300);
}

function mousePressed() {
  numberofClicks++;
  if (numberofClicks > highScore) {
    highScore = numberofClicks;

    storeItem("high score", highScore);
  }

  fill(0);
  circle(random(0, width), random(0, height), 5);
}