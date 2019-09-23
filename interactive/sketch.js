// Image Demo
// Abar
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//backgrounds
let introBg;

//characters
let prof1;
let prof2;
let prof3;
let prof4;

//dialog
let textting = "Hello boss, this is random text."
let moreText = "yo this is more text";

//buttons
let aPressed = false;
let bPressed = false;

function preload() {
  IntroBg = loadImage("assets/introbackground.PNG");
  prof = loadImage("assets/professor3.PNG");
}

function setup() {
  createCanvas(3 * (windowWidth/5), (3 * (windowWidth/5))/1.6);
  background(0);
  //noLoop();
}

function draw() {
  gameIntro();  
}


function gameIntro() {
  background(IntroBg);
  image(prof, width/3, height/6, width/4, 5 * (height/8))
  //fadeImageIn(prof, width/3, height/6, width/4, 5 * (height/8));
  textBox(textting); 
  waitForAPress();
  textBox(moreText);
}

function textBox(theText) {
  fill(255);
  rect(width * 0.01, 3 * (height/4) - height * 0.01, width - width * 0.02, height/4, 20);
  
  fill(0);
  textSize(20);
  text(theText, width * 0.05, 3 * (height/4) + height * 0.03, width - width * 0.05, height/4)
}

function fadeImageIn(theImage, x, y, xl, yl) {
  for (let i = 0; i < 255; i += 5) {
    tint(255, 255, 255, [i]);
    image(theImage, x, y, xl, yl);
  }
}

function waitForAPress() {
  while (!aPressed) {
    if (keyIsPressed) {
      if (key === " ") {
        aPressed = true;
      }
    }

    console.log("jhgfj");
  }
  aPressed = false;
}

function waitForBPress() {
  while (!bPressed) {
    console.log("ujhyg");
  }
  bPressed = false;
}

function keyTyped() {
  if (key === " ") {
    aPressed = true;
  }
  else if (key === "b") {
    bPressed = false;
  }
}
