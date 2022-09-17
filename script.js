console.log(`Hello there`);
/**
 Define computer's play
 -Create a random number between 0 and 99
 -Define equal ranges for each possibility
 -Round down numbers, else things like 99.3214 could generate better probabilities 
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

const buttons = document.getElementsByClassName('button');
const container = document.querySelector('#container');

for (const button of buttons) {
    button.addEventListener('click', function onClick() {
        playerSelection= this.id;
        computerSelection=getComputerChoice();
        print();
        game();
    });
  }

function print (){
    try{
        result.textContent = playRound(playerSelection,computerSelection);
    } catch {
    const result = document.createElement('p');
    result.setAttribute('id', 'result');
    result.textContent = playRound(playerSelection,computerSelection);
    container.appendChild(result);
}
}

let w = 0
let l = 0
let i = 0

function game(){
    if (result.textContent.charAt(4) === "w"){
        w++;
    } else if (result.textContent.charAt(4) === "l"){
        l++;
    }
    i++;
    if (i===4 && w===l) {
        --i;
    } 
    
    if (i===5){
        setTimeout(() => {
            if(w>l){
                result.textContent+=" and You win the game";
            } else {
                result.textContent+=" and You lose the game";
            }
        },"100");
        w = 0;
        l = 0;
        i = 0;
        
    }
}



function playRound(playerSelection, computerSelection) {
    if ((playerSelection).toLowerCase() === 'rock'){
        if ((computerSelection).toLowerCase()==='rock'){
            return (`It's a tie `);
        } else if ((computerSelection).toLowerCase() === 'paper'){
            return (`You lose, ${computerSelection} beats ${playerSelection}`);
        } else {
            return (`You win, ${playerSelection} beats ${computerSelection}`);
        }
    }
    if ((playerSelection).toLowerCase() ==='paper'){
        if ((computerSelection).toLowerCase() ==='paper'){
            return (`It's a tie`);
        } else if ((computerSelection).toLowerCase() ==='scissors'){
            return (`You lose, ${computerSelection} beats ${playerSelection}`);
        } else {
            return (`You win, ${playerSelection} beats ${computerSelection}`);
        }
    }
    if ((playerSelection).toLowerCase() ==='scissors'){
        if ((computerSelection).toLowerCase() ==='scissors'){
            return (`It's a tie`);
        } else if ((computerSelection).toLowerCase() ==='rock'){
            return (`You lose, ${computerSelection} beats ${playerSelection}`);
        } else {
            return (`You win, ${playerSelection} beats ${computerSelection}`);
        }
    }
    }


