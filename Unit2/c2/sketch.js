let state = 0 ;
let mic;
let vol;

function setup() {
  createCanvas(500, 500);
  textAlign ()


  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

vol = (mic.getLevel()).toFixed(2);



  switch(state){

    case -1:
    background(100);
    text("click to start", width/2, height/2);


    case 0 :
    text("SHHHHHH!!!", width/2, height/2) ;
    if (vol > .2) {
      state = 1 ;
    }

    break ;

    case 1 :
    text("QUIET DOWN" , width/4, height/4) ;
    break;
  }


  }
  function mouseReleased() {
    if (state == -1){

    }
}
