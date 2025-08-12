//DOM load checker
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll("button");
    // loop to add event listeners to all buttons
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
                runGame(gameType);
            }
        })
    }
    runGame("addition");
    
})

/**
 * Main game loop function
 */
function runGame(gameType) {
    // Randomly select numbers for the operands
    let num1 = Math.round(Math.random() * 25) + 1;
    let num2 = Math.round(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    
    }  else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer() {
    let userAnswer = parseInt(document.querySelector("#answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    if (isCorrect) {
        alert("Correct!");
        incrementScore();
    } else {
        alert(`Incorrect! The correct answer was ${calculatedAnswer[0]}`);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);
}

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.querySelector("#operand1").innerText);
    let operand2 = parseInt(document.querySelector("#operand2").innerText);
    let operator = document.querySelector("#operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}
function incrementScore() {
    let oldScore = parseInt(document.querySelector("#score").innerText);
    document.querySelector("#score").innerText = ++oldScore;
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.querySelector("#incorrect").innerText);
    document.querySelector("#incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.querySelector("#operand1").innerText = operand1;
    document.querySelector("#operand2").innerText = operand2;
    document.querySelector("#operator").innerText = "+";
}

function displaySubtractQuestion(operand1, operand2) {
    // Logic to display a subtraction question
}

function displayMultiplyQuestion(operand1, operand2) {
    document.querySelector("#operand1").innerText = operand1;
    document.querySelector("#operand2").innerText = operand2;
    document.querySelector("#operator").innerText = "x";
}
function displayDivisionQuestion(operand1, operand2) {
    // Logic to display a division question
}

