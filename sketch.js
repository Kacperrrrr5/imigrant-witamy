let dropdownVisible = false;
let bgImage;
let buttonWidth = 125;
let buttonHeight = 50;
let buttonY;
let button1X;
let button2X;
let dropdown;
let selectedLanguage = "Wybierz język";
let jezyk = ["Polski"];

function preload() {
  bgImage = loadImage('template1.png'); 
}

function setup() {
  createCanvas(1920, 1080);
  noLoop(); 
  buttonY = 630;
  button2X = 85;
  
  let dropdownX = 85;
  let dropdownY = 520;
  let dropdownWidth = 200; 
  let dropdownHeight = 30;
  
  dropdown = createSelect();
  dropdown.option('Wybierz język');
  dropdown.option('Polski');
  dropdown.position(dropdownX, dropdownY);
  dropdown.size(dropdownWidth, dropdownHeight);
}

function draw() {
  background(255);
  image(bgImage, 0, 0, width, height);

  drawButton(button2X, buttonY, buttonWidth, buttonHeight, "Rozpocznij", '#E30613');
}

function mousePressed() {
  if (isMouseOver(button2X, buttonY, buttonWidth, buttonHeight)) {
    window.open('https://www.wp.pl', '_self');
  }
}

function drawButton(x, y, w, h, label, baseColor) {
  let hoverColor = lerpColor(color(baseColor), color(0), 0.2);
  if (isMouseOver(x, y, w, h)) {
    fill(hoverColor);
  } else {
    fill(baseColor);
  }
  noStroke();
  rect(x, y, w, h);
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(label, x + w / 2, y + h / 2);
}

function isMouseOver(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}
