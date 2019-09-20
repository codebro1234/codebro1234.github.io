// Image Demo
// Abar
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(500, 400);
  background(220);
}

function draw() {
  intro();
}

function intro() {
  fill(201, 240, 233);
  strokeWeight(3);
  rect(5, 3 * (height/4) - 10, width - 10, height/4, 10);
}

