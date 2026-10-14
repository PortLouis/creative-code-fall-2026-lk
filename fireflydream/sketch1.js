let particles = [];
let img;
let grass
let runners

async function setup() {
  createCanvas(700, 400);

  img = await loadImage("gradient.png")
  grass = await loadImage("grass.png")
  runners = await loadImage("runners.png")

  let numParticles = 45;

  for (let i = 0; i < numParticles; i++) {
    let particle = new Particle();
    particles.push(particle);
  }
}

function draw() {
  background(20);

  let ac = grass.width/grass.height
  image(img, 0, 0, width, height)
  
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
  image(runners, -1, 0, width, runners.height/ac)
  image(grass, 0, 250, width, grass.height/ac )
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.acc = createVector(0, 0);

    this.color = color(255, 210, 0);
    this.size = random(-1, 6);
  }

  update() {
   
   this.acc = p5.Vector.random2D()
    this.acc.mult(0.12)
    this.vel.add(this.acc)
    this.vel.limit(0.8)
    this.pos.add(this.vel)

    //right
    if (this.pos.x > width - this.size / 2) {
      this.pos.x = width - this.size / 2
      this.vel.x = -this.vel.x;
    }

    //left
    if (this.pos.x < this.size / 2) {
      this.pos.x = this.size / 2
      this.vel.x = -this.vel.x;
    }

    //top
    if (this.pos.y < this.size / 2) {
      this.pos.y = this.size / 2
      this.vel.y = -this.vel.y;
    }

    //bottom
    if (this.pos.y > height - this.size / 2) {
      this.pos.y = height - this.size / 2
      this.vel.y = -this.vel.y;
    }
  }

  show() {
    fill(this.color);
    stroke(255, 150, 0);
    strokeWeight(random(2, 4))
    circle(this.pos.x, this.pos.y, this.size);
  
  }
}
