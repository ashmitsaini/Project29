class Box {
  constructor(x, y, code) {
    var options = {
        'isStatic': false,
        'friction': 0.1,
        'restitution': 0.2,
        'density': 0.2

    }
    this.x = x;
    this.y = y;
    this.code = code;

    this.body = Bodies.rectangle(x, y, 25, 40, options);
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke("black");
    if(this.code === 1){
      fill(93, 100, 102);
    }
    if(this.code === 2){
      fill(111, 209, 183);
    }
    if(this.code === 3){
      fill(237, 176, 173);
    }
    if(this.code === 4){
      fill(82, 177, 204);
    }
    rect(0, 0, 25, 40);
    pop();
  }
};