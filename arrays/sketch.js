// Arrays Demo
// Abar
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].y += shapes[i].dy;

    fill(shapes[i].color);
    ellipse(shapes[i].x, shapes[i].y, shapes[i].radius * 2, shapes[i].radius * 2);
  }
}

function mousePressed() {
  let someShape = {
    x: mouseX,
    y: mouseY,
    radius: random(10, 50),
    color: color((random(255)), (random(255)), (random(255)), (random(255))),
    dy: random(1, 20)
  } ;

  shapes.push(someShape);
}