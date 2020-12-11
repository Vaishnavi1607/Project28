class Stone{
  constructor(x,y,r)
  {
      var options ={
          isStatic:false,
          restitution:0,
         friction:1,
         density:1.2
      }
     
      this.x= x;
      this.y=y;
      this.r =r;

      this.body=Bodies.circle(this.x,this.y,this.r/2,options);
      World.add(world,this.body);

      this.image = loadImage("stone.png")
      
      
      
      
  }
  display(){
      var stonepos =this.body.position;
      push()
      rectMode(CENTER)
      fill(200);
      stroke(200);
      ellipse(stonepos.x,stonepos.y,this.r,this.r);  
      imageMode(CENTER)
      image(this.image,stonepos.x,stonepos.y,this.r+40,this.r+35);
     pop()
  }
  }

