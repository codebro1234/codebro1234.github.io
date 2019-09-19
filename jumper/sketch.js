// Image Demo
// Abar
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let object;
let groundlvl;
let xpos;
let ypos;
let sidelength = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  line(0, groundlvl, width, groundlvl);
}

function draw() {
  groundlvl = windowHeight - 150;
  ypos = groundlvl - sidelength;
  xpos = 200
  object = square(xpos, ypos, sidelength);

  if (keyIsPressed) {
    if (key === " ") {
      ypos += 100
      
    }
  }
}

