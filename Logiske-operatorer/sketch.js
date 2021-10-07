function setup() {
  createCanvas(400, 400);  
}  

function draw() {
background(200);  


if(mouseX < 200 && mouseY > 200 || mouseX > 200 && mouseY < 200){
  fill("red");
} else {
  fill("white")
}
  ellipse(mouseX,mouseY,40,40);
}