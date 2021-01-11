const Engine = Matter.Engine
const World = Matter.World

const Bodies = Matter.Bodies

var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;
var particle;
var turn = 0;
var gameState = play;
var gameState = end;
var divisionHeight = 300;


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

ground1= new Ground(400,780,800,20)

for (var k = 0; k<=width; k=k+80 ){
  divisions.push(new Divisions(k,620,10,divisionHeight))
}

for(var r = 40; r<= width; r = r + 50) {
  plinkos.push(new Plinko( 80, 15));
}

for(var r = 15; r<= width; r = r + 50) {
  plinkos.push(new Plinko( 180, 15));
}

for(var r = 40; r<= width; r = r + 50) {
  plinkos.push(new Plinko(280, 15));
}

for(var r = 15; r<= width; r = r + 50) {
  plinkos.push(new Plinko(380, 15));
}
  
}

function draw() {
  background(0);  

  Engine.update(engine);

  ground1.display();

  for(var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for(var r = 0; r < plinkos.length; r++) {
    plinkos[r].display();
  }

  if(frameCount % 60 === 0) {
    particles.push(new Particle(random(width/2 + 10, width/2 - 10), 10, 10));
  }

  for(var k = 0; k < particles.length; k++) {
    particles[k].display();
  }

  
  fill("purple");
  textSize(20);
  text("SCORE: "+ score,20,100);

  text("500", 10,500)
  text("500",100,500)
  text("200",200,500)
  text("200",300,500)
  text("100",400,500)
  text("100",500,500)

  
  if(particle) {
    particle.display();
    if(particle.body.position.y > 750) {
      if(particle.body.position.x > 175 && particle.body.position.x < 300) {
        score = score + 100;
        particle = null;
        if(turn == 5) gameState = "end";
      }
    }
  }

  if(particle) {
    particle.display();
    if(particle.body.position.y > 750) {
      if(particle.body.position.x < 175 && particle.body.position.x > 0) {
        score = score + 500;
        particle = null;
        if(turn == 5) gameState = "end";
      }
    }
  }

  if(particle) {
    particle.display();
    if(particle.body.position.y > 750) {
      if(particle.body.position.x > 300 && particle.body.position.x < 480) {
        score = score + 500;
        particle = null;
        if(turn == 5) gameState = "end";
      }
    }
  }

  if(turn == 5 && gameState == "end") {
    textSize(26);
    text("GAME OVER", 150, 240);
  }
  
  

  drawSprites();
}
