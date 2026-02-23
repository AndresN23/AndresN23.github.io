let balance = 100;
const symbols = ["🍒", "7️⃣", "🍫"];

const images = {
    idle: "img/lgg_idel.png" , spinning:"img/lgg_spin.png", win:"img/win.png", lose:"img/lgg_lose.png"
};

let spinInt;
let isSpinning = false;

function getRandomSymbol(){
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}

function validateBet(bet){
    if (isNaN(bet) || bet <=0 || !bet){
        alert("Enter a valid bet amount.");
        return false;
    }
    if (bet > balance) {
        alert("Not Enough balance.");
        return false;
    }

    return true;
}

function calculateWinnings(r1, r2, r3, bet){
    if (r1 === r2 && r2 === r3){
        if (r1 === "🍒") return bet * 2;
        if (r1 === "🍫") return bet * 3; 
        if (r1 === "7️⃣") return bet * 5;
    }

    return 0; 
}

function updateDisplay(messageText, state) {
    document.getElementById("balDis").textContent = "Balance: $" + balance;
    document.getElementById("message").textContent = messageText;

    const img = document.getElementById("resultImage");

    if (state === "spinning") {
        img.src = images.spinning;
    }
    else if (state === "win") {
        img.src = images.win;
    }
    else if (state === "lose") {
        img.src = images.lose;
    }
    else {
        img.src = images.idle;
    }
}

function Spinning(){
    if(isSpinning) return;

    const betInput = document.getElementById("betInput");
    const bet = parseInt(betInput.value);
    if (!validateBet(bet)) return;

    isSpinning = true;
    

    const slot1El = document.getElementById("slot1");
    const slot2El = document.getElementById("slot2");
    const slot3El = document.getElementById("slot3");

    balance -= bet;
    updateDisplay("Spinning...", "spinning")

    let spinDur = 0;
    const maxDur = 2000;
    const intSpeed = 100;

    spinInt = setInterval(() => {


        slot1El.textContent = getRandomSymbol();
        slot2El.textContent = getRandomSymbol();
        slot3El.textContent = getRandomSymbol();

        spinDur += intSpeed;

        if (spinDur >= maxDur) {

            clearInterval(spinInt);

            const final1 = getRandomSymbol();
            const final2 = getRandomSymbol();
            const final3 = getRandomSymbol();

            slot1El.textContent = final1;
            slot2El.textContent = final2;
            slot3El.textContent = final3;

            const winnings = calculateWinnings(final1, final2, final3, bet);

            balance += winnings; 
            if (winnings > 0) {
                updateDisplay("You won $" + winnings + "!", "win");
            }
            else{
                updateDisplay("Aw Dang It!", "lose");
            }
            
            isSpinning = false;
        }
    }, intSpeed);

}
function resetGame(){
    balance = 1000;
    updateDisplay("Game reset", "idle")
}