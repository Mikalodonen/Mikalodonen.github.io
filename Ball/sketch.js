function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let y = 0;
let speed=1;
let gravity=0.2;


function draw(){ 
  ellipse(200,y,20,20);
  y=y+speed;
  speed=speed+gravity;
  
  if(y>400){
  //reverse the speed
    speed=-0.95 * speed;
  }
}