var boy,boyI
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
  boyI = loadImage("boy.png")
}

function setup() {
	createCanvas(1000,500);


	engine = Engine.create();
	world = engine.world;

 tree = new Tree(800,300,5,430)

 ground = new Ground(500,495,1000,15);

 boy = createSprite(200,420);
 boy.addImage(boyI)
 boy.scale=0.13;

stone = new Stone(135,345,40);
 
mango1 = new Mango(850,200,40)
mango2 = new Mango(800,140,40)
mango3 = new Mango(770,200,40) 
mango4 = new Mango(710,230,40)
mango5 = new Mango(800,260,40)
mango6 = new Mango(900,250,40)

catapult = new Chain(stone.body,{x:135,y:345})
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)

  drawSprites();

  push()
  fill(0)
  stroke(0)
  textSize(25);
 text("Press Space to play again",100,100,)
 pop()

 
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  catapult.display();

  

 

  function detectCollision(lstone,lmango){
    mangoBodyPosition = lmango.body.position
    stoneBodyPosition = lstone.body.position
  
    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    
    if(distance<=lmango.r+lstone.r)
    {
      Matter.Body.setStatic(lmango.body,false);
    }
  
  }
  

 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
 catapult.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:185,y:348})
    catapult.attach(stone.body);
  }





}

