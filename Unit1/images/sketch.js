let juicewrld;
let blackhawks;
let pizza;


function setup() {
  createCanvas(800, 800);
    juicewrld = loadImage("assets/juicewrld.jpg");
    blackhawks = loadImage("assets/blackhawks.jpeg");
    pizza = loadImage("assets/pizza.jpeg");
}

function draw() {
  background('white')
  image(juicewrld, width /2, height /2, 200, 200);
  image(blackhawks, width /2, height /2 -200, 200, 200);
  image(pizza, width /2, height /2 +200, 200, 200);

}
