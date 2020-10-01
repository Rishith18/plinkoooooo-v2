
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plinkos = [];
var particles = [];
var dividers=[];

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
  world = engine.world;
  
  Engine.run(engine);

  ground = new Ground(240,780,480,20);

  for(var i=0; i<=480;i=i+80){
    dividers.push(new Divider(i,650,5,300));
  }
  

  for (var j = 40; j <=480; j=j+50) {
    plinkos.push(new plinko(j,75));
  }
  for (var j = 15; j <=470; j=j+50) {
    plinkos.push(new plinko(j,175));
  }
  for (var j = 40; j <=480; j=j+50) {
    plinkos.push(new plinko(j,275));
  }
  for (var j = 15; j <=470; j=j+50) {
    plinkos.push(new plinko(j,375));
  }

  
}



function draw() {
  rectMode(CENTER);
  background("black");
  
  ground.display();
  

  for(i=0;i<dividers.length;i++){
    dividers[i].display();
  }

  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }
 if (frameCount%60===0) {
    particles.push(new Particle(random(230,250),10,10));
  }
  

  for (var k = 0; k < particles.length; k++) {
    particles[k].display();
  }

}
