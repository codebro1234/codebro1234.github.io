// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let redamount = 0;
let redchange = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
}

function draw() {
  fill(redamount, 0, 210);
  ellipse(mouseX, mouseY, 100, 100);

  redamount += redchange;

  if (redamount >= 255) {
    redchange *= -1;
  }

  if (redamount <= 0) {
    redchange *= -1;
  }

  console.log(redamount);
}