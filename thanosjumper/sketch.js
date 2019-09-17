// Image Demo
// Abar
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let thanos;
let xpos;
let ypos;
let groundlvl;

function preload() {
  thanos = loadImage("assets/robloxthanos.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  xpos = width - 400;
  ypos = height - 200;

  background(255);
  imageMode(CENTER);
  image(thanos, xpos, ypos, 400, 400);

  if (keyIsPressed) {
    if (key === " ") {
      jump();
    }
  }
}


function jump() {
  let dy = -200;
  groundlvl = ypos;
  ypos -= 10;
  
  background(255);
  image(thanos, xpos, ypos, 400, 400);

  while (ypos < groundlvl) {
    ypos -= dy; 
    dy += 10;

    background(255);
    image(thanos, xpos, ypos, 400, 400);
  }

  ypos = groundlvl;
}