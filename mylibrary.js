function hitboxdetecion(o1,o2){
    if (o1.x-o2.x<o1.width/2+o2.width/2
      &&o2.x-o1.x<o1.width/2+o2.width/2
      &&o2.y-o1.y<o1.height/2+o2.height/2
      &&o1.y-o2.y<o1.height/2+o2.height/2) {
      return true
    }
  else{
  return false
  }
  
  
  
  
  }
  function boing(o1,o2){
    if (o1.x-o2.x<o1.width/2+o2.width/2
      &&o2.x-o1.x<o1.width/2+o2.width/2){
        o1.velocityX=o1.velocityX*-1
      }
  else if (o2.y-o1.y<o1.height/2+o2.height/2
    &&o1.y-o2.y<o1.height/2+o2.height/2){
    o1.velocityY=o1.velocityY*-1
  }
  }