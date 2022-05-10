class Square{
    constructor()   {
    let options = {
      isStatic:false,restitution:0.5,density:0.01
      
      
    };
    
    this.body = Bodies.rectangle(200, 200, 20, 20, options);
    this.w = 20;
    this.h = 20;
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke(255);
    fill("red");
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}


