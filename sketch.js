const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1304,650);


	engine = Engine.create();
	world = engine.world;
    ball = new Ball(100,100);
	ground = new Ground(650,650,1400,50)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  var bucket1=createSprite(1200,585,25,75);
  var bucket2=createSprite(1100,585,25,75);
keyPressed();
  
 
	  }
  
  drawSprites();
 




