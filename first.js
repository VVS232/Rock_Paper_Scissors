let posChoice=["lizard", "scissors","rock","paper","spock"];
function computerPlay(){
    let PCchoice= posChoice[Math.floor(Math.random()*(posChoice.length))];
    return PCchoice;
}
function round(playerChoice){
    playerChoice=playerChoice.toLowerCase();
  let PCchoice=computerPlay();
    if (!posChoice.includes(playerChoice)){
        alert("Wrong input");
        return;
    }
    switch(playerChoice){
        case "scissors": 
        if (PCchoice=="paper"||PCchoice=="lizard"){
            return ("Yeah, you won");
        }
        else if(playerChoice==PCchoice){
            return ("That's a tie");

        }
        else{ 
            return ("That's sad, you lose")}
    }
    switch(playerChoice){
        case "spock": 
        if (PCchoice=="scissors"||PCchoice=="rock"){
            return ("Yeah, you won");
        }
        else if(playerChoice==PCchoice){
           

            return("That's a tie");

        }
        else{             

            return("That's sad, you lose")}
    }
    switch(playerChoice){
        case "rock": 
        if (PCchoice=="lizard"||PCchoice=="scissors"){
            return("Yeah, you won");
        }
        else if(playerChoice==PCchoice){
            return("That's a tie");

        }
        else{ 
            return("That's sad, you lose")}
    }
    switch(playerChoice){
        case "paper": 
        if (PCchoice=="rock"||PCchoice=="spock"){
            return("Yeah, you won");
        }
        else if(playerChoice==PCchoice){
            return("That's a tie");

        }
        else{ 
            
            return("That's sad, you lose")}
    }
    switch(playerChoice){
        case "lizard": 
        if (PCchoice=="spock"||PCchoice=="paper"){
            return("Yeah, you won");
        }
        else if(playerChoice==PCchoice){
            return("That's a tie");

        }
        else{ 
            
            return("That's sad, you lose")}
    }

}

function game(){
    let playerScore;
    let pcScore;
    let result;
    for (playerScore=0, pcScore=0;;){
        let playerChoice=window.prompt("What is your choice?");
        result=round(playerChoice);
            if (result==("Yeah, you won")){
                playerScore++;
                console.log(result);
                console.log(playerScore, pcScore);

            }
            else if (result==("That's sad, you lose")){                

                pcScore++;
                console.log(result);
                console.log(playerScore, pcScore);

            }
            else{                

                console.log(result);
                                console.log(playerScore, pcScore);

            }

            if (playerScore==5){
                console.log("You won the game");
                return;
            }
            else if (pcScore==5){
                console.log("You lose the game");
                return;
            }
        }
    }

