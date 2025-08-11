//DOM load checker
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll("button");
    // loop to add event listeners to all buttons
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit")
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
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer() {
    // Logic to check the user's answer
}

function calculateCorrectAnswer() {
    // Logic to calculate the correct answer based on the current question
}

function incrementScore() {
    // Logic to increment the score
}

function incrementWrongAnswer() {
    // Logic to increment the wrong answer count
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
    // Logic to display a subtraction question
}

function displayMultiplyQuestion(operand1, operand2) {
    // Logic to display a multiplication question
}
function displayDivisionQuestion(operand1, operand2) {
    // Logic to display a division question
}

