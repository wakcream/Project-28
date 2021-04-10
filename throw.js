class Throw {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }

        this.bodyA = bodyA;
        this.pointB = pointB;
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }

    attach(body){
        this.throw.bodyA = body;
    }

    fly() {
        this.throw.bodyA = null;
    }


    display() {
        var pointA = this.bodyA;
        var pointB = this.pointB;
        strokeWeight(7);
        stroke(48, 22, 8);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}