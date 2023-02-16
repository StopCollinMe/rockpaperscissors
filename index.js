function game(){
    for(let i =0; i < 5; i++){
        playRound();
    }
}

function playRound(){
    // Check the spelling and capitalization of the player's input
    // Make sure the values are all lowercase
    const player = playerChoice();
    const computerChoice = getComputerChoice();
    if (player === 'rock' && computerChoice === 'scissors'){
        alert("You Win!");
    }
    else if (player === 'paper' && computerChoice === 'rock'){
        alert("You Win!");
    }
    else if (player === 'scissors' && computerChoice === 'paper'){
        alert("You Win!");
    }
    else if(player === computerChoice){
        alert("Tie!");
    }

    // If the player's input doesn't match any of the conditions above, make sure the computerChoice is correct and the function is being called with the right arguments
    else{
        alert("You Lose!");
    }
}

function playerChoice(){
   let choice = prompt("Enter your choice: ").toLowerCase();
    return choice;
}

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3) + 1;

    if(random === 1){
        return "rock";
    }
    else if(random === 2){
        return "paper";
    }
    else if(random === 3){
        return "scissors";
    }
}

game();