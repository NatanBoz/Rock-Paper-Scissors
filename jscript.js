// 1. Computer chooses the answer
function getComputerChoice() {
    const computerOptions = ["rock", "paper", "scissors"]
    return computerOptions[Math.floor(Math.random()*computerOptions.length)]
}

let playerScore = document.querySelector("#player");
let computerScore = document.querySelector("#computer");
let draw = document.querySelector("#draw");

// Initialize scores
let playerScoreCount = 0
let computerScoreCount = 0
let drawCount = 0

// Function to update scores
function updateScores() {
    playerScore.textContent = "Player score = " + playerScoreCount;
    computerScore.textContent = "Computer score = " + computerScoreCount;
    draw.textContent = "Draw score = " + drawCount;
}

// 2. User input the answer
function playRound(playerSelection, computerSelection) {
if (playerScoreCount === 5 || computerScoreCount ===5 || drawCount === 5) {
    alertWinner();
    return;
}

    if (playerSelection === computerSelection) {
        drawCount++;
        alert("It's a draw!");
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScoreCount++;
        alert("You won!");
    } else {
        computerScoreCount++;
        alert("You lost!");
    }

    updateScores();
    alertWinner();
}

// Play the game
let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissors = document.querySelector("#scissors")

rock.addEventListener("click", function () {
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
})

paper.addEventListener("click", function () {
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
})

scissors.addEventListener("click", function () {
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
})

function alertWinner () {
    if (playerScoreCount === 5) {
        alert("You won the game!!!");
    } else if (computerScoreCount === 5) {
        alert("You lost the game!!!");
    } else if (drawCount === 5) {
        alert("The game ended and it's a draw!!!");
    }
}

