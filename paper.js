class paper{
    constructor(x,y,r){
        var options={
        isStatic:false,
        friction:0.5,
        density:1.2,
        restitution:0.3
        }
  
    
    
    
    this.y=y;
    this.x=x;
    this.r=r
    this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        

    World.add(world,this.body)
    
    }
display(){
    var paperpos=this.body.position;
    push();
    translate(paperpos.x,paperpos.y);
    //rectMODE(CENTER)
    fill("red");
    strokeWeight(3);
    stroke("blue");
    ellipse(0,0,this.r,this.r);
    pop();
   
}
}