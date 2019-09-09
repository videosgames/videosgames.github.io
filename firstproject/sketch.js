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
let blueAmount = 0;
let changey = 1;
let penSize = 100;
let textSpace = 10;
function draw() {
  if (mouseIsPressed) {
    fill(redAmount, greenAmount, blueAmount);
    noStroke();
    ellipse(mouseX, mouseY, penSize, penSize);

    if (theColour === 1) {
      greenAmount += changey;
      if (greenAmount >= 255) {
        theColour = 2;
      }
    } else if (theColour === 2) {
      redAmount = redAmount - 1;
      if (redAmount <= 0) {
        theColour = 3;
      }
    } else if (theColour === 3){
      blueAmount += changey;
      if (blueAmount >= 255) {
        theColour = 4;
      }
    } else if (theColour === 4) {
      greenAmount = greenAmount - 1;
      if (greenAmount <= 0) {
        theColour = 5;
      }
    }else if (theColour === 5){
      redAmount += changey;
      if (redAmount > 255){
        theColour = 6;
      }
    }else if (theColour === 6){
      blueAmount = blueAmount - 1;
      if (blueAmount <= 0){
        theColour = 1;
      }
    }
  }

  if (keyIsPressed === true) {
    if (keyCode === ENTER) {
      background(0);
      penSize = 100;
      textSpace = 10;
    } else if (keyCode === UP_ARROW){
      penSize = penSize + 2;
    } else if (keyCode === DOWN_ARROW){
      penSize = penSize - 2;
    } else {
      textSize(40);
      fill(210,105,30);
      text(key, textSpace, mouseY,);
      textSpace = textSpace + 40
    } if (penSize < 10) {
      penSize = 10;
    } if (penSize > 500) {
      penSize = 500;
    }
  }
  console.log(greenAmount);
}
