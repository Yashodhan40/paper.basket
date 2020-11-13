class ground{
    constructor(x,y,w,h){
    var options={
        isStatic:true,
        //density:1.3
        }

    
      this.x=x;
      this.y=y;
      this.w=w;
      this.y=y;
      

      
      this.body=Bodies.rectangle(x,y,w,h, options);
      World.add(world,this.body);
      
    }
    display(){
        var groundPos=this.body.position;
        push();
        translate(groundPos.x,groundPos.y);
        //rectMODE(CENTER);
        fill("brown");
        
        rect(0,0,this.w,this.y);
        pop();
    }

      

}
