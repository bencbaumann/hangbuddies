var game = {
    numguesses: 7,
    secretword: "",
    wins: 0,
    losses: 0,
    dictionary:["turkey", "stuffing", "potatoes", "yams", "gravy", "butter"],
    lettersguessed:[],
    lettersinsecretword:[],
    
    getsecretwordfromdictionary : function() {
        const min = 0;
        this.secretword = this.dictionary[Math.floor(Math.random() * (this.dictionary.length - min)) + min];
    },
    startgame: function(){
        this.numguesses = 7;
        this.getsecretwordfromdictionary();
        this.lettersguessed = [];
        this.getlettersfromsecretword();

    },
    getlettersfromsecretword : function(){
        this.lettersinsecretword=this.secretword.split("");
    },
    isletterinsecretword : function(){
        
    }


}

