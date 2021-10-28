function setup() {
  //createCanvas(400, 400);
  createCanvas(windowWidth, windowHeight)
  background(255);
}

//tgen en linje

function draw() {
  stroke(194, 2, 2);
  if (mouseIsPressed == true) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  strokeWeight(10)

  }

  //fjern linjen igen
  
  if(keyIsPressed == true){
background(255);
  }
}