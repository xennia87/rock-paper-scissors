function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random()*options.length);
    let selection = options[randomIndex];
    return selection;
}

let playerSelection = ''

const playerSelectionRock = document.querySelector("#rock");
playerSelectionRock.addEventListener('click', () => {
	playerSelection = "rock";
	let computerSelection = getComputerChoice();
	let game = playRound(computerSelection, playerSelection);
	
	// Añadimos el div
	const container = document.querySelector("#container");
	const div = document.createElement('div');
	div.classList.add('content');
	div.textContent = `Computer chooses ${computerSelection}, you choose ${playerSelection}. Result: ${game}`;
	container.appendChild(div);
	
});

const playerSelectionPaper = document.querySelector("#paper");
playerSelectionPaper.addEventListener('click', () => {
	playerSelection = "paper";
	let computerSelection = getComputerChoice();
	let game = playRound(computerSelection, playerSelection);
	
	// Añadimos el div
	const container = document.querySelector("#container");
	const div = document.createElement('div');
	div.classList.add('content');
	div.textContent = `Computer chooses ${computerSelection}, you choose ${playerSelection}. Result: ${game}`;
	container.appendChild(div);
});

const playerSelectionScissors = document.querySelector("#scissors");
playerSelectionScissors.addEventListener('click', () => {
	playerSelection = "scissors";
	let computerSelection = getComputerChoice();
	let game = playRound(computerSelection, playerSelection);
	
	// Añadimos el div
	const container = document.querySelector("#container");
	const div = document.createElement('div');
	div.classList.add('content');
	div.textContent = `Computer chooses ${computerSelection}, you choose ${playerSelection}. Result: ${game}`;
	container.appendChild(div);
});

function playRound(computerSelection, playerSelection) {
    let result;
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
    return result;
  }

/** function game() {
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

game() */