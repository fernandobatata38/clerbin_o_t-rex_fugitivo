var chao ,ground2;
var trex ,trex_correndo;
var chao_invisivel;
var nuvem,imagem_nuvem;
function preload(){
  trex_correndo = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  ground2=loadImage("ground2.png");
   imagem_nuvem=loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200);
  
  //crie um sprite de trex
  trex = createSprite(50,100,20,50);
  chao_invisivel=createSprite(200,190,400,20);
  chao_invisivel.visible=false;
  trex.addAnimation("correndo", trex_correndo);
  trex.scale=0.6
  chao=createSprite(200,180,400,20);
  chao.addImage("ground2",ground2);
  
}

function draw(){
  trex.collide(chao_invisivel);
  //console.log(trex.y);
  pulo();
  chao_movimentando();
  background("white");
  nuvens();
  text("X: "+mouseX+" / Y: "+mouseY,mouseX,mouseY);
  drawSprites();
}
function pulo(){
  if(keyDown("up") && trex.y>151){
    trex.velocityY=-10;
  }
  trex.velocityY+=0.8;
}
function chao_movimentando(){
  chao.velocityX=-3
  if(chao.x<0){
    chao.x=chao.width/2
  }
}
function nuvens(){
  if(frameCount%60===0){
    nuvem=createSprite(600,random(30,95),40,10);
nuvem.velocityX=-3
    nuvem.addImage(imagem_nuvem)
    nuvem.scale=random(0.5,1.4)
    nuvem.depth=trex.depth-1
  }

}