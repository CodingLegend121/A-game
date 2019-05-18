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

  for (let i = 0; i < 10; i++) {
    blocks.push(new Block(i, 1));
  }
  for (let i = 2; i < 10; i++) {
    blocks.push(new Block(0, i));
  }
  for (let i = 2; i < 10; i++) {
    blocks.push(new Block(9, i));
  }
  for (let i = 1; i < 4; i++) {
    blocks.push(new Block(i, 9));
  }
  for (let i = 6; i < 10; i++) {
    blocks.push(new Block(i, 9));
  }
  for (let i = 1; i < 9; i++) {
    for (let j = 2; j < 10; j++) {
      t = new Block(i, j);
      t.colors = [120, 100, 0];
      t.collision = false;
      blocks.push(t);
    }
  }
}

function draw() {
  background(75, 150, 50);
  translate(screenX, screenY);
  stroke(180, 50);
  strokeWeight(3);
  for (var i = -150; i <= 149; i++) {
    line(-6550, i * res + res / 2, 6550, i * res + res / 2);
  }
  for (var i = -262; i <= 261; i++) {
    line(i * res + res / 2, -3750, i * res + res / 2, 3750);
  }
  document.getElementById("p1").innerHTML = Math.round(ball.x / res);
  document.getElementById("p2").innerHTML = Math.round(ball.y / res);
  addBoundary(7000, 0, 1900, 6900);
  addBoundary(-7000, 0, 1900, 6900);
  addBoundary(0, 4000, 16000, 1100);
  addBoundary(0, -4000, 16000, 1100);
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].collision == false) {
      blocks[i].show();
    }
  }
  ball.show();
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
  fill(255, 100);
  rect(x, y, w, h);
}
