let playerSelection;
let game;
let computerPoints = 0;
let playerPoints = 0;

// Generates computer choice

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random()*options.length);
    let selection = options[randomIndex];
    return selection;
}


// User selection

const playerRock = document.querySelector("#rock");
playerRock.addEventListener("click", () => {
    playerSelection = "rock";
    game = playRound(playerSelection);
    // console.log(game.playerPoints);
    // console.log(game);
    addDiv();
    return game;
});

const playerPaper = document.querySelector("#paper");
playerPaper.addEventListener("click", () => {
    playerSelection = "paper";
    game = playRound(playerSelection);
    console.log(game);
    console.log(game.playerPoints);
    addDiv();
})

const playerScissors = document.querySelector("#scissors");
playerScissors.addEventListener("click", () => {
    playerSelection = "scissors";
    game = playRound(playerSelection);
    console.log(game);
    addDiv();
})

// Game

function playRound(playerSelection) {
    let result;
    let computerSelection = getComputerChoice();
    if (computerSelection === playerSelection) {
        result = "It's a tie, play again";
    } else if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            result = "You win";
            playerPoints++;
        } else if (playerSelection == "scissors") {
            result = "You lose";
            computerPoints++;
        }
    } else if (computerSelection == "paper") {
        if (playerSelection == "rock") {
            result = "You lose";
            computerPoints++;
        } else if (playerSelection == "scissors") {
            result = "You win";
            playerPoints++;
        }
    } else if (computerSelection == "scissors") {
        if (playerSelection == "rock") {
            result = "You win";
            playerPoints++;
        } else if (playerSelection == "paper") {
            result = "You lose";
            computerPoints++;
        }
    }
    return { result, playerPoints, computerPoints};
  }

// Add content to the page

function addDiv() {
    const container = document.querySelector("#container");
	const div = document.createElement('div');
    div.classList.add('content');
    // Esto hace que se añada el resultado
    if (playerPoints < 5 && computerPoints < 5) {
        div.textContent = `Result: ${game.result}. Player points ${playerPoints}. Computer points ${computerPoints}`;
    } else if (playerPoints == 5) {
        div.textContent = `Result: ${game.result}. Player wins`;
        computerPoints = 0;
        playerPoints = 0;
    } else if (computerPoints == 5) {
        div.textContent = `Result: ${game.result}. Computer wins`;
        computerPoints = 0;
        playerPoints = 0;
    }
    container.appendChild(div);
}