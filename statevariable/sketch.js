// State Variable
// Abrar Zaher
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let playerSprite;

class dudes {
  constructor(theName, theSprite) {
    this.name = theName;
    this.sprite = theSprite;
  }

  display() {
    Image()
  }
}

let mainPlayer = new dudes("Bro", playerSprite);

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