// Bouncing Ball Demo
// Morgan Rusk
// September 16, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let r = 255;
let g = 0;
let b = 0;
let mode;
let dx;
let dy;
let dvd;
let divider = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  dvd = loadImage("assets/dvd3.png")
  x = width/2;
  y = height/2;
  dx = random(-10, 10);
  dy = random(-10, 10);
  mode = random(0, 100);
}

function draw() {
  background(255 - r, 255 - g, 255 - b,);
  fill(r, g, b);
  noStroke();
  imageMode(CENTER);
  if (mode >= 50) {
    //circle(x, y, radius);
    image(dvd, x, y, dvd.width/divider, dvd.height/divider);
  } else {
    //rectMode(CENTER);
    //rect(x, y, radius, radius)
    image(dvd, x, y, dvd.width/divider, dvd.height/divider);
  }
  x += dx;
  y += dy;
  if (x >= width - (dvd.width/(2*divider)) || x <= dvd.width/(2*divider)) {
    dx *= -1;
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
  }
  if (y >= height - (dvd.height/(2*divider)) || y <= dvd.height/(2*divider)) {
    dy *= -1;
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
  }
}

function keyPressed() {
  mode = 100 - mode;
}

function windowResized() {
  setup();
}