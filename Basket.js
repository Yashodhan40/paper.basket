class basket{
    constructor(x,y){
    var options={
        isStatic:true,
        //density:1.3
    }
    this.x=x;
    this.y=y;
    this.basketWidth=200;
    this.basketHeight=100;
    this.wallThickness=20;
    this.angle=0;

    this.bottBody=Bodies.rectangle(this.x,this.y,this.basketWidth,this.wallThickness,options)
    this.leftWallBody=Bodies.rectangle(this.x-this.basketWidth/2,this.y-this.basketHeight/2,this.wallThickness,this.basketHeight,options);
    Matter.Body.setAngle(this.leftWallBody,this.angle);
    this.rightWallBody=Bodies.rectangle(this.x+this.basketWidth/2,this.y-this.basketHeight/2,this.wallThickness,this.basketHeight,options);
    Matter.Body.setAngle(this.rightWallBody,-1*this.angle);
    World.add(world,this.bottBody);
    World.add(world,this.leftWallBody);
    World.add(world,this.rightWallBody);
    }
    display(){
        var posBott=this.bottBody.position;
        var leftPos=this.leftWallBody.position;
        var rightPos=this.leftWallBody.position;

        push();
        translate(leftPos.x,leftPos.y);
        angleMode(RADIUS);
        fill(255);
        stroke(255);
        rotate(this.angle);
        rect(0,0,this.wallThickness,this.basketHeight);
        pop();

        push();
        translate(rightPos.x,rightPos.y);
        angleMode(RADIUS);
        fill(255);
        stroke(255);
        rotate(-1*this.angle);
        rect(0,0,this.wallThickness,this.basketHeight);
        pop();

        push();
        translate(posBott.x,posBott.y);
        angleMode(RADIUS);
        fill(255);
        stroke(255);
        rotate(this.angle);
        rect(0,0,this.wallThickness,this.basketHeight);
        pop();





    }
}