// Image Demo
// Abar
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bg;
let textting = "Nabeel biggest gae adkjsahdkjsahd jajshd akdh askjdhkjsa hdkjsa hdkjsa hdkjsadjsahd";

function preload() {
  bg = loadImage("assets/introbackground.PNG");
}

function setup() {
  createCanvas(700, 500);
  background(0);
}

function draw() {
  intro();
}

function intro() {
  background(bg);
  updateText(textting);
}

function updateText(boi) {
  fill(255);
  rect(5, 3 * (height/4) - 5, width - 10, height/4, 20);
  fill(0);
  textSize(20);
  text(boi, 30, 3 * (height/4) + 20, width - 30, height/4);
}

