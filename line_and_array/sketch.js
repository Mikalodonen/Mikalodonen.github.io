let startXs = []//[0, 20, 50]
let startYs = []//[0, 10, 60]
let endXs = []//[0, 200, 300]
let endYs = []//[0, 150, 375]

function reset() {
    startXs = []
    startYs = []
    endXs = []
    endYs = []
}

function setLast(x, y) {
    let lastIndex = endXs.length - 1
    endXs[lastIndex] = x
    endYs[lastIndex] = y
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    strokeWeight(5)
}

function draw() {

    //placer doublt skrå streg ved background for noget sejt og fjern for fix

    background(225);

    if (mouseIsPressed) {
        setLast(mouseX, mouseY)
    }
    for (let i = 0; i < endXs.length; i++) {
        line(startXs[i], startYs[i], endXs[i], endYs[i])
    }
}

function mousePressed() {
    startXs.push(mouseX)
    startYs.push(mouseY)
    endXs.push(mouseX)
    endYs.push(mouseY)
}
function keyPressed() {
    if (key == "e") {
        reset()
    }
}