function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random()*options.length);
    let selection = options[randomIndex];
    return selection;
}

let computerSelection = getComputerChoice();

function playRound(computerSelection, playerSelection) {
    let result;
    if (computerSelection == playerSelection) {
        result = 0;
    } else if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            result = 1;
        } else if (playerSelection == "scissors") {
            result = -1;
        }
    } else if (computerSelection == "paper") {
        if (playerSelection == "rock") {
            result = -1;
        } else if (playerSelection == "scissors") {
            result = 1;
        }
    } else if (computerSelection == "scissors") {
        if (playerSelection == "rock") {
            result = 1;
        } else if (playerSelection == "paper") {
            result = -1;
        }
    }
    return result;
  }

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase();
        computerSelection = getComputerChoice();
        console.log(`Round ${i + 1}`)
        console.log(`Computer choses ${computerSelection}`);
        let result = playRound(computerSelection, playerSelection);
        if (result > 0) {
            ++playerPoints;
            console.log(`Computer has ${computerPoints} points. Player has ${playerPoints}`);
        } else if (result < 0) {
            ++computerPoints;
            console.log(`Computer has ${computerPoints} points. Player has ${playerPoints}`);
        } else {
            console.log("It's a tie. Play again")
        }
    }

    if (computerPoints > playerPoints) {
        console.log("**Computer wins**");
    } else {
        console.log("**Player wins**");
    }
}

game()