
var canvas,backgroundImage,playerCount,database,form,player,game;
var gameState = 0;

function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(400,400);
game = new Game();
game.getState();
game.start();
 
}

function draw(){
  
  
}


