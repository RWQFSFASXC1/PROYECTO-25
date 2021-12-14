class Paper {
  
          constructor(x,y,width,height) {
               var options = {
                 
                    ' restitution ':0.3,
                ' density':1.2,
                 'friction':0,
                 
               }
               this.image=loadImage("paper.png")
               this.body = Bodies.rectangle(x,y,width,height,options);
               this.width = width;
               this.height = height;
               World.add(world, this.body);
             }
             display(){
               
               var angle=this.body.angle;
               push();
               translate(this.body.position.x,this.body.position.y);
               rotate(angle);
               rectMode(CENTER);
               fill(" black");
               strokeWeight(4)
               stroke("black")
               ellipse(0,0, this.width, this.height);
                pop();
             }
         }