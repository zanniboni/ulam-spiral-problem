let x, y;
let step = 1;
let stepSize = 50;
let numSteps = 1;
let state = 0;
let turnCounter = 0;

function setup() {
  createCanvas(500, 500);
  x = width / 2;
  y = height / 2;
  background(0);
}

function draw() {
  fill(127);
  stroke(255);
  rectMode(CENTER);
  rect(x, y, stepSize);

  textSize(stepSize / 2, stepSize / 2);
  textAlign(CENTER, CENTER);
  fill(255);
  text(step, x, y);

  switch (state) {
    case 0:
      x += stepSize;
      break;
    case 1:
      y -= stepSize;
      break;
    case 2:
      x -= stepSize;
      break;
    case 3:
      y += stepSize;
      break;
    default:
      state = 0;
      break;
  }

  if (step % numSteps == 0) {
    state = (state + 1) % 4;
    turnCounter++;
    if (turnCounter % 2 == 0) {
      numSteps++;
    }
  }
  step++;
  frameRate(1);
}
