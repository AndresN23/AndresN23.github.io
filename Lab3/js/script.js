//alert("welcome")

//event listeners
document.querySelector("button").addEventListener("click", gradeQuiz);

shuffleQ1Choices();

function shuffleQ1Choices(){
let q1Choices = ["fontcolor", "textcolor", "color"]
q1Choices = _.shuffle(q1Choices);
console.log(q1Choices);


for (let i of q1Choices){
let radioElement = document.createElement("input"); 
radioElement.type = "radio"
radioElement.name = "q1"
radioElement.value = i;

let labelElement = document.createElement("label");
labelElement.textContent = i;

labelElement.prepend(radioElement);

document.querySelector("#q1ChoicesDiv").append(labelElement);

console.log(radioElement);
}
}

function gradeQuiz(){
    let answer01 = "color";
    let userAnswer1 = document.querySelector("input[name=q1]:checked").value; 
    alert("Grading quiz..." + userAnswer1);

    if (userAnswer1 == "color"){
    
    }
}