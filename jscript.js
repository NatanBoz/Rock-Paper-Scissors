// 1. Computer chooses the answer
function getComputerChoice() {
    const computerOptions = ["rock", "paper", "scissors"]
    return computerOptions[Math.floor(Math.random()*computerOptions.length)]
}
// 2. User input the answer
let playerInput = prompt("Rock, paper or scissors?",)
// 3. Check who won or if it's a draw
let playerSelection = playerInput.toLowerCase();
let computerSelection = getComputerChoice();

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
// Inform of the result the whole world
alert(playRound(playerSelection, computerSelection))

//Looping/repeating the game 5 times
function playGame(times) {
    if (times > 0) {
        let playerInput = prompt("Rock, paper or scissors?",);
        let playerSelection = playerInput.toLowerCase();
        playRound(playerSelection, computerSelection);
        let playerInput = prompt("Rock, paper or scissors?",);
        let playerSelection = playerInput.toLowerCase();
        playRound(playerSelection, computerSelection);
        let playerInput = prompt("Rock, paper or scissors?",);
        let playerSelection = playerInput.toLowerCase();
        playRound(playerSelection, computerSelection);
        let playerInput = prompt("Rock, paper or scissors?",);
        let playerSelection = playerInput.toLowerCase();
        playRound(playerSelection, computerSelection);
        let playerInput = prompt("Rock, paper or scissors?",);
        let playerSelection = playerInput.toLowerCase();
        playRound(playerSelection, computerSelection);
    }
}

console.log(playGame(5))


