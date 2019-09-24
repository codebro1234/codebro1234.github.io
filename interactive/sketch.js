// Interactive Scene (Part of Major Project)
// Abrar Zaher
// 25/09/19
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//backgrounds
let introBg;

//characters
let playerName;

let prof1;
let prof2;
let prof3;
let prof4;

//dialog
let IntroDialog = ["Welcome to the monde de Pokebro!!!", "I am Songru Tom, the world's leading researcher in the field of flexology.", "Oh, I'm sorry but what was your name again???", "Ah yes, hello " + playerName + "!", "Wait... are you a boy or a girl???", "Oh right, my bad, anyways, your journey to becoming the greatest flexer of the century begins now!"];

//buttons
let aPressed = false;
let bPressed = false;

function preload() {
  IntroBg = loadImage("assets/introbackground.PNG");
  prof = [loadImage("assets/professor1.PNG"), loadImage("assets/professor1.PNG"), loadImage("assets/professor2.PNG"), loadImage("assets/professor1.PNG"), loadImage("assets/professor3.PNG", loadImage("assets/professor4.PNG"))];
}

function setup() {
  createCanvas(3 * (windowWidth/5), (3 * (windowWidth/5))/1.6);
  background(0);
  noLoop();
}

function draw() {
  gameIntro();  
  //startGame();
}


function gameIntro() {
  let textNum = 4;

  background(IntroBg);
  image(prof[textNum], width/3, height/6, width/4, 5 * (height/8))
  //fadeImageIn(prof, width/3, height/6, width/4, 5 * (height/8));

  textBox(IntroDialog[textNum]); 
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