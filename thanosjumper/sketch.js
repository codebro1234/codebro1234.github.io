// Image Demo
// Abar
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let thanos;

function preload() {
  thanos = loadImage("assets/robloxthanos.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  imageMode(CENTER);
  image(thanos, 100, height - 100, 200, 200);
}