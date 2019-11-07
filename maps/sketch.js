// Grid-Based Game
// Abrar Zaher
// 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;

let cols;
let rows;

let mainCharacterSprites;

let movingUp = false;
let movingDown = false;
let movingRight = false;
let movingLeft = false;

let groundUnit = {
  width: 0,
  height: 0
};

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

  cols = 100;
  rows = 100;

  groundUnit.width = round(width/cols);
  groundUnit.height = round(height/rows);

  grid = create2DArray(cols, rows);

  mainPlayer = new Dudes("Bro", mainCharacterSprites, width/2 + groundUnit.width/2, height/2 + 3);
}

function draw() {
  background(220);
  
  showGrid(grid);

  //mainPlayer.display();
  //mainPlayer.move();
}

class Dudes {
  constructor(theName, spriteArray, x, y) {
    this.name = theName;
    
    this.sprite = spriteArray;

    this.x = x;
    this.y = y;
  }
  
  display() {
    image(this.sprite[currentDirections], this.x, this.y, groundUnit.width, groundUnit.width);
  }
  
  move() {
    if (movingDown) {
      this.y += groundUnit.height;
      movingDown = false;
    }
    else if (movingUp) {
      this.y -= groundUnit.height;
      movingUp = false;
    }   
    else if (movingRight) {
      this.x += groundUnit.width;
      movingRight = false;
    }
    else if (movingLeft) {
      this.x -= groundUnit.width;
      movingLeft = false;
    }    
  }
} 

function showGrid(someGrid) {
  for (let i = 0; i < someGrid[0].length; i++) {
    for (let j = 0; j < someGrid[0].length; j++) {
      fill(someGrid[i][j] * 255); 

      rect(i * groundUnit.width, j * groundUnit.height, groundUnit.width, groundUnit.height); 
    }
  }
}

function create2DArray(cols, rows) {
  noiseSeed(random(100));

  let newArray = [];
  let xAxis = 0;
  
  for (let i = 0; i < cols; i++) {
    newArray.push([]);
    let yAxis = 0;

    for (let j = 0; j < rows; j++) {
      newArray[i].push(noise(xAxis, yAxis));

      yAxis += 0.05;
    }
    xAxis += 0.05;
  }
  return newArray;
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    if (currentDirections === directions.down) {
      movingDown = true;
    }
    currentDirections = directions.down;
  } 
  else if (keyCode === UP_ARROW) {
    if (currentDirections === directions.up) {
      movingUp = true;
    }
    currentDirections = directions.up;
  }
  else if (keyCode === RIGHT_ARROW) {
    if (currentDirections === directions.right) {
      movingRight = true;
    }
    currentDirections = directions.right;
  }
  else if (keyCode === LEFT_ARROW) {
    if (currentDirections === directions.left) {
      movingLeft = true;
    }
    currentDirections = directions.left;
  }
}

function keyTyped() {
  if (key === ' ') {
    grid = create2DArray(cols, rows);
  }
}