// Get players choice input and print choice to console.
let getPlayerChoice = prompt("Rock, Paper or Scissors?").toLowerCase(); 
console.log("You chose " + getPlayerChoice);

// Get computers random choice with each turn.
function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    // chooses a random index from the array.
    let computerChoice = arr[(Math.floor(Math.random() * (arr.length)))];
    console.log("Computer chooses " + computerChoice);
    return computerChoice;
}

// play 1 round of the game comparing the choices using logical operators to declare a winner.
function playRound(playerSelection, computerSelection) {
       
        if (playerSelection == "rock" && computerSelection == "paper") {
            return ("You lose! Paper beats Rock");
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            return ("You lose! Rock beats Scissors"); 
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            return ("You lose! Scissors beats Paper");
        } else if (playerSelection == computerSelection) {
            return ("It's a tie!");
        } else {
            return ("You Win!")
        }
    }

// Saved the computers choice return value into a variable, I can't pass the function as an argument, it compares 2 strings
const computerSelection = getComputerChoice();

console.log(playRound(getPlayerChoice, computerSelection));


