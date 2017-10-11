game.startgame();
ui.start();

document.onkeyup = function(event){
    var guessedLetter = event.key;
    if(game.lettersinsecretword.includes(event.key)){
        ui.msg("Nailed IT");
    }
    game.lettersguessed.push(event.key);
    ui.guessesDiv.innerHTML = game.lettersguessed;
    ui.msg(game.isletterinsecretword(guessedLetter));
    if(game.isletterinsecretword(guessedLetter)){
        ui.letterDiv // this is an array of .letter els
            .filter(function(el){
                return (el.dataset.letter === guessedLetter);
            })
            .map(function(el){
                ui.show(el);
            });
            
    }
}