// Interactive Scene
// Morgan Rusk
// September 10, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let message = "Hello";
let font;
let bounds;
let x;
let y;
var hit = false;
//let colour = "red";
//let rectColour = 120;

function preload() {
  font = loadFont("assets/OpenDyslexicMono-Regular.otf")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //textAlign(CENTER);
  textFont(font);
  textSize(60);
  bounds = font.textBounds(message, 0, 0, 60);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
  background(255);
  fill(0);
}

function draw() {
  //line(mouseX, mouseY, pmouseX, pmouseY);
  //fill(120);
  //bounds = font.textBounds(message, x, y, 60);
  
  //hit = collidePointRect(mouseX, mouseY, x, y, 100, 100);
  hit = collidePointRect(mouseX, mouseY, x - 10, y - 10, bounds.w + 20, bounds.h + 20);
  
  if (hit) {
    //x += random(-5, 5);
    //y += random(-5, 5);
    background(0);
    fill(255);
  } else {
    background(255);
    fill(0);
  }
  rect(x - 10, y - 10, bounds.w + 20, bounds.h + 20);
  stroke(255, 0, 0);
  text(message, x, y);
}
