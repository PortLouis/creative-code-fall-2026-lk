function setup() {
  createCanvas(400, 400);
  background(220)

  let numCircles = 7
  let circleSize = 25
  let inBetween = circleSize
  let outside = circleSize

    for(let i = 0; i < numCircles; i = i + 1){
      circle(outside * 2 + (i * circleSize) + (i * inBetween), height/3, circleSize)

  
  }
}

