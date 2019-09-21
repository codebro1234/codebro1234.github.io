// Image Demo
// Abar
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bg;
let prof;
let textting = "Welcome to the monde de Pokebro!!!"

function preload() {
  bg = loadImage("assets/introbackground.PNG");
  prof = loadImage("assets/prof1.PNG");
}

function setup() {
  createCanvas(3 * (windowWidth/5), (3 * (windowWidth/5))/1.6);
  background(0);
  noLoop();
}

function draw() {
  intro();  
}

function intro() {
  background(bg);
  image(prof, width/3, height/8, width/3, 5 * (height/8));
  textBox(textting); 
}

function textBox(theText) {
  let newText = "";

  fill(255);
  rect(width * 0.01, 3 * (height/4) - height * 0.01, width - width * 0.02, height/4, 20);
  fill(0);
  textSize(20);

  for (let i = 0; i < theText.length; i++) {
    newText += theText[i];
    text(newText, width * 0.05, 3 * (height/4) + height * 0.03, width - width * 0.05, height/4);
  }
}

