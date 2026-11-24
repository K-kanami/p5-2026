// 最終課題を制作しよう
let osc;
let notes =[
  261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88,523.35
];
function setup(){
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator("triangle");
}

function draw(){
  background(255);

  fill(255);
  stroke(0);

  for(let i = 0; i < 8; i++){
    rect(i * 80, 100, 80, 200);
  }
}

function mousePressed(){
  userStartAudio();

  for(let i = 0; i < 8; i++){
    if(mouseX >= i * 80 &&
       mouseX < i * 80 + 80 &&
       mouseY >= 100 &&
       mouseY < 300){

      osc.freq(notes[i]);
      osc.amp(0.2, 0.05);
      osc.start();
    }
  }
}

function mouseReleased() {
  osc.amp(0, 0.1);
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}