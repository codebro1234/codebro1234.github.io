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

let movingUp = false;
let movingDown = false;
let movingRight = false;
let movingLeft = false;

let directions = {
  down: 0,
  up: 1,
  right: 2,
  left: 3
};

let currentDirections = directions.down;

function preload() {
  mainCharacterSprites = [loadImage("assets/frontSprite.png"), loadImage("assets/backSprite.png"), loadImage("assets/rightSprite.png"), loadImage("assets/leftSprite.png")]; 
}

function setup() {
  createCanvas(3 * (windowWidth/5), (3 * (windowWidth/5))/1.6);
  imageMode(CENTER);
  
  mainPlayer = new Dudes("Bro", mainCharacterSprites, width/2, height/2);
}

function draw() {
  walkAround();
  console.log(currentDirections);
}

class Dudes {
  constructor(theName, spriteArray, x, y) {
    this.name = theName;
    
    this.sprite = spriteArray;

    this.x = x;
    this.y = y;
  }
  
  display() {
    image(this.sprite[currentDirections], this.x, this.y, 30, 30);
  }
  
  // move() {
  //   if (movingDown) {
      
  //   }
  //   else if (movingUp) {

  //   }
  //   else if (movingRight) {
      
  //   }
  //   else if (movingLeft) {
      
  //   }    
  // }
} 

function walkAround() {
  background(220);

  switch(mode) {
    case 0:
      mainPlayer.display();
      //mainPlayer.move();
      break;
    case 1:
      displayMenu();
      break;
  }
}

function displayMenu() {
  let menuHeight = height * 0.9;
  let menuWidth = (width/4) * 0.9;
  let menuXPos = 3 * (width/4);
  let menuYpos = height * 0.05;

  rect(menuXPos, menuYpos, menuWidth, menuHeight);  
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    currentDirections = directions.down;
    movingDown = true;
  } 
  else if (keyCode === UP_ARROW) {
    currentDirections = directions.up;
    movingUp = true;
  }
  else if (keyCode === RIGHT_ARROW) {
    currentDirections = directions.right;
    movingRight = true;
  }
  else if (keyCode === LEFT_ARROW) {
    currentDirections = directions.left;
    movingLeft = true;
  }
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    movingDown = false;
  } 
  else if (keyCode === UP_ARROW) {
    movingUp = false;
  }
  else if (keyCode === RIGHT_ARROW) {
    movingRight = false;
  }
  else if (keyCode === DOWN_ARROW) {
    movingLeft = false;
  }
}