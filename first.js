let posChoice=["lizard", "scissors","rock","paper","spock"];
function computerPlay(){
    let PCchoice= posChoice[Math.floor(Math.random()*(posChoice.length-1))];
    return PCchoice;
}
function round(playerChoice){
  let PCchoice=computerPlay();
    if (!posChoice.includes(playerChoice)){
        alert("Wrong input");
        return;
    }
    switch(playerChoice){
        case "scissors": 
        if (PCchoice=="paper"||PCchoice=="lizard"){
            console.log("Yeah, you won");
        }
        else if(playerChoice==PCchoice){
            console.log("That's a tie");

        }
        else{ 
            console.log(PCchoice);
            console.log("That's sad, you lose")}
    }
    switch(playerChoice){
        case "spock": 
        if (PCchoice=="scissors"||PCchoice=="rock"){
            console.log("Yeah, you won");
        }
        else if(playerChoice==PCchoice){
            console.log("That's a tie");

        }
        else{ 
            console.log(PCchoice);
            console.log("That's sad, you lose")}
    }
    switch(playerChoice){
        case "rock": 
        if (PCchoice=="lizard"||PCchoice=="scissors"){
            console.log("Yeah, you won");
        }
        else if(playerChoice==PCchoice){
            console.log("That's a tie");

        }
        else{ 
            console.log(PCchoice);
            console.log("That's sad, you lose")}
    }
    switch(playerChoice){
        case "paper": 
        if (PCchoice=="rock"||PCchoice=="spock"){
            console.log("Yeah, you won");
        }
        else if(playerChoice==PCchoice){
            console.log("That's a tie");

        }
        else{ 
            console.log(PCchoice);
            console.log("That's sad, you lose")}
    }
    switch(playerChoice){
        case "lizard": 
        if (PCchoice=="spock"||PCchoice=="paper"){
            console.log("Yeah, you won");
        }
        else if(playerChoice==PCchoice){
            console.log("That's a tie");

        }
        else{ 
            console.log(PCchoice);
            console.log("That's sad, you lose")}
    }

}