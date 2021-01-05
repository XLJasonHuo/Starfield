var speed;
var stars = [];

function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  } 
}
