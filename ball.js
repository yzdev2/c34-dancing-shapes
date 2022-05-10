class Circle
{
  constructor() 
  {
    let options = {
      isStatic:false,restitution:0.9
      
    };
    
    this.body = Bodies.circle( 200,200,30,options);
    this.r = 30

    
    World.add(world, this.body);
}
display(){
    var pos = this.body.position
    push()
    fill("blue")
ellipseMode(CENTER)
ellipse(pos.x,pos.y,this.r,this.r)
pop()
    
}
}