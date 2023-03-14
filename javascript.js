function playRound(playerSelction, computerSelection) {
// my code goes here
//ask for playerSelection input
//conditionals
//if computer plays same as player, ask for player input again
//if rock vs paper, then paper wins
//if rock vs scissors, then rock wins
if 
(playerSelection = "rock" && computerSelection = "rock"
||
playerSelection = "paper" && computerSelection = "paper"
||
playerSelection = "scissors" && computerSelection = "scissors")
{
    return ("It's a tie! Rematch!")
} 

if (playerSelection = "rock" && computerSelection = "paper"
||
playerSelection = "paper" && computerSelection = "scissors"
||
playerSelction = "scissors" && computerSelection = "rock")
{
return ("You Lose! Try Again!")
}

if (playerSelction = "rock" && computerSelection = "scissors"
||
playerSelection = "paper" && computerSelection = "rock"
||
playerSelection = "scissors" && computerSelection = "paper")
{
    return ("You Win! Congratulations")
}
 

}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));