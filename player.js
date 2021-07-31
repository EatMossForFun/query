


function draw(){



  //player movements
  if(keyDown("w")){
    player.y = player.y-5;
    
  }
  if(keyDown("a")){
    player.x = player.x-5;
    
  }
  if(keyDown("s")){
    player.y = player.y+5;
    
  }
  if(keyDown("d")){
    player.x = player.x+5;
    
  }


  //camera position
  camera.x = player.x;
  camera.y = player.y;

drawSprites();
}
