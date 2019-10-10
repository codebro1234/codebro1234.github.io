// State Variable
// Abrar Zaher
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mode = 0;
let backgroundImage;

let mainPlayer;

let mainCharacterSprites;

let directions = {
  down: 0,
  up: 1,
  right: 2,
  left: 3
};

let currentDirections = directions.down;

function preload() {
  mainCharacterSprites = [loadImage("assets/backSprite.png"), loadImage("assets/frontSprite.png"), loadImage("assets/rightSprite.png"), loadImage("assets/leftSprite.png")]; 
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
  else if () {

  }
}

class Dudes {
  constructor(theName, spriteArray, x, y) {
    this.name = theName;
    
    this.sprite = spriteArray;

    this.x = x;
    this.y = y;
  }
  
  display() {
    image(this.sprite[currentDirections], this.x, this.y, 100, 100);
  }
  
  move() {
    if (currentDirections === 0) {
      
    }
    else if (currentDirections === 1) {

    }
    else if (currentDirections === 2) {
      
    }
    else if (currentDirections === 3) {
      
    }    
  }
} 

function walkAround() {
  background(backgroundImage);
  
  rect(3 * (width/4), height * 0.05, (width/4) * 0.9, height * 0.9); 
  rect(3 * (width/4) + (((width/4) * 0.9) * 0.1), height * 0.05, (width/4) * 0.9, (height * 0.9)/4); 
  rect(3 * (width/4), height * 0.05, (width/4) * 0.9, height * 0.9); 
  rect(3 * (width/4), height * 0.05, (width/4) * 0.9, height * 0.9); 
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