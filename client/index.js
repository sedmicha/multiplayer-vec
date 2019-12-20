const socket = io.connect('http://2f9ce1a4.ngrok.io/');

socket.on('draw', (data) => {
  console.log('got draw');
  fill(255, 0, 0);
  ellipse(data.x, data.y, 20, 20);
});

function setup() {
  createCanvas(640, 480);
}
  
function draw() {
  if (mouseIsPressed) {
    fill(0, 0, 255);
    ellipse(mouseX, mouseY, 20, 20);
    socket.emit('draw', { x: mouseX, y: mouseY });
  }
}