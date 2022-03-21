var chao ,ground2;
var trex ,trex_correndo;

function preload(){
  trex_correndo = loadAnimation("imgs/trex1.png", "imgs/trex3.png", "imgs/trex4.png");
  ground2=loadAnimation("imgs/ground2.png");
}

function setup(){
  createCanvas(600,200);
  
  //crie um sprite de trex
  trex = createSprite(50,157,20,50);
  trex.addAnimation("correndo", trex_correndo);
  
  chao=createSprite(200,180,400,20);
  chao.addAnimation("ground2",ground2);
  
}

function draw(){
  trex.collide(chao);
  pulo();
  background("white");
  drawSprites();
}
function pulo(){
  if(keyDown(UP_ARROW)){
    trex.velocityY=-10;
  }
  trex.velocityY=+7;
}
