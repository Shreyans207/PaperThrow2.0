
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
  
  Dustbin = new dustbin(1000,height-70 ,150,150);

  ground= new Ground(width/2, height-50, width,10,);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(255);
  paper.display();
  ground.display();
  Dustbin.display();
  }

function keyPressed(){
     if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paper.body, paper.body.position,{x:250,y:-300})
	 }

}

