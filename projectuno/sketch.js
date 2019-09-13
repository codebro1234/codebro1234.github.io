// Image Demo
// Abar
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let thanos;
let imgWidth = 50;
let imgHeight = 50;

function preload() {
  thanos = loadImage("assets/robloxthanos.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  imageMode(CENTER);
  image(thanos, mouseX, mouseY, imgWidth, imgHeight);

  if (keyIsPressed) {
    if (keyCode === UP_ARROW) {
      imgHeight += 5;
      imgWidth += 5;
    }
    else if (keyCode === DOWN_ARROW) {
      imgWidth -= 5;
      imgHeight -= 5;
    }
  }
}

// function keyPressed() {
//   if (keyCode === "UP_ARROW") {
//     imgHeight++;
//     imgWidth++;
//   }
//   else if (keyCode === "DOWN_ARROW") {
//     imgWidth--;
//     imgHeight--;
//   }
// }