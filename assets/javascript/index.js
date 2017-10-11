game.startgame();
ui.start();

document.onkeyup = function(event){
    var guessedLetter = event.key;
    // if the letter was already guessed, leave the loop
    if(game.lettersguessed.includes(guessedLetter)){
        ui.msg("You already guessed this letter");
    }
    // else if the letter hasn't been guessed, continute the keyup/game loop
    else {
        // push the new guessed letter into the games state
        game.lettersguessed.push(guessedLetter);
        // append the new guesses to the screen
        ui.guessesDiv.innerHTML = game.lettersguessed;
        // if the games secret word includes the guessed letter do these things
        if(game.lettersinsecretword.includes(guessedLetter)){
            ui.msg("Nailed IT");
            ui.letterDiv // this is an array of .letter els
                .filter(function(el){
                    return (el.dataset.letter === guessedLetter);
                })
                .map(ui.show);
        }
        // we get here if the player guessed wrong
        else {
            ui.msg("Wrong");
            game.numguesses--;
            ui.numguessesSpan.innerHTML = game.numguesses;
        }
    }

    // print out the game state
    ui.debugDiv.innerHTML = ui.pretty(game);
}