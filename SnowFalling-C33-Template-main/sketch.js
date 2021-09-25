var snow, snowimg, snowImg;

function preload(){
  snowimg=loadImage(snow4.webp);
  backgroundimg=loadImage(snow3.jpg)
}
function setup() {
  createCanvas(800,400);
  snowImg=createSprite(200, 200, 800, 400);
  snowImg.addImage(snowimg);

}

function draw() {
  
  drawSprites();
}