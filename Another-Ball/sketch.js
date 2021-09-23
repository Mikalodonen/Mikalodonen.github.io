let xPos;
let yPos = 250
let xSpeed
let ySpeed

function setup() {
  createCanvas(WindowWidth, WindowHeight)
xSpeed = 7
ySpeed = 5
xPos = width / 2
}


function draw(){ 
  background(220);

  let radius = 100
  let diameter = 2 * radius

  cirkel(xPos - radius,diameter)

  xPos += xSpeed
  yPos += ySpeed

let ispastright = width < xPos + radius
let ispastleft = 0 > xPos

}