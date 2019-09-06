// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}
let theColour = 1
let redAmount = 255;
let greenAmount = 0;
let changey = 1;
function draw() {
  if (mouseIsPressed) {
    fill(redAmount, greenAmount, 0);
    noStroke();
    ellipse(mouseX, mouseY, 25, 25);

    if (theColour === 1) {
      greenAmount += changey;
    }
    if (greenAmount > 255) {
      changey *= -1
    }
  }
  if (keyIsPressed === true) {
    if (keyCode === BACKSPACE) {
      background(0);
    } 
  }
  console.log(greenAmount);
}
