
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survival_time=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
 monkey=createSprite(100,200,20,20)
monkey.velocityY=2
monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.1
  
  
  ground= createSprite(200,300,400,20)
ground.velocityX=-2
  
  
}


function draw() {
background(220)
  survival_time=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survival_time,20,20)
monkey.collide(ground);

if (ground.x <= ground.x/2){

ground.x=200
  
  
  
}
  
  if(keyDown("SPACE")&& monkey.y>=225){
  monkey.velocityY=-11
    
  
  }
  monkey.velocityY=monkey.velocityY+0.6
  
  obstacles();
  drawSprites();
  banana2();
  
  
  }
function banana2(){

if (frameCount%80===0){
banana=createSprite(400,50,50,50)
  banana.addImage(bananaImage)
  banana.scale=0.05
banana.velocityX=-2
banana.y= Math.round(random(120,200));
//banana.lifeime=0.1


}


}
function obstacles(){

if (frameCount%300===0){
obstacle=createSprite(400,265,50,50)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.15
obstacle.velocityX=-4
  
  

//banana.lifeime=0.1


}

}