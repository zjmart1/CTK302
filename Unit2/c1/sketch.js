var mic;
var vol;
var c = 'green';
let x = 0 ;

function setup() {
  createCanvas(400, 400);


  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background(c);


  vol = (mic.getLevel().toFixed(2));


  if (vol > .10) {

    c = color(random(255), random(255), random(255));

    x = x + 5 ;
    if (x > width){
      x = 0 ;
    }
  }

  push() ;
  translate(x, 0) ;
  rect(100, 100, 50, 50) ;
  rect(75, 150, 100, 100) ;
  pop() ;

  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


}



function touchStarted() {
  getAudioContext().resume();
}
