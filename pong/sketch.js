// Ping Pong
// Morgan Rusk
// September 10, 2019
//
// Extra for Experts:
// The game has Sound and will be Resized if the Window is Resized

// Global Variables
let listY = [0, 3, -3];
let gamemode = 0;
let playerOne = 0;
let playerTwo = 0;
let yValue;
let compY;
let ballX;
let ballY;
let directionX = 3;
let directionY = 0;
let speed = 1;
let compSpeed = 6;
let font;
let bounds;
let boundsTwo;
let box;
let xb;
let yb;
let xbb;

// Preloading sound effects and font
function preload() {
  soundFormats('mp3', 'wav');
  ballHit = loadSound('assets/pongsound.mp3');
  bMusic = loadSound('assets/pol-hesitation-long.wav');
  bMusic.playMode('untilDone');
  applause = loadSound('assets/applause.wav');
  font = loadFont("assets/OpenDyslexicMono-Regular.otf");
}

// Making canvas and setting up canvas specific variables
function setup() {
  createCanvas(windowWidth, windowHeight);
  yValue = height/2 - 25;
  compY = height/2 - 25;
  background(0);
  textFont(font);
  textSize(30);
  bounds = font.textBounds('Press the UP ARROW to move up', 0, 0, 30);
  xb = width / 2 - bounds.w / 2;
  yb = height / 2 - bounds.h / 2;
  boundsTwo = font.textBounds('Press the DOWN ARROW to move down', 0, 0, 30);
  xbb = width / 2 - bounds.w / 2;
  box = font.textBounds("OKAY", 0, 0, 30);
  boxx = width / 2 - box.w / 2;
}


function draw() {

  // The start screen
  if (gamemode === 0) {
    let buff = (boundsTwo.w - bounds.w) / 2;
    background(0);

    // Explaining How to Play the Game
    fill(0);
    stroke(255);
    rect(bounds.x - buff - 10, bounds.y - 10, boundsTwo.w + 20, bounds.h + 25 + boundsTwo.h);
    rect(boxx - 10, yb + bounds.h + boundsTwo.h + 15 , box.w + 20, box.h + 20);
    fill(255);
    bounds = font.textBounds('Press the UP ARROW to move up', xb, yb, 30);
    text('Press the UP ARROW to move up', xb, yb);
    text('Press the DOWN ARROW to move down', xbb - buff, yb + bounds.h + 5);
    text("OKAY", boxx, yb + bounds.h + boundsTwo.h + 45);

    // Checking if the player clicked "OKAY"
    clickTheBox();
  }

  // Playing the Game
  if (gamemode === 1){

    bMusic.play();

    // The Aesthetics of the Game
    background(0);
    fill(255);
    rect(30, yValue, 10, 50);
    rect(windowWidth - 40, compY, 10, 50);
    ellipse(ballX, ballY, 10, 10);
    let score = str(playerOne) + ':' + str(playerTwo);
    stroke(255);
    line(0, 40, windowWidth, 40);
    textFont('monospace');
    textAlign(CENTER);
    text(score, width/2, 28);
    line(width/2, 40, width/2, height);
  
    // Moving the players
    movePlayerOne();
    compPaddle();
  
    // The functions for the ball
    ballBoundary();
    speedMachine();
    
    // Checking to see if a Paddle Connected
    if (directionX < 0) {
      touch(yValue);
    } else if (directionX > 0){
      touch(compY);
    }

    // If someone scores
    reset();
  }

  // Checks for a Winner
  if (gamemode < 3) {
    winner();
  }
  
  // The End Screen
  if (gamemode === 2){
    bMusic.stop();
    applause.play();
    gamemode = 3;
  }
}

// Keeping the Game Proportional to the Window Size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  xb = width / 2 - bounds.w / 2;
  yb = height / 2 - bounds.h / 2;
  xbb = width / 2 - bounds.w / 2;
  boxx = width / 2 - box.w / 2;
  winner();
  if (gamemode === 2){
    gamemode = 3;
  }
}

//  Function that checks if you clicked the box
function clickTheBox() {
  if (mouseX <= boxx + box.w + 10 && mouseX >= boxx - 10) {
    if (mouseY <= yb + bounds.h + boundsTwo.h + box.h + 35 && mouseY >= yb + bounds.h + boundsTwo.h + 15 ){
      
      // changes box colour if hovering over it
      fill(40);
      stroke(255, 69, 0);
      rect(boxx - 10, yb + bounds.h + boundsTwo.h + 15 , box.w + 20, box.h + 20);
      fill(255, 69, 0);
      text("OKAY", boxx, yb + bounds.h + boundsTwo.h + 45);

      // starts game if you click box
      if (mouseIsPressed) {
        gamemode = 1;
        ballX = width/2;
        ballY = height/2;
      }
    } 
  } 
}

// Moving the Ball and Making Boundaries
function ballBoundary(){
  ballX = ballX + directionX;
  ballY = ballY + directionY;
  if (ballY >= (windowHeight - 5) || ballY <= 45){
    directionY = directionY * -1;
  }
}

// Moving the Player's Paddle
function movePlayerOne(){
  if (keyIsPressed){
    if (keyCode === UP_ARROW){
      yValue = yValue - 5;
      if (yValue <= 50){
        yValue = 50;
      }
    } else if (keyCode === DOWN_ARROW){
      yValue = yValue + 5;
      if (yValue >= (windowHeight - 60)) {
        yValue = windowHeight - 60;
      }
    }
  }
}

// Function making the Computer Paddle move
function compPaddle(){
  // Effects how much the computer's paddle moves by
  let brain = random(0, 100);
  if (brain < 65) {
    brainSpeed = 1;
  } else {
    brainSpeed = 2;
  }

  // Moving the computer's paddle
  if (ballY < compY + 25 - compSpeed){
    compY = compY - (compSpeed/brainSpeed);
  } else if (ballY > compY + 25 + compSpeed) {
    compY = compY + (compSpeed/brainSpeed);
  }
  
  // Setting boundaries for the computer paddle
  if (compY <= 50) {
    compY = 50;
  }
  if (compY >= (windowHeight - 60)) {
    compY = windowHeight - 60;
  }
}

// The Function Responsible for Checking if a Paddle Connected
function touch(player) {

  // Making a variable to keep the Y direction the ball is moving in the same
  let signn = 1;
  if (directionY < 0){
    signn = -1;
  }
  
  // Checking if the player's paddle encountered the ball
  if (ballX <= 45 && player === yValue || ballX >= windowWidth - 45 && player === compY) {
    if (ballY >= player && ballY <= player + 50){

      // Setting angle the ball bounces back on from where it it the paddle
      if (ballY <= player + 5 || ballY >= player + 35) {
        directionY = directionX * sqrt(3);
      } else if (ballY <= player + 15 || ballY >= player + 25) {
        directionY = directionX;
      } else {
        directionY = 0;
      } 

      // Sending the ball in the other direction
      directionX = directionX * -1;
      speed = speed + 1;
      if (directionY <= 0 && signn !== -1 || directionY > 0 && signn !== 1){
        directionY = directionY * -1;
      }

      // Ball hit the paddle sound
      ballHit.play();
    }
  }
}

// Function to Reset the Ball and Set the Score
function reset(){

  // Checking if the ball went out of bounds
  if (ballX < 35 || ballX > windowWidth - 35) {
    if (ballX <= 35){
      playerTwo = playerTwo + 1;
    } else {
      playerOne = playerOne + 1;
    }

    // Resetting the ball for the next round
    speed = 1;
    directionX = 3;
    directionY = random(listY);
    ballX = width/2;
    ballY = height/2;

    // Sending the ball in a random direction
    let varR = random(0, 100);
    if (varR < 50) {
      directionX = directionX * -1;
    }
  }
}

// Creating Increasing Speed
function speedMachine(){

  // Increasing the ball's speed every second hit
  if (speed % 3 === 0){
    if (directionX < 0){
      directionX = directionX - 1;
    } else {
      directionX = directionX + 1;
    }
    if (directionX >= 10){
      directionX = 10;
    }
    speed = 1;
  }

  // Making the computer's speed proportional to the ball speed
  compSpeed = abs(directionX) * 2;
}

// Displaying the Winner
function winner(){
  // If a player's reached 10 points, display their win screen
  if (playerOne === 10){
    textFont(font);
    background(0);
    textAlign(CENTER);
    text('Player One Wins!', width/2, height/2);
    gamemode = 2;
  } else if (playerTwo === 10){
    textFont(font);
    background(0);
    textAlign(CENTER);
    text('Player Two Wins!', width/2, height/2);
    gamemode = 2;
  }
}