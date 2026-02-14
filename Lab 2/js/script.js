//event listeners 
document.querySelector("#GuessBTN").addEventListener("click", guess);
document.querySelector("#ResetBTN").addEventListener("click", resetGame);

//generates random number
let randomNum = Math.floor(Math.random() * 99) + 1;
console.log("Random number is:", randomNum);
let guessCount = 0;
let maxNum = 7;


let wins = 0;
let losses = 0;

function guess(){
let userGuess = Number(document.querySelector("#userGuess").value);

if (userGuess > 99) {
    document.querySelector("#guessHighLow").textContent = "Error: Number must be 99 or lower!";
    document.querySelector("#guessHighLow").style.color = "red";
    return;
}

if (!userGuess) return;
guessCount ++;

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
    else{
        wins++;
        document.querySelector("#wins").textContent = wins;
        document.querySelector("#guessHighLow").textContent = "Correct You got it in less than 7 guess's!!" ;
        document.querySelector("#guessHighLow").style.color = "Black";
        document.querySelector("#guessHighLow").style.backgroundColor = "green";
        endGame();
        return;
    }

    if (guessCount > maxNum){
    losses++;
    document.querySelector("#losses").textContent = losses;
    document.querySelector("#guessHighLow").textContent = `Not Correct! The number was ${randomNum}`;
    document.querySelector("#guessHighLow").style.color = "red";
    document.querySelector("#guessHighLow").style.backgroundColor = "black";

    document.querySelector("#GuessBTN").disabled = true;
    endGame();
    return;
    }
}

function endGame() {
    document.querySelector("#GuessBTN").disabled = true;
    document.querySelector("#ResetBTN").style.display = "inline";
}

function resetGame() {

    randomNum = Math.floor(Math.random() * 99) + 1;
    guessCount = 0;

    document.querySelector("#userGuesses").textContent = "";
    document.querySelector("#guessHighLow").textContent = "";
    document.querySelector("#userGuess").value = "";

    document.querySelector("#GuessBTN").disabled = false;
    document.querySelector("#ResetBTN").style.display = "none";

    console.log("New random number:", randomNum); 
}