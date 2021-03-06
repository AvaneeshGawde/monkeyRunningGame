
var monkey , monkey_running
var bananaImage, obstacle, obstacleImage,banana;
var FoodGroup, obstacleGroup
var score
var PLAY=0;
var END = 1;
var gameState = 0;
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas (600,600);
monkey = createSprite (60,400,20,20);
  monkey.addAnimation ("running",monkey_running);
  monkey.scale = 0.13;
  
  ground = createSprite (300,550,600,10);

}


function draw() {
background ("white");
  
  bananaGroup = new Group();
  obstacleGroup = new Group ();
  
  if (gameState===PLAY) {
      
      
  
   if(keyDown("space") && monkey.y >= 500) {
      monkey.velocityY = -20;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
    bananaGroup = new Group ();
  
  if (monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    
  }
    if (monkey.isTouching(obstacleGroup)){
      gameState = END;
    }
  }
      
  if (gameState===END){
   
    monkey.destroy();
    bananaGroup.destroyEach();
    obstacleGroup.destroyEach();
    textSize (25);
    fill ("red");
    text ("GAME OVER",300,300);
    
  }
  
  
  drawSprites();
  
  spawnBanana();
  spawnObstacle();
  
  
}

function spawnBanana(){
  if (frameCount % 100 === 0){
   var banana = createSprite (400,200,20,20);
  banana.addImage (bananaImage);
  banana.scale = 0.1;
    banana.y = Math.round(random(280,500));
    banana.velocityX = -5;
    banana.lifetime = 100;
    
    bananaGroup.add(banana);
}
}

function spawnObstacle(){
  if (frameCount % 150 === 0){
   var obstacle = createSprite (600,500,20,20);
  obstacle.addImage (obstaceImage);
  obstacle.scale = 0.3;
 obstacle.velocityX = -5;
  obstacle.lifetime = 100;
    
    obstacleGroup.add(obstacle);
}
}



