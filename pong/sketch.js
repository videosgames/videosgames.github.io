// Ping Pong
// Morgan Rusk
// September 10, 2019
//
// Extra for Experts:
// There are sound effects

//Global Variables
let listY = [0, 3, -3];
let gamemode = 3;
let playerOne = 0;
let playerTwo = 0;
let yValue = 50;
let compY = 50;
let ballX = 0;
let ballY = 0;
let directionX = 3;
let directionY = 0;
let speed = 1;
let compSpeed = 6;
let whoTurn = 1;
let font;
let fontsize = 30;
let messageOne = 'Press the UP ARROW to move up';
let messageTwo = 'Press the DOWN ARROW to move down';
let messageThree = "OKAY";
let bounds;
let boundsTwo;
let box;
let xb;
let yb;
let xbb;

function preload() {
  soundFormats('mp3', 'ogg');
  ballHit = loadSound('assets/pongsound.mp3');
  font = loadFont("assets/OpenDyslexicMono-Regular.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textFont(font);
  textSize(fontsize);
  bounds = font.textBounds(messageOne, 0, 0, fontsize);
  xb = width / 2 - bounds.w / 2;
  yb = height / 2 - bounds.h / 2;
  boundsTwo = font.textBounds(messageTwo, 0, 0, fontsize);
  xbb = width / 2 - bounds.w / 2;
  box = font.textBounds(messageThree, 0, 0, fontsize);
  boxx = width / 2 - box.w / 2;
}

function draw() {
  //fill(rectColour);
  if (gamemode === 3) {
    let buff = (boundsTwo.w - bounds.w) / 2
    background(0);
    fill(0);
    textAlign(CORNER);
    stroke(255);
    rect(bounds.x - buff - 10, bounds.y - 10, boundsTwo.w + 20, bounds.h + 25 + boundsTwo.h);
    rect(boxx - 10, yb + bounds.h + boundsTwo.h + 35 , box.w + 20, box.h + 20);
    fill(255);
    text(messageOne, xb, yb);
    bounds = font.textBounds(messageOne, xb, yb, fontsize);
    text(messageTwo, xbb - buff, yb + bounds.h + 5);
    boundsTwo = font.textBounds(messageTwo, xbb, yb + bounds.h + 5, fontsize);
  }
  //The start screen
  if (gamemode === 0){
    textFont('monospace');
    textSize(30);
    textAlign(CENTER);
    clickTheBox();
    textSize(30);
    fill(255);
    stroke(255);
    text('Press the UP ARROW to move up', width/2, height/3);
    text('Press the DOWN ARROW to move down', width/2, (height/3)+56);
  }

  //Playing the Game
  if (gamemode === 1){
    //The Aesthetics of the Game
    rectMode(CORNER);
    background(0);
    fill(255);
    rect(30, yValue, 10, 50);
    rect(windowWidth - 40, compY, 10, 50);
    ellipse(ballX, ballY, 10, 10);
    let score = str(playerOne) + ':' + str(playerTwo);
    stroke(255);
    line(0, 40, windowWidth, 40);
    textFont('monospace');
    textSize(30);
    textAlign(CENTER);
    text(score, width/2, 28);
    line(width/2, 40, width/2, height);
  
    //Moving the players
    movePlayerOne();
    compPaddle();
  
    //The functions for the ball
    ballBoundary();
    speedMachine();
    
    //Checking to see if a Paddle Connected
    if (directionX < 0) {
      whoTurn = 2;
      touch(yValue);
    } else if (directionX > 0){
      whoTurn = 1;
      touch(compY);
    }

    //If someone scores
    reset();
  }
  //Displays the Winner
  winner();
}


//Function that checks if you clicked the box
function clickTheBox() {
  if (mouseX >= (width/2) - 55 && mouseX <= (width/2) + 55) {
    if (mouseY >= (height/3) + 82 && mouseY <= (height/3) + 142){
      fill(10);
      rect(width/2, (height/3) + 112, 110, 60);
      fill(255,69,0);
      stroke(255,69,0);
      text('[OKAY]', width/2, (height/3) + 112);
      textSize(15);
      text('(click)', width/2, (height/3) + 130);
      noFill();
      rectMode(CENTER);
      rect(width/2, (height/3) + 112, 110, 60);
      if (mouseIsPressed) {
        gamemode = 1;
        ballX = width/2;
        ballY = height/2;
      }
    } else {
      fill(0);
      rect(width/2, (height/3) + 112, 110, 60);
      fill(255);
      stroke(255);
      text('[OKAY]', width/2, (height/3) + 112);
      textSize(15);
      text('(click)', width/2, (height/3) + 130);
      noFill();
      rectMode(CENTER);
      rect(width/2, (height/3) + 112, 110, 60);
    }
  } else {
    fill(0);
    rect(width/2, (height/3) + 112, 110, 60);
    fill(255);
    text('[OKAY]', width/2, (height/3) + 112);
    textSize(15);
    text('(click)', width/2, (height/3) + 130);
    noFill();
    stroke(255);
    rectMode(CENTER);
    rect(width/2, (height/3) + 112, 110, 60);
  }
}

//Moving the Ball and Making Boundaries
function ballBoundary(){
  ballX = ballX + directionX;
  ballY = ballY + directionY;
  if (ballY >= (windowHeight - 5) || ballY <= 45){
    directionY = directionY * -1;
  }
}

//Moving the Player's Paddle
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

//Function making the Computer Paddle move
function compPaddle(){
  let brain = random(0, 100);
  if (brain < 65) {
    brainSpeed = 1;
  } else {
    brainSpeed = 2;
  }

  if (ballY < compY + 25 - compSpeed){
    compY = compY - (compSpeed/brainSpeed);
  } else if (ballY > compY + 25 + compSpeed) {
    compY = compY + (compSpeed/brainSpeed);
  }
  
  if (compY <= 50) {
    compY = 50;
  }
  if (compY >= (windowHeight - 60)) {
    compY = windowHeight - 60;
  }
}

//The Function Responsible for Checking if a Paddle Connected
function touch(player) {
  let signn = 1
  if (directionY < 0){
    signn = -1;
  }
  if (ballX <= 45 && player === yValue || ballX >= windowWidth - 45 && player === compY) {
    if (ballY >= player && ballY <= player + 50){
      if (ballY <= player + 5 || ballY >= player + 35) {
        directionY = directionX * sqrt(3);
      } else if (ballY <= player + 15 || ballY >= player + 25) {
        console.log(ballX, ballY, directionX, directionY);
        directionY = directionX;
      } else {
        directionY = 0;
      } 
      directionX = directionX * -1;
      speed = speed + 1
      if (directionY <= 0 && signn !== -1 || directionY > 0 && signn !== 1){
        directionY = directionY * -1;
      }
      ballHit.play();
    }
  }
}

//Function to Reset the Ball and Set the Score
function reset(){
  if (ballX < 35 || ballX > windowWidth - 35) {
    if (ballX <= 35){
      playerTwo = playerTwo + 1;
    } else {
      playerOne = playerOne + 1
    }
    speed = 1;
    directionX = 3;
    directionY = random(listY);
    ballX = width/2;
    ballY = height/2;
    let varR = random(0, 100);
    if (varR < 50) {
      directionX = directionX * -1;
    }
  }
}

//Creating Increasing Speed
function speedMachine(){
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
  compSpeed = abs(directionX) * 2;
}

//Displaying the Winner
function winner(){
  if (playerOne >= 10){
    background(0);
    text('Player One Wins!', width/2, height/2);
    gamemode = 2;
  } else if (playerTwo >= 10){
    background(0);
    text('Player Two Wins!', width/2, height/2);
    gamemode = 2;
  }
}