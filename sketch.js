
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(50,360,30,30);
  monkey.addAnimation("bandar",monkey_running);
  monkey.scale=0.1;
ground=createSprite(50,380,900,10);
 FoodGroup=new Group();
  obstacleGroup=new Group();
}
var gameState="play"
var survivalTime=0;
function draw() {
background("lightblue")
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50);
  text("survival Time:"+ survivalTime,100,50);
  stroke("black");
  textSize(20);
  fill("black");
  if(gameState=="play"){
  if(keyDown("space")) {
    monkey.velocityY=-12
  } 
  monkey.velocityY=monkey.velocityY+0.8
  survivalTime=Math.ceil(frameCount/frameRate())
  
  ground.velocityX=-4;
  if(ground.x<0){
    ground.x=450
  }
    spawn();
    if(monkey.isTouching(obstacleGroup)){
      gameState="end"
    }
  }
  if(gameState=="end"){
    ground.velocityX=0
    obstacleGroup.setVelocityXEach(0)
    FoodGroup.setVelocityXEach(0)
    obstacleGroup.setLifetimeEach(-1)
    FoodGroup.setLifetimeEach(-1)
  }
  monkey.collide(ground);
  drawSprites();
  
}
function spawn(){
  if(frameCount%100==0){
    b=createSprite(400,120,30,30);
    r=createSprite(400,355,30,30);
    b.addImage(bananaImage)
    r.addImage(obstacleImage)
    b.scale=0.1;
    r.scale=0.1;
    b.velocityX=-4
    r.velocityX=-4
    b.lifetime=300
    r.lifetime=300
    FoodGroup.add(b)
    obstacleGroup.add(r)
  }
}





