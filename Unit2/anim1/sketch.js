let x = 0 ;


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);
  textSize(100)
  text('Batman', x, height/2);
  x = x + 7 ;
  if (x > width) {
    x = 300 ;
  }

}
