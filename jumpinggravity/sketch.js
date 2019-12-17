// Jumping Gravity
// Morgan Rusk
// November 21, 2019
//

let steps = 0;
let sonic;
let sonicRun1;
let sonicRun2;
let sonicRun3;
let sonicRun4;
let sonicRun5;
let sonicRun6;
let sonicSprint1;
let sonicSprint2;
let sonicSprint3;
let sonicSprint4;
let y = 300;
let x = 600;
let way = 1;
let gsp = 0;
let ysp = 0;
let xsp = 0;
let acc = 0.046875*2;

function preload(){
  sonic = loadImage('assets/sonic_idle.png');
  sonicRun1 = loadImage('assets/sonic_run1.png');
  sonicRun2 = loadImage('assets/sonic_run2.png');
  sonicRun3 = loadImage('assets/sonic_run3.png');
  sonicRun4 = loadImage('assets/sonic_run4.png');
  sonicRun5 = loadImage('assets/sonic_run5.png');
  sonicRun6 = loadImage('assets/sonic_run6.png');
  sonicSprint1 = loadImage('assets/sonic_sprint1.png');
  sonicSprint2 = loadImage('assets/sonic_sprint2.png');
  sonicSprint3 = loadImage('assets/sonic_sprint3.png');
  sonicSprint4 = loadImage('assets/sonic_sprint4.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  imageMode(CENTER);
  background(255);
  rect(100, 342, width - 200, 50);

  moving();
  if (y === 300) {
    if (x >= 80 && x <= width - 100){
      ysp = 0;
    }
  } else if (y >= height - 42){
    y = height - 42;
  } else if (y > 300){
    ysp = ysp + 0.75;
    y = y + ysp;
  }
   if (x < 80 && y === 300 || x > width - 100 && y === 300) {
     y = y + 5;
   }
}

function moving(){

  if (keyIsDown(LEFT_ARROW)) {
    if (gsp >= 0) {
      gsp = gsp - 1;
    } else {
    gsp = gsp - acc;
    }
    if (gsp <= -12){
      gsp = -12;
    }
    x = x + gsp;
    if (x - 30 <= 0) {
      x = 30;
    }
    if (x + 25 >= width) {
      x = width - 25;
    }
    way = 0;
    runImage();
    steps = steps + 1;
    if (steps > 12){
      steps = 0;
    }
  } 
  else if (keyIsDown(RIGHT_ARROW)){
    if (gsp <= 0) {
      gsp = gsp + 1;
    } else {
    gsp = gsp + acc;
    }
    if (gsp >= 12){
      gsp = 12;
    }
    x = x + gsp;
    if (x - 30 <= 0) {
      x = 30;
    }
    if (x + 25 >= width) {
      x = width - 25;
    }
    way = 1;
    runImage();
    steps = steps + 1;
    if (steps > 12){
      steps = 0;
    }
  } 
  else {
    if (way === 0) {
      gsp = gsp + acc;
      if (gsp >= 0){
        gsp = 0;
      }
      x = x + gsp;
      if (x - 30 <= 0) {
        x = 30;
      }
      if (x + 25 >= width) {
        x = width - 25;
      }
      scale(-1, 1);
      x = -x
      image(sonic, x, y, sonic.width*2, sonic.height*2);
      x = -x
    } else {
      gsp = gsp - acc;
      if (gsp <= 0){
        gsp = 0;
      }
    x = x + gsp;
    if (x - 30 <= 0) {
      x = 30;
    }
    if (x + 25 >= width) {
      x = width - 25;
    }
    image(sonic, x, y, sonic.width*2, sonic.height*2);
    steps = 0;
    }
  }
}

function runImage() {
  if (way === 0) {
    scale(-1, 1);
    x = -x;
  }
  if (gsp >= -3 && gsp <= 3){
    if (steps <= 2){
      image(sonicRun1, x, y, sonicRun1.width*2, sonicRun1.height*2);
    } else if (steps < 4){
      image(sonicRun2, x, y, sonicRun2.width*2, sonicRun2.height*2);
    } else if (steps <= 6){
      image(sonicRun3, x, y, sonicRun3.width*2, sonicRun3.height*2);
    } else if (steps < 8){
      image(sonicRun4, x, y, sonicRun4.width*2, sonicRun4.height*2);
    } else if (steps <= 10){
      image(sonicRun5, x, y, sonicRun5.width*2, sonicRun5.height*2);
    } else {
      image(sonicRun6, x, y, sonicRun6.width*2, sonicRun6.height*2);
    }
    if (way === 0){
      x = -x;
    }
  } else {
    if (steps <= 3){
      image(sonicSprint1, x, y, sonicSprint1.width*2, sonicSprint1.height*2);
    } else if (steps <= 6){
      image(sonicSprint2, x, y, sonicSprint2.width*2, sonicSprint2.height*2);
    } else if (steps <= 9){
      image(sonicSprint3, x, y, sonicSprint3.width*2, sonicSprint3.height*2);
    } else {
      image(sonicSprint4, x, y, sonicSprint4.width*2, sonicSprint4.height*2);
    }
    if (way === 0){
      x = -x;
    }
  }
}