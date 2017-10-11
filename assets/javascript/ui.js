var ui = {
    letters : document.getElementById("letters"),
    drawWordOnScreen:function(){
        game.lettersinsecretword.forEach(function(letter) {
            var div = document.createElement('div');
            div.innerHTML = letter;
            div.classList = "letter";
            letters.appendChild(div);
        });
        // this.letters.innerHTML = game.lettersinsecretword;
    },
    start: function(){
        this.drawWordOnScreen();
    }
}
