let numX= 3;
let numY= 3;
let bs= [];

function setup(){
  createCanvas(400, 400); 
  for(let i= 0; i< numX ; i= i + 1){
    for(let j= 0; j< numY ; j= j +1 ){
      //put in []list
      //xxx.push(new item)
      bs.push(new Ball(i* width/ numX+ width/ numX/ 2,
                      j* height/ numY+ height/ numY/ 2));
    }
  }
}

function draw(){
  background(mouseX, mouseY, 200);
  //xxx.foreach((v))=>{v.display();});
  bs.forEach((v)=>{
    v.display();
  });
}

class Ball{
  constructor(x, y, s =random (20, 50)){
    this.x= x;
    this.y= y;
    this.size= s;
    this.movex = random(-3.0, 4.0);
    this.movey = random(-5.0, 2.0);
  }
  // 能力為何
  display(){
    this.selfbounce();
    this.bounce();
    this.move();
    circle(this.x,this.y,this.size);
  }
  move(){
    this.x = this.x + this.movex;
    this.y = this.y + this.movey;
  }
//彈牆壁
  bounce(){
    if (this.y-this.size/2<0){
      this.movey = -1*this.movey;
    }
    if (this.y+this.size/2>height){
      this.movey = -1*this.movey;
    }
    if (this.x-this.size/2<0){
      this.movex = -1*this.movex;
    }
    if (this.x+this.size/2>width){
      this.movex = -1*this.movex;
    }
  }
//自己彈
  selfbounce(){
    bs.forEach((nb)=>{
      if (nb === this){
        console.log('a');
      }else{
        if (abs(this.x-nb.x)<this.size && 
            dist(this.x,this.y,nb.x,nb.y)<this.size)
          {this.movex=-1*this.movex;
           }
        if (abs(this.y-nb.y)<this.size&& 
            dist(this.x,this.y,nb.x,nb.y)<this.size)
          {this.movey=-1*this.movey;
           }
      }
      
      });
  }
}