var backgroundimage, bg;
var bowimage, bow;

var redballoon1, redballoon2;
var greenballoon1, greenballoon2;
var blueballoon1, blueballoon2;
var pinkballoon1, pinkballoon2;

var arrowimage, arrow;

var score = 0

function preload(){
 //loading images 
  backgroundimage = loadImage("background0.png");
  bowimage = loadImage("bow0.png")
  
  redballoon1 = loadImage("red_balloon0.png");
  greenballoon1 = loadImage("green_balloon0.png");
  blueballoon1 = loadImage("blue_balloon0.png");
  pinkballoon1 = loadImage("pink_balloon0.png");
  
  arrowimage = loadImage("arrow0.png");
  
}

function setup() {
  createCanvas(600, 600);
  bg = createSprite(0,0, 600, 600)
  bg.addImage(backgroundimage);
  bg.x = bg.width /2;
 
  bg.scale = 3;
  
  //add code here
  bow = createSprite(550, 300, 20, 20);
  bow.addImage(bowimage)
  
  //Groups
  redB = new Group();
  greenB = new Group();
  pinkB = new Group();
  blueB = new Group();
  arrowGroup = new Group();
}

function draw() {
  //add code here
  background(255)
  
  bow.y = World.mouseY;
  
   
  //arrow calling
  if(keyDown("space")){
   createArrow();
  }
    
  if(arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
    score = score +5;
  }
  if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score +3;
  }
  if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score +2;
  }
  if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score +1;
  }
  
  bg.velocityX = -3;
  if(bg.x <0){
    bg.x = bg.width/2; 
  } 
  
  if(arrowGroup)
  
  //balloons
  var select_balloon = Math.round(random(1, 4));
  
  if (World.frameCount % 20 == 0){
    if(select_balloon == 1){
      redballoon();
    }
    else if(select_balloon == 2){
      greenballoon();
    }
    else if(select_balloon == 3){
      blueballoon();
    }
    else{
      pinkballoon();
    }
  }
  
 
  drawSprites();
  text("Score: "+ score, 270, 30);
  textSize = 20;
}

//function for balloons
function redballoon(){
  var red = createSprite(0, Math.round(random(20, 370)), 10, 10);
  red.addImage(redballoon1);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}
function greenballoon(){
  var green = createSprite(0, Math.round(random(20, 370)), 10, 10);
  green.addImage(greenballoon1);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}
function blueballoon(){
  var blue = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blue.addImage(blueballoon1);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}
function pinkballoon(){
  var pink = createSprite(0, Math.round(random(20, 370)), 10, 10);
  pink.addImage(pinkballoon1);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.3;
  pinkB.add(pink);
}



//create arrows function
function createArrow(){
  var arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowimage);
  arrow.x = 500;
  arrow.y = bow.y;
  arrow.velocityX = -5;
  arrow.lifetime = 120;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}

