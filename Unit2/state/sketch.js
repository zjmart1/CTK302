let state = 0;


function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {

    case 0:
      background(100);
      text("state 0", 100, 100);

      for (let j = 0; j <= 400; j++) {
        for (let i = 0; i <= 400; i++) {
          fill(0, random(255), 0);
          rect(i * 40, j * 40, 50, 10);
        }
      }
          break;


          case 1:
            background('red');
          text("state 1", 100, 100);

          for (let j = 0; j <= 400; j++) {
            for (let i = 0; i <= 400; i++) {
              fill(200, 0, 0);
              rect(i * 40, j * 40, 50, 10);
            }
          }
          break;

        case 2:
          background('blue');
        text("state 2", 100, 100);

        for (let j = 0; j <= 400; j++) {
          for (let i = 0; i <= 400; i++) {
            fill(0, 0, 200);
            rect(i * 40, j * 40, 50, 10);
          }
        }
        break;

        case 3:
          background('green');
        text("state 3", 100, 100);

        for (let j = 0; j <= 400; j++) {
          for (let i = 0; i <= 400; i++) {
            fill(0, 0, random(255));
            rect(i * 40, j * 40, 50, 10);
          }
        }

        break;

        case 4:
          background('silver');
        text("state  4", 100, 100);

        for (let j = 0; j <= 400; j++) {
          for (let i = 0; i <= 400; i++) {
            fill(208, 118, 199);
            rect(i * 40, j * 40, 50, 10);
          }
        }

        break;

      }
  }

  function mouseReleased() {
    state = state + 1;
    if (state > 4) {
      state = 0;
    }
  }
