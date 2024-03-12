// 1. Computer chooses the answer
function getComputerChoice() {
    const computerOptions = ["rock", "paper", "scissors"]
    return computerOptions[Math.floor(Math.random()*computerOptions.length)]
}
// 2. User input the answer
// let playerInput = prompt("Rock, paper or scissors?",)
// 3. Check who won or if it's a draw
// let playerSelection = playerInput.toLowerCase();
// let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    // If rock (paper - win, scissors - lose, rock - draw)

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You won! Rock beats scissors.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lost! Rock loses to scissors.";

    // if paper (paper - draw, scissors - win, rock - lose)
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lost! Paper lose to scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You won! Paper beats rock.";

    // If scissors (paper - lose, scissors - draw, rock - win)
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You won! Scissors beat paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lost! Scissors lose to rock."
    } else {
        return "Fuck you! That's not how you play it."
    }
}

// Make the game play 5 times console.log
function playGame() {
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
    playerInput = prompt("Rock, paper or scissors?",);
    playerSelection = playerInput.toLowerCase();
    computerSelection = getComputerChoice();
    let result3 = playRound(playerSelection, computerSelection);
    console.log(result3);
    playerInput = prompt("Rock, paper or scissors?",);
    playerSelection = playerInput.toLowerCase();
    computerSelection = getComputerChoice();
    let result4 = playRound(playerSelection, computerSelection);
    console.log(result4);
    playerInput = prompt("Rock, paper or scissors?",);
    playerSelection = playerInput.toLowerCase();
    computerSelection = getComputerChoice();
    let result5 = playRound(playerSelection, computerSelection);
    console.log(result5)
}

// Inform of the result the whole world
console.log(playGame())