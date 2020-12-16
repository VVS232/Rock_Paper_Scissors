let posChoice=["lizard", "scissors","rock","paper","spock"];
let score=[0,0];
let choices = document.querySelectorAll(".choice");

function computerPlay(){
    let PCchoice= posChoice[Math.floor(Math.random()*(posChoice.length))];
    return PCchoice;
}
function round(playerChoice){

  let PCchoice=computerPlay();
document.getElementById("playerChoice").innerHTML=`<img  id="playerChoiceimg" src="img/${playerChoice}.png">`;
document.getElementById("PCChoice").innerHTML=`<img  id="pcChoiceimg" src="img/${PCchoice}.png">`;

    switch(playerChoice){
        case "scissors": 
        if (PCchoice=="paper"||PCchoice=="lizard"){
            score[0]++;
            return score;
        }
        else if(playerChoice==PCchoice){           

            return score;

        }
        else{            
            score[1]++;
            return score;
        }
    
        case "spock": 
        if (PCchoice=="scissors"||PCchoice=="rock"){
            score[0]++;

            return score;
        }
        else if(playerChoice==PCchoice){
           

            return score;

        }
        else{             
            score[1]++;

            return score;
        }
    
        case "rock": 
        if (PCchoice=="lizard"||PCchoice=="scissors"){
            score[0]++;
 
            return score;
        }
        else if(playerChoice==PCchoice){
            return score;

        }
        else{ 
            score[1]++;

            return score;
        }
    
        case "paper": 
        if (PCchoice=="rock"||PCchoice=="spock"){
            score[0]++;

            return score;
        }
        else if(playerChoice==PCchoice){
            return score;

        }
        else{ 
            score[1]++;

            return score;
        }
    
        case "lizard": 
        if (PCchoice=="spock"||PCchoice=="paper"){
            score[0]++;

            return score;
        }
        else if(playerChoice==PCchoice){
            return score;

        }
        else{ 
            score[1]++;

            return score;
        }
    

}
}







function game(score){
    if (score[0]==5||score[1]==5){
        document.getElementById("player").textContent=score[0];
        document.getElementById("PC").textContent=score[1];
        choices.forEach(choice=>{
            choice.removeEventListener("click", play);}) 
    }
    if (score[0]==5){
        document.getElementById("result").textContent="You won the game. Again?";
    }
    if (score[1]==5){
        document.getElementById("result").textContent="You lose the game. Again?";
    }
    else{
        document.getElementById("player").textContent=score[0];
        document.getElementById("PC").textContent=score[1];
    }
}

  function start(){ 
      score[0]=0;
      score[1]=0;
      document.getElementById("playerChoice").innerHTML="";
document.getElementById("PCChoice").innerHTML="";
      document.getElementById("player").textContent=score[0];
      document.getElementById("PC").textContent=score[1];
      document.getElementById("result").textContent="";

       choices.forEach(choice=>{
    choice.addEventListener("click", play);
       
   }) }  
   function play(e){
    game(round(e.currentTarget.id))
}   
document.getElementById("start").onclick= start;
     