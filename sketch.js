var chao ,ground2;
var sofrimento;
var pulou;
var chequipointi;
var mortim_da_silva;
var pontuacao=0;
var FUGINDO=1;
var CAPTURADO=0;
var estadodejogo=FUGINDO;
var grupodenuvem;
var estepao;
var gameover;
var restart;
var gameover2
var restart2
var trex ,trex_correndo;
var chao_invisivel;
var nuvem,imagem_nuvem;
var estepe_dos_agiota,estepe1,estepe2,estepe3,estepe4,estepe5,estepe6;

function preload(){
  trex_correndo = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  ground2=loadImage("ground2.png");
  gameover=loadImage("gameOver.png");
  restart=loadImage("restart.png");
  mortim_da_silva=loadAnimation("trex_collided.png");
   imagem_nuvem=loadImage("cloud.png");
   estepe1=loadImage("obstacle1.png");
   estepe2=loadImage("obstacle2.png");
   estepe3=loadImage("obstacle3.png");
   estepe4=loadImage("obstacle4.png");
   estepe5=loadImage("obstacle5.png");
   estepe6=loadImage("obstacle6.png");
  sofrimento=loadSound("die.mp3");
  pulou=loadSound("jump.mp3");
  chequipointi=loadSound("checkpoint.mp3");
}

function setup(){
  createCanvas(600,200);
  //crie um sprite de trex
  grupodenuvem=new Group();
  estepao=new Group();
  trex = createSprite(50,100,20,50);
  chao_invisivel=createSprite(200,190,400,20);
  chao_invisivel.visible=false;
  trex.addAnimation("correndo", trex_correndo);
  trex.scale=0.6
  trex.addAnimation("morrendo",mortim_da_silva);
  chao=createSprite(200,180,400,20);
  chao.addImage("ground2",ground2);
  trex.debug=true;
  trex.setCollider("circle",0,0,35);
  gameover2=createSprite(300,100);
  gameover2.addImage(gameover);
  gameover2.visible=false;
  gameover2.scale=0.5;
  restart2=createSprite(300,140);
  restart2.addImage(restart);
  restart2.visible=false;
  restart2.scale=0.5;
}

function draw(){
  trex.collide(chao_invisivel);
  //console.log(trex.y);
 
  verseperdeu();

  if(estadodejogo===FUGINDO){
    pulo();
    pontuacao=pontuacao+Math.round(frameCount/60)
  trupique();
  chao_movimentando();
  background("white");
  nuvens();
    verificacao();
  }
  else if(estadodejogo===CAPTURADO){
    background("black");
    chao.velocityX=0;
    estepao.setVelocityXEach(0);
    grupodenuvem.setVelocityXEach(0);
    trex.velocityY=0;
    trex.changeAnimation("morrendo",mortim_da_silva);
    grupodenuvem.setLifetimeEach(-1);
    estepao.setLifetimeEach(-1);
    gameover2.visible=true;
    restart2.visible=true;
  }
  drawSprites();
  text("pontuação:"+pontuacao,500,50);
  vermouse ();
}
function pulo(){
  if(keyDown("up") && trex.y>151){
    trex.velocityY=-11;
    pulou.play();
    
  }
  trex.velocityY+=0.8;
}
function chao_movimentando(){
  chao.velocityX=-(6+pontuacao/1000);
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
    nuvem.lifetime=200
    grupodenuvem.add(nuvem);
  }

}
function trupique(){
if(frameCount%90===0){
  estepe_dos_agiota=createSprite(600,181,10,10);
  estepe_dos_agiota.velocityX=-(6+pontuacao/1000);
  switch(Math.round(random(1,6))){
    case 1:
      estepe_dos_agiota.addImage(estepe1);
      break

       
        case 2:
        estepe_dos_agiota.addImage(estepe2);
        break
        case 3:

        estepe_dos_agiota.addImage(estepe3);
        break
        case 4:
        estepe_dos_agiota.addImage(estepe4);
        break
        case 5:
        estepe_dos_agiota.addImage(estepe5);
        break
        case 6:
        estepe_dos_agiota.addImage(estepe6);
        break
  }
  estepe_dos_agiota.scale=0.5
  estepe_dos_agiota.y=170
  estepao.add(estepe_dos_agiota);
}
}
function vermouse(){
  text("X: "+mouseX+" / Y: "+mouseY,mouseX,mouseY);
}
function verseperdeu(){
  if(trex.isTouching (estepao)){
    estadodejogo=CAPTURADO;
    
  }
}
function verificacao(){
  if(pontuacao%1000===0){
    
    

    chequipointi.play();
  }
}