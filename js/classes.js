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

class Sprite extends Scroll {
  constructor (x, y, imgID, width, height){
    super(x, y, imgID);
    this.width = width;
    this.height = height;
  }
};

class Player extends Sprite {
    constructor (x, y, imgID, width, height, sourceWidth, sourceHeight){
      super(x, y, imgID, width, height);
      this.sourceWidth = sourceWidth;
      this.sourceHeight = sourceHeight;
      this.sourceX = 0;
      this.sourceY = 0;
    }
    animate(){
      game.drawImage(this.imgID, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x - distance, this.y, 100, 100)
    };
    // updateImage(){
    //   let currentFrame = 0;
    //   currentFrame = ++currentFrame % 2;
    //   sou
    // }
};

let character = new Player (50, 125, 'character', 100, 100, 100, 100)

/*----- obstacles -----*/
class Obstacles extends Sprite {
  constructor (x, y, imgID, width, height){
    super(x, y, imgID, width, height);
  }
  appear(){
    game.drawImage(this.imgID, this.x + distance, this.y);
  };
};

let fire = new Obstacles (601, 160, 'fire', 100, 100);
let fire2 = new Obstacles(1000, 160, 'fire', 100, 100);
