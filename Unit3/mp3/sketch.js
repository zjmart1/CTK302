let cars = [];
let frogPos;
let state = 0 ;
let timer =  0 ;
let maxCars = 7 ;
let maxTimer = 15 ;
let fly;
let swamp;
let frog;
let angryfly;
let happyfrog;



function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn an object
  textSize(48) ;
  fly = loadImage('fly.jpeg');
  swamp = loadImage('swamp.jpeg');
  frog = loadImage('frog.jpeg')
  angryfly = loadImage('angryfly.jpeg')
  happyfrog = loadImage('happyfrog.jpeg')

  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());

  }
  frogPos = createVector(width / 2, height - 100);


}

function draw() {

  switch (state) {
    case 0:
    background(swamp) ;
    fill('white') ;
    textSize(48) ;
    text("Welcome to Fly Catcher", width/2-300, height/2) ;
    text("Click to Begin", width/2-200, height/2+200);
        // image() ;
    break;

    case 1:
    game();
    timer++ ;
    if (timer >  maxTimer * 60){
      timer = 0;
      state = 3 ;
    }
    break;

    case 2:
    background(happyfrog);
    fill('green');
    text('YOU WIN!', 100, 100) ;
    break;

    case 3:
    background(angryfly) ;
    fill('red') ;
    text("YOU LOSE", width/2-110, height/2-95) ;
    fill('red') ;
    text('Click to Play Again', width/2-200, height/2+100) ;
    break;
  }
}

function mouseReleased() {
  switch (state) {
    case 0:
    state = 1 ;
    break ;

    case 2:  //they won, and clicked to play again
    resetTheGame();
    state = 0 ;
    break ;

    case 3:
    resetTheGame();
    state = 0 ;
    break ;
  }
}
function resetTheGame() {
  timer = 0 ;
  cars = [] ;
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());

  }

}
function game() {
  background(swamp);

  // do some actions on the object
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }

  }

  if(cars.length == 0) {
    state = 2 ;
  }
  checkForKeys();

  fill('green');
  image(frog, frogPos.x, frogPos.y, 75, 75);
}
function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

}


// Car class

class Car {

  // constructor and attributes

  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(random(255), random(255), random(255));
    this.width = random(30, 70);

  }
  // methods
  display() {
    fill(this.col);
    image(fly, this.pos.x, this.pos.y, this.width, 25);
    //textSize(this.width) ;
    //text("WOOHOO", this.pos.x, this.pos.y);

  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
