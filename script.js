let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = Math.random()*100;
    if(choice < 35){
        return 'rock';
    }
    else if(choice < 75){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function getHumanChoice(){
    let choice = prompt('Enter your choice (Rock/Paper/Scissors)').toLowerCase();
    if(choice!='rock' && choice!='scissors' && choice!='paper'){
        alert('Invalid input given.');
        return -1;
    }
    return choice;
}

function playRound(hC, cC){
    if(hC === 'rock'){
        if(cC === 'paper'){
            computerScore += 1;
            return `You Lose! ${cC} beats ${hC}`; 
        }
        else if(cC === 'rock'){
            return 'Its a TIE!';
        }
        else{
            humanScore += 1;
            return `You WIN! ${hC} beats ${cC}`;
        }
    }
    if(hC === 'paper'){
        if(cC === 'scissors'){
            computerScore += 1;
            return `You Lose! ${cC} beats ${hC}`; 
        }
        else if(cC === 'paper'){
            return 'Its a TIE!';
        }
        else{
            humanScore += 1;
            return `You WIN! ${hC} beats ${cC}`;
        }
    }
    if(hC === 'scissors'){
        if(cC === 'rock'){
            computerScore += 1;
            return `You Lose! ${cC} beats ${hC}`; 
        }
        else if(cC === 'scissors'){
            return 'Its a TIE!';
        }
        else{
            humanScore += 1;
            return `You WIN! ${hC} beats ${cC}`;
        }
    }
    
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log(playRound(humanChoice,computerChoice));
console.log(`Computer Score = ${computerScore}`);
console.log(`Human Score = ${humanScore}`);