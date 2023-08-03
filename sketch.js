var trex;
var trex_running;
var ground;
var ground_image;
var invisibleGround;
var cloud;
var cloudImage
var trex_collided;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_image = loadImage("ground2.png")
  cloudImage = loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200) 

  //creating the trex
  trex = createSprite(25,145,10,80)
  trex.addAnimation("dash",trex_running)
  trex.scale = 0.5

  //creating the ground
  ground = createSprite(300,180,600,10)
  ground.addImage("ground",ground_image)

  //creating an invisibleGround
invisibleGround = createSprite(300,190,600,10)
invisibleGround.visible = false;
}


function draw(){
  background("yellow")

  //Making the ground move from right to left
  ground.velocityX = -5

  //Creating and ifinite running ground
  if(ground.x<0){
    ground.x = ground.width/2
  }

  //Making the trex a monkey
  if(keyDown("space") && trex.y>=100){
    trex.velocityY = -10
  }

  //Adding some physics
  trex.velocityY = trex.velocityY + 0.8
  
  //Making the trex smash the ground
  trex.collide(invisibleGround)
 spawnClouds()
  drawSprites()
}

function spawnClouds(){
if(frameCount%40==0){
randomX = Math.round(random(20,90))
  cloud = createSprite(550,randomX,15,50)
  cloud.addImage("cloud",cloudImage)
  cloud.scale = 0.75
  cloud.velocityX = -3
}

}

















