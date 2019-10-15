// Line Art Demo
// Abar
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cannonX;
let cannonY;
let cannonWidth;
let cannonLength;
let cannonAngle;
let bullets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  cannonX = 75;
  cannonY = height - 150;
  cannonWidth = 50;
  cannonLength = 125;
  cannonAngle = 0;
}

function draw() {
  background(220);
  
  updateBullets();
  displayCannon();
}

function displayCannon() {
  push();
  translate(cannonX, cannonY);
  cannonAngle = atan2(mouseY - cannonY, mouseX - cannonX);
  rotate(cannonAngle);
  rect(0, -cannonWidth/2, cannonLength, cannonWidth);
  circle(0, 0, cannonWidth);
  pop();
}

function mouseClicked() {
  fire();
}

function fire() {
  let thisBullet = {
    x: cannonX,
    y: cannonY,
    radius: cannonWidth,
    angle: cannonAngle,
    speed: 15
  };
  bullets.push(thisBullet);
}

function updateBullets() {
  for (let thisBullet of bullets) {
    thisBullet.x += thisBullet.speed * cos(thisBullet.angle);
    thisBullet.y += thisBullet.speed * sin(thisBullet.angle);
    circle(thisBullet.x, thisBullet.y, thisBullet.radius);
  }
}