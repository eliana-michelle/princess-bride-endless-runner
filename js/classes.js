class Scroll {
  constructor (x, y, imgID, speedX){
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.imgID = document.getElementById(imgID);
  }
  draw(x,y){
    game.drawImage(this.imgID, this.x, this.y)
  }
  redraw(x,y){
    game.drawImage(this.imgID, this.x + 601, this.y)
  }
  move(){
    this.x += this.speedX;
    if(this.x === -(this.imgID.width)){
      this.x = 0;
    }
  }
};

let ground = new Scroll (0, 0, 'ground', -1);
let sky = new Scroll (0, 0, 'sky', -1);
let wQuote = new Scroll(100, 80, 'westley', 0)
let bQuote = new Scroll(60, 95, 'buttercup',0)

/*----- players & obstacles -----*/

class Sprite extends Scroll {
  constructor (x, y, imgID, speed, width, height, sourceW, sourceH){
    super(x, y, imgID, speed);
    this.width = width;
    this.height = height;
    this.sourceW = sourceW;
    this.sourceH = sourceH;
    this.sourceX = 0;
    this.sourceY = 0;
  }
  add(){
    game.drawImage(this.imgID, this.sourceX, this.sourceY, this.sourceW, this.sourceH, this.x, this.y, 100, 100)
  };
  spawn(){
    this.x += this.speedX;
    if(this.x === -40){
      let min = 200;
      let max = 601;
      this.x = Math.floor(Math.random() * (max - min + 1))+ min;
    }
  };
};

let character = new Sprite (50, 125, 'character', 0, 100, 100, 100, 100)
let fire = new Sprite (601, 160, 'fire', -1, 90, 90, 100, 100);
