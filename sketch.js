
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var topObj;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	topObj = new Top(400, 100, 700, 100);
	bob1 = new Bob(-500, 600, 100);
	bob2 = new Bob(300, 600, 100);
	bob3 = new Bob(400, 600, 100);
	bob4 = new Bob(500, 600, 100);
	bob5 = new Bob(600, 600, 100);
	rope1 = new Rope(bob1.body, {x : 200, y : 100})
	rope2 = new Rope(bob2.body, {x : 300, y : 100})
	rope3 = new Rope(bob3.body, {x : 400, y : 100})
	rope4 = new Rope(bob4.body, {x : 500, y : 100})
	rope5 = new Rope(bob5.body, {x : 600, y : 100})

	Engine.run(engine);
}


function draw() {
  Engine.update(engine);
  strokeWeight(4);
  background(255);

  topObj.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



