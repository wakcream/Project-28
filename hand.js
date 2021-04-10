class Hand {
    constructor(x, y, radius) {
        var options = {
            isStatic: true ,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,radius,options,0);
        this.radius = radius;
        //this.image = loadImage("stone.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;  
        //fill("white");
        //pos.x = mouseX;
        //pos.y = mouseY;
        circle(pos.x,pos.y,this.radius);
        //imageMode(CENTER);
        //image(this.image,pos.x,pos.y,50,50);
    }
}