// Line Art Demo
// Abar
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = create2DArray(20, 20);
}

function draw() {
  background(255);

  showGrid(grid);
}

function showGrid(theGrid) {
  let cellSize = width/theGrid[0]/length;

  for (let i = 0; i < theGrid[0].length; i++) {
    for (let j = 0; j < theGrid[0].length; j++) {
      fill(theGrid[i][j] * 255);

      rect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }
}

function create2DArray(cols, rows) {
  let someArray = [];

  for (let i = 0; i < cols; i++) {
    someArray.push([]);
    for (let j = 0; j < rows; j++) {
      if (random(100) < 50) {
        someArray[i].push(1);
      }
      else {
        someArray[i].push(0);
      }
    }
  }

  return someArray;
}