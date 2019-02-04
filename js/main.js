/*----- constants -----*/
const velocity = 50;
const gravity = 0.5;
/*----- app's state (variables) -----*/
let distance = 0;
let repaintTime = 0;
let obstaclesOnScreen = [];


/*----- cached element references -----*/
let game = document.getElementById('canvas').getContext('2d');
// let ground = document.getElementById('ground');
// let character = document.getElementById('character');

/*----- event listeners -----*/
// document.addEventListener('keydown', characterRun);
document.addEventListener('keydown', characterJump);
document.addEventListener('keyup', characterDrop);
/*----- functions -----*/

function init(){
  requestAnimationFrame(scrollBackground);
};

function scrollBackground(time){
    distance -= getDistanceTraveled(time);
    if(distance < -ground.imgID.width){
      distance = 0;
      }
    game.clearRect(0,0, 600, 300);
    game.save();
    game.translate(distance, 0);
    ground.draw();
    ground.redraw();
    sky.draw();
    sky.redraw();
    character.animate();
    fire.appear();
    requestAnimationFrame(scrollBackground);
    game.restore();
  };

function getDistanceTraveled(time){
  let gapTime = time - repaintTime;
  repaintTime = time;
  let distanceTraveled = velocity * (gapTime / 1000);
  return distanceTraveled;
};

// function createObstacle(time){
//   if()
// }


// function characterRun(e){
//   if(e.keyCode === 39){
//     requestAnimationFrame(scrollBackground);
//   };
// };

function characterJump(e){
    if(e.keyCode === 32){
      character.y = 40
      setTimeout(function(){
        character.y = 125
      }, 2500)
    }
};

// function characterDrop(e){
//   if(e.keyCode === 32){
//     character.y = 125;
//   }
// }
