// Ping Pong
// Morgan Rusk
// September 10, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  if (gamemode === 0){
    background(0);
    fill(255);
    rect(30, yValue, 10, 50);
    rect(windowWidth - 40, compY, 10, 50);
    rect(ballX, ballY, 10, 10);
    let score = str(playerOne) + ':' + str(playerTwo);
    stroke(255);
    line(0, 40, windowWidth, 40);
    textFont('monospace');
    textSize(30);
    text(score, 600, 28);
  
    //Moving the Player's Paddle
    if (keyIsPressed){
      if (keyCode === UP_ARROW){
        yValue = yValue - 5;
        if (yValue <= 50){
          yValue = 50
        }
      } else if (keyCode === DOWN_ARROW){
        yValue = yValue + 5;
        if (yValue >= (windowHeight - 60)) {
          yValue = windowHeight - 60
        }
      }
    }
    
    //Making a Computer Paddle
    //Make brain < 75 for 'hard' mode
    let brain = random(0, 100);
    if (brain < 55){
      if (ballY < compY + 20){
        compY = compY - compSpeed;
        if (compY <= 50) {
          compY = 50;
        }
      } else if (ballY > compY + 30) {
        compY = compY + compSpeed;
        if (compY > (windowHeight - 60)) {
          compy = windowHeight - 60;
        }
      }
    }
  
    //Moving the Ball and Making Boundaries
    ballX = ballX + directionX;
    ballY = ballY + directionY;
    if (ballY >= (windowHeight - 10) || ballY <= 50){
      directionY = directionY * -1;
    }
  
    //Creating Increasing Speed
    if (speed % 3 === 0){
      if (directionX < 0){
        directionX = directionX - 1;
      } else {
        directionX = directionX + 1;
      }
      if (directionX >= 15){
        directionX = 15;
      }
      speed = 1;
    }
  
    //Checking to See if a Paddle Connected
    touch(yValue);
    touch(compY);
  
    //Resetting the Ball and Setting the Score
    if (ballX <= 20 || ballX >= windowWidth - 20) {
      if (ballX <= 30){
        playerTwo = playerTwo + 1;
      } else {
        playerOne = playerOne + 1
      }
      speed = 1;
      directionX = 3;
      directionY = 3;
      ballX = 400;
      ballY = 100;
      let varR = random(0, 100);
      if (varR < 50) {
        directionX = directionX * -1;
      }
    }
  }

  //Displaying the Winner
  if (playerOne >= 11){
    text('Player One Wins!', 100, 100);
    gamemode = 1;
  } else if (playerTwo >= 11){
    text('Player Two Wins!', 100, 100);
    gamemode = 1;
  }
}

//The Function Responsible for Checking if a Paddle Connected
function touch(player) {
  if (ballX <= 40 && player === yValue || ballX >= windowWidth - 50 && player === compY) {
    if (ballY - 5 >= player && ballY <= player + 50){
      speed = speed + 1
      if (ballY <= player + 5 || ballY >= player + 35) {
        directionY = directionX * sqrt(3);
      } else if (ballY <= player + 15 || ballY >= player + 25) {
        directionY = directionX;
      } else {
        directionY = 0;
      } 
      directionX = directionX * -1;
    }
  }
}

//Global Variables
let gamemode = 0;
let playerOne = 0;
let playerTwo = 0;
let yValue = 50;
let compY = 50;
let ballX = 400;
let ballY = 65;
let directionX = 3;
let directionY = 0;
let speed = 1;
let compSpeed = 5;
let r = random(0, 100);
if (r < 50) {
  directionX = directionX * -1;
}