// Image Demo
// Morgan Rusk
// September 13, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let eagle;
let scale = 1;

function preload() {
  eagle = loadImage('assets/birb.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  imageMode(CENTER);
  if (keyIsPressed){
    if (keyCode === UP_ARROW){
      scale *= 1.02 ;
    } else if (keyCode === DOWN_ARROW) {
      scale /= 1.02;
    } }
  image(eagle, mouseX, mouseY, eagle.width * scale, eagle.height * scale);
}
