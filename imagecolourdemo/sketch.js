// Image Colour Demo
// Morgan Rusk
// September 13, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let eagle;
let filtered;

function preload() {
  //eagle = loadImage('assets/birb.png');
  eagle = loadImage('assets/gear.png');
  filtered = makeGrayscale(eagle);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  image(filtered, 0, 0);
}

function greyscale(sourceImage) {
  let img = createImage(sourceImage.width, sourceImage.height);

  img.loadPixels();
  sourceImage.loadPixels();

  for (let x = 0; x < sourceImage.width; x++) {
    for (let y = 0; y < sourceImage.height; y++) {
      let p = sourceImage.get(x, y);

      let r = red(p);
      let g = green(p);
      let b = blue(p);

      let average = (r + b + g) / 3;

      img.set(x, y, color(average, average, average));
    }
  }
  img.updatePixels();
  return img;
}

function makeGrayscale(sourceImage) {
  let img = createImage(sourceImage.width, sourceImage.height);

  img.loadPixels();
  sourceImage.loadPixels();

  for (let x = 0; x < sourceImage.width; x++) {
    for (let y = 0; y < sourceImage.height; y++) {
      let p = sourceImage.get(x, y);

      let r = red(p);
      let g = green(p);
      let b = blue(p);

      let newPixel = color((r+g+b)/3, (r+g+b)/3, (r+g+b)/3);

      img.set(x, y, newPixel);
    }
  }

  img.updatePixels();
  return img;
}