// Image Manipulation
// Abar
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let thanos;
let newImage;

function preload() {
  thanos = loadImage("assets/robloxthanos.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  newImage = makeGrayScale(thanos);
}

function draw() {
  background(255);

  imageMode(CENTER);
  image(newImage, mouseX, mouseY);
}

function makeGrayScale(theimage) {
  let img = createImage(theImage.width, theImage.height);

  img.loadPixels();
  theimage.loadPixels();

  for (let x = 0; x < theimage.width; x++) {
    for (let y = 0; y < theimage.height; y++) {
      let p = theimage.get(x, y);

      img.set(x, y, color(255, 0, 0));
    }
  }
  img.updatePixels();
  return img;
}