

function game() {
    
    let computerScore = 0;
    let playerScore = 0;
    
    while (computerScore < 5 && playerScore < 5) {    
        
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
        // Saved the computers choice return value into a variable, I can't pass the function as an argument, it compares 2 strings
        const computerSelection = getComputerChoice();
        
        
        
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

            console.log(playRound(getPlayerChoice, computerSelection));
            //You dont have to "return" the score just add it to the variable, that was what stopped the loop.
            if (playRound(getPlayerChoice, computerSelection) === "You Win!") {
                playerScore++;
                console.log("Player: " + playerScore + ", Computer: " + computerScore);
            } else if (playRound(getPlayerChoice, computerSelection) === "It's a tie!") {
                playerScore++;
                computerScore++;
                console.log("Both players score 1 point!");
                console.log("Player: " + playerScore + ", Computer: " + computerScore);
            } else {
                computerScore++;
                console.log("Player: " + playerScore + ", Computer: " + computerScore);
            }
        }         
            
    
   
    if (playerScore === 5) {
        console.log("Player Wins! Game Over!");
        return "Player Wins! Game Over!";
    } else if (computerScore === 5) {
        console.log("Computer Wins! Game Over!");
        return "Computer Wins! Game Over!";
    }
}


game();


