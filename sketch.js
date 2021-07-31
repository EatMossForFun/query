var room,roomimg;

var player, playerImg;


function preload(){

roomimg = loadImage("./images/room1.png")

}




function setup(){
 createCanvas(displayWidth,displayHeight);
  

 //player sprite
  player = createSprite(400,110,20,20);

//room start map
room = createSprite(displayWidth/2,displayHeight/2,0,0)
room.addImage(roomimg)
room.scale =1

}







function draw() {

  background(0);

  
  





  drawSprites();
}
