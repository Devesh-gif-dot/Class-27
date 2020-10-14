class Chain{
    
    constructor(BodyA,BodyB){
        var options ={
            bodyA : BodyA,
            bodyB : BodyB,
            length: 50,
            stiffness: 10  
       
            }
       
            
            this.constraint =  Constraint.create(options);
            World.add(world,this.constraint);
            console.log(this.constraint.bodyA);
    }
    
    display(){
        var posA = this.constraint.bodyA.position;
        var posB = this.constraint.bodyB.position;
        line(posA.x,posA.y,posB.x,posB.y);
    }
}