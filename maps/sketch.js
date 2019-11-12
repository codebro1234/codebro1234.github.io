// Grid-Based Assignment
// Abrar Zaher
// 
// Generates a 2D array with perlin values to generate islands
//
// Extra for Experts:
// - Added a zoom and move around feature
// - Added a minimap showing the position on the map
// - Added foolproofing for the edges

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

  // these values are for the frame of view
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
  // shows the map based of frame of view rendering only the grid places that are actually shown

  for (let i = xStartingPoint, xPos = 0; i < xStartingPoint + floor(cols/zoom); i++, xPos++) {
    for (let j = yStartingPoint, yPos = 0; j < yStartingPoint + floor(rows/zoom); j++, yPos++) {
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
  //creates a mini map in the corner to show your viewing position

  let miniMap = {
    width: windowWidth/8,
    height: windowHeight/8,
    cellWidth: (windowWidth/8)/cols,
    cellHeight: (windowHeight/8)/rows
  };

  //white border around mini map to seperate from main map
  stroke(255);
  rect(0, 0, miniMap.width, miniMap.height);
  noStroke();

  //drawing the grid pieces of the mini map, skips by 4 instead of 1 to render less of the grid in order to prevent lag
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

  //drawing a white rectangle outlining the area you are viewing
  noFill();
  stroke(255);
  strokeWeight(2);
  rect(xStartingPoint * miniMap.cellWidth, yStartingPoint * miniMap.cellHeight, miniMap.width/zoom, miniMap.height/zoom);
  noStroke();
}

function create2DArray(cols, rows) {
  //creates a 2D array with perlin noise value

  noiseSeed(random(100));  //random noise seed value to have a different map whenever reset
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
  //controls for moving the viewing frame around

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
    setup();  //resets viewing frame and generates new map
  }
  else if (key === "w") {
    zoom += 0.5;  //zoom in
  }
  else if (key === "s") {
    //zooms out, only if zoomed in the first place
    if (zoom > 1) {
      //foolproofing for when zooming out at the edges
      if (xStartingPoint + floor(cols/(zoom - 0.5)) > grid.length) {
        xStartingPoint = grid.length - floor(cols/(zoom - 0.5));
      }
      if (yStartingPoint + floor(rows/(zoom - 0.5)) > grid.length) {
        yStartingPoint = grid.length - floor(rows/(zoom - 0.5));
      }
      zoom -= 0.5;
    }
  }
}

