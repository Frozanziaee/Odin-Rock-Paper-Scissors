const game = () => {
  let playerScore = 0
  let computerScore = 0

  function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];

   return choices[Math.floor(Math.random() * choices.length)] ;
  
}
//console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()//Convert to lowerCase for case insensitvity 
  
  if (
   (computerSelection === "rock" && playerSelection === "paper" ) ||
   (computerSelection === "paper" && playerSelection === "scissors")||
   (computerSelection === "scissors" && playerSelection === "rock" ) 
  ) {
  playerScore++;
  return `You win! ${playerSelection} beats ${computerSelection}`
  }else if (
  (computerSelection === "paper" && playerSelection === "rock" ) ||
  (computerSelection === "scissors" && playerSelection === "paper")||
  (computerSelection === "rock" && playerSelection === "scissors" )
  ){
  computerScore++;
  return `You lose! ${computerSelection} beats ${playerSelection}`
  }else {
    return "it's tie! Let's play again"
  }
}
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Please chose your roll: rock ,paper, scissors");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
// Display final results
console.log(`Final Score - You: ${playerScore}, Computer: ${computerScore}`);
if (playerScore > computerScore){
  console.log("You win the game");
}else if (playerScore < computerScore){
  console.log("You lose the game");
}else {
  console.log("it's a tie!")
}
}
game();

