console.log("hello world! (used to be $1)")
console.log("this is my poop page")


function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    //background(200)
    rectMode(CENTER)
    rect(mouseX, mouseY, 50, 50)
}

function windowResized() {
    resizeCanvas
    (windowWidth,
    windowHeight)
}