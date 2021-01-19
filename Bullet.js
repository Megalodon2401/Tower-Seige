class Bullet {
    constructor(x,y, radius){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.width = width;
    this.height = height;
    this.radius = radius;
    //this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
      this.image = loadImage("polygon.png");
      this.trajectory = [];
    }
  
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();
  
      if(this.body.velocity.x> 10 && this.body.position.x>200){
          var position = [this.body.position.x,this.body.position.y]
          this.trajectory.push(position);
      }
        for(var i=0; i < this.trajectory.length; i++){
          image(this.smokeimage, this.trajectory[i][0],this.trajectory[i][1]);
        }
  
    }
  }