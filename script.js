console.log(`Hello there`);
/**
 Define computer's play
 -Create a random number between 0 and 99
 -Define equal ranges for each possibility
 -Round down numbers else things like 99.3214 could generate better probabilities 
 **/
function getComputerChoice() {
    let rdm= Math.floor(Math.random()*100);
    if (rdm<33){
        return `Rock`;
    } else if (rdm>=33 && rdm<=65){
        return `Paper`;
    } else {
        return `Scissors`;
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection).toLowerCase() === 'rock'){
        if ((computerSelection).toLowerCase()==='rock'){
            return `It's a tie `;
        } else if ((computerSelection).toLowerCase() === 'paper'){
            return `You lose, ${computerSelection} beats ${playerSelection}`;
        } else {
            return `You win, ${playerSelection} beats ${computerSelection}`;
        }
    }
    if ((playerSelection).toLowerCase() ==='paper'){
        if ((computerSelection).toLowerCase() ==='paper'){
            return `It's a tie`;
        } else if ((computerSelection).toLowerCase() ==='scissors'){
            return `You lose, ${computerSelection} beats ${playerSelection}`;
        } else {
            return `You win, ${playerSelection} beats ${computerSelection}`;
        }
    }
    if ((playerSelection).toLowerCase() ==='scissors'){
        if ((computerSelection).toLowerCase() ==='scissors'){
            return `It's a tie`;
        } else if ((computerSelection).toLowerCase() ==='rock'){
            return `You lose, ${computerSelection} beats ${playerSelection}`;
        } else {
            return `You win, ${playerSelection} beats ${computerSelection}`;
        }
    }
    }

function game(){
    let w = 0
    let l = 0
    for (let i = 0;i<5;i++){
        let playerSelection = prompt('Rock, Papers or Scissors')
        if (playerSelection.toLowerCase()==='rock' || playerSelection.toLowerCase()==='paper'||playerSelection.toLowerCase()==='scissors'){
            let computerSelection = getComputerChoice();
            let result = (playRound(playerSelection,computerSelection));
            alert(result);
            if (result.charAt(4) === "w"){
                w++;
            } else if (result.charAt(4) === "l"){
                l++;
            }
            if (i===4 && w===l) {
                --i;
            }
        } else {alert("Check spelling");
        i--;
    }
    }
    console.log((w>l) ? "You win" : "You lose")
    alert((w>l) ? "You win" : "You lose")
}

