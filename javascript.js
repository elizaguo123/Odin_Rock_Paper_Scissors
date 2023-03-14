
function playRound(playerSelction, computerSelection) {
    // my code goes here
    //ask for playerSelection input
    //conditionals
    //if computer plays same as player, ask for player input again
    //if rock vs paper, then paper wins
    //if rock vs scissors, then rock wins

    if 
    (playerSelection == "rock" && computerSelection == "rock"
    ||
    playerSelection == "paper" && computerSelection == "paper"
    ||
    playerSelection == "scissors" && computerSelection == "scissors")
    {
        return ("It's a tie! Rematch!");
    } 

    if (playerSelection == "rock" && computerSelection == "paper"
    ||
    playerSelection == "paper" && computerSelection == "scissors"
    ||
    playerSelection == "scissors" && computerSelection == "rock")
    {
    return ("You Lose! Try Again!")
    }

    if (playerSelction == "rock" && computerSelection == "scissors"
    ||
    playerSelection == "paper" && computerSelection == "rock"
    ||
    playerSelection == "scissors" && computerSelection == "paper")
    {
        return ("You Win! Congratulations")
    }

}


function getRndInteger(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}
 



function getComputerChoice() {
    let i = getRndInteger()
    if (i == 0)
    {
        return "rock"
    }
    if ( i = 1)
    {
        return "paper"
    }
    if (i = 2)
    {
        return "scissors"
    }
    ;
}


let playerSelection = prompt("rock, paper, scissors?");
console.log("You chose " + playerSelection);
const computerSelection = getComputerChoice();
console.log("Computer chose " + computerSelection);
console.log(playRound(playerSelection, computerSelection));