/*----- constants -----*/


/*----- app's state (variables) -----*/
let score = 0;

/*----- cached element references -----*/
let game = document.getElementById('canvas').getContext('2d');
let button = document.getElementById('button');

/*----- event listeners -----*/
document.addEventListener('keydown', characterJump);
button.addEventListener('click', render);
button.addEventListener('click', scoreTimer);

/*----- functions -----*/

function init(){
  game.globalAlpha = .3;
  ground.draw();
  sky.draw();
  game.globalAlpha = 1;
  game.font = '30px MedievalSharp';
  game.fillText('Help Westley & Buttercup', 125, 50)
  game.font = '30px MedievalSharp';
  game.fillText('Escape the Fire Swamp', 135, 95)
  game.font = '20px MedievalSharp';
  game.fillText('Use the SPACEBAR to jump over the obstacles as they appear', 20, 140)
  game.font = '35px MedievalSharp';
  game.fillText('Click START to enter the Fire Swamp', 10, 200)
};

function render(){
  game.clearRect(0, 0, 600, 300);
  ground.draw();
  sky.draw();
  character.add();
  game.drawImage(bQuote.imgID, bQuote.x, bQuote.y)
  setTimeout(function(){
    game.drawImage(wQuote.imgID, wQuote.x, wQuote.y)
  }, 1000)
  setTimeout(function(){
    game.interval = setInterval(buildWorld, 10);
    button.removeEventListener('click', render);
  }, 2000)
};

function replay(){
  game.clearRect(0, 0, game.width, game.height)
}

function buildWorld(){
  sky.draw();
  sky.redraw();
  sky.move();
  ground.draw();
  ground.redraw();
  ground.move();
  game.fillStyle = 'white';
  game.font = '15px MedievalSharp';
  game.fillText('Score: ' + score, 450, 20)
  character.add();
  character.move();
  fire.draw();
  fire.spawn();
  checkCollision();
};

function characterJump (e) {
  if(e.keyCode === 32){
    character.y = 40;
    setTimeout(function(){
      character.y = 125;
    }, 1200)
  };
};

function checkCollision() {
  if (character.x > fire.x && character.x < fire.x + 20 && character.y === 125 && fire.x > 0){
    gameOver();
  }
};

function gameOver() {
  clearInterval(game.interval);
  game.font = '90pt MedievalSharp'
  game.fillText("Game Over", 0, 150)
  button.textContent = 'Play Again?'
  button.addEventListener('click', replay);
}

function scoreTimer(){
  let second = 0;
  let minute = 0;
  let timer = setInterval(function(){
    score = score + 100;
    second++;
    if(second === 60){
      minute++
      second = 0;
      score = score + 100;
    }
  }, 1000)
}
