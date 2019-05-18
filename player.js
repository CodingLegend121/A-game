class Ball {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.speed = 2;
    this.r = res * 0.6;
    // angle = 0
    this.show = function () {
      noStroke();
      var a = atan2(mouseY - height / 2, mouseX - width / 2);
      fill(200);
      ellipse(Math.round(this.x), Math.round(this.y), this.r);
      /*push()
          translate(this.x, this.y)
          rotate(a)
          fill(10)
          rectMode(CENTER)
          rect(r, 0, 20, 30)
          pop()*/
    };
    this.move = function () {
      if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
        //Right
        screenX += this.speed;
        ball.x -= this.speed;
      }
      if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
        //Left
        screenX -= this.speed;
        ball.x += this.speed;
      }
      if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
        //Up
        screenY += this.speed;
        ball.y -= this.speed;
      }
      if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
        //Down
        screenY -= this.speed;
        ball.y += this.speed;
      }
      if (keyIsDown(SHIFT)) {
        //Down
        this.speed = 4;
      }
      else {
        this.speed = 2;
      }
      boundaryBlock();
    };
  }
}

function boundaryBlock() {
  if (ball.x > 6050) {
    screenX += ball.speed / 2;
    ball.x -= ball.speed / 2;
  }
  if (ball.x > 6550) {
    screenX += ball.speed;
    ball.x -= ball.speed;
  }
  if (ball.x < -6050) {
    screenX -= ball.speed / 2;
    ball.x += ball.speed / 2;
  }
  if (ball.x < -6550) {
    screenX -= ball.speed;
    ball.x += ball.speed;
  }
  if (ball.y > 3450) {
    screenY += ball.speed / 2;
    ball.y -= ball.speed / 2;
  }
  if (ball.y > 3750) {
    screenY += ball.speed;
    ball.y -= ball.speed;
  }
  if (ball.y < -3450) {
    screenY -= ball.speed / 2;
    ball.y += ball.speed / 2;
  }
  if (ball.y < -3750) {
    screenY -= ball.speed;
    ball.y += ball.speed;
  }
}
