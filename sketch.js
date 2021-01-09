var fixedRect, movingRect;
var object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(200,200,80,80);
  object1.shapeColor="blue";
  object1.debug=true;
  object2 = createSprite(200,300,80,80);
  object2.shapeColor="blue";
  object2.debug=true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  } else{

    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  if( isTouching(movingRect,object1)){
    movingRect.shapeColor = "red";
    object1.shapeColor = "red";
  } else{

    movingRect.shapeColor = "green";
    object1.shapeColor = "green";
  }

  if( isTouching(movingRect,object2)){
    movingRect.shapeColor = "pink";
   object2.shapeColor = "pink";
  }else{

    movingRect.shapeColor = "green";
    object2.shapeColor= "green";
  }
 
  drawSprites();
}
