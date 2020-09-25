class Player{
constructor(){

}
getCount(){
var playerCount_ref = database.ref('playerCount');
playerCount_ref.on('value', function(data){playerCount=data.val();})
}

updateCount(count){ 
database.ref('/').update({playerCount:count});
}

updateName(name){
var playerIndex = "player"+playerCount;
database.ref(playerIndex).set({name:name});

}
 
}