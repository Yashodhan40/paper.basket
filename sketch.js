
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dust1,dust2,dust3;
var ground1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
	//Create the Bodies Here.
	//ball = Bodies.circle(100,430,2,{isStatic:false,restitution:0.3,friction:0.5,density:1.2});
	//ball.shaoeColor="red";
	//World.add(world,ball);
	Paper = new paper(50,430,20);

	 bask = new basket(600,300,30,30);
	ground1= new ground(10,600,1000,1);
	
	
	Engine.run(engine);
  
}
function draw() {
  //rectMode(CENTER);
  background(0);
  //ground1.Visible(false);
   Paper.display();
   bask.display();
   ground1.display();
  
  
  drawSprites();
  keyPressed();
  
 
}

function keyPressed(){
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(Paper.body,Paper.body.position.x,Paper.body.position.y)
	}
}



