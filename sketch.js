var helicopterIMG, helicopterSprite, packageSprite,packageIMG;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var packageBody,ground;
var engine,world;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	var canvas= createCanvas(930, 770);

	engine = Engine.create();
	world = engine.world;
 
	rectMode(CENTER);
	
   var ground_options={
	   isStatic: true
   }

   ground = Bodies . rectangle(200,390,200,20,ground_options);
   World.add(world,ground);

   var ball_option={
	   restitution:1.0

   }

   ball = Bodies.circle(200,200,10,ball_option);
   World.add(world,ball);

   console.log(ground);




	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  

}

function draw() {
  
  background(0);
Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(packageSprite.position.x,packageSprite.position.y,10,10);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  drawSprites();
 
}




