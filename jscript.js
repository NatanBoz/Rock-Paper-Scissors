// 1. Computer chooses the answer
function getComputerChoice() {
    const computerOptions = ["rock", "paper", "scissors"]
    return computerOptions[Math.floor(Math.random()*computerOptions.length)]
}
// 2. User input the answer
// let playerInput = prompt("Rock, paper or scissors?",)

// let playerSelection = playerInput.toLowerCase();
// let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    // If rock (paper - win, scissors - lose, rock - draw)

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You won!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lost!";

    // if paper (paper - draw, scissors - win, rock - lose)
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lost!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You won!";

    // If scissors (paper - lose, scissors - draw, rock - win)
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You won!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lost!"
    } else {
        return "Fuck you! That's not how you play it."
    }
}

// Make the game play 5 times, console.log
function playGame() {
    let results = [];

    playerInput = prompt("Rock, paper or scissors?",);
    playerSelection = playerInput.toLowerCase();
    computerSelection = getComputerChoice();
    let result1 = playRound(playerSelection, computerSelection);
    console.log(result1);

    playerInput = prompt("Rock, paper or scissors?",);
    playerSelection = playerInput.toLowerCase();
    computerSelection = getComputerChoice();
    let result2 = playRound(playerSelection, computerSelection);
    console.log(result2);
    results.push(result2);
    playerInput = prompt("Rock, paper or scissors?",);
    playerSelection = playerInput.toLowerCase();
    computerSelection = getComputerChoice();
    let result3 = playRound(playerSelection, computerSelection);
    console.log(result3);
    results.push(result3);
    playerInput = prompt("Rock, paper or scissors?",);
    playerSelection = playerInput.toLowerCase();
    computerSelection = getComputerChoice();
    let result4 = playRound(playerSelection, computerSelection);
    console.log(result4);
    results.push(result4);
    playerInput = prompt("Rock, paper or scissors?",);
    playerSelection = playerInput.toLowerCase();
    computerSelection = getComputerChoice();
    let result5 = playRound(playerSelection, computerSelection);
    console.log(result5)
    results.push(result5);

        // Check who won in 5 times battle
    let outcome = calculateGameOutcome(results)
    console.log(outcome)
    alert(outcome)
}

// Calculate who won in 5 time battle
function calculateGameOutcome(results) {
    let wins = 0;
    let losses = 0;
    let draws = 0;

    results.forEach(result => {
        if (result === "You won!") {
            wins++;
        } else if (result === "You lost!") {
            losses++
        } else if (result === "It's a draw!") {
            draws++
        }
    });

    if (wins > losses) {
        return "Player wins the game!";
    } else if (losses > wins) {
        return "Computer wins the game!";
    } else if (wins === losses) {
        return "It's a tie";
    }
}

// Play the game
playGame()