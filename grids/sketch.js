// Line Art Demo
// Abar
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;

function setup() {
  createCanvas(500, 500);
  grid = create2DArray(30, 30);
}

function draw() {
  background(220);
  
  showGrid(grid, 30, 30);
}

function showGrid(someGrid, cols, rows) {
  for (let j = 0; j < someGrid[0].length; j++) {
    for (let i = 0; i < someGrid[0].length; i++) {
      fill((someGrid[i][j]) * 255);
      rect((width/cols) * i, (height/cols) * j, width/cols, height/rows); 
    }
  }
}

function create2DArray(cols, rows) {
  let someArray = [];
  
  for (let i = 0; i < cols; i++) {
    someArray.push([]);
    for (let j = 0; j < rows; j++) {
      if (random(100) < 50) {
        someArray[i].push(0);
      } else {
        someArray[i].push(1);
      }
    }
  }
  
  return someArray;
}

function mousePressed() {
  let cellSize = width/30;
  
  let xCoord = floor(mouseX/cellSize);
  let yCoord = floor(mouseY/cellSize);
  
  grid[xCoord][yCoord] = 0;
}

function keyTyped() {
  if (key === 'r') {
    grid = create2DArray(30, 30);
  } else if (key === 'c') {
    for (let j = 0; j < grid[0].length; j++) {
      for (let i = 0; i < grid[0].length; i++) {
        grid[i][j] = 1;
         
      }
    }
  }
}