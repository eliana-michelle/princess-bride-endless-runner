/*----- constants -----*/


/*----- app's state (variables) -----*/


/*----- cached element references -----*/
let game = document.getElementById('canvas').getContext('2d');
let button = document.getElementById('button');

/*----- event listeners -----*/
document.addEventListener('keydown', characterJump);
button.addEventListener('click', render);

/*----- functions -----*/

function init(){
  game.globalAlpha = .5;
  ground.draw();
  sky.draw();
  character.add();
  fire.draw();
  game.globalAlpha = 1;
  game.font = '30pt MedievalSharp';
  game.fillText('Help Westley & Buttercup', 100, 50)
  game.font = '30pt MedievalSharp';
  game.fillText('Escape the Fire Swamp', 100, 95)
  game.font = '15pt MedievalSharp';
  game.fillText('Use the spacebar to jump over the obstacles as they appear', 20, 140)
  game.font = '15pt MedievalSharp';
  game.fillText('Click START to enter the fireSwamp', 175, 175)
};

function render(){
  game.interval = setInterval(buildWorld, 10);
};

function buildWorld(){
  ground.draw();
  ground.redraw();
  ground.move();
  sky.draw();
  sky.redraw();
  sky.move();
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
    }, 2000)
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
}
