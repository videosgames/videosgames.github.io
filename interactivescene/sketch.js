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
let fontsize = 60;
let colour = "black";
let rectColour = 120;

function preload() {
  font = loadFont("assets/OpenDyslexicMono-Regular.otf")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  textFont(font);
  textSize(fontsize);
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
  fill(0);
}

function draw() {
  //line(mouseX, mouseY, pmouseX, pmouseY);
  background(255);

  fill(rectColour);
  rect(bounds.x - 5, bounds.y - 5, bounds.w + 10, bounds.h + 10)
  fill(colour);
  text(message, x, y);
  bounds = font.textBounds(message, x, y, fontsize);

  if (mouseX >= bounds.x && mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y && mouseY <= bounds.y + bounds.h) {
    //x += random(-5, 5);
    //y += random(-5, 5);
    colour = "red";
    rectColour = "orange";
    if (mouseIsPressed) {
      colour = "pink";
      rectColour = "blue";
    } 
  } else {
    colour = "black";
    rectColour = 120;
  }
}
