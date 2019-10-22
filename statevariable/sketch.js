// State Variable
// Abrar Zaher
// 21/10/19
//
// State variables were used to signify different states of the menu selection which will be used in the final pr0ject
//
// Extra for Experts:
// - Took objects further and used classes
// - Used multiple arrays to increase efficiency
// - Played with the HTML and CSS to format the screen

let mode = 0; //different modes for different stages of the menu

let backgroundImage;

let unit; // one "block", which is how the ground will be sized (saving that for grids assignment)

let mainPlayer;

let mainCharacterSprites;

let obamaPic;
let trumpPic;

// booleans used to move the character around
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

// dimensions of the menu
let menuHeight;
let menuWidth;
let menuXPos;
let menuYPos;
let selectionYPos;

// direction enumeration
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
  obamaPic = loadImage("assets/obama.png");
  trumpPic = loadImage("assets/trump.PNG");
}

function setup() {
  createCanvas(3 * (windowWidth/5), (3 * (windowWidth/5))/1.6);
  imageMode(CENTER);

  unit = width/60;

  // defining here as the height and width were required
  menuHeight = height * 0.9;
  menuWidth = (width/4);
  menuXPos = (3 * (width/4)) - 30;
  menuYPos = height * 0.05;
  selectionYPos = menuYPos + 60;  

  // defining the the variables for the classes
  mainPlayer = new Dudes("Bro", mainCharacterSprites, width/2, height/2);
  
  checkPokebros = new MenuOptions("Pokebros", pokeballIcon, menuXPos + 70, selectionYPos, menuWidth, menuHeight/4);
  checkBag = new MenuOptions("Bag", bagIcon, menuXPos + 70, selectionYPos + menuHeight/4, menuWidth, menuHeight/4);
  checkPlayerCard = new MenuOptions("Player Card", cardIcon, menuXPos + 70, selectionYPos + menuHeight/2, menuWidth, menuHeight/4);
  exit = new MenuOptions("Exit", exitIcon, menuXPos + 70, selectionYPos + 3 * (menuHeight/4), menuWidth, menuHeight/4);

  menuOptions = [checkPokebros, checkBag, checkPlayerCard, exit];
}

function draw() {
  //checks state to display proper page

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
    mode = 0; //exit button on menu
  }

  if (mode < 0) {
    mode = 0; //preventing
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
    image(this.icon, this.x - 30, this.y + 5, 30, 30);
  }

  highlight() {
    stroke(255, 0, 0);
    fill(255);
    rect(this.x - 60, this.y - 20, this.width * 0.9, this.height/2, 10);
    textSize(20);
    noStroke();
    fill(0);
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
  stroke(0, 200, 255); 
  strokeWeight(5);
  fill(255);
  rect(menuXPos + 2, menuYPos + 2, menuWidth - 4, menuHeight - 4, 10);
  
  fill(0);
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
  background(147, 176, 204);

  for (let x = width * 0.07; x < width * 0.7; x += ((width/2) * 0.9)) {
    for (let y = height * 0.075; y < height * 0.8; y += ((height/3) * 0.9)) {
      fill(70, 108, 145);
      rect(x, y, (width/2) * 0.85, (height/3) * 0.75, 10);
    }
  }
  showStats();
}

function showStats() {
  image(obamaPic, width * 0.15, height * 0.2, 100, 100);
  textSize(30);
  fill(0);
  text("Brobama", width * 0.225, height * 0.15, 100, 30);
  textSize(10);
  text("HP", width * 0.225, height * 0.225, 30, 30);
  fill(100);
  rect(width * 0.25, height * 0.225, 150, 10);
  fill(255, 0, 0);
  rect(width * 0.25, height * 0.225, 150 * 0.16, 10);
  fill(0);
  textSize(15)
  text("69/420", width * 0.3, height * 0.255, 50, 40);
}

function displayBag() {
  background(147, 176, 204);

  image(bagIcon, width/4, height/3, width/3, height/2);
  fill(92, 247, 165);
  rect(width * 0.45, height/12, width/2, height * 0.6, 10);
  fill(255);
  rect(width * 0.465, height * 0.1, width * 0.47, height * 0.565, 10);

  textBox("Your bag is empty.");
}

function displayCard() {
  background(147, 176, 204);

  fill(210);
  rect(width * 0.05, height * 0.05, width * 0.9, height * 0.9, 10);
  fill(255, 125, 162);
  rect(width * 0.06, height * 0.06, width * 0.88, height * 0.88, 10);

  fill(0);
  textSize(50);
  text("Trainer Card", width * 0.15, height * 0.2, width * 0.6, height * 0.2);

  textSize(20);
  text("Name: " + mainPlayer.name, width * 0.2, height * 0.4, width * 0.6, height * 0.2);
  text("Money: $0", width * 0.2, height * 0.5, width * 0.6, height * 0.2); // either a variable or element in the Dudes class will be added
  text("Time Played: " + String(round(millis()/1000, 2)) + " s", width * 0.2, height * 0.6, height * 0.6, height * 0.2);
  text("Pokemons: 0", width * 0.2, height * 0.7, width * 0.6, height * 0.2); // will array will be added as an element in Dudes class for the pokemons

  image(trumpPic, width * 0.66, height * 0.55, 175, 300);
}

function textBox(theText) {
  fill(255);
  rect(width * 0.01, 3 * (height/4) - height * 0.01, width - width * 0.02, height/4, 20);
  
  fill(0);
  textSize(20);
  text(theText, width * 0.05, 3 * (height/4) + height * 0.03, width - width * 0.05, height/4)
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