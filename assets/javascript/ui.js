var ui = {
    lettersDiv : document.getElementById("letters"),
    letterDiv: [],
    guessesDiv : document.getElementById("guesses"),
    msgDiv : document.getElementById("witty-message"),
    hangmanDiv : document.getElementById("hangman"),
    numguessesSpan : document.getElementById("numguesses"),
    debugDiv : document.getElementById("debug"),
    drawWordOnScreen:function(){
        game.lettersinsecretword.forEach((letter)=>{
            let div = document.createElement('div');
            div.innerHTML = "_";
            div.classList = "letter";
            div.dataset.letter = letter;
            this.lettersDiv.appendChild(div);
            this.letterDiv.push(div);
        });
        //Adds an empty div, so the parent container doesn't collapse
        let div = document.createElement('div');
        div.classList='clearfix';
        this.lettersDiv.appendChild(div);

    },
    msg: function(msg){
        this.msgDiv.innerHTML = msg;
    },
    show: function(el){
        el.innerHTML = el.dataset.letter;
    },
    pretty: function(json){
        return `<pre>${JSON.stringify(game, null, 2)}</pre>`;
    },
    start: function(){
        this.drawWordOnScreen();
        this.numguessesSpan.innerHTML = game.numguesses;
        this.debugDiv.innerHTML = this.pretty(game);
    }
}