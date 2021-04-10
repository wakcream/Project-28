class Mango{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution:0,
            friction:1,
        }
        this.body = Bodies.circle(x,y,radius,options,0);
        this.radius = radius;
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        //circle(pos.x,pos.y,this.radius);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
    }
}