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
let sonicJump1;
let sonicJump2;
let sonicJump3;
let sonicJump4;
let recty = 342;
let rectx = 100;
let recty2 = 343;
let rectx2 = 783;
let y = 300;
let x = 600;
let way = 1;
let gsp = 0;
let ysp = 0;
let xsp = 0;
let acc = 0.046875*2;
let part = 0;
let rolls = 0;
//let write;

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
  sonicJump1 = loadImage('assets/sonic_roll1.png');
  sonicJump2 = loadImage('assets/sonic_roll2.png');
  sonicJump3 = loadImage('assets/sonic_roll3.png');
  sonicJump4 = loadImage('assets/sonic_roll4.png');
  //write = loadFont('assets/OpenDyslexicMono-Regular.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  imageMode(CENTER);
  background(255);
  fill(255, 0, 0);
  rect(rectx, recty, 583, 50);
  fill(0, 0, 255);
  rect(rectx2, recty2, 483, 50);
  
  text(window.width, 110, 110);

  moving();
  if (recty === 342) {
    if (rectx >= 17 && rectx <= 600 || rectx2 >= 117 && rectx2 <= 600){
      ysp = 0;
    }
  } else if (recty < 342 || recty2 < 342){
    ysp = ysp - (0.21875*2);
    recty = recty + ysp;
    recty2 = recty2 + ysp;
  } 
  if (rectx2 < 117 && recty === 342 && recty2 === 342 || rectx < 17 && rectx2 > 600 && recty2 === 342 || rectx > 600 && recty === 342) {
    recty = recty - 5;
    recty2 = recty2 - 5;
  }

  if (recty > 342 || recty2 > 342){
    ysp = ysp - (0.21875*2);
    recty = recty + ysp;
    recty2 = recty2 + ysp;
    if (rectx >= 17 && rectx <= 600 && recty <= 342 || rectx2 >= 117 && rectx2 <= 600 && recty <= 342){
      recty = 342;
      recty2 = 342;
    }
  }

  if (recty < -50){
    recty = height;
    recty2 = height;
    rectx = 100;
    rectx2 = 783;
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
    rectx = rectx - gsp;
    rectx2 = rectx2 - gsp;
    way = 0;
    if (recty === 342 || recty2 === 342) {
      runImage();
    } else {
      jumpy();
      rolls = rolls + 1;
    }
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
    rectx = rectx - gsp;
    rectx2 = rectx2 - gsp;
    way = 1;
    if (recty === 342 || recty2 === 342) {
      runImage();
    } else {
      jumpy();
      rolls = rolls + 1;
    }
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
      rectx = rectx - gsp;
      rectx2 = rectx2 - gsp;
      scale(-1, 1);
      x = -x
      if (recty === 342 || recty2 === 342) {
        image(sonic, x, y, sonic.width*2, sonic.height*2);
      } else{
        jumpy();
        rolls = rolls + 1;
      }
      x = -x
    } else {
      gsp = gsp - acc;
      if (gsp <= 0){
        gsp = 0;
      }
    rectx = rectx - gsp;
    rectx2 = rectx2 - gsp;
    if (recty === 342 || recty2 === 342) {
      image(sonic, x, y, sonic.width*2, sonic.height*2);
    } else {
      jumpy();
      rolls = rolls + 1;
    }
    steps = 0;
    }
  }
  if (keyIsDown(UP_ARROW)){
    if (recty === 342 && ysp === 0 || recty2 === 342 && ysp === 0){
      ysp = 13;
      recty = recty + ysp;
      recty2 = recty2 + ysp;
    }
  }
  if (rolls === 7){
    rolls = 0;
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

function jumpy() {
  if (recty !== 342 && recty2 !== 342) {
    if (rolls <= 1){
      image(sonicJump1, x, y, sonicJump1.width*2, sonicJump2.height*2);
    } else if (rolls <= 3){
      image(sonicJump2, x, y, sonicJump2.width*2, sonicJump2.height*2);
    } else if (rolls <= 5){
      image(sonicJump3, x, y, sonicJump3.width*2, sonicJump3.height*2);
    } else if (rolls <= 7){
      image(sonicJump4, x, y, sonicJump4.width*2, sonicJump4.height*2);
    }
  }
}