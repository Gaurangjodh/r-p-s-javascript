let humanScore = 0;
let computerScore = 0;
const choice = document.querySelector(".choice");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const hDisplay = document.querySelector(".humanScore");
const compDisplay = document.querySelector(".compScore");
const winDisplay = document.querySelector(".winner");
// winDisplay.className = "winner";
const tryBtn = document.createElement("button");
tryBtn.textContent = "Try Again";
tryBtn.className = "tryButton";
const textContainer = document.querySelector('.text-container');
textContainer.appendChild(winDisplay);
const btnContainer = document.querySelector(".btn-container");

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
function getScores() {
    hDisplay.textContent = `Your score = ${humanScore}`;
    compDisplay.textContent = `Computer score = ${computerScore}`;
}

function checkWinner() {
    if(humanScore==5){
        winDisplay.textContent = `You are the winner! Congratulations!!\n`;
        winDisplay.setAttribute("style", "background-color: green");
        reset();
    }
    else if(computerScore==5){
        winDisplay.textContent = `Computer won this time. Better luck next time!\n`
        winDisplay.setAttribute("style", "background-color: red");
        reset();
    }
}



function reset() {
    // winDisplay.textContent = '';
    textContainer.appendChild(tryBtn);
    tryBtn.hidden=false;
    humanScore = 0;
    computerScore = 0;
    hDisplay.textContent = ``;
    compDisplay.textContent = ``;
    choice.textContent = ``;
    btnContainer.style.display = 'none';
}

tryBtn.onclick = function() {
    tryBtn.hidden=true;
    winDisplay.textContent = '';
    btnContainer.hidden = false;
    choice.textContent = '';
    btnContainer.style.display = 'block'; 
}
// function playGame(){
//     let rounds = 0;
//     while(rounds<5){
//         let hC = getHumanChoice();
//         let cC = getComputerChoice();
//         console.log(playRound(hC,cC));
//         rounds += 1;
//         console.log(`Computer Score = ${computerScore}`);
//         console.log(`Human Score = ${humanScore}`);
//     }
// }

rock.addEventListener("click",() => {
    choice.textContent = playRound('rock',getComputerChoice());
    getScores();
    checkWinner();
});
paper.addEventListener("click",() => {
    choice.textContent = playRound('paper',getComputerChoice());
    getScores();
    checkWinner();
});
scissors.addEventListener("click",() => {
    choice.textContent = playRound('scissors',getComputerChoice());
    getScores();
    checkWinner();
});
