
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1= new Bob(280,350,40,40);
	bobObject2= new Bob(320,350,40,40);
	bobObject3= new Bob(360,350,40,40);
	bobObject4= new Bob(400,350,40,40);
	bobObject5= new Bob(440,350,40,40);

	roof= new Roof(360,150,250,20);

	rope1= new Rope(bobObject1,roof,160,0);
	rope2= new Rope(bobObject2,roof,160,0);
	rope3= new Rope(bobObject3,roof,160,0);
	rope4= new Rope(bobObject4,roof,160,0);
	rope5= new Rope(bobObject5,roof,160,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}



