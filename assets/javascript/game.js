 var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var Wins = 0;
    var Losses = 0;
    var guessesLeft = 10;
    var ltrsGuessed = " ";
    var theLetter; 

    // var ltrarray = chosenWord.split("");
    function getRandomLetter(){
      var chosenLetter = letters[Math.floor(Math.random() * letters.length)];
          console.log(chosenLetter);
          theLetter = chosenLetter;
          return chosenLetter;
    }


    getRandomLetter();
    
       
     
    // This function is run whenever the user presses a key.
    document.onkeyup = function (event) {

      // Determines which key was pressed.
         var userGuess = event.key;
                   
         ltrsGuessed += userGuess + ", ";


                
                   
          if ((guessesLeft > 0) && (userGuess != theLetter)){
            guessesLeft--;
          }
          else if ((guessesLeft === 0) && (userGuess != theLetter)){
            Losses++;
            guessesLeft = 10;         
            ltrsGuessed = " ";
            getRandomLetter();
          } else if ((guessesLeft > 0) && (userGuess == theLetter)){
                Wins++;
                guessesLeft= 10;      
                ltrsGuessed = " ";
                getRandomLetter();
             } 

            initialize();
     
 }


function initialize(){

      var displayText = "Wins: " + Wins + "<br>Losses: " + Losses + "<br>Guesses Left: " + guessesLeft + "<br>Your Guesses so far: " + ltrsGuessed;

      document.getElementById("display").innerHTML = displayText;

   }  
     
