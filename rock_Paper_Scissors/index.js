let playerWin = 0;
let computerWin = 0;

async function game(){
    for(let i = 0; i <= 10; i++){
        result = await playRound();
        while(result === 'tie'){
            alert("Tie! Click again.");
            result = await playRound();
        }
        if(result === 'win'){
            playerWin++;
        }
        else if(result === 'lose'){
            computerWin++;
        }
        alert(`Player: ${playerWin} Computer: ${computerWin}`);
        if(playerWin == 5){
            alert("You beat the computer!");
            break;
        }
        else if(computerWin == 5){
            alert("You lose to the computer!");
            break;
        }
    }


}

async function playRound(){
    // Check the spelling and capitalization of the player's input
    // Make sure the values are all lowercase
    const player = await playerChoice();
    const computerChoice = getComputerChoice();
    if (player === 'rock' && computerChoice === 'scissors'){
        alert("You Win!");
        return "win";
    }
    else if (player === 'paper' && computerChoice === 'rock'){
        alert("You Win!");
        return "win";
    }
    else if (player === 'scissors' && computerChoice === 'paper'){
        alert("You Win!");
        return "win";
    }
    else if(player === computerChoice){
        return "tie";
    }

    // If the player's input doesn't match any of the conditions above, make sure the computerChoice is correct and the function is being called with the right arguments
    else{
        alert("You Lose!");
        return "lose";
    }
}

async function playerChoice(){
    return new Promise(resolve => {
    document.querySelector('.rock').addEventListener('click',() =>{
        resolve('rock');

    });

    document.querySelector('.paper').addEventListener('click',() =>{
        resolve('paper');

    });

    document.querySelector('.scissors').addEventListener('click',() =>{
        resolve('scissors');

    });
});
    
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