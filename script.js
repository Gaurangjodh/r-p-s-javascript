function getComputerChoice(){
    let choice = Math.random()*100;
    if(choice < 35){
        return 'Rock';
    }
    else if(choice < 75){
        return 'Paper';
    }
    else{
        return 'Scissors';
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

