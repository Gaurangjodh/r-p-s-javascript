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
