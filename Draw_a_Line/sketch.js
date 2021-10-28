function setup() {
  //createCanvas(400, 400);
  createCanvas(windowWidth, windowHeight)
  background(255);
}

//tgen en linje

function draw() {
  stroke(0);
  if (mouseIsPressed == true) {
    line(mouseX, mouseY, mouseX, mouseY);
  strokeWeight(10)
  //fjern linjen når der tegnes igen
    
    
  }
}