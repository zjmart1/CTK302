let state = 0 ;
let timer = 0 ;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(24);
}

function draw() {

  switch(state) {
    case 0:
    background('grey') ;
    text("What did the microwave say to the other microwave?", width/2) ;
    break;

    case 1:
    background('yellow') ;
    text("Is it just me, or is it hot in here?", width/2) ;
    break;
  }

  timer++ ;
  if (timer > 3 * 60) ;
    state++ ;
    if (state > 1) {
      state = 0 ;
      timer = 0 ;
    }
}
