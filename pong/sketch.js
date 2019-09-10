// Ping Pong
// Morgan Rusk
// September 10, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let yValue = 10;

function move() {
  if (keyIsPressed) {
    if (keyCode === UP_ARROW){
      yValue = yValue + 5; 
    } else if (keyCode === DOWN_ARROW){
      yValue = yValue - 5; }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
}

function draw() {
  background(0);
  stroke(1);
  move();
  line(10, yValue, 10, (yValue + 25));
}
