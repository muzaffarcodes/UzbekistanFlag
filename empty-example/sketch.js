function setup() {
  createCanvas(1200, 600);
}


// Uzbekistan Flag
function draw() {
  background(255);

  // Draw Blue

  fill(0,56,168);
  rect(0,0,width,height / 3);

  // Draw White

  fill(255);
  rect(0,height / 3,width,height / 3);

  // Draw Red stripes
  
  fill(206,17,38);
  rect(0,height / 3 - 5,width,5);
  rect(0,(2 * height) / 3,width,5);

  // Draw Green

  fill(34,177,76);
  rect(0,(2 * height) / 3 + 5,width,height / 3);

  // Crescent Moon
  
  fill(255);
  circle(100,90,160);
  fill(0,56,168);
  stroke(0,56,168);
  circle(125,90,155);

  // 12 stars
  fill(255);
  
  star(150, 150, 20, 6, 5); // 1-star
  star(200, 150, 20, 6, 5); // 2-star
  star(250, 150, 20, 6, 5); // 3-star
  star(300, 150, 20, 6, 5); // 4-star
  star(350, 150, 20, 6, 5); // 5-star

  star(200, 100, 20, 6, 5); // 6-star
  star(250, 100, 20, 6, 5); // 7-star
  star(300, 100, 20, 6, 5); // 8-star
  star(350, 100, 20, 6, 5); // 9-star

  star(250, 50, 20, 6, 5); // 10-star
  star(300, 50, 20, 6, 5); // 11-star
  star(350, 50, 20, 6, 5); // 12-star


}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  let firstCornerAngle = HALF_PI;

  beginShape();
  for(let a = firstCornerAngle; a < TWO_PI + firstCornerAngle; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
