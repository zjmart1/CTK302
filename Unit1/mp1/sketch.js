function setup() {
  createCanvas(1000, 1000);
  background(0,50,150);
  //print(mouseIsPressed);
}

function draw() {

if (mouseIsPressed){
  fill(255,255,255);
  ellipse(975, 100, 175, 175);

  fill(255, 0, 0);
  triangle(540, 255, 522, 280, 556, 280)

  fill(255, 0, 0);
  triangle(450, 255, 432, 280, 466, 280)

  fill(8, 8, 8);
  rect(460, 385, 80, 40)

  fill(150, 150, 150);
  rect(1, 560, 1000, 150);

  fill(240, 177, 84);
  triangle(745, 370, 735, 340, 755, 340)

  fill(92, 64, 22)
  line(560, 320, 565, 370)





} else {


  fill(255,255,0);
  ellipse(975, 100, 175, 175);

  fill(8, 8, 8);
  rect(415, 465, 10, 100);

  fill(8, 8, 8);
  rect(575, 465, 10, 100);

  fill(8, 8, 8);
  line(250, 350, 375, 325);

  fill(8, 8, 8);
  line(625, 325, 750, 350);

  fill(33, 125, 25);
  rect(1, 560, 1000, 150);

  fill(232, 206, 135);
  ellipse(500, 350, 300, 300);

  fill(8, 8, 8);
  arc(498, 425, 70, 70, PI, TWO_PI, OPEN);

  fill(255)
  ellipse(450, 270, 40, 40);

  fill(8, 8, 8);
  ellipse(450, 270, 10, 10);

  fill(255);
  ellipse(540, 270, 40, 40);

  fill(8, 8, 8);
  ellipse(540, 270, 10, 10);

  fill(255, 255, 156);
  square(480, 320, 40)

}


  print(mouseIsPressed);

}
