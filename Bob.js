class Bob {
    constructor(x, y, radius) {
        var options ={
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
            
        World.add(world, this.body);
    }
    display(){
        var bobpos = this.body.position;
        push();
        translate(bobpos.x,bobpos.y);
        ellipseMode(CENTER);
        fill("red");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }

 }