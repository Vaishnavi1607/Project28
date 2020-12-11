
    class Mango{
    constructor(x,y,r)
    {
        var options ={
            isStatic:true,
            restitution:0,
           friction:1,
            // density:1.2
        }
       
        this.x= x;
        this.y=y;
        this.r =r;

        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);

        this.image = loadImage("mango.png")
        
        
        
        
    }
    display(){
        var mangopos =this.body.position;
        push()
        rectMode(CENTER)
        fill(200);
        stroke(200);
        ellipse(mangopos.x,mangopos.y,this.r,this.r);  
        imageMode(CENTER)
        image(this.image,mangopos.x+10,mangopos.y,62,60);
       pop()
    }
    }