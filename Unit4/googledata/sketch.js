var bubbles = [];

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  //let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM'; // this is KEY of the URL from the sheet
  let url = '1EFbadNFFr047Jywd6Cvr2prtxsG463b2cxvNixP71hY'; // this is KEY of the URL from the sheet
  //https://docs.google.com/spreadsheets/d/1EFbadNFFr047Jywd6Cvr2prtxsG463b2cxvNixP71hY/edit?usp=sharing
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Name, data[i].Game, data[i].Food)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background('red');

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }

}


// my Bubble class
class Bubble {

  constructor(Name, Game, Food) {
    this.Name = Name;
    this.Game = Game;
    this.Food = Food;
    this.pos = createVector(random(width), random(height));
    this.vel =  createVector(random(5), 0) ;

  }


  display() {
    //
    // if (this.shape == "Square") {
      // rect(this.pos.x, this.pos.y, 50, 50);
    // } else {
      // ellipse(this.pos.x, this.pos.y, 50, 50);
    // }
    //text("https://docs.google.com/forms/d/e/1FAIpQLSda07g94uR8oPs6uGUGK2DiPiwvdPo2rP2TCq9EzPjXeyE7ZQ/viewform?usp=sf_link", 400, 400) ;
    ellipse(this.pos.x, this.pos.y, 75, 75) ;
      text(this.Name, this.pos.x, this.pos.y-20);
    text(this.Game, this.pos.x, this.pos.y);
      text(this.Food, this.pos.x, this.pos.y+20);
  }

move() {
  this.pos.add(this.vel) ;
  if (this.pos.x > width) this.pos.x = 0 ;
}


}
