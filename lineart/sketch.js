// Line Art Demo
// Morgan Rusk
// September 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  line(mouseX, mouseY, pmouseX, pmouseY);
}
