var fixedRect,movingRect;
var gameObject1,gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 100, 50, 50);
  movingRect=createSprite(400,800,80,30);
  gameObject1=createSprite(100,100,50,50);
  gameObject2=createSprite(200,100,50,50);
  movingRect.debug=true;
  fixedRect.debug=true;
  movingRect.velocityY=-5
  fixedRect.velocityY=+5


}

function draw() {
  background(255,255,255);  
 // movingRect.x=World.mouseX;
 // movingRect.y=World.mouseY;
  if(isTouching(gameObject2,movingRect)){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
else{
  movingRect.shapeColor = "green";
  gameObject2.shapeColor = "green";
}
  bounceOff(fixedRect,movingRect);
  drawSprites();
}


    
  

