
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper= new Paper(200,20,10,10); 
		
	dustbin= new DustBin(600,20,10,10)

	Engine.run(engine);
  
}


function draw()
{
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paper.display();
  dustbin.display();
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
} 



