var ui = {
    lettersDiv : document.getElementById("letters"),
    letterDiv: [],
    guessesDiv : document.getElementById("guesses"),
    msgDiv : document.getElementById("witty-message"),
    hangmanDiv : document.getElementById("hangman"),
    numguessesDiv : document.getElementById("numguesses"),
    debugDiv : document.getElementById("debug"),
    drawWordOnScreen:function(){
        game.lettersinsecretword.forEach((letter)=>{
            var div = document.createElement('div');
            div.innerHTML = letter;
            div.classList = "letter hide";
            div.dataset.letter = letter;
            this.lettersDiv.appendChild(div);
            this.letterDiv.push(div);
        });
    },
    msg: function(msg){
        this.msgDiv.innerHTML = msg;
    },
    show: function(el){
        el.classList.remove="hdie";
        el.classList="show";
    },
    start: function(){
        this.drawWordOnScreen();
        this.numguessesDiv.innerHTML = game.numguesses;
        this.debugDiv.innerHTML = game.lettersinsecretword;
    }
}