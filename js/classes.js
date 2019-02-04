class Scroll {
  constructor (x, y, imgID){
    this.x = x;
    this.y = y;
    this.imgID = document.getElementById(imgID);
  }
  draw(){
    game.drawImage(this.imgID, this.x, this.y)

  }
  redraw(){
    game.drawImage(this.imgID, this.imgID.width - 1, this.y)
  }
};

let ground = new Scroll (0, 0, 'ground');
let sky = new Scroll (0, 0, 'sky');

/*----- players -----*/

class Players extends Scroll {
  constructor (x, y, imgID, sourceWidth, sourceHeight){
    super(x, y, imgID);
    this.sourceWidth = sourceWidth;
    this.sourceHeight = sourceHeight;
  }
  animate(){
    game.drawImage(this.imgID, 0, 0, this.sourceWidth, this.sourceHeight, this.x - distance, this.y, 100, 100)
  }
  };

let character = new Players (50, 125, 'character', 100, 100)

/*----- obstacles -----*/
class Obstacles extends Scroll {
  constructor (x, y, imgID){
    super(x,y,imgID)
  }
  appear(){
    game.drawImage(this.imgID, this.x + distance, this.y);
  };
};

let fire = new Obstacles (400, 50, 'fire')
