// State Variable
// Abrar Zaher
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mode = 0;
let backgroundImage;

let unit;

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

  unit = width/60;  
  mainPlayer = new Dudes("Bro", mainCharacterSprites, width/2, height/2);
}

function draw() {
  background(220);

  if (menuOn) {  // no change this stuff man
    displayMenu();
  }
  else {
    walkAround();
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
    image(this.sprite[currentDirections], this.x, this.y, unit * 2, unit * 2);
  }
  
  move() {
    if (movingDown) {
      if (currentDirections === directions.down) {
        this.y += unit;
        movingDown = false;
      }
    }
    else if (movingUp) {
      if (currentDirections === directions.up) {
        this.y -= unit;
        movingUp = false;
      }
    }
    else if (movingRight) {
      if (currentDirections === directions.right) {
        this.x += unit;
        movingRight = false;
      }
    }
    else if (movingLeft) {
      if (currentDirections === directions.left) {
        this.x -= unit;
        movingLeft = false;
      }
    }    
  }
} 

function walkAround() {
  mainPlayer.display();
  mainPlayer.move();
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

// function keyReleased() {
//   if (keyCode === DOWN_ARROW) {
//     movingDown = false;
//   } 
//   else if (keyCode === UP_ARROW) {
//     movingUp = false;
//   }
//   else if (keyCode === RIGHT_ARROW) {
//     movingRight = false;
//   }
//   else if (keyCode === DOWN_ARROW) {
//     movingLeft = false;
//   }
// }