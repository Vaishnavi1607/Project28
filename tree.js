class Tree{
    
    constructor(x,y,width,height) {
        var options = {
            isStatic:true
        }
        this.image = loadImage("tree.png")
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push()
        rectMode(CENTER);
        fill(200);
        stroke(200)
        rect(pos.x, pos.y, this.width, this.height);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,340,450);
        pop()
      }
    };


