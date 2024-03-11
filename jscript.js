// 1. Computer chooses the answer
function getComputerChoice() {
    computerOptions = [
    option1 = "rock",
    option2 = "scissors",
    option3 = "paper",
    ]
    return computerOptions[Math.floor(Math.random()*computerOptions.length)]
}
// 2. User input the answer
let playerInput = prompt("Rock, paper or scissors?",)
// 3. Check who won or if it's a draw
let playerSelection = playerInput.toLowerCase();

let result = function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" || "paper" || "scissors" === computerSelection) {
        return "It's a draw!";
    // If rock (paper - win, scissors - lose, rock - draw)

    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You won! Rock beats scissors.";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lost! Rock loses to scissors.";

    // if paper (paper - draw, scissors - win, rock - lose)
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lost! Paper lose to scissors.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You won! Paper beats rock.";

    // If scissors (paper - lose, scissors - draw, rock - win)
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You won! Scissors beat paper.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lost! Scissors lose to rock."
    } else {
        return "Fuck you! That's not how you play it."
    }
}
// Inform of the result the whole world
alert(result())






