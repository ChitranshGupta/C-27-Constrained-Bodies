class SlingShot{
    constructor (ba,bb){
        var options = {
            bodyA:ba,
            pointB:bb,
            stiffness:0.04,
            length:10
        }
        this.Sling=Matter.Constraint.create(options);
        World.add(world,this.Sling);


    }
    display(){
        if(this.Sling.bodyA){
        strokeWeight(4);
        line(this.Sling.bodyA.position.x,this.Sling.bodyA.position.y,this.Sling.pointB.x,this.Sling.pointB.y)
    }
}
    fly(){
        this.Sling.bodyA=null;
    }
}

