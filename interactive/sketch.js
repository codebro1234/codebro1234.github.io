// Interactive Scene (Part of Major Project)
// Abrar Zaher
// 25/09/19
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//input box
let inputBox;

//states
let state = 0;
/*
  0 = intro;
  more to be added later
*/
let introTextNum = 0;

//backgrounds
let introBg;

//characters
let playerName;
let prof;

//dialog
let IntroDialog = ["Welcome to the monde de Pokebro!!!", "I am Songru Tom, the world's leading researcher in the field of flexology.", "Oh, I'm sorry but what was your name again???", "Ah yes, hello " + playerName + "!", "Wait... are you a boy or a girl???", "Oh right, my bad, anyways, your journey to becoming the greatest flexer of the century begins now!"];

//buttons
let aPressed = false;
let bPressed = false;
let inputButton;

function preload() {
  IntroBg = loadImage("assets/introbackground.PNG");
  prof = [loadImage("assets/professor1.PNG"), loadImage("assets/professor1.PNG"), loadImage("assets/professor2.PNG"), loadImage("assets/professor1.PNG"), loadImage("assets/professor3.PNG"), loadImage("assets/professor4.PNG")];
}

function setup() {
  createCanvas(3 * (windowWidth/5), (3 * (windowWidth/5))/1.6);
  background(0);
}

function draw() {
  if (state === 0) {
    gameIntro();
  } 
  else if (state === 1) {
    background(0);
  }
}


function gameIntro() {
  background(IntroBg);
  image(prof[introTextNum], width/3, height/6, width/4, 5 * (height/8))
  //fadeImageIn(prof, width/3, height/6, width/4, 5 * (height/8));

  textBox(IntroDialog[introTextNum]); 

  if (introTextNum === 6) {
    state = 1;
  }
  // else if (introTextNum === 2) {
  //   pickName();
  // }
  else if (introTextNum === 4) {
    pickSprite();
  }

  if (aPressed) {
    introTextNum++;
    aPressed = false;
  }
}

function pickName() {
  inputBox = createInput();
  inputBox.position(20, 300);

  inputButton = createButton('Submit');
  inputButton.position(inputBox.x + inputBox.width, 300);
  inputButton.mousePressed(setPlayerName);

  greeting = createElement('h2', 'What is your name?');
  greeting.position(20, 245);

  textSize(50);
}

function setPlayerName() {
  playerName = inputBox.value();

  inputBox.remove();
  inputButton.remove();
  greeting.remove();
  
  introTextNum++;
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

function keyPressed() {
  if (key ===" ") {
    aPressed = true;
  }
}