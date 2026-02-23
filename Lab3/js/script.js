document.querySelector("button").addEventListener("click", gradeEntireQuiz);

function gradeEntireQuiz() {
    const answers = ["font-color", "Monterey", "<script>", "8", "Electric"];
    //q1
    let q1answer = document.querySelector("input[name=q1]:checked").value;
    let q1Div = document.querySelector("#q1");

    if (q1answer == answers[0]) {
        q1Div.style.backgroundColor = "green";
        q1Div.textContent = "Correct";
    } else {
        q1Div.style.backgroundColor = "red";
        q1Div.textContent = "Wrong. You stoopid.";
    }    
    //q2
    let q2answer = document.querySelector(`input[name=q2]:checked`).value;
    let q2Div = document.querySelector("#q2");

    if (q2answer == answers[1]) {
        q2Div.style.backgroundColor = "green";
        q2Div.textContent = "Correct";
    } else {
        q2Div.style.backgroundColor = "red";
        q2Div.textContent = "Wrong. You stoopid.";
    }
//q3
    let q3answer = document.querySelector(`input[name=q3]`).textContent;
    console.log(q3answer);
    let q3Div = document.querySelector("#q3");

    if (q3answer == answers[2]) {
        q3Div.style.backgroundColor = "green";
        q3Div.textContent = "Correct";
    } else {
        q3Div.style.backgroundColor = "red";
        q3Div.textContent = "Wrong. You stoopid.";
    }
    //q4
    let q4answer = document.querySelector(`input[name=q4]`).value;
    let q4Div = document.querySelector("#q4");

    if (q4answer == answers[3]) {
        q4Div.style.backgroundColor = "green";
        q4Div.textContent = "Correct";
    } else {
        q4Div.style.backgroundColor = "red";
        q4Div.textContent = "Wrong. You stoopid.";
    }
    //q5
    let q5answer = document.querySelector(`select`).value;
    let q5Div = document.querySelector("#q5");

    if (q5answer == answers[4]) {
        q5Div.style.backgroundColor = "green";
        q5Div.textContent = "Correct";
    } else {
        q5Div.style.backgroundColor = "red";
        q5Div.textContent = "Wrong. You stoopid.";
    }
}


function gradeQuiz(name) {
    let answerQ1 = "color";

    const userAnswer = document.querySelector(`input[name=${name}]:checked`).value;

    if (userAnswerQ1 === answerQ1) {
        alert("correct!");
    } else {
        alert("wrong!");
    }

   
}

// question 1
let q1Choices = ["font-color", "color", "text-color"];        
shuffleQuestionChoices(q1Choices, "radio", "q1", "q1ChoicesDiv");
// question 2
let q2Choices = ["Chicago", "New York", "California", "Monterey"];
shuffleQuestionChoices(q2Choices, "checkbox", "q2", "q2ChoicesDiv");
// question 3
// html tag needed question

// question 4
function planet() {
    let q4 = document.querySelector("#q4").value;
}
// question 5


function shuffleQuestionChoices(questionArray, type, name, divName) {
    questionArray = _.shuffle(questionArray);
    
    for (let i of questionArray) {
        let radioElement = document.createElement("input");
        radioElement.type = `${type}`; 
        radioElement.name = `${name}`;
        radioElement.value = i;

        let labelElement = document.createElement("label");
        labelElement.textContent = i;

        labelElement.prepend(radioElement);

        document.querySelector(`#${divName}`).append(labelElement);
    }
}