let state = 0 ;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER)
}

function draw() {

  switch(state) {
    case 0:
    background('grey') ;
    text("Hear about the new restaurant called Karma?", width/2, height/2)
    break;

    case 1:
    background('yellow') ;
    text("There’s no menu: You get what you deserve.", width/2, height/2)
    break;
  }

}

function mouseReleased(){
  state++ ;
  if (state > 1);
    state = 0 ;
}
