// State Variable
// Abrar Zaher
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Dudes {
  constructor(theName, sprite1, sprite2, sprite3, sprite4, x, y) {
    this.name = theName;

    this.sprite = [sprite1, sprite2, sprite3, sprite4];

    this.x = x;
    this.y = y;
  }

  display() {
    Image(this.sprite[currentDirections], this.x, this.y, 100, 100);
  }

  move() {
    
  }
}

let mainPlayer = new characters("Bro",  width/2, height/2);

let Directions = {
  down: 0,
  up: 1,
  right: 2,
  left: 3
} 

let currentDirections = Directions.down;

function preload() {
  playerSprite = loadImage("assets/")
}

function setup() {
  createCanvas(3 * (windowWidth/5), (3 * (windowWidth/5))/1.6);
  background(220);
}

function draw() {
 rect(3 * (width/4), height * 0.05, (width/4) * 0.9, height * 0.9); 
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    currentDirections = Directions.down;
  } 
  else if (keyCode === UP_ARROW) {
    currentDirections = Directions.up;
  }
  else if (keyCode === RIGHT_ARROW) {
    currentDirections = Directions.right;
  }
  else if (keyCode === DOWN_ARROW) {
    currentDirections = Directions.left;
  }
}