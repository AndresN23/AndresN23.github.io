//event listeners 
document.querySelector("#GuessBTN").addEventListener("click", guess);

//generates random number
let randomNum = Math.floor(Math.random() * 99) + 1;
let guessCount = 0;

function guess(){
let userGuess = document.querySelector("#userGuess").value;
let guessHighLow = document.querySelector("#guessHighLow").value;
    //value is only for input emlements

    //document.querySelector("#userGuesses").textContent += userGuess + " "; same as the next line 
    document.querySelector("#userGuesses").textContent += ` ${userGuess}` ;
    document.querySelector("#userGuesses").style.color = "red";
    document.querySelector("#userGuesses").style.backgroundColor = "yellow";


    if (userGuess > randomNum){
        document.querySelector("#guessHighLow").textContent =  "High" ;
        document.querySelector("#guessHighLow").style.color = "blue";
        document.querySelector("#guessHighLow").style.backgroundColor = "green";
        
    }
    else if (userGuess < randomNum){
        document.querySelector("#guessHighLow").textContent = "Low" ;
        document.querySelector("#guessHighLow").style.color = "blue";
        document.querySelector("#guessHighLow").style.backgroundColor = "green";
    }
    else if (userGuess == randomNum){
        document.querySelector("#guessHighLow").textContent = "Correct" ;
        document.querySelector("#guessHighLow").style.color = "blue";
        document.querySelector("#guessHighLow").style.backgroundColor = "green";
    }

}