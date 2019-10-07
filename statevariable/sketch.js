// State Variable
// Abrar Zaher
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mode = 0;
let backgroundImage;

let mainPlayer;

let directions = {
  down: 0,
  up: 1,
  right: 2,
  left: 3
};

let currentDirections = directions.down;

function preload() {
  playerSprite = loadImage("assets/")
  backgroundImage = loadImage("assets/")
}

function setup() {
  createCanvas(3 * (windowWidth/5), (3 * (windowWidth/5))/1.6);
  background(220);

  mainPlayer = new Dudes("Bro",  , width/2, height/2);
}

function draw() {
  if (mode === 0) {
    walkAround();
  }

 //rect(3 * (width/4), height * 0.05, (width/4) * 0.9, height * 0.9); 
}

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
    if () {
      
    }
  }
} 

function walkAround() {
  background(backgroundImage);

  
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    currentDirections = directions.down;
  } 
  else if (keyCode === UP_ARROW) {
    currentDirections = directions.up;
  }
  else if (keyCode === RIGHT_ARROW) {
    currentDirections = directions.right;
  }
  else if (keyCode === DOWN_ARROW) {
    currentDirections = directions.left;
  }
}