
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boy=loadImage("boy.png");

}

function setup() {
	createCanvas(1370, 610);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
stoneObj= new Stone(235,420,30); 


	mango1=new Mango(1170,130,30);
	mango2=new Mango(1100,100,30);
	mango3=new Mango(1140,150,40);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,40);
	mango8=new Mango(900,160,40);
	mango9=new Mango(1010,140,30);
	
	
	
	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	sling=new Slingshot(stoneObj.body,{x:240,y:460})  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  background("pink");
  textSize(30);
  fill('purple');
  textFont("Broadway");
  text("Press Space to get another stone to Play!!",50 ,50);
  image(boy ,200,380,200,300);
  
  

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  
  stoneObj.display();

  groundObject.display();
  sling.display();
  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);
  detectcollision(stoneObj,mango6);
  detectcollision(stoneObj,mango7);
  detectcollision(stoneObj,mango8);
  detectcollision(stoneObj,mango9);
 
  drawSprites();

  
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	sling.();
}

function keyPressed() {

    Matter.Body.setPosition(stoneObj.body, {x:235, y:410}) 
	  sling.attach(stoneObj.body);


}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
  
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=lmango.r+lstone.r)
   {
	 Matter.Body.setStatic(lmango.body , false);
   } 
  }
  
  
 




