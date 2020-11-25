var a,b;


function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  a.shapeColor = 'red';
  b = createSprite(400, 200, 50, 50);
  b.shapeColor = 'green';
}

function draw() {
  background('black');  
  a.x = World.mouseX;
  a.y = World.mouseY;
  console.log(a.x-b.x);
  if(b.x-a.x<b.width/2+a.width/2 && a.x-b.x<b.width/2+a.width/2 && b.y-a.y<b.height/2+a.height/2 && a.y-b.y<b.height/2+a.height/2){
    
    b.shapeColor = 'blue';
  }
  else{b.shapeColor = 'green';}


  
  drawSprites();
}