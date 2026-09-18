function setup() {
  createCanvas(400, 400);
  background(220)

  let numRectangles = 14
  let rWidth = width/(numRectangles + 2)

  for(let x = 0; x < numRectangles; x = x + 1) {

    
    let rectHeight = (x+1) * rWidth
    let fillValue = map(x, 0, numRectangles-1, 0, 255)

    fill(fillValue)
    rect(rWidth + x * rWidth, height-rectHeight - rWidth, rWidth, rectHeight)

  }
}