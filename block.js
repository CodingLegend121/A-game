class Block {
  constructor(blockx, blocky) {
    this.sizeB = res;
    this.colors = [80, 60, 0];
    this.blockx = blockx * this.sizeB;
    this.blocky = blocky * this.sizeB;
    this.collision = true;
    this.show = function() {
      fill(this.colors);
      rectMode(CENTER);
      rect(this.blockx, this.blocky, this.sizeB, this.sizeB);
      if (this.collision) {
        //UP
        if (ball.y < this.blocky) {
          if (
            ball.y > this.blocky - (this.sizeB / 2 + ball.r / 2) &&
            ball.x > this.blockx - (this.sizeB / 2 + ball.r / 2) &&
            ball.x < this.blockx + (this.sizeB / 2 + ball.r / 2) &&
            ball.y < this.blocky - (this.sizeB / 2 + ball.r / 2) + 5
          ) {
            ball.y -= ball.speed;
            screenY += ball.speed;
          }
        }
        //DOWN
        else if (ball.y > this.blocky) {
          if (
            ball.y < this.blocky + (this.sizeB / 2 + ball.r / 2) &&
            ball.x < this.blockx + (this.sizeB / 2 + ball.r / 2) &&
            ball.x > this.blockx - (this.sizeB / 2 + ball.r / 2) &&
            ball.y > this.blocky + (this.sizeB / 2 + ball.r / 2) - 5
          ) {
            ball.y += ball.speed;
            screenY -= ball.speed;
          }
        }
        //RIGHT
        if (ball.x > this.blockx) {
          if (
            ball.x < this.blockx + (this.sizeB / 2 + ball.r / 2) &&
            ball.y < this.blocky + (this.sizeB / 2 + ball.r / 2) &&
            ball.y > this.blocky - (this.sizeB / 2 + ball.r / 2) &&
            ball.x > this.blockx + (this.sizeB / 2 + ball.r / 2) - 5
          ) {
            ball.x += ball.speed;
            screenX -= ball.speed;
          }
        }
        //LEFT
        else if (ball.x < this.blockx) {
          if (
            ball.x > this.blockx - (this.sizeB / 2 + ball.r / 2) &&
            ball.y > this.blocky - (this.sizeB / 2 + ball.r / 2) &&
            ball.y < this.blocky + (this.sizeB / 2 + ball.r / 2) &&
            ball.x < this.blockx - (this.sizeB / 2 + ball.r / 2) + 5
          ) {
            ball.x -= ball.speed;
            screenX += ball.speed;
          }
        }
      }
    };
  }
}
