// Generates computer choice

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random()*options.length);
    let selection = options[randomIndex];
    return selection;
}

let playerSelection;
let secondGame;
let computerSelection;

function addDiv() {
    computerSelection = playRound.computerSelection;
    const container = document.querySelector("#container");
	const div = document.createElement('div');
	div.classList.add('content');
	div.textContent = `Computer chooses ${computerSelection}, you choose ${playerSelection}. Result: ${secondGame}`;
	container.appendChild(div);
}

// When user clicks on button
// Rock

const playerSelectionRock = document.querySelector("#rock");
playerSelectionRock.addEventListener('click', () => {
	playerSelection = "rock";
	secondGame = playRound(playerSelection);
    addDiv();
});

// Paper 

const playerSelectionPaper = document.querySelector("#paper");
playerSelectionPaper.addEventListener('click', () => {
	let playerSelection = "paper";
    let secondGame = playRound(playerSelection);
    addDiv();
});

// Scissors

const playerSelectionScissors = document.querySelector("#scissors");
playerSelectionScissors.addEventListener('click', () => {
	let playerSelection = "scissors";
    let secondGame = playRound(playerSelection);
    addDiv();
});

// Game itself

function playRound(playerSelection) {
    let result;
    let computerSelection = getComputerChoice();
    if (computerSelection === playerSelection) {
        result = "It's a tie, play again";
    } else if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            result = "You win";
        } else if (playerSelection == "scissors") {
            result = "You lose";
        }
    } else if (computerSelection == "paper") {
        if (playerSelection == "rock") {
            result = "You lose";
        } else if (playerSelection == "scissors") {
            result = "You win";
        }
    } else if (computerSelection == "scissors") {
        if (playerSelection == "rock") {
            result = "You win";
        } else if (playerSelection == "paper") {
            result = "You lose";
        }
    }
    return { result, computerSelection };
  }

function game(playerSel) {
    let playerPoints = 0;
    let computerPoints = 0;
    while (playerPoints < 5 || computerPoints < 5) {
        console.log(`Round ${i +1}`);
        console.log(`Computer chooses ${computerSelection}`);
        let result = playRound(computerSelection, playerSel);
        if (result == "You win") {
            playerPoints++;
        } else if (result == "You lose") {
            computerPoints++
        } else {
            console.log("It's a tie. Play again")
        }

        return console.log(playerPoints, computerPoints);
    }
}