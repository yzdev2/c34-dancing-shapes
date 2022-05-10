const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;



var shapes = []
var button_1
var button_2
var ball
var square
var ground;
var left;
var right;
var top_wall;

  





function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(400,390,800,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
 top_wall = new Ground(200,10,400,20)

 
 


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show()
  left.show();
  right.show();
 for(var i = 0 ;i<shapes.length;i++){
   shapes[i].display()
 }
  Engine.update(engine);
}



function keyPressed(){
  if(keyCode === UP_ARROW){
    for(var i = 0 ;i<shapes.length;i++){
      
      Matter.Body.applyForce(shapes[i].body,shapes[i].body.position,{x:0.0,y:-0.09})
    }
    
  }


  if(keyCode === DOWN_ARROW){
    for(var i = 0 ;i<shapes.length;i++){
      
      Matter.Body.applyForce(shapes[i].body,shapes[i].body.position,{x:0.0,y:0.09})
    }
  }

  if(keyCode === RIGHT_ARROW){
    for(var i = 0 ;i<shapes.length;i++){
      
      Matter.Body.applyForce(shapes[i].body,shapes[i].body.position,{x:0.09,y:0.0})
    }
  }


  if(keyCode === LEFT_ARROW){
    for(var i = 0 ;i<shapes.length;i++){
      
      Matter.Body.applyForce(shapes[i].body,shapes[i].body.position,{x:-0.09,y:0.0})
    }
  


    
  }
    
}
function mousePressed(){
  var r = Math.round(random(1,2))
  if(r==1){
    ball = new Circle()
    shapes.push(ball)

  }
  else{
    square = new Square()
      shapes.push(square)
    
  }
}
