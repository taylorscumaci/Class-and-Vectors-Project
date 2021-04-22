class LightBall {
  constructor(x,y,m){
    this.loc = createVector(x,y,m);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1,4));
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = 3;
  }

  applyForce(force) {
    this.acc = force;
    this.acc.add(force);
  }

  update() {
    this.loc.add(this.vel);
    this.vel.add(this.acc);
  }

  display() {
    noStroke();
    fill(0,124,255);
    ellipse(this.loc.x, this.loc.y, this.r*2);
  }
  
  bounce() {
    if (this.loc.y >= height) {
      this.loc.y = height;
      this.vel.y *= -1;
    }
  }
}