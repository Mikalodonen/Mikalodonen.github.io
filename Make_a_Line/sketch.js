let xStart = 0
let yStart = 0
let xEnd = 0
let yEnd = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  strokeWeight(5)
}

function draw() {
  
  //placer doublt skrå streg ved background for noget sejt og fjern for fix

  background(225);
  
  if(mouseIsPressed){
    endXs = mouseX
    endYs = mouseY
  }
  line(startXs, startYs, endXs, endYs)
}

function mousePressed() {
  startXs = mouseX
  startYs = mouseY
}

