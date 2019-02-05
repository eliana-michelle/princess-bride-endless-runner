/*----- constants -----*/
const velocity = 150;
const gravity = 0.5;

/*----- app's state (variables) -----*/
let distance = 0;
let repaintTime = 0;
let running = requestAnimationFrame(scrollBackground);


/*----- cached element references -----*/
let game = document.getElementById('canvas').getContext('2d');

/*----- event listeners -----*/
// document.addEventListener('keydown', characterRun);
document.addEventListener('keydown', characterJump);
/*----- functions -----*/

function init(){
  // requestAnimationFrame(scrollBackground);
  scrollBackground();
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
    fire2.appear();
    // requestAnimationFrame(scrollBackground);
    game.restore();
  };

// function getDistanceTraveled(time){
//   let gapTime = time - repaintTime;
//   repaintTime = time;
//   let distanceTraveled = velocity * (gapTime / 1000);
//   return distanceTraveled;
// };

function characterJump(e){
    if(e.keyCode === 32){
      character.y = 40
      setTimeout(function(){
        character.y = 125
      }, 500)
    }
};

function checkForLoser(){
  if((fire.trackingX < 305 && fire.trackingX > 300 && character.y === 125) || (fire2.trackingX < 305 && fire2.trackingX > 300 && character.y === 125)){
    cancelAnimationFrame(running);
    console.log('loser');
  }
};

checkForLoser();
