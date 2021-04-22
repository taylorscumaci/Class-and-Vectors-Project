var heavyball1;
var heavyball2;
var lightballs = [];

function setup() {
  createCanvas(600, 300);
  heavyball1 = new HeavyBall(200,180,1);
  heavyball2 = new HeavyBall(400,180,2);
  for (let i = 0; i < 100; i++) {
    lightballs.push(new LightBall(300,100));
  }
}

function draw() {
  background(150,234,150);
  let gravity = createVector(0,0.1);
  let weight1 = p5.Vector.mult(gravity,heavyball1.mass);
  let weight2 = p5.Vector.mult(gravity,heavyball2.mass);
  
  heavyball1.applyForce(weight1);
  heavyball1.applyForce(gravity);
  heavyball1.bounce();
  heavyball1.update();
  heavyball1.display();
  
  heavyball2.applyForce(weight2);
  heavyball2.applyForce(gravity);
  heavyball2.bounce();
  heavyball2.update();
  heavyball2.display();
  
   if(mouseIsPressed){
    let wind = createVector(1,0);
    heavyball1.applyForce(wind);
    heavyball2.applyForce(wind);
 
  }
  for (let lightball of lightballs) {
    let gravity = createVector(0, 0.2);
    lightball.applyForce(gravity);
    lightball.update();
    lightball.display();
    lightball.bounce();
  }
}