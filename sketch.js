
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var Box1 , Box2 , Box3 , ground;
var paper;

function setup() {
	createCanvas(2000, 500);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

  paper = new Paper(100,height-70,70);
  
  dustbin = new Dustbin(1000,height-130 ,150,150);

  ground= new Ground(width/2, height-50, width,10,);
  

  Box1 = new Box(width/2 , height-50 , 200 , 10);
	Box2 = new Box( 930 , height-130 , 10 , 140);
	Box3 = new Box(1070, height-130 , 10 , 140);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(255);
  paper.display();
  ground.display();
  Box1.display();
  Box2.display();
  Box3.display();
  dustbin.display();
  }

function keyPressed(){
     if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paper.body, paper.body.position,{x:100,y:-100})
	 }

}

