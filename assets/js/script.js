//DOM load checker
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit")
        } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })    
    }
})
    // Initialize the game when the DOM is fully loaded

function runGame() {
    // Logic to start the game
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
    // Logic to display an addition question
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

