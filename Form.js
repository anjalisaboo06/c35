class Form{
constructor(){

}
display(){
    var title = createElement('h2');
    title.html('Car Racing Game');
    title.position(450, 20);

    var input = createInput("name:");
    
    var button = createButton('player');
    
    var greeting = createElement('h3');
    input.position(430, 160);
    button.position(430, 200);

    button.mousePressed(function(){
    input.hide();
    button.hide();
    var name = input.value();
    playerCount+=1;

    player.updateName(name);
    player.updateCount(playerCount); 
    greeting.html("Hello "+ name);
    greeting.position(130, 160);


});

}


}