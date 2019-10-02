// State Variable
// Abrar Zaher
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let playerSprite;

class attacks {
  constructor(attackName, damage, accuracy, flexPotential) {
    
  }
}

class characters {
  constructor(theName, theSprite, otherSprite, attack1, attack2, x, y) {
    this.name = theName;

    this.sprite = theSprite;
    this.vsSprite = otherSprite;

    this.attaccs = [attack1, attack2] 

    this.x = x;
    this.y = y;
  }

  display(x, y) {
    Image(playerSprite, x, y, 100, 100);
  }

  attack
}

let mainPlayer = new characters("Bro", playerSprite, width/2, height/2);

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