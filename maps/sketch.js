// Grid-Based Game
// Abrar Zaher
// 
// Generates a 2D array with perlin values to generate islands
//
// Extra for Experts:
// - Added a zoom and move around feature
// - Added a minimap showing the position on the map

let grid = [];

let xStartingPoint;
let yStartingPoint;
let zoom;

let cols;
let rows;

let groundUnit = {
  width: 0,
  height: 0
};

function setup() {
  createCanvas(windowWidth, windowHeight); 
  noStroke();

  xStartingPoint = 0;
  yStartingPoint = 0;
  zoom = 1;

  cols = 200;
  rows = 200;

  groundUnit.width = width/cols;
  groundUnit.height = height/rows;

  grid = create2DArray(cols, rows);
}

function draw() {
  background(220);
  
  showMap(grid);
  showMiniMap(grid);

  checkForViewingChanges();
}

function showMap(someGrid) {
  for (let i = xStartingPoint, xPos = 0; i < xStartingPoint + cols/zoom; i++, xPos++) {
    for (let j = yStartingPoint, yPos = 0; j < yStartingPoint + rows/zoom; j++, yPos++) {
      if (someGrid[i][j] < 0.25) {
        fill(255);
      } else if (someGrid[i][j] < 0.35) {
        fill(220);
      } else if (someGrid[i][j] < 0.5) {
        fill(0, 255, 0);
      } else {
        fill(0, 180, 255);
      }
      rect(xPos * groundUnit.width * zoom, yPos * groundUnit.height * zoom, groundUnit.width * zoom + 1, groundUnit.height * zoom + 1); 
    }
  }
}

function showMiniMap(someGrid) {
  let miniMap = {
    width: windowWidth/8,
    height: windowHeight/8,
    cellWidth: (windowWidth/8)/cols,
    cellHeight: (windowHeight/8)/rows
  };

  stroke(255);
  rect(0, 0, miniMap.width, miniMap.height);
  noStroke();

  for (let i = 0; i < cols; i += 4) {
    for (let j = 0; j < rows; j += 4) {
      if (someGrid[i][j] < 0.25) {
        fill(255);
      } else if (someGrid[i][j] < 0.35) {
        fill(220);
      } else if (someGrid[i][j] < 0.5) {
        fill(0, 255, 0);
      } else {
        fill(0, 170, 255);
      }

      rect(i * miniMap.cellWidth, j * miniMap.cellHeight, miniMap.cellWidth * 4 + 0.5, miniMap.cellHeight * 4 + 0.5);
    }
  }
  noFill();
  stroke(255);
  rect(xStartingPoint * miniMap.cellWidth, yStartingPoint * miniMap.cellHeight, miniMap.width/zoom, miniMap.height/zoom);
  noStroke();
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

function checkForViewingChanges() {
  if (zoom > 1) {
    if (keyIsDown(UP_ARROW)) {
      if (yStartingPoint > 0) {
        yStartingPoint--;
      }
    }
    if (keyIsDown(DOWN_ARROW)) {
      if (yStartingPoint < rows - rows/zoom) {
        yStartingPoint++;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      if (xStartingPoint < cols - cols/zoom) {
        xStartingPoint++;
      }
    }
    if (keyIsDown(LEFT_ARROW)) {
      if (xStartingPoint > 0) {
        xStartingPoint--;
      }
    }
  }
}

function keyTyped() {
  if (key === ' ') {
    setup();
  }
  else if (key === "w") {
    zoom += 0.5;
  }
  else if (key === "s") {
    if (zoom > 1) {
      xStartingPoint = 0;
      yStartingPoint = 0;
      zoom -= 0.5;
    }
  }
}

