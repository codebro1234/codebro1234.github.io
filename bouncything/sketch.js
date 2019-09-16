// Image Demo
// Abar
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let radius = 100;
let dx = 10;
let dy = 10;
let mode = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  x = width/2;
  y = height/2;
}

function draw() {
  background(255);
  fill(0);

  x += dx;
  y += dy;

  if (mode === 1) {
    if (x > width - radius/2 || x < 0 + radius/2) {
      dx *= -1;
    }
    if (y > height - radius/2 || y < 0 + radius/2) {
      dy *= -1;
    }

    circle(x, y, radius);
  }
  else if (mode === 2) {
    if (x > width || x < 0) {
      dx *= -1;
    }
    if (y > height || y < 0) {
      dy *= -1;
    }

    rectangle(x, y, radius, radius);
  }
}

function windowResized() {
  setup();
}