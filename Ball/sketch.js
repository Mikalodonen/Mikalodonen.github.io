function setup() {
  createCanvas(400, 500);
}

let y = 0;
let speed=1;
let gravity=0.5;


function draw(){ 
  background(220);
  ellipse(200,y,20,20);
  y=y+speed;
  speed=speed+gravity;
  
  if(y>height-9){
  //reverse the speed
    speed=-0.75 * speed;
  }
}