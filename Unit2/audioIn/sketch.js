var mic;
var vol;
var c = 'green';
let x = 0 ;

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}


function draw() {
  background(c);


  vol = (mic.getLevel().toFixed(2));


  if (vol > .10) {

    c = color(random(255), random(255), random(255));
  }


  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);

  rect(vol * 100, 100, 50, 50);
  rect(vol * 300, 150, 50, 50);

  x = map(vol, 0, .2, 0, width) ;
  rect(x, 200, 50, 50);

}



function touchStarted() {
  getAudioContext().resume();
}
