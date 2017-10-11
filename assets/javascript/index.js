game.startgame();
ui.start();

document.onkeyup = function(event){
    if(game.lettersinsecretword.includes(event.key)){
        console.log(ui.msg(event.key));
    }
    game.lettersguessed.push(event.key);
    ui.guessesDiv.innerHTML = game.lettersguessed;
    ui.msg(game.lettersinsecretword);
}