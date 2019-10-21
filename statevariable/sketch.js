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

let checkPokebros;
let checkPlayerCard;
let checkBag;
let exit;

let pokeballIcon;
let bagIcon;
let cardIcon;
let exitIcon;

let menuOptions;

let cursor = 0;

let menuHeight;
let menuWidth;
let menuXPos;
let menuYPos;
let selectionYPos;

let directions = {
  down: 0,
  up: 1,
  right: 2,
  left: 3
};

let currentDirections = directions.down;

function preload() {
  mainCharacterSprites = [loadImage("assets/frontSprite.png"), loadImage("assets/backSprite.png"), loadImage("assets/rightSprite.png"), loadImage("assets/leftSprite.png")]; 
  pokeballIcon = loadImage("assets/pokeball.png");
  bagIcon = loadImage("assets/bag.png");
  cardIcon = loadImage("assets/card.png");
  exitIcon = loadImage("assets/exit.png");
}

function setup() {
  createCanvas(3 * (windowWidth/5), (3 * (windowWidth/5))/1.6);
  imageMode(CENTER);

  unit = width/60;

  menuHeight = height * 0.9;
  menuWidth = (width/4);
  menuXPos = (3 * (width/4)) - 30;
  menuYPos = height * 0.05;
  selectionYPos = menuYPos + 60;  

  mainPlayer = new Dudes("Bro", mainCharacterSprites, width/2, height/2);
  
  checkPokebros = new MenuOptions("Pokebros", pokeballIcon, menuXPos + 70, selectionYPos, menuWidth, menuHeight/4);
  checkBag = new MenuOptions("Bag", bagIcon, menuXPos + 70, selectionYPos + menuHeight/4, menuWidth, menuHeight/4);
  checkPlayerCard = new MenuOptions("Player Card", cardIcon, menuXPos + 70, selectionYPos + menuHeight/2, menuWidth, menuHeight/4);
  exit = new MenuOptions("Exit", exitIcon, menuXPos + 70, selectionYPos + 3 * (menuHeight/4), menuWidth, menuHeight/4);

  menuOptions = [checkPokebros, checkBag, checkPlayerCard, exit];
}

function draw() {
  if (mode === 0) {  
    walkAround();
  }
  else if (mode === 1) {
    displayMenu();
  }
  else if (mode === 2) {
    displayPokebros();
  }
  else if (mode === 3) {
    displayBag();
  }
  else if (mode === 4) {
    displayCard();
  }
  else if (mode === 5) {
    mode = 0;
  }

  if (mode < 0) {
    mode = 0;
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
      this.y += unit;
      movingDown = false;
    }
    else if (movingUp) {
      this.y -= unit;
      movingUp = false;
    }   
    else if (movingRight) {
      this.x += unit;
      movingRight = false;
    }
    else if (movingLeft) {
      this.x -= unit;
      movingLeft = false;
    }    
  }
} 

class MenuOptions {
  constructor(someTitle, somePicture, xPos, yPos, widthVal, heightVal) {
    this.title = someTitle;
    this.icon = somePicture;

    this.x = xPos;
    this.y = yPos;
    
    this.width = widthVal;
    this.height = heightVal;
  }

  display() {
    textSize(20);
    noStroke();
    text(this.title, this.x, this.y, this.width, this.height);
    filter(GRAY);
    image(this.icon, this.x - 30, this.y + 5, 30, 30);
  }

  highlight() {
    stroke(255, 0, 0);
    rect(this.x - 60, this.y - 20, this.width * 0.9, this.height/2, 10);
    textSize(20);
    noStroke();
    text(this.title, this.x, this.y, this.width, this.height);
    image(this.icon, this.x - 30, this.y + 5, 30, 30);
  }
}

function walkAround() {
  background(190);

  mainPlayer.display();
  mainPlayer.move();
}

function displayMenu() {
  background(190);

  stroke(210);
  rect(menuXPos, menuYPos, menuWidth, menuHeight, 10);
  stroke(0, 200, 255); //undo filter dawg
  strokeWeight(5);
  rect(menuXPos + 2, menuYPos + 2, menuWidth - 4, menuHeight - 4, 10);
  
  for (let i = 0; i < menuOptions.length; i++) {
    menuOptions[i].display();
  }
  
  if (cursor > 3) {
    cursor = 3;
  }
  else if (cursor < 0) {
    cursor = 0;
  }
  
  menuOptions[cursor].highlight();
}

function displayPokebros() {
  background(0, 190, 255);

  for (let x = width * 0.07; x < width * 0.7; x += ((width/2) * 0.9)) {
    for (let y = height * 0.075; y < height * 0.8; y += ((height/3) * 0.9)) {
      rect(x, y, (width/2) * 0.85, (height/3) * 0.75, 10);
    }
  } 
}

function displayBag() {
  console.log("bag stuff");
}

function displayCard() {
  console.log("card stuff");
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    if (mode === 0) {
      if (currentDirections === directions.down) {
        movingDown = true;
      }
      currentDirections = directions.down;
    }
    else {
      cursor++;
    }
  } 
  else if (keyCode === UP_ARROW) {
    if (mode === 0) {
      if (currentDirections === directions.up) {
        movingUp = true;
      }
      currentDirections = directions.up;
    }
    else {
      cursor--;
    }
  }
  else if (keyCode === RIGHT_ARROW) {
    if (mode === 0) {
      if (currentDirections === directions.right) {
        movingRight = true;
      }
      currentDirections = directions.right;
    }
  }
  else if (keyCode === LEFT_ARROW) {
    if (mode === 0) {
      if (currentDirections === directions.left) {
        movingLeft = true;
      }
      currentDirections = directions.left;
    }
  }
}

function keyTyped() {
  if (key === " ") {
    if (mode === 0) {
      mode++;
    }
    else if (mode === 1) {
      mode = cursor + 2;
    }
  }
  else if (key === "b") {
    if (mode > 1) {
      mode = 1;
    }
    else {
      mode = 0;
    }
  }
}