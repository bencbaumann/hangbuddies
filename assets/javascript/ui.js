var ui = {
    lettersDiv : document.getElementById("letters"),
    guessesDiv : document.getElementById("guesses"),
    msgDiv : document.getElementById("witty-message"),
    hangmanDiv : document.getElementById("hangman"),
    numguessesDiv : document.getElementById("numguesses"),
    drawWordOnScreen:function(){
        game.lettersinsecretword.forEach((letter)=>{
            var div = document.createElement('div');
            div.innerHTML = letter;
            div.classList = "letter";
            this.lettersDiv.appendChild(div);
        });
    },
    msg: function(msg){
        this.msgDiv.innerHTML = msg;
    },
    start: function(){
        this.drawWordOnScreen();
        this.numguessesDiv.innerHTML = game.numguesses;
    }
}