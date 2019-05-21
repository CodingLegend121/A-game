var ball;
let screenX;
let screenY;
let res = 25;
var blocks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  screenX = width / 2;
  screenY = height / 2;
  ball = new Ball();
  
}

function draw() {
  //BACKGROUND
  background(75, 150, 50);
  
  //VIEWING TYPE
  // translate(width/2, height/2);
  translate(screenX, screenY);

  fill(255);
  rect(0, 0, 5, 5);
  
  //GRID
  stroke(180, 50);
  strokeWeight(2);
  for (var i = -150; i <= 149; i++) {
    line(-6550, i * res + res / 2, 6550, i * res + res / 2);
  }
  for (var i = -262; i <= 261; i++) {
    line(i * res + res / 2, -3750, i * res + res / 2, 3750);
  }

  mX = Math.round((mouseX - width / 2 + ball.x) / res);
  mY = Math.round((mouseY - height / 2 + ball.y) / res);
  //X AND Y COORD TEXT
  document.getElementById("p1").innerHTML = mX
  document.getElementById("p2").innerHTML = mY

  //BOUNDARY
  addBoundary(7000, 0, 1900, 6900);
  addBoundary(-7000, 0, 1900, 6900);
  addBoundary(0, 4000, 16000, 1100);
  addBoundary(0, -4000, 16000, 1100);

  
  //SHOWING FLOORS
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].collision == false) {
      blocks[i].show();
    }
  }

  //SHOWING PLAYER
  ball.show();

  //SHOWING WALLS
  ball.move(screenX, screenY);
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].collision) {
      blocks[i].show();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function addBoundary(x, y, w, h) {
  rectMode(CENTER);
  noStroke();
  fill(25, 75, 25, 100);
  rect(x, y, w, h);
}

function mousePressed() {
 
  blocks.push(new Block(mX, mY)); 

}
