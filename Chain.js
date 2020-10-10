class Chain{
    constructor (ba,bb){
        var options = {
            bodyA:ba,
            bodyB:bb,
            stiffness:0.04,
            length:10
        }
        this.Chain=Matter.Constraint.create(options);
        World.add(world,this.Chain);


    }
    display(){
        strokeWeight(4);
        line(this.Chain.bodyA.position.x,this.Chain.bodyA.position.y,this.Chain.bodyB.position.x,this.Chain.bodyB.position.y)
    }

}
