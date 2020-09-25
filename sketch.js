var form, game, player;
var database;
var gameState = 0;
var playerCount = 0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
 game = new Game();
 game.getState()
 game.start();

}

function draw(){
  background("white");
  
    
    drawSprites();
  
}



