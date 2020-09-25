class Game{
constructor(){

}

getState(){
var gameState_ref = database.ref('gameState');
gameState_ref.on("value", function(data){gameState = data.val();})
}

update(state){
database.ref('/').update({gameState:state});
}

start(){
if(gameState === 0){
player = new Player();
player.getCount();
form = new Form();
form.display();
}

}

}